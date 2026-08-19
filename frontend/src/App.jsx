import React, { useState, useEffect } from 'react';
import { BrowserRouter, Routes, Route, Navigate, useLocation } from 'react-router-dom';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import Home from './pages/Home';
import About from './pages/About';
import Medicines from './pages/Medicines';
import ProductDetails from './pages/ProductDetails';
import AdminLogin from './pages/AdminLogin';
import AdminDashboard from './pages/AdminDashboard';
import { SocketProvider } from './context/SocketContext';

// Scroll reveal observer hook component
function ScrollObserver() {
  const location = useLocation();

  useEffect(() => {
    // Reset scroll position to top on route change
    window.scrollTo(0, 0);

    const timer = setTimeout(() => {
      const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
          if (entry.isIntersecting) {
            entry.target.classList.add('revealed');
            observer.unobserve(entry.target);
          }
        });
      }, {
        threshold: 0.05,
        rootMargin: '0px 0px -40px 0px'
      });

      const targets = document.querySelectorAll('section, .scroll-reveal, .stagger-list');
      targets.forEach(t => observer.observe(t));

      // Auto stagger grid list children if grid has stagger-list class
      const staggerGrids = document.querySelectorAll('.stagger-list');
      staggerGrids.forEach(grid => {
        if (grid.classList.contains('revealed')) return;
        // Check if any child is intersecting, then reveal entire grid
        const gridObserver = new IntersectionObserver(([gEntry]) => {
          if (gEntry.isIntersecting) {
            grid.classList.add('revealed');
            gridObserver.unobserve(grid);
          }
        }, { threshold: 0.05 });
        gridObserver.observe(grid);
      });

      return () => {
        targets.forEach(t => observer.unobserve(t));
      };
    }, 100);

    return () => clearTimeout(timer);
  }, [location.pathname]);

  return null;
}

// Helper component to manage conditional layouts for client pages
function CustomerLayout({ children }) {
  return (
    <>
      <Navbar />
      <main className="flex-grow">{children}</main>
      <Footer />
    </>
  );
}

// Admin Route controller
function AdminRoute() {
  const [isAuthenticated, setIsAuthenticated] = useState(!!localStorage.getItem('admin_token'));

  useEffect(() => {
    const handleAuthChange = () => {
      setIsAuthenticated(!!localStorage.getItem('admin_token'));
    };

    window.addEventListener('auth_change', handleAuthChange);
    return () => window.removeEventListener('auth_change', handleAuthChange);
  }, []);

  if (isAuthenticated) {
    return <AdminDashboard onLogout={() => setIsAuthenticated(false)} />;
  } else {
    return (
      <CustomerLayout>
        <AdminLogin onLoginSuccess={() => setIsAuthenticated(true)} />
      </CustomerLayout>
    );
  }
}

export default function App() {
  return (
    <SocketProvider>
      <BrowserRouter>
        <ScrollObserver />
        <div className="flex flex-col min-h-screen">
          <Routes>
            {/* Customer Facing Routes */}
            <Route
              path="/"
              element={
                <CustomerLayout>
                  <Home />
                </CustomerLayout>
              }
            />
            <Route
              path="/about"
              element={
                <CustomerLayout>
                  <About />
                </CustomerLayout>
              }
            />
            <Route
              path="/medicines"
              element={
                <CustomerLayout>
                  <Medicines />
                </CustomerLayout>
              }
            />
            <Route
              path="/medicines/:categorySlug"
              element={
                <CustomerLayout>
                  <Medicines />
                </CustomerLayout>
              }
            />
            <Route
              path="/product/:slug"
              element={
                <CustomerLayout>
                  <ProductDetails />
                </CustomerLayout>
              }
            />

            {/* Admin Unified Route */}
            <Route path="/admin" element={<AdminRoute />} />

            {/* Catch-all Redirect */}
            <Route path="*" element={<Navigate to="/" replace />} />
          </Routes>
        </div>
      </BrowserRouter>
    </SocketProvider>
  );
}
