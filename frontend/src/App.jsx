import React, { useState, useEffect } from 'react';
import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import Home from './pages/Home';
import About from './pages/About';
import Medicines from './pages/Medicines';
import ProductDetails from './pages/ProductDetails';
import AdminLogin from './pages/AdminLogin';
import AdminDashboard from './pages/AdminDashboard';
import { SocketProvider } from './context/SocketContext';

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
