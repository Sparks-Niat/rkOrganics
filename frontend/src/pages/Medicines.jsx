import React, { useState, useEffect } from 'react';
import { useParams, useNavigate, Link } from 'react-router-dom';
import { Search, Phone, Eye, Heart, SlidersHorizontal, ShoppingBag, ShieldAlert, ArrowLeft, ArrowRight, Sparkles } from 'lucide-react';
import { api } from '../utils/api';
import { useSocket } from '../context/SocketContext';

const SkeletonCard = () => (
  <div className="bg-white rounded-2xl overflow-hidden border border-primary-100/50 shadow-xs flex flex-col h-full animate-pulse">
    <div className="h-56 bg-sand-200"></div>
    <div className="p-6 flex flex-col flex-grow space-y-4 justify-between">
      <div className="space-y-3">
        <div className="h-6 bg-sand-200 rounded-md w-3/4"></div>
        <div className="h-4 bg-sand-100 rounded-md w-1/2"></div>
        <div className="h-4 bg-sand-100 rounded-md w-full"></div>
      </div>
      <div className="space-y-3 pt-4 border-t border-primary-50">
        <div className="h-8 bg-sand-200 rounded-md w-1/3"></div>
        <div className="h-10 bg-sand-200 rounded-xl w-full"></div>
      </div>
    </div>
  </div>
);

const CategorySkeleton = () => (
  <div className="bg-white rounded-3xl overflow-hidden border border-primary-100/50 shadow-xs flex flex-col h-full animate-pulse">
    <div className="h-48 bg-sand-200"></div>
    <div className="p-6 space-y-3 flex-grow flex flex-col justify-between">
      <div className="space-y-2">
        <div className="h-6 bg-sand-200 rounded-md w-3/4"></div>
        <div className="h-4 bg-sand-150 rounded-md w-1/2"></div>
      </div>
      <div className="h-4 bg-sand-100 rounded-md w-1/3"></div>
    </div>
  </div>
);

