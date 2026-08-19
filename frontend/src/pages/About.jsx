import React, { useState, useEffect } from 'react';
import * as LucideIcons from 'lucide-react';
import { api } from '../utils/api';
import { useSocket } from '../context/SocketContext';

// Helper to safely render icons by string name
const renderIcon = (iconName, className = "text-primary-600", size = 24) => {
  const IconComponent = LucideIcons[iconName] || LucideIcons.Leaf;
  return <IconComponent className={className} size={size} />;
};

// Helper to format text paragraphs cleanly with line breaks
const renderParagraphs = (text, className = "text-sand-700 leading-relaxed text-base") => {
  if (!text) return null;
  return text.split('\n\n').filter(Boolean).map((para, idx) => (
    <p key={idx} className={className}>
      {para.split('\n').map((line, lIdx) => (
        <React.Fragment key={lIdx}>
          {line}
          {lIdx < para.split('\n').length - 1 && <br />}
        </React.Fragment>
      ))}
    </p>
  ));
};

export default function About() {
  const [data, setData] = useState(null);
  const [contact, setContact] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const { socket } = useSocket();

  const loadData = () => {
    setLoading(true);
    Promise.all([
      api.about.get(),
      api.contact.get()
    ]).then(([aboutData, contactData]) => {
      setData(aboutData);
      setContact(contactData);
      setError(null);
    })
    .catch(err => {
      console.error('Failed to load about data:', err);
      setError('Failed to retrieve content. Please try again.');
    })
    .finally(() => setLoading(false));
  };

  useEffect(() => {
    loadData();
  }, []);

  // Socket real-time update listeners
  useEffect(() => {
    if (!socket) return;

    const handleUpdate = (payload) => {
      if (payload.type === 'about' || payload.type === 'contact') {
        console.log(`Socket real-time update: refreshing About Us content (${payload.type})`);
        Promise.all([
          api.about.get(),
          api.contact.get()
        ]).then(([aboutData, contactData]) => {
          setData(aboutData);
          setContact(contactData);
        }).catch(err => console.error('Error refreshing content on socket event:', err));
      }
    };

    const handleReconnect = () => {
      console.log('Socket reconnected, refreshing about data...');
      loadData();
    };

    socket.on('website:data-updated', handleUpdate);
    window.addEventListener('socket_reconnected', handleReconnect);

    return () => {
      socket.off('website:data-updated', handleUpdate);
      window.removeEventListener('socket_reconnected', handleReconnect);
    };
  }, [socket]);

  if (loading) {
    return (
      <div className="flex justify-center items-center min-h-[60vh]">
        <div className="animate-spin rounded-full h-10 w-10 border-b-2 border-primary-600"></div>
      </div>
    );
  }

  if (error) {
    return (
      <div className="max-w-md mx-auto px-4 py-20 text-center space-y-4">
        <h2 className="text-xl font-semibold text-red-700">{error}</h2>
        <button
          onClick={loadData}
          className="px-6 py-2 bg-primary-600 hover:bg-primary-700 text-white rounded-full transition-colors font-medium"
        >
          Retry
        </button>
      </div>
    );
  }

  if (!data || !data.isEnabled) {
    return (
      <div className="max-w-4xl mx-auto px-4 py-24 text-center space-y-4">
        {renderIcon("ShieldAlert", "text-sand-400 mx-auto", 48)}
        <h2 className="text-2xl font-bold text-primary-950 font-display">About Us Currently Unavailable</h2>
        <p className="text-sand-600 max-w-md mx-auto">We are updating our organization details. Please check back later or contact support.</p>
      </div>
    );
  }

  // Filter sections that are enabled
  const activeSections = (data.sections || [])
    .filter(sec => sec.isEnabled)
    .sort((a, b) => a.displayOrder - b.displayOrder);

  // Render individual sections
  const renderSectionContent = (sectionId) => {
    switch (sectionId) {
      case 'hero':
        return (
          <section key="hero" className="bg-gradient-to-br from-primary-900 via-primary-950 to-emerald-950 text-white py-20 sm:py-28 relative overflow-hidden">
            <div className="absolute top-0 right-0 w-96 h-96 bg-accent-500/10 rounded-full blur-3xl"></div>
            <div className="absolute bottom-0 left-0 w-80 h-80 bg-primary-500/5 rounded-full blur-3xl"></div>
            <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 relative text-center space-y-6">
              <span className="text-accent-400 text-xs sm:text-sm font-bold uppercase tracking-widest flex items-center justify-center gap-2">
                {renderIcon("Leaf", "text-accent-400 shrink-0", 18)}
                <span>100% Authentic Ayurveda</span>
              </span>
              <h1 className="font-display font-bold text-4xl sm:text-5xl lg:text-6xl tracking-wide leading-tight">
                {data.heading}
              </h1>
              <p className="text-primary-100/90 text-lg sm:text-xl max-w-3xl mx-auto font-light leading-relaxed">
                {data.aboutIntro}
              </p>
              <div className="w-16 h-1 bg-accent-500 mx-auto rounded-full mt-4"></div>
            </div>
          </section>
        );

      case 'story':
        return (
          <section key="story" className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 sm:py-20">
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
              <div className="lg:col-span-7 space-y-6">
                <div className="flex items-center gap-3 text-primary-800">
                  {renderIcon("BookOpen", "text-primary-700 shrink-0", 28)}
                  <h2 className="font-display font-bold text-3xl sm:text-4xl text-primary-950">Our Story</h2>
                </div>
                <div className="space-y-4">
                  {renderParagraphs(data.ourStory)}
                </div>
              </div>
              <div className="lg:col-span-5 flex justify-center">
                {data.storyImageUrl ? (
                  <div className="relative group">
                    <div className="absolute inset-0 bg-primary-900 rounded-3xl translate-x-3 translate-y-3 -z-10 opacity-10 group-hover:translate-x-1 group-hover:translate-y-1 transition-transform"></div>
                    <img
                      src={data.storyImageUrl}
                      alt="R.K. Ayurveda story"
                      className="w-full max-w-md h-[400px] object-cover rounded-3xl shadow-md border-4 border-white"
                    />
                  </div>
                ) : (
                  <div className="w-full max-w-md h-[320px] bg-gradient-to-br from-primary-800 to-primary-950 text-white rounded-3xl shadow-lg flex flex-col items-center justify-center p-8 text-center border-4 border-white relative overflow-hidden">
                    <div className="absolute top-0 right-0 w-32 h-32 bg-white/5 rounded-full blur-xl"></div>
                    {renderIcon("HeartHandshake", "text-accent-400 mb-4", 48)}
                    <h3 className="font-display font-bold text-2xl mb-2">{contact?.businessName || 'R.K. Ayurveda'}</h3>
                    <p className="text-primary-100/90 text-sm leading-relaxed">Dedicated to restoring health and longevity through pure, natural solutions.</p>
                  </div>
                )}
              </div>
            </div>
          </section>
        );

      case 'mission_vision':
        return (
          <section key="mission_vision" className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {/* Mission */}
              <div className="bg-white p-8 sm:p-10 rounded-3xl border border-primary-100 shadow-xs flex flex-col space-y-4 relative overflow-hidden group hover:shadow-md hover:border-primary-200 transition-all duration-300">
                <div className="absolute top-0 right-0 w-24 h-24 bg-primary-50/20 rounded-full translate-x-6 -translate-y-6 group-hover:bg-primary-50/50 transition-colors"></div>
                <div className="h-12 w-12 rounded-2xl bg-primary-50 flex items-center justify-center text-primary-700">
                  {renderIcon("Award", "text-primary-700", 24)}
                </div>
                <h3 className="font-display font-bold text-2xl text-primary-950">Our Mission</h3>
                <p className="text-sand-600 leading-relaxed font-light">
                  {data.mission}
                </p>
              </div>

              {/* Vision */}
              <div className="bg-white p-8 sm:p-10 rounded-3xl border border-primary-100 shadow-xs flex flex-col space-y-4 relative overflow-hidden group hover:shadow-md hover:border-accent-200 transition-all duration-300">
                <div className="absolute top-0 right-0 w-24 h-24 bg-accent-50/20 rounded-full translate-x-6 -translate-y-6 group-hover:bg-accent-50/50 transition-colors"></div>
                <div className="h-12 w-12 rounded-2xl bg-accent-50 flex items-center justify-center text-accent-700">
                  {renderIcon("Compass", "text-accent-600", 24)}
                </div>
                <h3 className="font-display font-bold text-2xl text-primary-950">Our Vision</h3>
                <p className="text-sand-600 leading-relaxed font-light">
                  {data.vision}
                </p>
              </div>
            </div>
          </section>
        );

      case 'philosophy':
        if (!data.philosophyItems || data.philosophyItems.length === 0) return null;
        return (
          <section key="philosophy" className="bg-gradient-to-b from-primary-950 to-primary-900 text-white py-16 sm:py-20 my-8">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
              <div className="text-center max-w-3xl mx-auto space-y-3">
                <h2 className="font-display font-bold text-3xl sm:text-4xl">Our Ayurvedic Philosophy</h2>
                <p className="text-primary-200 text-base sm:text-lg font-light leading-relaxed">
                  {data.philosophyIntro}
                </p>
                <div className="w-12 h-1 bg-accent-500 mx-auto rounded-full mt-4"></div>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                {data.philosophyItems.filter(item => item.isEnabled).map((item, idx) => (
                  <div key={item.id} className="bg-white/5 border border-white/10 rounded-2xl p-6 space-y-3 hover:bg-white/10 transition-colors">
                    <div className="h-10 w-10 rounded-xl bg-white/10 flex items-center justify-center text-accent-400">
                      {renderIcon(item.icon, "text-accent-400", 20)}
                    </div>
                    <h3 className="font-bold text-xl text-white">{item.title}</h3>
                    <p className="text-primary-100/80 text-sm font-light leading-relaxed">{item.description}</p>
                  </div>
                ))}
              </div>
            </div>
          </section>
        );

      case 'quality':
        if (!data.qualityItems || data.qualityItems.length === 0) return null;
        return (
          <section key="quality" className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
              <div className="lg:col-span-5 space-y-4">
                <span className="text-primary-700 text-sm font-bold uppercase tracking-widest">Purity Guaranteed</span>
                <h2 className="font-display font-bold text-3xl sm:text-4xl text-primary-950">Quality & Trust</h2>
                <p className="text-sand-600 leading-relaxed font-light">
                  {data.qualityIntro}
                </p>
              </div>
              <div className="lg:col-span-7 grid grid-cols-1 sm:grid-cols-2 gap-6">
                {data.qualityItems.filter(item => item.isEnabled).map(item => (
                  <div key={item.id} className="p-6 bg-sand-50/50 rounded-2xl border border-sand-200/50 space-y-2 hover:bg-white transition-all duration-300">
                    <div className="h-10 w-10 rounded-xl bg-primary-50 flex items-center justify-center text-primary-700">
                      {renderIcon(item.icon, "text-primary-700", 20)}
                    </div>
                    <h3 className="font-bold text-lg text-primary-950">{item.title}</h3>
                    <p className="text-sand-600 text-sm leading-relaxed font-light">{item.description}</p>
                  </div>
                ))}
              </div>
            </div>
          </section>
        );

      case 'why_choose_us':
        if (!data.whyChooseUsItems || data.whyChooseUsItems.length === 0) return null;
        return (
          <section key="why_choose_us" className="bg-sand-550/10 py-16 sm:py-20 border-y border-sand-200/20">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
              <div className="text-center max-w-3xl mx-auto space-y-3">
                <h2 className="font-display font-bold text-3xl sm:text-4xl text-primary-950">Why Choose R.K. Ayurveda?</h2>
                <p className="text-sand-500 text-sm sm:text-base font-light">
                  {data.whyChooseUsIntro}
                </p>
                <div className="w-12 h-1 bg-accent-500 mx-auto rounded-full mt-4"></div>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
                {data.whyChooseUsItems.filter(item => item.isEnabled).map(item => (
                  <div key={item.id} className="bg-white p-6 sm:p-8 rounded-2xl border border-primary-100 shadow-xs hover:-translate-y-1 hover:shadow-md transition-all duration-300 flex flex-col space-y-3">
                    <div className="h-10 w-10 rounded-xl bg-accent-50 flex items-center justify-center text-accent-700 shrink-0">
                      {renderIcon(item.icon || 'CheckCircle', "text-accent-600", 20)}
                    </div>
                    <h3 className="font-bold text-lg text-primary-950">{item.title}</h3>
                    <p className="text-sand-600 text-sm leading-relaxed font-light">{item.description}</p>
                  </div>
                ))}
              </div>
            </div>
          </section>
        );

      case 'values':
        if (!data.valueItems || data.valueItems.length === 0) return null;
        return (
          <section key="values" className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 space-y-12">
            <div className="text-center max-w-3xl mx-auto space-y-3">
              <h2 className="font-display font-bold text-3xl sm:text-4xl text-primary-950">Our Values</h2>
              <p className="text-sand-500 text-sm sm:text-base font-light">
                {data.valuesIntro}
              </p>
              <div className="w-12 h-1 bg-accent-500 mx-auto rounded-full mt-4"></div>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
              {data.valueItems.filter(item => item.isEnabled).map(item => (
                <div key={item.id} className="p-6 bg-sand-50/30 rounded-2xl border border-sand-100 flex gap-4 items-start hover:bg-white hover:border-primary-100 transition-all duration-300">
                  <div className="h-10 w-10 rounded-xl bg-primary-50 flex items-center justify-center text-primary-700 shrink-0 mt-0.5">
                    {renderIcon(item.icon, "text-primary-700", 20)}
                  </div>
                  <div className="space-y-1">
                    <h3 className="font-bold text-lg text-primary-950">{item.title}</h3>
                    <p className="text-sand-600 text-sm leading-relaxed font-light">{item.description}</p>
                  </div>
                </div>
              ))}
            </div>
          </section>
        );

      case 'gallery':
        if (!data.galleryImages || data.galleryImages.length === 0) return null;
        return (
          <section key="gallery" className="bg-sand-50/20 py-16 sm:py-20 border-t border-sand-100">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
              <div className="text-center max-w-3xl mx-auto space-y-3">
                <h2 className="font-display font-bold text-3xl sm:text-4xl text-primary-950">{data.galleryTitle}</h2>
                <p className="text-sand-500 text-sm sm:text-base font-light">
                  {data.galleryIntro}
                </p>
                <div className="w-12 h-1 bg-accent-500 mx-auto rounded-full mt-4"></div>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
                {data.galleryImages.filter(img => img.isEnabled).map(img => (
                  <div key={img.id} className="bg-white rounded-3xl overflow-hidden border border-sand-100 group shadow-xs hover:shadow-md transition-all duration-300 flex flex-col">
                    <div className="h-64 overflow-hidden relative">
                      <img
                        src={img.imageUrl}
                        alt={img.title || "Gallery image"}
                        className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                      />
                    </div>
                    {(img.title || img.description) && (
                      <div className="p-5 space-y-1 flex-1 flex flex-col justify-center">
                        {img.title && <h3 className="font-bold text-lg text-primary-950">{img.title}</h3>}
                        {img.description && <p className="text-sand-500 text-xs sm:text-sm font-light leading-relaxed">{img.description}</p>}
                      </div>
                    )}
                  </div>
                ))}
              </div>
            </div>
          </section>
        );

      case 'certifications':
        if (!data.certificationsEnabled || !data.certifications || data.certifications.length === 0) return null;
        return (
          <section key="certifications" className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 space-y-12">
            <div className="text-center max-w-3xl mx-auto space-y-3">
              <h2 className="font-display font-bold text-3xl sm:text-4xl text-primary-950">{data.certificationsTitle}</h2>
              <p className="text-sand-500 text-sm sm:text-base font-light">
                {data.certificationsIntro}
              </p>
              <div className="w-12 h-1 bg-accent-500 mx-auto rounded-full mt-4"></div>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
              {data.certifications.filter(c => c.isEnabled).map(c => (
                <div key={c.id} className="bg-white p-6 rounded-2xl border border-sand-150 shadow-xs flex flex-col items-center text-center space-y-3 hover:shadow-sm transition-all duration-300">
                  {c.imageUrl ? (
                    <img
                      src={c.imageUrl}
                      alt={c.title}
                      className="h-20 w-auto object-contain mb-2"
                    />
                  ) : (
                    <div className="h-16 w-16 rounded-full bg-accent-50 flex items-center justify-center text-accent-600 mb-2">
                      {renderIcon("ShieldCheck", "text-accent-600", 32)}
                    </div>
                  )}
                  <h3 className="font-bold text-base text-primary-950">{c.title}</h3>
                  {c.issuer && <span className="text-xs font-semibold text-accent-700 bg-accent-50 px-2.5 py-0.5 rounded-full">{c.issuer}</span>}
                  {c.description && <p className="text-sand-500 text-xs font-light leading-relaxed">{c.description}</p>}
                </div>
              ))}
            </div>
          </section>
        );

      case 'cta':
        return (
          <section key="cta" className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
            <div className="bg-gradient-to-br from-primary-900 to-primary-950 rounded-3xl p-8 sm:p-12 text-center text-white relative overflow-hidden shadow-lg space-y-6">
              <div className="absolute top-0 left-0 w-48 h-48 bg-white/5 rounded-full blur-xl"></div>
              <div className="absolute bottom-0 right-0 w-64 h-64 bg-accent-500/5 rounded-full blur-2xl"></div>

              <h2 className="font-display font-bold text-3xl sm:text-4xl max-w-2xl mx-auto relative z-10">
                {data.ctaTitle}
              </h2>
              <div className="w-12 h-1 bg-accent-500 mx-auto rounded-full relative z-10"></div>

              <div className="flex flex-col sm:flex-row gap-4 justify-center items-center pt-2 relative z-10">
                <a
                  href={data.ctaButtonLink}
                  className="w-full sm:w-auto px-8 py-3 bg-accent-500 hover:bg-accent-600 text-white rounded-full transition-colors font-medium shadow-sm flex items-center justify-center gap-2"
                >
                  {renderIcon("ShoppingBag", "text-white shrink-0", 18)}
                  <span>{data.ctaButtonText}</span>
                </a>
                {contact?.whatsapp && (
                  <a
                    href={`https://wa.me/${contact.whatsapp}`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-full sm:w-auto px-8 py-3 bg-transparent border border-white/30 hover:bg-white/10 text-white rounded-full transition-colors font-medium flex items-center justify-center gap-2"
                  >
                    {renderIcon("MessageSquareText", "text-white shrink-0", 18)}
                    <span>{data.ctaWhatsAppText}</span>
                  </a>
                )}
              </div>
            </div>
          </section>
        );

      default:
        return null;
    }
  };

  return (
    <div className="flex flex-col min-h-screen bg-sand-50/20">
      {activeSections.map(sec => renderSectionContent(sec.id))}
    </div>
  );
}
