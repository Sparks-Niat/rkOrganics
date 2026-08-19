import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { Phone, ArrowRight, CheckCircle2, ShieldCheck, Heart, MapPin, Star, Sparkles } from 'lucide-react';
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

const getCategorySlug = (category) => {
  if (!category) return '';
  const name = (category.englishName || category.name || '').toLowerCase().trim();
  if (name.includes('asthma')) return 'asthma-dust-allergy';
  if (name.includes('urinary')) return 'urinary-heat';
  if (name.includes('gastric')) return 'gastric';
  if (name.includes('psoriasis')) return 'psoriasis-skin-disorders';
  if (name.includes('sexual')) return 'sexual-wellness';
  if (name.includes('pain')) return 'pain-relief';
  return name.replace(/[^\w\s-]/g, '').replace(/[\s_-]+/g, '-').replace(/^-+|-+$/g, '').trim();
};

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

export default function Home() {
  const [settings, setSettings] = useState({
    businessName: 'R.K. Ayurveda',
    logoUrl: '',
    heroTitle: 'Pure & Organic Ayurvedic Remedies',
    heroSubtitle: 'Experience the healing power of nature with small-batch, authentic products.',
    heroImageUrl: '',
    heroButtonText: 'View Medicines',
    heroButtonLink: '/medicines',
    heroVisible: true,
    aboutIntro: 'Dedicated to bringing authentic Ayurvedic health and wellness to your home.',
  });

  const [contact, setContact] = useState({
    phone: '+91 6305029231',
    whatsapp: '6305029231',
    address: '123 Ayurvedic Lane, Heritage Town',
    openingHours: '9:00 AM - 6:00 PM (Mon - Sat)',
    googleMapsLink: '',
  });

  const [whatsappSettings, setWhatsappSettings] = useState({
    whatsappNumber: '6305029231',
    defaultMessage: 'Hello, I would like to order {medicineName}. Price: {price}. Quantity: {quantity}.',
  });

  const [categories, setCategories] = useState([]);
  const [featuredMedicines, setFeaturedMedicines] = useState([]);
  const [benefits, setBenefits] = useState([]);
  const [testimonials, setTestimonials] = useState([]);
  const [promotions, setPromotions] = useState([]);
  const [loading, setLoading] = useState(true);

  const loadHomeData = () => {
    Promise.all([
      api.settings.get(),
      api.contact.get(),
      api.whatsapp.get(),
      api.medicines.getAll(),
      api.benefits.getAll(),
      api.testimonials.getAll(),
      api.promotions.getAll(),
      api.categories.getAll()
    ]).then(([settingsData, contactData, whatsappData, medicinesData, benefitsData, testimonialsData, promotionsData, categoriesData]) => {
      if (settingsData) setSettings(settingsData);
      if (contactData) setContact(contactData);
      if (whatsappData) setWhatsappSettings(whatsappData);
      if (categoriesData) setCategories(categoriesData.filter(c => c.isEnabled));
      
      // Filter featured & active medicines: limit 3
      if (medicinesData) {
        const active = medicinesData
          .filter(m => m.isActive && m.availability !== 'HIDDEN' && m.category?.isEnabled && m.isFeatured)
          .slice(0, 3);
        
        // If no featured medicines, fall back to any active ones
        if (active.length === 0) {
          setFeaturedMedicines(medicinesData.filter(m => m.isActive && m.availability !== 'HIDDEN' && m.category?.isEnabled).slice(0, 3));
        } else {
          setFeaturedMedicines(active);
        }
      }

      // Filter active benefits
      if (benefitsData && benefitsData.length > 0) {
        setBenefits(benefitsData.filter(b => b.isActive));
      } else {
        // Fallback static benefits
        setBenefits([
          { id: 1, title: '100% Pure Herbs', description: 'We pick and prepare all botanical ingredients in accordance with old scripts.' },
          { id: 2, title: 'Quality Standards', description: 'Strict adherence to standard traditional formulation without preservatives.' },
          { id: 3, title: 'Direct WhatsApp Order', description: 'Ordering is as simple as sending a chat. Tap, customize, and secure your order.' }
        ]);
      }

      // Filter active testimonials
      if (testimonialsData && testimonialsData.length > 0) {
        setTestimonials(testimonialsData.filter(t => t.isActive));
      }

      // Filter active promotions
      if (promotionsData && promotionsData.length > 0) {
        const activePromos = promotionsData.filter(p => {
          if (!p.isActive) return false;
          
          // Check dates
          const now = new Date();
          if (p.startDate && new Date(p.startDate) > now) return false;
          if (p.endDate && new Date(p.endDate) < now) return false;
          
          return true;
        });
        setPromotions(activePromos);
      }
    })
    .catch(err => console.error('Error loading home page data:', err))
    .finally(() => setLoading(false));
  };

  useEffect(() => {
    loadHomeData();
  }, []);

  const { socket } = useSocket();

  useEffect(() => {
    if (!socket) return;

    const handleUpdate = (data) => {
      const homeTypes = ['settings', 'contact', 'whatsapp', 'medicines', 'benefits', 'testimonials', 'promotions', 'categories'];
      if (homeTypes.includes(data.type)) {
        console.log(`Home page data updated (${data.type}), refreshing...`);
        loadHomeData();
      }
    };

    socket.on('website:data-updated', handleUpdate);

    const handleReconnect = () => {
      console.log('Socket reconnected, refreshing home page data...');
      loadHomeData();
    };

    window.addEventListener('socket_reconnected', handleReconnect);

    return () => {
      socket.off('website:data-updated', handleUpdate);
      window.removeEventListener('socket_reconnected', handleReconnect);
    };
  }, [socket]);

  const handleWhatsAppOrder = (e, medicine) => {
    e.stopPropagation(); // Stop navigation to detail page
    const number = whatsappSettings.whatsappNumber || contact.whatsapp || '6305029231';
    const cleanedNumber = number.replace(/\D/g, '');
    const template = whatsappSettings.defaultMessage || 'Hello, I would like to order {medicineName}. Price: {price}. Quantity: {quantity}.';
    
    const finalPrice = medicine.discountPrice !== null && medicine.discountPrice !== undefined
      ? medicine.discountPrice
      : medicine.price;

    const formattedMessage = template
      .replace('{medicineName}', medicine.name)
      .replace('{price}', `₹${finalPrice}`)
      .replace('{quantity}', '1');
      
    const url = `https://wa.me/${cleanedNumber}?text=${encodeURIComponent(formattedMessage)}`;
    window.open(url, '_blank');
  };

  return (
    <div className="flex flex-col min-h-screen">
      
      {/* Dynamic Promotion Banner Ribbon (shows if there are active promos) */}
      {promotions.length > 0 && (
        <div className="bg-accent-500 text-primary-950 font-medium py-3 px-4 text-center text-sm relative z-30 shadow-xs flex flex-wrap items-center justify-center gap-2 animate-in slide-in-from-top duration-200">
          <Sparkles size={16} className="animate-pulse text-primary-950 shrink-0" />
          <span className="font-bold uppercase tracking-wider text-xs bg-white px-2 py-0.5 rounded-full shrink-0">Offer</span>
          <strong className="font-bold">{promotions[0].title}:</strong>
          <span className="text-primary-900">{promotions[0].description}</span>
          {promotions[0].buttonText && promotions[0].buttonUrl && (
            <Link 
              to={promotions[0].buttonUrl}
              className="text-xs font-bold bg-primary-950 text-white px-3 py-1 rounded-full hover:bg-primary-900 transition-colors ml-2 shrink-0 inline-block"
            >
              {promotions[0].buttonText}
            </Link>
          )}
        </div>
      )}

      {/* Hero Section */}
      {settings.heroVisible && (
        <section className="relative bg-gradient-to-br from-primary-50 to-primary-100/50 py-20 lg:py-28 overflow-hidden">
          {/* Background Decorative Elements */}
          <div className="absolute top-0 right-0 w-96 h-96 bg-primary-200/30 rounded-full blur-3xl -mr-20 -mt-20"></div>
          <div className="absolute bottom-0 left-0 w-80 h-80 bg-accent-100/40 rounded-full blur-3xl -ml-20 -mb-20"></div>

          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
              
              {/* Hero Left Content */}
              <div className="lg:col-span-7 text-center lg:text-left space-y-6">
                {settings.logoUrl && (
                  <div className="inline-flex items-center gap-2 bg-white px-3 py-1.5 rounded-full border border-primary-200 shadow-xs mb-2">
                    <img src={settings.logoUrl} alt="Logo" className="h-6 w-6 object-contain rounded-full" />
                    <span className="text-xs font-semibold text-primary-700 uppercase tracking-wider">{settings.businessName}</span>
                  </div>
                )}
                
                <h1 className="font-display font-bold text-4xl sm:text-5xl lg:text-6xl text-primary-950 leading-tight">
                  {settings.heroTitle}
                </h1>
                
                <p className="text-sand-700 text-lg sm:text-xl leading-relaxed max-w-2xl mx-auto lg:mx-0">
                  {settings.heroSubtitle}
                </p>
                
                <div className="flex flex-col sm:flex-row items-center justify-center lg:justify-start gap-4 pt-4">
                  <Link
                    to={settings.heroButtonLink || '/medicines'}
                    className="w-full sm:w-auto text-center bg-primary-500 hover:bg-primary-600 text-white font-medium px-8 py-3.5 rounded-full transition-all shadow-md hover:shadow-lg transform hover:-translate-y-0.5"
                  >
                    {settings.heroButtonText || 'View Medicines'}
                  </Link>
                  <Link
                    to="/about"
                    className="w-full sm:w-auto text-center bg-white hover:bg-primary-50 text-primary-700 font-medium px-8 py-3.5 rounded-full border border-primary-200 transition-all shadow-xs hover:shadow-sm"
                  >
                    About Us
                  </Link>
                </div>
              </div>

              {/* Hero Right Banner Image */}
              <div className="lg:col-span-5 flex justify-center">
                <div className="relative w-full max-w-md">
                  <div className="absolute inset-0 bg-primary-500 rounded-3xl rotate-3 scale-95 opacity-10"></div>
                  <img
                    src="/hero.png"
                    alt="Pure Ayurvedic Herbal Ingredients"
                    className="relative z-10 w-full h-[320px] sm:h-[400px] object-cover rounded-3xl shadow-xl border-4 border-white"
                  />
                </div>
              </div>

            </div>
          </div>
        </section>
      )}

      {/* Intro section */}
      <section className="py-16 bg-white">
        <div className="max-w-4xl mx-auto px-4 text-center space-y-6">
          <Heart className="mx-auto text-accent-500 animate-pulse" size={36} />
          <h2 className="font-display font-bold text-3xl text-primary-950">Welcome to {settings.businessName}</h2>
          <p className="text-sand-600 text-lg leading-relaxed">
            {settings.aboutIntro}
          </p>
        </div>
      </section>

      {/* Dynamic Benefits / Why Choose Us Grid */}
      <section className="py-16 bg-gradient-to-b from-white to-primary-50/50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 stagger-list">
            {benefits.map((benefit, idx) => (
              <div key={benefit.id || idx} className="bg-white p-8 rounded-2xl border border-primary-100 shadow-xs flex items-start gap-4">
                <div className="shrink-0 text-primary-600 mt-1 h-10 w-10 rounded-xl bg-primary-50 flex items-center justify-center font-bold text-base">
                  {benefit.imageUrl ? (
                    <img src={benefit.imageUrl} alt={benefit.title} className="h-full w-full object-cover rounded-xl" />
                  ) : (
                    <CheckCircle2 size={24} />
                  )}
                </div>
                <div>
                  <h3 className="font-display font-bold text-xl text-primary-955 mb-2">{benefit.title}</h3>
                  <p className="text-sand-600 text-sm leading-relaxed">{benefit.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Medicine Categories Section */}
      <section className="py-20 bg-sand-50/50 border-t border-b border-primary-100/30">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center space-y-3 mb-16">
            <span className="text-accent-600 text-sm font-bold uppercase tracking-widest">Our Formulations</span>
            <h2 className="font-display font-bold text-3xl sm:text-4xl text-primary-955">Medicine Categories</h2>
            <div className="w-16 h-1 bg-accent-500 mx-auto rounded-full mt-4"></div>
          </div>

          {loading ? (
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8">
              <CategorySkeleton />
              <CategorySkeleton />
              <CategorySkeleton />
              <CategorySkeleton />
            </div>
          ) : categories.length === 0 ? (
            <div className="text-center py-12 bg-white rounded-3xl border border-dashed border-primary-200">
              <p className="text-sand-500 font-medium">No categories available at the moment.</p>
            </div>
          ) : (
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8">
              {categories.map((category) => {
                const count = category._count?.medicines || 0;
                const slug = getCategorySlug(category);
                return (
                  <Link
                    key={category.id}
                    to={`/medicines/${slug}`}
                    className="bg-white rounded-3xl overflow-hidden border border-primary-100/50 shadow-xs hover:shadow-md transition-all duration-300 flex flex-col h-full group hover:-translate-y-1"
                  >
                    <div className="h-48 overflow-hidden relative bg-primary-50">
                      {category.imageUrl ? (
                        <img
                          src={category.imageUrl}
                          alt={category.englishName}
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
                          {category.englishName}
                        </h3>
                        {category.teluguName && (
                          <p className="text-primary-750 text-xs font-semibold leading-relaxed">
                            {category.teluguName}
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
      </section>

      {/* Featured Medicines Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center space-y-3 mb-16">
            <span className="text-accent-600 text-sm font-bold uppercase tracking-widest">Handpicked Remedies</span>
            <h2 className="font-display font-bold text-3xl sm:text-4xl text-primary-950">Featured Medicines</h2>
            <div className="w-16 h-1 bg-accent-500 mx-auto rounded-full mt-4"></div>
          </div>

          {loading ? (
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
              <SkeletonCard />
              <SkeletonCard />
              <SkeletonCard />
            </div>
          ) : featuredMedicines.length === 0 ? (
            <div className="text-center py-12 bg-primary-50 rounded-2xl border border-dashed border-primary-200">
              <p className="text-sand-500 font-medium">No featured medicines available at the moment. Please check back later!</p>
            </div>
          ) : (
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 stagger-list">
              {featuredMedicines.map((medicine) => {
                const isOutOfStock = medicine.availability === 'OUT_OF_STOCK';
                const hasDiscount = medicine.discountPrice !== null && medicine.discountPrice !== undefined;
                
                return (
                  <Link 
                    key={medicine.id} 
                    to={`/product/${medicine.slug}`}
                    className="bg-sand-50 rounded-2xl overflow-hidden border border-primary-100 shadow-sm hover:shadow-md transition-all flex flex-col h-full group hover:-translate-y-1 duration-300 block"
                  >
                    {/* Medicine Image */}
                    <div className="h-64 overflow-hidden relative bg-primary-50">
                      {medicine.imageUrl ? (
                        <img
                          src={medicine.imageUrl}
                          alt={medicine.name}
                          className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                        />
                      ) : (
                        <div className="w-full h-full flex flex-col items-center justify-center text-primary-300">
                          <Heart size={48} className="stroke-1" />
                          <span className="text-xs font-semibold mt-2">{settings.businessName}</span>
                        </div>
                      )}
                      <span className="absolute top-4 left-4 bg-white/90 backdrop-blur-xs text-primary-800 text-[10px] px-3 py-1.5 rounded-full font-bold border border-primary-100 uppercase tracking-wider">
                        {medicine.categories?.[0]?.englishName || 'Ayurveda'}
                      </span>
                    </div>

                    {/* Medicine Content */}
                    <div className="p-6 flex flex-col flex-grow space-y-4 justify-between">
                      <div className="space-y-2">
                        <h3 className="font-display font-bold text-lg text-primary-955 group-hover:text-primary-800 transition-colors leading-tight">
                          {medicine.englishName || medicine.teluguName}
                        </h3>
                        {medicine.englishName && medicine.teluguName && (
                          <h4 className="text-sand-500 font-semibold text-xs mt-0.5">
                            {medicine.teluguName}
                          </h4>
                        )}
                        <p className="text-sand-600 text-sm line-clamp-3">
                          {medicine.shortDescription || medicine.description}
                        </p>
                      </div>

                      <div className="space-y-4 pt-4 border-t border-primary-100">
                        <div className="flex justify-between items-center">
                          <div className="flex items-baseline gap-2">
                            {hasDiscount ? (
                              <>
                                <span className="text-primary-800 font-display font-bold text-2xl">
                                  ₹{medicine.discountPrice}
                                </span>
                                <span className="text-sand-400 font-display text-sm line-through">
                                  ₹{medicine.price}
                                </span>
                              </>
                            ) : (
                              <span className="text-primary-800 font-display font-bold text-2xl">
                                  ₹{medicine.price}
                              </span>
                            )}
                          </div>
                          
                          <span className={`inline-flex items-center gap-1.5 text-xs font-semibold px-2.5 py-1 rounded-full ${
                            isOutOfStock 
                              ? 'bg-rose-50 text-rose-700 border border-rose-100' 
                              : 'bg-emerald-50 text-emerald-700 border border-emerald-100'
                          }`}>
                            <span className={`h-1.5 w-1.5 rounded-full bg-${isOutOfStock ? 'rose' : 'emerald'}-500 ${!isOutOfStock && 'animate-pulse'}`}></span>
                            {isOutOfStock ? 'Out of Stock' : 'Available'}
                          </span>
                        </div>

                        {medicine.whatsappEnabled && (
                          <button
                            onClick={(e) => handleWhatsAppOrder(e, medicine)}
                            disabled={isOutOfStock}
                            className={`w-full inline-flex items-center justify-center gap-2 font-medium py-3 rounded-xl transition-all shadow-sm hover:shadow-md cursor-pointer ${
                              isOutOfStock 
                                ? 'bg-sand-200 text-sand-400 cursor-not-allowed border border-sand-300 shadow-none'
                                : 'bg-primary-600 hover:bg-primary-700 text-white'
                            }`}
                          >
                            <Phone size={16} />
                            <span>{isOutOfStock ? 'Out of Stock' : 'Order on WhatsApp'}</span>
                          </button>
                        )}
                      </div>
                    </div>
                  </Link>
                );
              })}
            </div>
          )}

          <div className="text-center mt-12">
            <Link
              to="/medicines"
              className="inline-flex items-center gap-2 text-primary-700 hover:text-primary-800 font-bold group"
            >
              <span>View All Medicines</span>
              <ArrowRight size={18} className="transform group-hover:translate-x-1 transition-transform" />
            </Link>
          </div>
        </div>
      </section>

      {/* Dynamic Testimonials Section */}
      {testimonials.length > 0 && (
        <section className="py-20 bg-gradient-to-b from-white to-primary-50/20 border-t border-primary-100">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            
            <div className="text-center space-y-3 mb-16">
              <span className="text-accent-600 text-sm font-bold uppercase tracking-widest">Happy Customers</span>
              <h2 className="font-display font-bold text-3xl sm:text-4xl text-primary-950">Patient Testimonials</h2>
              <div className="w-16 h-1 bg-accent-500 mx-auto rounded-full mt-4"></div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-5xl mx-auto">
              {testimonials.map((test, idx) => (
                <div key={test.id || idx} className="bg-white p-8 rounded-3xl border border-primary-100 shadow-xs flex flex-col justify-between space-y-6">
                  
                  {/* Rating stars & Content */}
                  <div className="space-y-4">
                    <div className="flex gap-1 text-amber-500">
                      {[...Array(test.rating)].map((_, i) => (
                        <Star key={i} size={16} fill="currentColor" />
                      ))}
                    </div>
                    <p className="text-sand-600 italic leading-relaxed text-sm sm:text-base">
                      "{test.content}"
                    </p>
                  </div>

                  {/* Profile info */}
                  <div className="flex items-center gap-3 pt-4 border-t border-primary-50">
                    <div className="h-10 w-10 rounded-full bg-primary-150 flex items-center justify-center overflow-hidden font-bold text-primary-700">
                      {test.imageUrl ? (
                        <img src={test.imageUrl} alt={test.name} className="h-full w-full object-cover" />
                      ) : (
                        test.name.charAt(0)
                      )}
                    </div>
                    <div>
                      <h4 className="font-bold text-primary-950 text-sm">{test.name}</h4>
                      <span className="text-[10px] text-sand-400 font-semibold uppercase tracking-wider">Verified Purchase</span>
                    </div>
                  </div>

                </div>
              ))}
            </div>

          </div>
        </section>
      )}

      {/* WhatsApp / Call to action Section */}
      <section className="bg-primary-800 text-white py-16 relative overflow-hidden">
        <div className="absolute -bottom-20 -right-20 w-80 h-80 bg-accent-600/30 rounded-full blur-3xl"></div>

        <div className="max-w-5xl mx-auto px-4 text-center space-y-6 relative z-10">
          <span className="bg-accent-500 text-primary-950 font-bold text-xs uppercase px-4 py-1.5 rounded-full tracking-wider">
            Quick Consultation & Orders
          </span>
          <h2 className="font-display font-bold text-3xl sm:text-4xl">Have a Question or Need a Custom Prescription?</h2>
          <p className="text-primary-100 text-base sm:text-lg max-w-2xl mx-auto">
            Our Ayurvedic practitioners can guide you to choose the exact remedy for your lifestyle and symptoms. Connect with us on WhatsApp for rapid support.
          </p>
          <div className="pt-4 flex flex-col sm:flex-row items-center justify-center gap-4">
            <a
              href={`https://wa.me/${whatsappSettings.whatsappNumber.replace(/\D/g, '')}`}
              target="_blank"
              rel="noopener noreferrer"
              className="w-full sm:w-auto inline-flex items-center justify-center gap-2 bg-emerald-500 hover:bg-emerald-600 text-white font-semibold px-8 py-4 rounded-full transition-all shadow-md hover:shadow-lg"
            >
              <Phone size={20} />
              <span>Chat on WhatsApp</span>
            </a>
            <a
              href={`tel:${contact.phone}`}
              className="w-full sm:w-auto inline-flex items-center justify-center gap-2 bg-primary-700 hover:bg-primary-600 text-white font-semibold px-8 py-4 rounded-full border border-primary-600 transition-all"
            >
              Call: {contact.phone}
            </a>
          </div>
        </div>
      </section>

      {/* Contact Map and Details */}
      <section className="py-16 bg-sand-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            
            {/* Left Details */}
            <div className="space-y-6">
              <h2 className="font-display font-bold text-3xl text-primary-950">Visit Our Pharmacy</h2>
              <p className="text-sand-600">
                Come visit our local Ayurvedic dispensary to see all our raw herbs and organic supplements. You can also pick up orders directly from our pharmacy.
              </p>
              
              <div className="space-y-4">
                <div className="flex gap-4">
                  <MapPin className="text-primary-600 shrink-0" size={24} />
                  <div>
                    <h4 className="font-bold text-primary-950">Address</h4>
                    <p className="text-sand-600 mt-1">{contact.address}</p>
                  </div>
                </div>
                
                <div className="flex gap-4">
                  <Phone className="text-primary-600 shrink-0" size={24} />
                  <div>
                    <h4 className="font-bold text-primary-950">Phone Number</h4>
                    <p className="text-sand-600 mt-1">{contact.phone}</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Right Map */}
            <div className="h-80 w-full bg-white rounded-3xl overflow-hidden shadow-md border border-primary-100">
              <iframe
                title="Store Location"
                src={contact.googleMapsLink && contact.googleMapsLink.startsWith('http') && contact.googleMapsLink.includes('embed') 
                  ? contact.googleMapsLink 
                  : "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3887.8938950854447!2d80.20387667590823!3d12.978648114713175!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3a525d8c6b7617b7%3A0xe54e6022e37905f0!2sChennai%2C%20Tamil%20Nadu!5e0!3m2!1sen!2sin!4v1700000000000!5m2!1sen!2sin"
                }
                className="w-full h-full border-0"
                allowFullScreen=""
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
              ></iframe>
            </div>

          </div>
        </div>
      </section>
    </div>
  );
}
