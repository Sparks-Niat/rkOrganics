import React, { useState, useEffect } from 'react';
import { useParams, Link, useNavigate } from 'react-router-dom';
import { Phone, ArrowLeft, Heart, CheckCircle, ShieldCheck, HelpCircle, ShieldAlert } from 'lucide-react';
import { api } from '../utils/api';
import { useSocket } from '../context/SocketContext';

const ProductSkeleton = () => (
  <div className="min-h-screen bg-sand-50/30 pb-16 animate-pulse">
    <div className="bg-white border-b border-primary-100 py-4">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="h-5 bg-sand-200 rounded-md w-24"></div>
      </div>
    </div>
    <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 mt-10 space-y-8">
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 bg-white p-6 sm:p-10 rounded-3xl border border-primary-100 shadow-sm">
        <div className="lg:col-span-5 flex flex-col space-y-4">
          <div className="aspect-square rounded-2xl bg-sand-200"></div>
        </div>
        <div className="lg:col-span-7 flex flex-col space-y-6">
          <div className="space-y-3">
            <div className="h-4 bg-sand-200 rounded-md w-1/4"></div>
            <div className="h-8 bg-sand-200 rounded-md w-3/4"></div>
            <div className="h-6 bg-sand-150 rounded-md w-1/2"></div>
          </div>
          <div className="space-y-4 pt-6 border-t border-primary-50">
            <div className="h-4 bg-sand-200 rounded-md w-full"></div>
            <div className="h-4 bg-sand-200 rounded-md w-5/6"></div>
          </div>
          <div className="space-y-4 pt-6 border-t border-primary-50">
            <div className="h-10 bg-sand-200 rounded-md w-1/3"></div>
            <div className="h-12 bg-sand-200 rounded-xl w-full"></div>
          </div>
        </div>
      </div>
    </div>
  </div>
);

