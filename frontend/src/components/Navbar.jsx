import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Menu, X, Phone, Shield } from 'lucide-react';
import { api } from '../utils/api';

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [settings, setSettings] = useState({ businessName: 'R.K. Ayurveda', logoUrl: '' });
  const [navItems, setNavItems] = useState([]);
  const [isAdmin, setIsAdmin] = useState(false);
  const location = useLocation();

  useEffect(() => {
    // Fetch settings for dynamic logo/name
    api.settings.get()
      .then(data => {
        if (data) setSettings(data);
      })
      .catch(err => console.error('Failed to load settings in nav:', err));

    // Fetch dynamic navigation items
    api.navigation.getAll()
      .then(data => {
        if (data && data.length > 0) {
          setNavItems(data.filter(item => item.isActive));
        } else {
          // Default fallbacks
          setNavItems([
            { id: 'default-home', name: 'Home', url: '/' },
            { id: 'default-about', name: 'About Us', url: '/about' },
            { id: 'default-meds', name: 'Medicines', url: '/medicines' },
          ]);
        }
      })
      .catch(err => {
        console.error('Failed to load navigation items:', err);
        setNavItems([
          { id: 'default-home', name: 'Home', url: '/' },
          { id: 'default-about', name: 'About Us', url: '/about' },
          { id: 'default-meds', name: 'Medicines', url: '/medicines' },
        ]);
      });

    // Check if admin is logged in
    const checkAdmin = () => {
      const token = localStorage.getItem('admin_token');
      setIsAdmin(!!token);
    };

    checkAdmin();
    window.addEventListener('auth_change', checkAdmin);
    return () => window.removeEventListener('auth_change', checkAdmin);
  }, []);

  const isActive = (path) => location.pathname === path;

  return (
    <nav className="sticky top-0 z-50 glass shadow-xs border-b border-primary-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-20">
          {/* Logo & Brand Name */}
          <div className="flex items-center">
            <Link to="/" className="flex items-center gap-3">
              {settings.logoUrl ? (
                <img 
                  src={settings.logoUrl} 
                  alt={settings.businessName} 
                  className="h-12 w-12 object-contain rounded-full border border-primary-200"
                />
              ) : (
                <div className="h-12 w-12 rounded-full bg-primary-500 flex items-center justify-center text-white font-display font-bold text-xl">
                  {settings.businessName.charAt(0)}
                </div>
              )}
              <span className="font-display font-bold text-xl sm:text-2xl text-primary-800 tracking-wide">
                {settings.businessName}
              </span>
            </Link>
          </div>

          {/* Desktop Navigation Links */}
          <div className="hidden md:flex items-center space-x-8">
            {navItems.map(item => (
              <Link 
                key={item.id}
                to={item.url} 
                className={`font-medium transition-colors ${isActive(item.url) ? 'text-primary-600 font-semibold nav-link active' : 'text-sand-600 hover:text-primary-500 nav-link'}`}
              >
                {item.name}
              </Link>
            ))}
            
            {isAdmin && (
              <Link 
                to="/admin" 
                className="flex items-center gap-1 text-accent-600 hover:text-accent-700 font-semibold text-sm bg-accent-50 px-3 py-1.5 rounded-full border border-accent-200"
              >
                <Shield size={16} />
                Admin
              </Link>
            )}
            <Link
              to="/medicines"
              className="inline-flex items-center gap-2 bg-primary-500 text-white px-5 py-2.5 rounded-full font-medium hover:bg-primary-600 transition-all shadow-sm hover:shadow-md transform hover:-translate-y-0.5"
            >
              <Phone size={16} />
              <span>Order Now</span>
            </Link>
          </div>

          {/* Mobile Menu Button */}
          <div className="flex items-center md:hidden gap-3">
            {isAdmin && (
              <Link 
                to="/admin" 
                className="p-2 text-accent-600 bg-accent-50 rounded-full border border-accent-200"
              >
                <Shield size={18} />
              </Link>
            )}
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="p-2 rounded-md text-primary-800 hover:bg-primary-50 focus:outline-hidden transition-colors"
            >
              {isOpen ? <X size={26} /> : <Menu size={26} />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Drawer */}
      {isOpen && (
        <div className="md:hidden glass border-t border-primary-100 animate-in fade-in slide-in-from-top-4 duration-200">
          <div className="px-4 pt-2 pb-6 space-y-3 shadow-inner">
            {navItems.map(item => (
              <Link
                key={item.id}
                to={item.url}
                onClick={() => setIsOpen(false)}
                className={`block px-3 py-2 rounded-md font-medium ${isActive(item.url) ? 'bg-primary-500 text-white' : 'text-sand-700 hover:bg-primary-50 hover:text-primary-600'}`}
              >
                {item.name}
              </Link>
            ))}
            <Link
              to="/medicines"
              onClick={() => setIsOpen(false)}
              className="flex items-center justify-center gap-2 bg-primary-500 text-white py-3 rounded-md font-medium hover:bg-primary-600 transition-colors"
            >
              <Phone size={18} />
              Order Now
            </Link>
          </div>
        </div>
      )}
    </nav>
  );
}
