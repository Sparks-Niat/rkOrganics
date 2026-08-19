import React, { useState } from 'react';
import { Lock, Mail, Eye, EyeOff, AlertCircle, ShieldAlert } from 'lucide-react';
import { api } from '../utils/api';

export default function AdminLogin({ onLoginSuccess }) {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [showPassword, setShowPassword] = useState(false);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();
    
    if (!email.trim() || !password.trim()) {
      setError('Please fill in all fields');
      return;
    }

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
      setError('Please enter a valid email address');
      return;
    }

    setLoading(true);
    setError('');

    try {
      const data = await api.auth.login({ email, password });
      
      localStorage.setItem('admin_token', data.token);
      localStorage.setItem('admin_user', JSON.stringify(data.admin));
      
      // Dispatch custom event to notify components
      window.dispatchEvent(new Event('auth_change'));
      
      if (onLoginSuccess) {
        onLoginSuccess();
      }
    } catch (err) {
      console.error(err);
      setError(err.message || 'Invalid email or password.');
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="min-h-[80vh] flex items-center justify-center bg-sand-50/50 px-4 py-12">
      <div className="w-full max-w-md space-y-8 bg-white p-8 sm:p-10 rounded-3xl border border-primary-100 shadow-md">
        
        {/* Header Branding */}
        <div className="text-center space-y-3">
          <div className="mx-auto h-16 w-16 rounded-2xl bg-primary-50 border border-primary-100 flex items-center justify-center text-primary-700 shadow-xs">
            <Lock size={30} />
          </div>
          <h2 className="font-display font-bold text-3xl text-primary-950">
            Admin Portal
          </h2>
          <p className="text-sand-500 text-sm">
            Sign in to manage your Ayurvedic Medicines & Website Content
          </p>
        </div>

        {/* Error Alert */}
        {error && (
          <div className="flex items-center gap-3 bg-rose-50 border border-rose-100 text-rose-800 p-4 rounded-xl text-sm animate-in fade-in slide-in-from-top-1">
            <AlertCircle size={20} className="shrink-0" />
            <span>{error}</span>
          </div>
        )}

        {/* Login Form */}
        <form onSubmit={handleSubmit} className="space-y-6">
          <div className="space-y-4">
            
            {/* Email Input */}
            <div className="space-y-2">
              <label htmlFor="email" className="text-sm font-semibold text-primary-900 block">
                Email
              </label>
              <div className="relative">
                <Mail className="absolute left-3.5 top-1/2 -translate-y-1/2 text-sand-400" size={18} />
                <input
                  id="email"
                  type="email"
                  required
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder="admin@example.com"
                  className="w-full pl-10 pr-4 py-3 bg-sand-50 border border-primary-100 rounded-xl focus:outline-hidden focus:border-primary-500 focus:ring-1 focus:ring-primary-500 text-sm transition-all"
                />
              </div>
            </div>

            {/* Password Input */}
            <div className="space-y-2">
              <label htmlFor="password" className="text-sm font-semibold text-primary-900 block">
                Password
              </label>
              <div className="relative">
                <Lock className="absolute left-3.5 top-1/2 -translate-y-1/2 text-sand-400" size={18} />
                <input
                  id="password"
                  type={showPassword ? 'text' : 'password'}
                  required
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  placeholder="••••••••"
                  className="w-full pl-10 pr-12 py-3 bg-sand-50 border border-primary-100 rounded-xl focus:outline-hidden focus:border-primary-500 focus:ring-1 focus:ring-primary-500 text-sm transition-all"
                />
                <button
                  type="button"
                  onClick={() => setShowPassword(!showPassword)}
                  className="absolute right-3.5 top-1/2 -translate-y-1/2 text-sand-400 hover:text-primary-700 focus:outline-none cursor-pointer flex items-center justify-center p-1 rounded-md hover:bg-sand-100 transition-colors"
                  title={showPassword ? 'Hide password' : 'Show password'}
                  aria-label={showPassword ? 'Hide password' : 'Show password'}
                >
                  {showPassword ? <EyeOff size={18} /> : <Eye size={18} />}
                </button>
              </div>
            </div>

          </div>

          {/* Submit Button */}
          <button
            type="submit"
            disabled={loading}
            className="w-full inline-flex items-center justify-center bg-primary-600 hover:bg-primary-700 text-white font-medium py-3 rounded-xl transition-all shadow-sm hover:shadow-md cursor-pointer disabled:bg-sand-200 disabled:text-sand-400 disabled:cursor-not-allowed"
          >
            {loading ? (
              <div className="animate-spin rounded-full h-5 w-5 border-b-2 border-white"></div>
            ) : (
              <span>Sign In</span>
            )}
          </button>
        </form>

        {/* Security Notice */}
        <div className="pt-6 border-t border-primary-50 text-center flex items-center justify-center gap-1.5 text-xs text-sand-400">
          <ShieldAlert size={14} className="text-amber-500" />
          <span>Restricted area. Only authorized staff may sign in.</span>
        </div>

      </div>
    </div>
  );
}
