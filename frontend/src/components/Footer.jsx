import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { Phone, Mail, MapPin, Clock, Instagram, Facebook, Twitter } from 'lucide-react';
import { api } from '../utils/api';
import { useSocket } from '../context/SocketContext';

export default function Footer() {
  const [contact, setContact] = useState({
    businessName: 'R.K. Organics',
    address: 'Nandigama, Andhra Pradesh, India',
    phone: '+91 91217 56114',
    whatsapp: '9121756114',
    email: 'info@rkayurveda.com',
    openingHours: '9:00 AM - 6:00 PM (Mon - Sat)',
    instagramUrl: 'https://instagram.com',
    facebookUrl: 'https://facebook.com',
    twitterUrl: 'https://twitter.com',
  });

  const [settings, setSettings] = useState({
    businessName: 'R.K. Ayurveda',
    aboutIntro: 'Dedicated to bringing authentic Ayurvedic health and wellness to your home.',
    footerText: '© 2026 R.K. Ayurveda. All rights reserved.',
  });

  const [lastUpdated, setLastUpdated] = useState(Date.now());
  const { socket } = useSocket();

  const getBustedUrl = (url) => {
    if (!url) return '';
    const separator = url.includes('?') ? '&' : '?';
    return `${url}${separator}v=${lastUpdated}`;
  };

  useEffect(() => {
    if (!socket) return;

    const handleUpdate = (data) => {
      if (data.type === 'settings' || data.type === 'contact') {
        console.log(`Footer data updated (${data.type}), refreshing settings/contact...`);
        api.contact.get()
          .then(res => {
            if (res) setContact(res);
          });
        api.settings.get()
          .then(res => {
            if (res) setSettings(res);
          });
      }
      setLastUpdated(Date.now());
    };

    socket.on('website:data-updated', handleUpdate);

    return () => {
      socket.off('website:data-updated', handleUpdate);
    };
  }, [socket]);

  useEffect(() => {
    // Fetch contact details
    api.contact.get()
      .then(data => {
        if (data) setContact(data);
      })
      .catch(err => console.error('Failed to load contact in footer:', err));

    // Fetch site settings
    api.settings.get()
      .then(data => {
        if (data) setSettings(data);
      })
      .catch(err => console.error('Failed to load settings in footer:', err));
  }, []);

  return (
    <footer className="bg-primary-950 text-sand-100 border-t-4 border-accent-500 pt-16 pb-8">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-10">
          
          {/* Brand/About */}
          <div className="md:col-span-1">
            <div className="flex items-center gap-3 mb-4">
              <img 
                src={settings.logoUrl ? getBustedUrl(settings.logoUrl) : "/logo.jpg"} 
                alt="RK Organics Logo" 
                className="h-14 w-14 object-contain rounded-full border border-primary-900 shadow-xs bg-white p-0.5"
              />
              <span style={{ position: 'absolute', width: '1px', height: '1px', padding: 0, margin: '-1px', overflow: 'hidden', clip: 'rect(0, 0, 0, 0)', border: 0 }}>
                RK Organics
              </span>
            </div>
            <p className="text-primary-200 text-sm leading-relaxed mb-6">
              {settings.aboutIntro}
            </p>
            <div className="flex gap-4">
              {contact.instagramUrl && (
                <a href={contact.instagramUrl} target="_blank" rel="noopener noreferrer" className="h-9 w-9 rounded-full bg-primary-900 flex items-center justify-center text-primary-200 hover:text-white hover:bg-accent-500 transition-colors">
                  <Instagram size={18} />
                </a>
              )}
              {contact.facebookUrl && (
                <a href={contact.facebookUrl} target="_blank" rel="noopener noreferrer" className="h-9 w-9 rounded-full bg-primary-900 flex items-center justify-center text-primary-200 hover:text-white hover:bg-accent-500 transition-colors">
                  <Facebook size={18} />
                </a>
              )}
              {contact.twitterUrl && (
                <a href={contact.twitterUrl} target="_blank" rel="noopener noreferrer" className="h-9 w-9 rounded-full bg-primary-900 flex items-center justify-center text-primary-200 hover:text-white hover:bg-accent-500 transition-colors">
                  <Twitter size={18} />
                </a>
              )}
            </div>
          </div>

          {/* Quick Links */}
          <div className="md:col-span-1 md:pl-8">
            <h4 className="font-display font-semibold text-lg text-white mb-4 border-b border-primary-800 pb-2">
              Quick Links
            </h4>
            <ul className="space-y-3 text-sm">
              <li>
                <Link to="/" className="text-primary-200 hover:text-accent-400 transition-colors">Home Page</Link>
              </li>
              <li>
                <Link to="/about" className="text-primary-200 hover:text-accent-400 transition-colors">About Us</Link>
              </li>
              <li>
                <Link to="/medicines" className="text-primary-200 hover:text-accent-400 transition-colors">View Medicines</Link>
              </li>
            </ul>
          </div>

          {/* Operating Hours */}
          <div className="md:col-span-1">
            <h4 className="font-display font-semibold text-lg text-white mb-4 border-b border-primary-800 pb-2">
              Opening Hours
            </h4>
            <div className="flex gap-3 text-sm text-primary-200">
              <Clock className="shrink-0 text-accent-500" size={18} />
              <div>
                <p className="font-medium text-white">Store Hours</p>
                <p className="mt-1">{contact.openingHours}</p>
                <p className="mt-2 text-xs text-primary-300">WhatsApp orders accepted 24/7</p>
              </div>
            </div>
          </div>

          {/* Contact Details */}
          <div className="md:col-span-1">
            <h4 className="font-display font-semibold text-lg text-white mb-4 border-b border-primary-800 pb-2">
              Get in Touch
            </h4>
            <ul className="space-y-4 text-sm text-primary-200">
              <li className="flex gap-3">
                <MapPin className="shrink-0 text-accent-500" size={18} />
                <span>{contact.address}</span>
              </li>
              <li className="flex gap-3">
                <Phone className="shrink-0 text-accent-500" size={18} />
                <span>{contact.phone}</span>
              </li>
              <li className="flex gap-3">
                <Mail className="shrink-0 text-accent-500" size={18} />
                <span>{contact.email}</span>
              </li>
            </ul>
          </div>

        </div>

        {/* Footer Bottom */}
        <div className="mt-16 pt-8 border-t border-primary-900 text-center text-xs text-primary-300">
          <p>{settings.footerText || `© ${new Date().getFullYear()} ${contact.businessName}. All rights reserved.`}</p>
          <p className="mt-2 text-[10px] text-primary-400">
            Disclaimer: These products are traditional Ayurvedic formulations. Please consult a qualified practitioner before starting any regimen.
          </p>
          <div className="mt-4">
            <Link to="/admin" className="text-[10px] text-primary-400 hover:text-accent-400 hover:underline transition-colors">
              Admin Login
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