export default function Medicines() {
  const { categorySlug } = useParams();
  const navigate = useNavigate();

  const [medicines, setMedicines] = useState([]);
  const [categories, setCategories] = useState([]);
  const [whatsappSettings, setWhatsappSettings] = useState({
    whatsappNumber: '6305029231',
    defaultMessage: 'Hello, I would like to order {medicineName}. Price: {price}. Quantity: {quantity}.',
  });
  
  const [searchQuery, setSearchQuery] = useState('');
  const [loading, setLoading] = useState(true);

  const loadMedicinesPageData = () => {
    Promise.all([
      api.medicines.getAll(),
      api.categories.getAll(),
      api.whatsapp.get()
    ]).then(([medsData, catsData, whatsappData]) => {
      if (medsData) setMedicines(medsData);
      if (catsData) {
        setCategories(catsData.filter(c => c.isEnabled));
      }
      if (whatsappData) setWhatsappSettings(whatsappData);
    })
    .catch(err => console.error('Failed to load medicines page data:', err))
    .finally(() => setLoading(false));
  };

  useEffect(() => {
    loadMedicinesPageData();
  }, []);

  const { socket } = useSocket();

  useEffect(() => {
    if (!socket) return;

    const handleUpdate = (data) => {
      const matchTypes = ['medicines', 'categories', 'whatsapp'];
      if (matchTypes.includes(data.type)) {
        console.log(`Medicines page data updated (${data.type}), refreshing...`);
        loadMedicinesPageData();
      }
    };

    socket.on('website:data-updated', handleUpdate);

    const handleReconnect = () => {
      console.log('Socket reconnected, refreshing medicines list data...');
      loadMedicinesPageData();
    };

    window.addEventListener('socket_reconnected', handleReconnect);

    return () => {
      socket.off('website:data-updated', handleUpdate);
      window.removeEventListener('socket_reconnected', handleReconnect);
    };
  }, [socket]);

  const getCategorySlug = (category) => {
    if (!category || !category.englishName) return '';
    const name = category.englishName.toLowerCase().trim();
    if (name.includes('asthma')) return 'asthma-dust-allergy';
    if (name.includes('urinary')) return 'urinary-heat';
    if (name.includes('gastric')) return 'gastric';
    if (name.includes('psoriasis')) return 'psoriasis-skin-disorders';
    if (name.includes('sexual')) return 'sexual-wellness';
    if (name.includes('pain')) return 'pain-relief';
    
    return name.replace(/[^\w\s-]/g, '').replace(/[\s_-]+/g, '-').replace(/^-+|-+$/g, '').trim();
  };

  const isCategorySelected = (category) => {
    if (!categorySlug) return false;
    return getCategorySlug(category) === categorySlug;
  };

  const handleWhatsAppOrder = (e, medicine) => {
    e.preventDefault();
    e.stopPropagation();
    
    const number = whatsappSettings.whatsappNumber || '6305029231';
    const cleanedNumber = number.replace(/\D/g, '');
    const template = whatsappSettings.defaultMessage || 'Hello, I would like to order {medicineName}. Price: {price}. Quantity: {quantity}.';
    
    const finalPrice = medicine.discountPrice !== null && medicine.discountPrice !== undefined
      ? medicine.discountPrice
      : medicine.price;

    const formattedMessage = template
      .replace('{medicineName}', medicine.englishName || medicine.teluguName)
      .replace('{price}', `₹${finalPrice}`)
      .replace('{quantity}', medicine.quantity || '1');
      
    const url = `https://wa.me/${cleanedNumber}?text=${encodeURIComponent(formattedMessage)}`;
    window.open(url, '_blank');
  };

  // Filter medicines based on active category slug and search text
  const filteredMedicines = medicines.filter(medicine => {
    // 1. Must be active
    if (!medicine.isActive) return false;
    if (medicine.availability === 'HIDDEN') return false;

    // 2. Must belong to enabled categories
    const activeCats = medicine.categories?.filter(c => c.isEnabled) || [];
    if (activeCats.length === 0) return false;

    // 3. Category Slug filter matching
    if (categorySlug) {
      const matchesCategory = activeCats.some(c => getCategorySlug(c) === categorySlug);
      if (!matchesCategory) return false;
    }

    // 4. Search Query matching
    if (searchQuery.trim() !== '') {
      const query = searchQuery.toLowerCase();
      const matchTelugu = (medicine.teluguName || '').toLowerCase().includes(query);
      const matchEnglish = medicine.englishName?.toLowerCase().includes(query);
      const matchDesc = medicine.description?.toLowerCase().includes(query);
      const matchCat = activeCats.some(c => c.englishName?.toLowerCase().includes(query));
      
      return matchTelugu || matchEnglish || matchDesc || matchCat;
    }

    return true;
  });  const currentCat = categorySlug ? categories.find(c => getCategorySlug(c) === categorySlug) : null;

  return (
    <div className="flex flex-col min-h-screen bg-sand-50/30">
      
      {/* Header Banner */}
      <section className="bg-primary-900 text-white py-12 relative overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top_right,_var(--tw-gradient-stops))] from-primary-800 via-primary-900 to-primary-950"></div>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative text-center space-y-3">
          <h1 className="font-display font-bold text-3xl sm:text-4xl tracking-wide">
            Ayurvedic Medicines & Formulations
          </h1>
          <p className="text-primary-200 text-sm sm:text-base max-w-xl mx-auto">
            Experience the healing power of nature. Discover authentic formulations and order securely via WhatsApp.
          </p>
        </div>
      </section>

      {/* Main Content Area */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10 flex-grow space-y-8">
        
        {/* CASE 1: Category Slug is specified */}
        {categorySlug ? (
          !currentCat ? (
            /* Category not found view */
            <div className="text-center py-20 bg-white rounded-3xl border border-primary-100 shadow-xs max-w-md mx-auto p-8 flex flex-col items-center">
              <ShieldAlert size={48} className="text-red-500 mb-4" />
              <h3 className="font-display font-bold text-xl text-primary-950">Category Not Found</h3>
              <p className="text-sand-500 text-sm mt-2 mb-6">
                The medicine category you are looking for does not exist or has been disabled.
              </p>
              <button
                onClick={() => navigate('/medicines')}
                className="bg-primary-600 hover:bg-primary-700 text-white font-medium px-6 py-2.5 rounded-full transition-all flex items-center gap-2 cursor-pointer border-none"
              >
                <ArrowLeft size={16} />
                <span>Back to Categories</span>
              </button>
            </div>
          ) : (
            /* Valid category page */
            <div className="space-y-8">
              {/* Back to Categories button */}
              <div>
                <button
                  onClick={() => navigate('/medicines')}
                  className="inline-flex items-center gap-2 text-primary-800 hover:text-primary-950 font-bold text-sm transition-colors cursor-pointer bg-white px-4 py-2 rounded-xl border border-primary-100/50 shadow-2xs border-none"
                >
                  <ArrowLeft size={16} />
                  <span>Back to Categories</span>
                </button>
              </div>

              {/* Category details block */}
              <div className="bg-primary-950 text-white p-8 rounded-3xl border border-primary-900 shadow-sm relative overflow-hidden">
                <div className="absolute top-0 right-0 w-32 h-32 bg-white/5 rounded-full blur-2xl"></div>
                <div className="space-y-3 relative z-10">
                  <h2 className="font-display font-bold text-2xl sm:text-3xl text-white">{currentCat.englishName}</h2>
                  {currentCat.teluguName && (
                    <p className="text-primary-200 text-sm font-semibold">
                      {currentCat.teluguName}
                    </p>
                  )}
                  {currentCat.description && (
                    <p className="text-primary-100/90 text-sm leading-relaxed mt-2 max-w-3xl">{currentCat.description}</p>
                  )}
                  <span className="inline-block bg-primary-800/80 text-accent-400 text-xs px-3 py-1 rounded-full font-bold border border-primary-700 mt-2">
                    {filteredMedicines.length} {filteredMedicines.length === 1 ? 'Medicine' : 'Medicines'}
                  </span>
                </div>
              </div>

              {/* Category-specific Search */}
              <div className="flex flex-col sm:flex-row gap-4 justify-between items-center bg-white p-4 rounded-2xl border border-primary-100 shadow-xs">
                <div className="relative w-full sm:max-w-xs">
                  <Search className="absolute left-3.5 top-1/2 -translate-y-1/2 text-sand-400" size={18} />
                  <input
                    type="text"
                    placeholder={`Search within ${currentCat.englishName}...`}
                    value={searchQuery}
                    onChange={(e) => setSearchQuery(e.target.value)}
                    className="w-full pl-10 pr-4 py-2 bg-sand-50 border border-primary-100 rounded-xl focus:outline-hidden focus:border-primary-500 focus:ring-1 focus:ring-primary-500 text-sm"
                  />
                </div>
              </div>

              {/* Medicines Grid */}
              {loading ? (
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
                  <SkeletonCard />
                  <SkeletonCard />
                  <SkeletonCard />
                </div>
              ) : filteredMedicines.length === 0 ? (
                <div className="text-center py-20 bg-white rounded-3xl border border-primary-100/50 shadow-xs flex flex-col items-center justify-center p-8">
                  <ShoppingBag size={48} className="text-sand-300 mb-4 stroke-1" />
                  <h3 className="font-display font-bold text-xl text-primary-950">No Medicines Available</h3>
                  <p className="text-sand-500 text-sm mt-1 max-w-sm">
                    {searchQuery ? "No products found matching your search in this category." : "No medicines available in this category yet."}
                  </p>
                  <button
                    onClick={() => navigate('/medicines')}
                    className="bg-primary-600 hover:bg-primary-700 text-white font-medium px-5 py-2 mt-4 rounded-full transition-all flex items-center gap-2 cursor-pointer border-none text-xs"
                  >
                    <ArrowLeft size={14} />
                    <span>Back to Categories</span>
                  </button>
                </div>
              ) : (
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 stagger-list">
                  {filteredMedicines.map((medicine) => {
                    const isOutOfStock = medicine.availability === 'OUT_OF_STOCK';
                    const hasDiscount = medicine.discountPrice !== null && medicine.discountPrice !== undefined;
                    return (
                      <div 
                        key={medicine.id} 
                        className={`bg-white rounded-2xl overflow-hidden border border-primary-100 shadow-xs hover:shadow-md transition-all flex flex-col h-full group ${
                          isOutOfStock ? 'opacity-85' : 'hover:-translate-y-1 duration-300'
                        }`}
                      >
                        <Link to={`/product/${medicine.slug}`} className="h-56 overflow-hidden relative bg-primary-50 border-b border-primary-50 block">
                          {medicine.imageUrl ? (
                            <img
                              src={medicine.imageUrl}
                              alt={medicine.englishName || medicine.teluguName}
                              className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                            />
                          ) : (
                            <div className="w-full h-full flex flex-col items-center justify-center text-primary-300">
                              <Heart size={40} className="stroke-1" />
                              <span className="text-[10px] font-semibold mt-2">R.K. Ayurveda</span>
                            </div>
                          )}
                          <span className={`absolute top-4 right-4 text-xs px-2.5 py-1 rounded-full font-bold shadow-xs border ${
                            isOutOfStock 
                              ? 'bg-rose-50 text-rose-700 border-rose-100' 
                              : 'bg-emerald-50 text-emerald-700 border-emerald-100'
                          }`}>
                            {isOutOfStock ? 'Out of Stock' : 'Available'}
                          </span>
                          {medicine.quantity && (
                            <span className="absolute bottom-4 left-4 bg-primary-900/90 text-white text-[10px] px-2.5 py-1 rounded-lg font-bold border border-primary-800">
                              {medicine.quantity}
                            </span>
                          )}
                        </Link>

                        <div className="p-6 flex flex-col flex-grow space-y-4 justify-between">
                          <div className="space-y-2">
                            <div className="flex flex-wrap gap-1">
                              {medicine.categories?.map(c => (
                                <span key={c.id} className="text-[9px] bg-sand-100 text-sand-700 px-2 py-0.5 rounded-full font-bold uppercase tracking-wider">
                                  {c.englishName}
                                </span>
                              ))}
                            </div>
                            <Link to={`/product/${medicine.slug}`} className="block">
                              <h3 className="font-display font-bold text-lg text-primary-955 transition-colors group-hover:text-primary-800 leading-tight">
                                {medicine.englishName || medicine.teluguName}
                              </h3>
                              {medicine.englishName && medicine.teluguName && (
                                <h4 className="text-sand-500 font-semibold text-xs mt-0.5">
                                  {medicine.teluguName}
                                </h4>
                              )}
                            </Link>
                            <p className="text-sand-650 text-xs sm:text-sm line-clamp-2 leading-relaxed">
                              {medicine.shortDescription || medicine.description}
                            </p>
                          </div>

                          <div className="space-y-4 pt-3 border-t border-primary-50">
                            <div className="flex justify-between items-center">
                              <span className="text-primary-850 font-display font-bold text-xl">
                                ₹{medicine.discountPrice || medicine.price}
                              </span>
                              <Link 
                                to={`/product/${medicine.slug}`}
                                className="inline-flex items-center gap-1 text-xs text-primary-700 font-bold hover:text-primary-900"
                              >
                                <Eye size={14} />
                                <span>View Details</span>
                              </Link>
                            </div>
                            {medicine.whatsappEnabled && (
                              <button
                                onClick={(e) => handleWhatsAppOrder(e, medicine)}
                                disabled={isOutOfStock}
                                className={`w-full inline-flex items-center justify-center gap-2 font-medium py-2.5 rounded-xl transition-all text-xs cursor-pointer border-none ${
                                  isOutOfStock
                                    ? 'bg-sand-200 text-sand-500 cursor-not-allowed border border-sand-300'
                                    : 'bg-primary-600 hover:bg-primary-700 text-white shadow-xs hover:shadow-md'
                                }`}
                              >
                                <Phone size={14} />
                                <span>{isOutOfStock ? 'Out of Stock' : 'Order on WhatsApp'}</span>
                              </button>
                            )}
                          </div>
                        </div>
                      </div>
                    );
                  })}
                </div>
              )}
            </div>
          )
        ) : searchQuery.trim() !== '' ? (
          /* CASE 2: No Category is selected, but search has text -> show global search results */
          <div className="space-y-8">
            <div>
              <button
                onClick={() => setSearchQuery('')}
                className="inline-flex items-center gap-2 text-primary-800 hover:text-primary-950 font-bold text-sm transition-colors cursor-pointer bg-white px-4 py-2 rounded-xl border border-primary-100/50 shadow-2xs border-none"
              >
                <ArrowLeft size={16} />
                <span>Back to Categories</span>
              </button>
            </div>

            <div className="bg-white p-6 rounded-2xl border border-primary-100 shadow-xs flex flex-col md:flex-row justify-between items-center gap-4">
              <h2 className="text-xl font-bold text-primary-955 font-display">
                Search Results for "{searchQuery}"
              </h2>
              <div className="relative w-full md:max-w-xs">
                <Search className="absolute left-3.5 top-1/2 -translate-y-1/2 text-sand-400" size={18} />
                <input
                  type="text"
                  placeholder="Search medicines..."
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  className="w-full pl-10 pr-4 py-2 bg-sand-50 border border-primary-100 rounded-xl focus:outline-hidden focus:border-primary-500 text-sm"
                />
              </div>
            </div>

            {loading ? (
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
                <SkeletonCard />
                <SkeletonCard />
                <SkeletonCard />
              </div>
            ) : filteredMedicines.length === 0 ? (
              <div className="text-center py-20 bg-white rounded-3xl border border-primary-100/50 shadow-xs flex flex-col items-center justify-center p-8">
                <ShoppingBag size={48} className="text-sand-300 mb-4 stroke-1" />
                <h3 className="font-display font-bold text-xl text-primary-950">No Medicines Found</h3>
                <p className="text-sand-500 text-sm mt-1 max-w-sm">
                  We couldn't find any products matching "{searchQuery}" across all categories.
                </p>
              </div>
            ) : (
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 stagger-list">
                {filteredMedicines.map((medicine) => {
                  const isOutOfStock = medicine.availability === 'OUT_OF_STOCK';
                  return (
                    <div 
                      key={medicine.id} 
                      className={`bg-white rounded-2xl overflow-hidden border border-primary-100 shadow-xs hover:shadow-md transition-all flex flex-col h-full group ${
                        isOutOfStock ? 'opacity-85' : 'hover:-translate-y-1 duration-300'
                      }`}
                    >
                      <Link to={`/product/${medicine.slug}`} className="h-56 overflow-hidden relative bg-primary-50 border-b border-primary-50 block">
                        {medicine.imageUrl ? (
                          <img
                            src={medicine.imageUrl}
                            alt={medicine.englishName || medicine.teluguName}
                            className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                          />
                        ) : (
                          <div className="w-full h-full flex flex-col items-center justify-center text-primary-300">
                            <Heart size={40} className="stroke-1" />
                            <span className="text-[10px] font-semibold mt-2">R.K. Ayurveda</span>
                          </div>
                        )}
                        <span className={`absolute top-4 right-4 text-xs px-2.5 py-1 rounded-full font-bold shadow-xs border ${
                          isOutOfStock 
                            ? 'bg-rose-50 text-rose-700 border-rose-100' 
                            : 'bg-emerald-50 text-emerald-700 border-emerald-100'
                        }`}>
                          {isOutOfStock ? 'Out of Stock' : 'Available'}
                        </span>
                        {medicine.quantity && (
                          <span className="absolute bottom-4 left-4 bg-primary-900/90 text-white text-[10px] px-2.5 py-1 rounded-lg font-bold border border-primary-800">
                            {medicine.quantity}
                          </span>
                        )}
                      </Link>

                      <div className="p-6 flex flex-col flex-grow space-y-4 justify-between">
                        <div className="space-y-2">
                          <div className="flex flex-wrap gap-1">
                            {medicine.categories?.map(c => (
                              <span key={c.id} className="text-[9px] bg-sand-100 text-sand-700 px-2 py-0.5 rounded-full font-bold uppercase tracking-wider">
                                {c.englishName}
                              </span>
                            ))}
                          </div>
                          <Link to={`/product/${medicine.slug}`} className="block">
                            <h3 className="font-display font-bold text-lg text-primary-955 transition-colors group-hover:text-primary-800 leading-tight">
                              {medicine.englishName || medicine.teluguName}
                            </h3>
                            {medicine.englishName && medicine.teluguName && (
                              <h4 className="text-sand-500 font-semibold text-xs mt-0.5">
                                {medicine.teluguName}
                              </h4>
                            )}
                          </Link>
                          <p className="text-sand-650 text-xs sm:text-sm line-clamp-2 leading-relaxed">
                            {medicine.shortDescription || medicine.description}
                          </p>
                        </div>

                        <div className="space-y-4 pt-3 border-t border-primary-50">
                          <div className="flex justify-between items-center">
                            <span className="text-primary-850 font-display font-bold text-xl">
                              ₹{medicine.discountPrice || medicine.price}
                            </span>
                            <Link 
                              to={`/product/${medicine.slug}`}
                              className="inline-flex items-center gap-1 text-xs text-primary-700 font-bold hover:text-primary-900"
                            >
                              <Eye size={14} />
                              <span>View Details</span>
                            </Link>
                          </div>
                          {medicine.whatsappEnabled && (
                            <button
                              onClick={(e) => handleWhatsAppOrder(e, medicine)}
                              disabled={isOutOfStock}
                              className={`w-full inline-flex items-center justify-center gap-2 font-medium py-2.5 rounded-xl transition-all text-xs cursor-pointer border-none ${
                                isOutOfStock
                                  ? 'bg-sand-200 text-sand-500 cursor-not-allowed border border-sand-300'
                                  : 'bg-primary-600 hover:bg-primary-700 text-white shadow-xs hover:shadow-md'
                              }`}
                            >
                              <Phone size={14} />
                              <span>{isOutOfStock ? 'Out of Stock' : 'Order on WhatsApp'}</span>
                            </button>
                          )}
                        </div>
                      </div>
                    </div>
                  );
                })}
              </div>
            )}
          </div>
        ) : (
          /* CASE 3: Category Slug is not specified, search is empty -> show categories explorer screen first */
          <div className="space-y-10">
            <div className="text-center space-y-3 max-w-xl mx-auto">
              <span className="text-accent-600 text-xs sm:text-sm font-bold uppercase tracking-widest">Our Formulations</span>
              <h2 className="font-display font-bold text-3xl text-primary-955">Choose a Category to Explore</h2>
              <p className="text-sand-500 text-sm sm:text-base leading-relaxed">
                Select one of our traditional Ayurvedic medicine categories to view the specific formulations, ingredients, and usage details.
              </p>
            </div>

            {/* Global Search Input on Categories page */}
            <div className="flex justify-center">
              <div className="relative w-full max-w-md">
                <Search className="absolute left-3.5 top-1/2 -translate-y-1/2 text-sand-400" size={18} />
                <input
                  type="text"
                  placeholder="Search across all medicines..."
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  className="w-full pl-10 pr-4 py-3 bg-white border border-primary-100 rounded-2xl shadow-xs focus:outline-hidden focus:border-primary-500 focus:ring-1 focus:ring-primary-500 text-sm"
                />
              </div>
            </div>

            {/* Categories Selection Grid */}
            {loading ? (
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
                <CategorySkeleton />
                <CategorySkeleton />
                <CategorySkeleton />
              </div>
            ) : categories.length === 0 ? (
              <div className="text-center py-12 bg-white rounded-3xl border border-dashed border-primary-200">
                <p className="text-sand-500 font-medium">No categories available at the moment.</p>
              </div>
            ) : (
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
                {categories.map((cat) => {
                  const count = cat._count?.medicines || 0;
                  const slug = getCategorySlug(cat);
                  return (
                    <Link
                      key={cat.id}
                      to={`/medicines/${slug}`}
                      className="bg-white rounded-3xl overflow-hidden border border-primary-100/50 shadow-xs hover:shadow-md transition-all duration-300 flex flex-col h-full group hover:-translate-y-1"
                    >
                      <div className="h-48 overflow-hidden relative bg-primary-50">
                        {cat.imageUrl ? (
                          <img
                            src={cat.imageUrl}
                            alt={cat.englishName}
                            className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                          />
                        ) : (
                          <div className="w-full h-full flex items-center justify-center text-primary-350 bg-primary-50">
                            <Sparkles size={48} className="stroke-1" />
                          </div>
                        )}
                        <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-transparent opacity-60"></div>
                        <span className="absolute bottom-4 left-4 bg-primary-950/90 backdrop-blur-xs text-accent-400 text-xs px-3 py-1.5 rounded-full font-bold shadow-xs border border-primary-800">
                          {count} {count === 1 ? 'Medicine' : 'Medicines'}
                        </span>
                      </div>

                      <div className="p-6 flex flex-col flex-grow justify-between space-y-4">
                        <div className="space-y-1.5">
                          <h3 className="font-display font-bold text-lg text-primary-955 group-hover:text-primary-800 transition-colors">
                            {cat.englishName}
                          </h3>
                          {cat.teluguName && (
                            <p className="text-primary-750 text-xs font-semibold leading-relaxed">
                              {cat.teluguName}
                            </p>
                          )}
                        </div>
                        <div className="flex items-center text-accent-600 font-bold text-sm pt-2 group-hover:text-accent-700 transition-colors">
                          <span>View Medicines</span>
                          <ArrowRight size={14} className="ml-1 group-hover:translate-x-1 transition-transform" />
                        </div>
                      </div>
                    </Link>
                  );
                })}
              </div>
            )}
          </div>
        )}

        {/* Medical Informational Disclaimer */}
        <div className="bg-amber-50/50 p-6 rounded-3xl border border-amber-200/50 flex gap-4 items-start">
          <ShieldAlert className="text-amber-600 shrink-0 mt-0.5" size={24} />
          <div className="space-y-2">
            <h4 className="font-bold text-amber-900 text-sm">Medical Content Disclaimer:</h4>
            <p className="text-amber-800 text-xs sm:text-sm leading-relaxed font-medium">
              The information provided on this website is for informational purposes and is based on information provided by an Ayurvedic practitioner. Use medicines only under appropriate medical guidance. Do not self-medicate.
            </p>
          </div>
        </div>

      </div>
    </div>
  );
}