export default function ProductDetails() {
  const { slug } = useParams();
  const navigate = useNavigate();
  const [medicine, setMedicine] = useState(null);
  const [whatsappSettings, setWhatsappSettings] = useState({
    whatsappNumber: '6305029231',
    defaultMessage: 'Hello, I would like to order {medicineName}. Price: {price}. Quantity: {quantity}.',
  });
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState('');

  const loadProductDetails = () => {
    Promise.all([
      api.medicines.getBySlug(slug),
      api.whatsapp.get()
    ]).then(([medData, whatsappData]) => {
      if (medData) setMedicine(medData);
      if (whatsappData) setWhatsappSettings(whatsappData);
    })
    .catch(err => {
      console.error(err);
      setError(err.message || 'Failed to load medicine details');
    })
    .finally(() => setLoading(false));
  };

  useEffect(() => {
    setLoading(true);
    loadProductDetails();
  }, [slug]);

  const { socket } = useSocket();

  useEffect(() => {
    if (!socket) return;

    const handleUpdate = (data) => {
      const matchTypes = ['medicines', 'whatsapp'];
      if (matchTypes.includes(data.type)) {
        console.log(`Product details updated (${data.type}), refreshing...`);
        loadProductDetails();
      }
    };

    socket.on('website:data-updated', handleUpdate);

    const handleReconnect = () => {
      console.log('Socket reconnected, refreshing product details...');
      loadProductDetails();
    };

    window.addEventListener('socket_reconnected', handleReconnect);

    return () => {
      socket.off('website:data-updated', handleUpdate);
      window.removeEventListener('socket_reconnected', handleReconnect);
    };
  }, [socket, slug]);

  const handleWhatsAppOrder = () => {
    if (!medicine) return;
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

  if (loading) {
    return <ProductSkeleton />;
  }

  if (error || !medicine || !medicine.isActive || medicine.availability === 'HIDDEN') {
    return (
      <div className="max-w-4xl mx-auto px-4 py-20 text-center space-y-4">
        <h2 className="text-2xl font-bold text-primary-950">Medicine Not Found</h2>
        <p className="text-sand-500 text-sm">The product you are looking for does not exist, is inactive, or has been disabled by the admin.</p>
        <Link to="/medicines" className="inline-flex items-center gap-2 bg-primary-600 hover:bg-primary-700 text-white font-medium px-6 py-2.5 rounded-full transition-all">
          <ArrowLeft size={16} />
          <span>Back to Medicines</span>
        </Link>
      </div>
    );
  }

  const isOutOfStock = medicine.availability === 'OUT_OF_STOCK';
  const hasDiscount = medicine.discountPrice !== null && medicine.discountPrice !== undefined;

  return (
    <div className="min-h-screen bg-sand-50/30 pb-16">
      
      {/* Breadcrumb / Top Bar */}
      <div className="bg-white border-b border-primary-100 py-4">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <button 
            onClick={() => navigate('/medicines')}
            className="inline-flex items-center gap-2 text-primary-700 hover:text-primary-800 font-medium text-sm cursor-pointer group"
          >
            <ArrowLeft size={16} className="transform group-hover:-translate-x-1 transition-transform" />
            <span>Back to Medicines</span>
          </button>
        </div>
      </div>

      {/* Main product wrapper */}
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 mt-10 space-y-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 bg-white p-6 sm:p-10 rounded-3xl border border-primary-100 shadow-sm">
          
          {/* Left Column: Image Gallery */}
          <div className="lg:col-span-5 flex flex-col space-y-4">
            <div className="relative aspect-square rounded-2xl bg-primary-50 overflow-hidden border border-primary-100">
              {medicine.imageUrl ? (
                <img
                  src={medicine.imageUrl}
                  alt={medicine.englishName || medicine.teluguName}
                  className="w-full h-full object-cover"
                />
              ) : (
                <div className="w-full h-full flex flex-col items-center justify-center text-primary-300">
                  <Heart size={72} className="stroke-1" />
                  <span className="text-xs font-semibold mt-2">R.K. Ayurveda & Organics</span>
                </div>
              )}
              
              {/* Stock Badge */}
              <span className={`absolute top-4 right-4 text-xs px-3 py-1.5 rounded-full font-bold shadow-xs border ${
                isOutOfStock 
                  ? 'bg-rose-50 text-rose-700 border-rose-100' 
                  : 'bg-emerald-50 text-emerald-700 border-emerald-100'
              }`}>
                {isOutOfStock ? 'Out of Stock' : 'Available'}
              </span>
            </div>
          </div>

          {/* Right Column: Specification details */}
          <div className="lg:col-span-7 flex flex-col justify-between space-y-6">
            
            {/* Header info */}
            <div className="space-y-3">
              {/* Categories list */}
              <div className="flex flex-wrap gap-1">
                {medicine.categories?.map(c => (
                  <span key={c.id} className="text-[10px] bg-primary-50 text-primary-800 px-2.5 py-1 rounded-full font-bold uppercase tracking-wider">
                    {c.englishName}
                  </span>
                ))}
              </div>

              <h1 className="font-display font-bold text-2xl sm:text-3xl text-primary-955 leading-tight">
                {medicine.teluguName}
              </h1>
              {medicine.englishName && (
                <h2 className="text-sand-500 font-bold text-lg">
                  {medicine.englishName}
                </h2>
              )}
              {medicine.quantity && (
                <p className="text-xs font-bold text-primary-700 bg-primary-50 border border-primary-100 px-3 py-1 rounded-md inline-block">
                  Quantity: {medicine.quantity}
                </p>
              )}
              
              <div className="flex items-baseline gap-3 pt-2">
                {hasDiscount ? (
                  <>
                    <span className="text-primary-800 font-display font-bold text-2xl">
                      ₹{medicine.discountPrice}
                    </span>
                    <span className="text-sand-400 font-display text-base line-through">
                      ₹{medicine.price}
                    </span>
                    <span className="text-[10px] font-bold text-accent-600 bg-accent-50 border border-accent-100 px-2 py-0.5 rounded-md">
                      SAVE {Math.round(((medicine.price - medicine.discountPrice) / medicine.price) * 100)}%
                    </span>
                  </>
                ) : (
                  <span className="text-primary-800 font-display font-bold text-2xl">
                    ₹{medicine.price}
                  </span>
                )}
              </div>
            </div>

            {/* Description Paragraph */}
            <div className="space-y-2">
              <h3 className="text-xs font-bold text-primary-900 uppercase tracking-widest">Product Description</h3>
              <p className="text-sand-700 text-sm sm:text-base leading-relaxed whitespace-pre-line">
                {medicine.description}
              </p>
            </div>

            {/* Details details */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 pt-4 border-t border-primary-50">
              
              {/* Ingredients */}
              <div className="space-y-2">
                <div className="flex items-center gap-1.5 text-primary-800">
                  <CheckCircle size={16} />
                  <span className="text-xs font-bold uppercase tracking-wide">Ingredients</span>
                </div>
                <p className="text-xs text-sand-650 leading-relaxed font-medium">
                  {medicine.ingredients || 'Natural herbs & extract.'}
                </p>
              </div>

              {/* Benefits */}
              <div className="space-y-2">
                <div className="flex items-center gap-1.5 text-primary-800">
                  <ShieldCheck size={16} />
                  <span className="text-xs font-bold uppercase tracking-wide">Key Benefits</span>
                </div>
                <p className="text-xs text-sand-650 leading-relaxed font-medium">
                  {medicine.benefits || 'Promotes wellness & holistic health.'}
                </p>
              </div>

              {/* Usage Instructions */}
              <div className="space-y-2">
                <div className="flex items-center gap-1.5 text-primary-800">
                  <HelpCircle size={16} />
                  <span className="text-xs font-bold uppercase tracking-wide">Dosage Guide</span>
                </div>
                <p className="text-xs text-sand-650 leading-relaxed font-medium">
                  {medicine.usageInstructions || 'As directed by a practitioner.'}
                </p>
              </div>

            </div>

            {/* Call to Order */}
            <div className="pt-6 border-t border-primary-50">
              {medicine.whatsappEnabled ? (
                <div className="space-y-3">
                  <button
                    onClick={handleWhatsAppOrder}
                    disabled={isOutOfStock}
                    className={`w-full sm:w-auto inline-flex items-center justify-center gap-2 font-semibold px-8 py-3.5 rounded-xl transition-all shadow-md cursor-pointer ${
                      isOutOfStock
                        ? 'bg-sand-200 text-sand-400 cursor-not-allowed border border-sand-300 shadow-none'
                        : 'bg-primary-600 hover:bg-primary-700 hover:shadow-lg text-white hover:-translate-y-0.5'
                    }`}
                  >
                    <Phone size={18} />
                    <span>{isOutOfStock ? 'Product Out of Stock' : 'Order on WhatsApp'}</span>
                  </button>
                  <p className="text-[10px] text-sand-450 font-medium">
                    *Tapping opens WhatsApp with a prefilled purchase text detailing the name and price. No cards or login required.
                  </p>
                </div>
              ) : (
                <div className="bg-sand-50 p-4 rounded-2xl border border-primary-50 text-center">
                  <span className="text-xs text-sand-500 font-semibold">WhatsApp ordering is currently disabled for this supplement.</span>
                </div>
              )}
            </div>

          </div>
        </div>

        {/* Medical Informational Disclaimer */}
        <div className="bg-amber-50/50 p-6 rounded-3xl border border-amber-200/50 flex gap-4 items-start shadow-2xs">
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
