const BASE_URL = import.meta.env.VITE_API_URL || '';

export async function request(url, options = {}) {
  const token = localStorage.getItem('admin_token');
  
  const headers = {
    'Content-Type': 'application/json',
    ...options.headers,
  };

  if (token) {
    headers['Authorization'] = `Bearer ${token}`;
  }

  const config = {
    ...options,
    headers,
  };

  try {
    const response = await fetch(url, config);
    
    // Check if unauthorized, logout if so
    if (response.status === 401 && !url.includes('/api/auth/login')) {
      localStorage.removeItem('admin_token');
      localStorage.removeItem('admin_user');
      window.dispatchEvent(new Event('auth_change'));
    }

    const data = await response.json();

    if (!response.ok) {
      throw new Error(data.message || 'Something went wrong');
    }

    return data;
  } catch (error) {
    console.error(`API Error on ${url}:`, error.message);
    throw error;
  }
}

export const api = {
  auth: {
    login: (credentials) => request('/api/auth/login', { method: 'POST', body: JSON.stringify(credentials) }),
    me: () => request('/api/auth/me'),
    changePassword: (data) => request('/api/auth/change-password', { method: 'PUT', body: JSON.stringify(data) }),
  },
  settings: {
    get: () => request('/api/settings'),
    update: (data) => request('/api/settings', { method: 'PUT', body: JSON.stringify(data) }),
  },
  about: {
    get: () => request('/api/about'),
    update: (data) => request('/api/about', { method: 'PUT', body: JSON.stringify(data) }),
  },
  contact: {
    get: () => request('/api/contact'),
    update: (data) => request('/api/contact', { method: 'PUT', body: JSON.stringify(data) }),
  },
  whatsapp: {
    get: () => request('/api/whatsapp'),
    update: (data) => request('/api/whatsapp', { method: 'PUT', body: JSON.stringify(data) }),
  },
  categories: {
    getAll: () => request('/api/categories'),
    getById: (id) => request(`/api/categories/${id}`),
    getMedicines: (id) => request(`/api/categories/${id}/medicines`),
    create: (data) => request('/api/categories', { method: 'POST', body: JSON.stringify(data) }),
    update: (id, data) => request(`/api/categories/${id}`, { method: 'PUT', body: JSON.stringify(data) }),
    delete: (id) => request(`/api/categories/${id}`, { method: 'DELETE' }),
  },
  medicines: {
    getAll: () => request('/api/medicines'),
    getBySlug: (slug) => request(`/api/medicines/slug/${slug}`),
    create: (data) => request('/api/medicines', { method: 'POST', body: JSON.stringify(data) }),
    update: (id, data) => request(`/api/medicines/${id}`, { method: 'PUT', body: JSON.stringify(data) }),
    delete: (id) => request(`/api/medicines/${id}`, { method: 'DELETE' }),
  },
  benefits: {
    getAll: () => request('/api/benefits'),
    create: (data) => request('/api/benefits', { method: 'POST', body: JSON.stringify(data) }),
    update: (id, data) => request(`/api/benefits/${id}`, { method: 'PUT', body: JSON.stringify(data) }),
    delete: (id) => request(`/api/benefits/${id}`, { method: 'DELETE' }),
  },
  testimonials: {
    getAll: () => request('/api/testimonials'),
    create: (data) => request('/api/testimonials', { method: 'POST', body: JSON.stringify(data) }),
    update: (id, data) => request(`/api/testimonials/${id}`, { method: 'PUT', body: JSON.stringify(data) }),
    delete: (id) => request(`/api/testimonials/${id}`, { method: 'DELETE' }),
  },
  promotions: {
    getAll: () => request('/api/promotions'),
    create: (data) => request('/api/promotions', { method: 'POST', body: JSON.stringify(data) }),
    update: (id, data) => request(`/api/promotions/${id}`, { method: 'PUT', body: JSON.stringify(data) }),
    delete: (id) => request(`/api/promotions/${id}`, { method: 'DELETE' }),
  },
  navigation: {
    getAll: () => request('/api/navigation'),
    create: (data) => request('/api/navigation', { method: 'POST', body: JSON.stringify(data) }),
    update: (id, data) => request(`/api/navigation/${id}`, { method: 'PUT', body: JSON.stringify(data) }),
    delete: (id) => request(`/api/navigation/${id}`, { method: 'DELETE' }),
  },
  upload: async (file) => {
    const token = localStorage.getItem('admin_token');
    const formData = new FormData();
    formData.append('image', file);

    const headers = {};
    if (token) {
      headers['Authorization'] = `Bearer ${token}`;
    }

    const response = await fetch('/api/upload', {
      method: 'POST',
      headers,
      body: formData,
    });

    const data = await response.json();
    if (!response.ok) {
      throw new Error(data.message || 'Image upload failed');
    }
    return data;
  },
};
