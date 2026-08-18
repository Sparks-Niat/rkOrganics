import React, { useState, useEffect } from 'react';
import { Leaf, Award, Compass, BookOpen, CheckCircle, Heart, Phone, Mail, MapPin } from 'lucide-react';
import { api } from '../utils/api';

export default function About() {
  const [about, setAbout] = useState(null);
  const [contact, setContact] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    Promise.all([
      api.about.get(),
      api.contact.get()
    ]).then(([aboutData, contactData]) => {
      if (aboutData) setAbout(aboutData);
      if (contactData) setContact(contactData);
    })
    .catch(err => console.error('Failed to load about data:', err))
    .finally(() => setLoading(false));
  }, []);

  if (loading) {
    return (
      <div className="flex justify-center items-center min-h-[60vh]">
        <div className="animate-spin rounded-full h-10 w-10 border-b-2 border-primary-600"></div>
      </div>
    );
  }

  if (!about || !about.isEnabled) {
    return (
      <div className="max-w-4xl mx-auto px-4 py-20 text-center">
        <h2 className="text-2xl font-bold text-primary-950">About Us section is currently unavailable.</h2>
      </div>
    );
  }

  return (
    <div className="flex flex-col min-h-screen bg-sand-50/50">
      
      {/* Banner / Header */}
      <section className="bg-primary-900 text-white py-16 sm:py-24 relative overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top_right,_var(--tw-gradient-stops))] from-primary-800 via-primary-900 to-primary-950"></div>
        <div className="absolute top-0 right-0 w-80 h-80 bg-accent-500/10 rounded-full blur-3xl"></div>
        
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative text-center space-y-4">
          <span className="text-accent-400 text-xs sm:text-sm font-bold uppercase tracking-widest flex items-center justify-center gap-2">
            <Leaf size={16} />
            <span>Ayurvedic Wisdom</span>
          </span>
          <h1 className="font-display font-bold text-4xl sm:text-5xl lg:text-6xl tracking-wide">
            {about.heading}
          </h1>
          <div className="w-16 h-1 bg-accent-500 mx-auto rounded-full"></div>
        </div>
      </section>

      {/* Main Body */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 sm:py-20 space-y-16">
        
        {/* Section 1: Our Story */}
        <section className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          <div className="lg:col-span-7 space-y-6">
            <div className="flex items-center gap-2 text-primary-700">
              <BookOpen size={24} />
              <h2 className="font-display font-bold text-3xl text-primary-950">Our Story</h2>
            </div>
            <p className="text-sand-700 text-base sm:text-lg leading-relaxed whitespace-pre-line">
              {about.ourStory}
            </p>
            {about.additionalContent && (
              <p className="text-sand-600 text-sm sm:text-base leading-relaxed bg-primary-50/50 p-5 rounded-2xl border border-primary-100/50 mt-4">
                {about.additionalContent}
              </p>
            )}
          </div>
          
          <div className="lg:col-span-5 flex justify-center">
            {about.imageUrl ? (
              <img
                src={about.imageUrl}
                alt="Our Heritage"
                className="w-full max-w-md h-80 object-cover rounded-3xl shadow-lg border-4 border-white"
              />
            ) : (
              <div className="w-full max-w-md h-80 bg-primary-800 text-white rounded-3xl shadow-lg flex flex-col items-center justify-center p-8 text-center border-4 border-white">
                <Leaf size={48} className="text-accent-400 mb-4" />
                <h3 className="font-display font-bold text-2xl mb-2">{contact?.businessName || 'R.K. Organics'}</h3>
                <p className="text-primary-100 text-sm">Authentic organic small-batch formulations from natural herbs.</p>
              </div>
            )}
          </div>
        </section>

        {/* Section 2: Mission & Vision */}
        <section className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {/* Mission */}
          <div className="bg-white p-8 sm:p-10 rounded-3xl border border-primary-100 shadow-xs flex flex-col space-y-4">
            <div className="h-12 w-12 rounded-2xl bg-primary-50 flex items-center justify-center text-primary-700">
              <Award size={24} />
            </div>
            <h3 className="font-display font-bold text-2xl text-primary-950">Our Mission</h3>
            <p className="text-sand-600 leading-relaxed">
              {about.mission}
            </p>
          </div>

          {/* Vision */}
          <div className="bg-white p-8 sm:p-10 rounded-3xl border border-primary-100 shadow-xs flex flex-col space-y-4">
            <div className="h-12 w-12 rounded-2xl bg-accent-50 flex items-center justify-center text-accent-600">
              <Compass size={24} />
            </div>
            <h3 className="font-display font-bold text-2xl text-primary-950">Our Vision</h3>
            <p className="text-sand-600 leading-relaxed">
              {about.vision}
            </p>
          </div>
        </section>

        {/* Section 3: Philosophy */}
        <section className="bg-primary-900 text-white rounded-3xl p-8 sm:p-12 relative overflow-hidden">
          <div className="absolute top-0 right-0 w-64 h-64 bg-white/5 rounded-full blur-2xl"></div>
          <div className="relative z-10 grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
            <div className="lg:col-span-3 flex justify-center lg:justify-start">
              <div className="h-20 w-20 rounded-full bg-white/10 flex items-center justify-center text-accent-400 border border-white/20">
                <Leaf size={40} />
              </div>
            </div>
            <div className="lg:col-span-9 space-y-4 text-center lg:text-left">
              <h3 className="font-display font-bold text-3xl">Ayurvedic Philosophy</h3>
              <p className="text-primary-100 text-base sm:text-lg leading-relaxed">
                {about.philosophy}
              </p>
            </div>
          </div>
        </section>

        {/* Section 4: Quality & Why Choose Us */}
        <section className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Quality Info */}
          <div className="space-y-6">
            <h3 className="font-display font-bold text-2xl text-primary-950 border-b border-primary-100 pb-2">
              Quality Assurance
            </h3>
            <p className="text-sand-600 leading-relaxed">
              {about.qualityInfo}
            </p>
          </div>

          {/* Why Choose Us */}
          <div className="space-y-6">
            <h3 className="font-display font-bold text-2xl text-primary-950 border-b border-primary-100 pb-2">
              Why Choose Us
            </h3>
            <div className="space-y-4">
              {(about.whyChooseUs || '').split('\n').filter(Boolean).map((bullet, idx) => (
                <div key={idx} className="flex gap-3 items-start">
                  <CheckCircle className="text-primary-600 shrink-0 mt-0.5" size={20} />
                  <span className="text-sand-700 text-base">{bullet}</span>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Section 5: Contact Info Summary */}
        {contact && (
          <section className="bg-white p-8 sm:p-12 rounded-3xl border border-primary-100 shadow-sm">
            <div className="text-center mb-10">
              <h3 className="font-display font-bold text-2xl text-primary-950">Our Contact Information</h3>
              <p className="text-sand-500 text-sm mt-1">Get in touch for questions, products or pharmacy orders</p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <div className="flex flex-col items-center text-center space-y-2 p-4 rounded-2xl bg-sand-50/50">
                <MapPin className="text-primary-600" size={28} />
                <h4 className="font-bold text-primary-950">Location</h4>
                <p className="text-sand-600 text-sm">{contact.address}</p>
              </div>

              <div className="flex flex-col items-center text-center space-y-2 p-4 rounded-2xl bg-sand-50/50">
                <Phone className="text-primary-600" size={28} />
                <h4 className="font-bold text-primary-950">Phone & WhatsApp</h4>
                <p className="text-sand-600 text-sm">{contact.phone}</p>
                <p className="text-sand-600 text-sm">WhatsApp: {contact.whatsapp}</p>
              </div>

              <div className="flex flex-col items-center text-center space-y-2 p-4 rounded-2xl bg-sand-50/50">
                <Mail className="text-primary-600" size={28} />
                <h4 className="font-bold text-primary-950">Email Support</h4>
                <p className="text-sand-600 text-sm">{contact.email}</p>
                <p className="text-xs text-sand-400 mt-1">Response time: within 24h</p>
              </div>
            </div>
          </section>
        )}

      </div>
    </div>
  );
}
