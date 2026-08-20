import React, { useState, useEffect } from 'react';
import { 
  LayoutDashboard, Home as HomeIcon, FileText, Package, List, Phone, 
  MapPin, Settings as SettingsIcon, LogOut, Plus, Edit, Trash2, CheckCircle2, 
  AlertCircle, Upload, Eye, EyeOff, Save, Trash, Image as ImageIcon, ShieldAlert,
  Menu, X, Star, Link2, Sparkles, HelpCircle, Heart, User, Award,
  ArrowUp, ArrowDown, Compass, BookOpen, Briefcase, ShieldCheck, Search
} from 'lucide-react';
import { api } from '../utils/api';
import { useSocket } from '../context/SocketContext';

export default function AdminDashboard({ onLogout }) {
  // Navigation
  const [activeTab, setActiveTab] = useState('overview');
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);
  const [medSubTab, setMedSubTab] = useState('medicines'); // 'medicines' or 'categories'
  const [selectedCategory, setSelectedCategory] = useState(null);
  const [selectedCategoryFilter, setSelectedCategoryFilter] = useState('');
  const [medicineSearchQuery, setMedicineSearchQuery] = useState('');
  const [categorySearchQuery, setCategorySearchQuery] = useState('');

  // Status message state
  const [toast, setToast] = useState({ show: false, message: '', type: 'success' });

  // Data states
  const [medicines, setMedicines] = useState([]);
  const [categories, setCategories] = useState([]);
  const [siteSettings, setSiteSettings] = useState({});
  const [aboutContent, setAboutContent] = useState({});
  const [contactDetails, setContactDetails] = useState({});
  const [whatsappSettings, setWhatsappSettings] = useState({});
  const [benefits, setBenefits] = useState([]);
  const [testimonials, setTestimonials] = useState([]);
  const [promotions, setPromotions] = useState([]);
  const [navigationItems, setNavigationItems] = useState([]);

  // Stats
  const [stats, setStats] = useState({ 
    totalMedicines: 0, 
    activeMedicines: 0, 
    totalCategories: 0,
    totalTestimonials: 0,
    totalBenefits: 0
  });

  // Loading states
  const [loading, setLoading] = useState(true);
  const [dataError, setDataError] = useState(null);
  const [saving, setSaving] = useState(false);

  // Form Modals / Edit states
  const [medicineModal, setMedicineModal] = useState({ open: false, mode: 'add', data: null });
  const [aboutSubTab, setAboutSubTab] = useState('general');
  const [editItem, setEditItem] = useState({ type: null, id: null, form: {} });
  const [categoryModal, setCategoryModal] = useState({ open: false, mode: 'add', data: null });
  const [benefitModal, setBenefitModal] = useState({ open: false, mode: 'add', data: null });
  const [testimonialModal, setTestimonialModal] = useState({ open: false, mode: 'add', data: null });
  const [promotionModal, setPromotionModal] = useState({ open: false, mode: 'add', data: null });
  const [navigationItemModal, setNavigationItemModal] = useState({ open: false, mode: 'add', data: null });
  const [deleteConfirm, setDeleteConfirm] = useState({ open: false, type: '', id: null, name: '' });

  // Form states
  const [medicineForm, setMedicineForm] = useState({
    name: '', teluguName: '', englishName: '', description: '', shortDescription: '', price: '', discountPrice: '', quantity: '', imageUrl: '', 
    availability: 'AVAILABLE', whatsappEnabled: true, displayOrder: 0, categoryIds: [],
    ingredients: '', benefits: '', usageInstructions: '', isFeatured: false, isActive: true
  });
  const [categoryForm, setCategoryForm] = useState({
    name: '', teluguName: '', englishName: '', teluguSubtitle: '', englishSubtitle: '', description: '', imageUrl: '', displayOrder: 0, isEnabled: true
  });
  const [benefitForm, setBenefitForm] = useState({
    title: '', description: '', imageUrl: '', displayOrder: 0, isActive: true
  });
  const [testimonialForm, setTestimonialForm] = useState({
    name: '', content: '', rating: 5, imageUrl: '', displayOrder: 0, isActive: true
  });
  const [promotionForm, setPromotionForm] = useState({
    title: '', description: '', imageUrl: '', buttonText: '', buttonUrl: '', 
    startDate: '', endDate: '', isActive: true
  });
  const [navigationItemForm, setNavigationItemForm] = useState({
    name: '', url: '', displayOrder: 0, isActive: true
  });
  const [passwordForm, setPasswordForm] = useState({
    currentPassword: '', newPassword: '', confirmPassword: ''
  });

  // Load dashboard data
  const loadData = async () => {
    setLoading(true);
    setDataError(null);
    try {
      const [meds, cats, settings, about, contact, wa, benData, testData, promoData, navData] = await Promise.all([
        api.medicines.getAll(),
        api.categories.getAll(),
        api.settings.get(),
        api.about.get(),
        api.contact.get(),
        api.whatsapp.get(),
        api.benefits.getAll(),
        api.testimonials.getAll(),
        api.promotions.getAll(),
        api.navigation.getAll()
      ]);

      setMedicines(meds || []);
      setCategories(cats || []);
      setSiteSettings(settings || {});
      setAboutContent(about || {});
      setContactDetails(contact || {});
      setWhatsappSettings(wa || {});
      setBenefits(benData || []);
      setTestimonials(testData || []);
      setPromotions(promoData || []);
      setNavigationItems(navData || []);

      // Calculate Stats
      const totalMeds = meds ? meds.length : 0;
      const activeMeds = meds ? meds.filter(m => m.availability === 'AVAILABLE' && m.isActive).length : 0;
      const totalCats = cats ? cats.length : 0;
      const totalTests = testData ? testData.length : 0;
      const totalBens = benData ? benData.length : 0;
      
      setStats({
        totalMedicines: totalMeds,
        activeMedicines: activeMeds,
        totalCategories: totalCats,
        totalTestimonials: totalTests,
        totalBenefits: totalBens
      });
    } catch (err) {
      console.error(err);
      setDataError(err.message || 'Error loading dashboard data');
      showToast('Error loading dashboard data', 'error');
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    loadData();
  }, []);

  const { socket } = useSocket();

  useEffect(() => {
    if (!socket) return;

    const handleUpdate = (data) => {
      console.log(`Admin dashboard data updated (${data.type}), refreshing...`);
      // Re-query all dynamic data so stats count, tables, and settings reflect changes
      loadData();
    };

    socket.on('website:data-updated', handleUpdate);

    const handleReconnect = () => {
      console.log('Socket reconnected, refreshing admin dashboard data...');
      loadData();
    };

    window.addEventListener('socket_reconnected', handleReconnect);

    return () => {
      socket.off('website:data-updated', handleUpdate);
      window.removeEventListener('socket_reconnected', handleReconnect);
    };
  }, [socket]);

  const showToast = (message, type = 'success') => {
    setToast({ show: true, message, type });
    setTimeout(() => {
      setToast({ show: false, message: '', type: 'success' });
    }, 4000);
  };

  const handleLogoutClick = () => {
    localStorage.removeItem('admin_token');
    localStorage.removeItem('admin_user');
    window.dispatchEvent(new Event('auth_change'));
    if (onLogout) onLogout();
  };

  // Image Upload Handler
  const handleImageUpload = async (file, type) => {
    if (!file) return;
    setSaving(true);
    try {
      const data = await api.upload(file);
      showToast('Image uploaded successfully', 'success');
      
      if (type === 'logo') {
        setSiteSettings(prev => ({ ...prev, logoUrl: data.imageUrl }));
      } else if (type === 'favicon') {
        setSiteSettings(prev => ({ ...prev, faviconUrl: data.imageUrl }));
      } else if (type === 'hero') {
        setSiteSettings(prev => ({ ...prev, heroImageUrl: data.imageUrl }));
      } else if (type === 'about') {
        setAboutContent(prev => ({ ...prev, imageUrl: data.imageUrl }));
      } else if (type === 'medicine') {
        setMedicineForm(prev => ({ ...prev, imageUrl: data.imageUrl }));
      } else if (type === 'category') {
        setCategoryForm(prev => ({ ...prev, imageUrl: data.imageUrl }));
      } else if (type === 'benefit') {
        setBenefitForm(prev => ({ ...prev, imageUrl: data.imageUrl }));
      } else if (type === 'testimonial') {
        setTestimonialForm(prev => ({ ...prev, imageUrl: data.imageUrl }));
      } else if (type === 'promotion') {
        setPromotionForm(prev => ({ ...prev, imageUrl: data.imageUrl }));
      }
    } catch (err) {
      console.error(err);
      showToast(err.message || 'Image upload failed', 'error');
    } finally {
      setSaving(false);
    }
  };

  // Generic Save handlers
  const handleSaveSettings = async (e) => {
    e.preventDefault();
    setSaving(true);
    try {
      await api.settings.update(siteSettings);
      showToast('Home page settings updated successfully');
    } catch (err) {
      showToast(err.message || 'Error updating settings', 'error');
    } finally {
      setSaving(false);
    }
  };

  const handleSaveAbout = async (e) => {
    e.preventDefault();
    setSaving(true);
    try {
      await api.about.update(aboutContent);
      showToast('About Us content updated successfully');
    } catch (err) {
      showToast(err.message || 'Error updating about content', 'error');
    } finally {
      setSaving(false);
    }
  };
  
  const handleSaveSubItem = async (e) => {
    e.preventDefault();
    const { type, id, form } = editItem;
    setSaving(true);
    try {
      if (id) {
        await api.about[type].update(id, form);
        showToast('Item updated successfully', 'success');
      } else {
        await api.about[type].create(form);
        showToast('Item created successfully', 'success');
      }
      setEditItem({ type: null, id: null, form: {} });
      const updatedAbout = await api.about.get();
      setAboutContent(updatedAbout);
    } catch (err) {
      showToast(err.message || 'Error saving item', 'error');
    } finally {
      setSaving(false);
    }
  };

  const handleDeleteSubItem = async (type, id) => {
    if (!window.confirm('Are you sure you want to delete this item?')) return;
    setSaving(true);
    try {
      await api.about[type].delete(id);
      showToast('Item deleted successfully', 'success');
      const updatedAbout = await api.about.get();
      setAboutContent(updatedAbout);
    } catch (err) {
      showToast(err.message || 'Error deleting item', 'error');
    } finally {
      setSaving(false);
    }
  };

  const handleMoveSubItem = async (type, index, direction, items) => {
    const newItems = [...items];
    if (direction === 'up' && index > 0) {
      const temp = newItems[index].displayOrder;
      newItems[index].displayOrder = newItems[index - 1].displayOrder;
      newItems[index - 1].displayOrder = temp;
    } else if (direction === 'down' && index < newItems.length - 1) {
      const temp = newItems[index].displayOrder;
      newItems[index].displayOrder = newItems[index + 1].displayOrder;
      newItems[index + 1].displayOrder = temp;
    }
    newItems.sort((a, b) => a.displayOrder - b.displayOrder);
    newItems.forEach((s, idx) => { s.displayOrder = idx; });

    try {
      await Promise.all(
        newItems.map(item => api.about[type].update(item.id, { displayOrder: item.displayOrder }))
      );
      showToast('Order updated successfully', 'success');
      const updatedAbout = await api.about.get();
      setAboutContent(updatedAbout);
    } catch (err) {
      showToast(err.message || 'Error updating order', 'error');
    }
  };

  const moveSection = async (index, direction) => {
    const newSections = [...(aboutContent.sections || [])];
    if (direction === 'up' && index > 0) {
      const temp = newSections[index].displayOrder;
      newSections[index].displayOrder = newSections[index - 1].displayOrder;
      newSections[index - 1].displayOrder = temp;
    } else if (direction === 'down' && index < newSections.length - 1) {
      const temp = newSections[index].displayOrder;
      newSections[index].displayOrder = newSections[index + 1].displayOrder;
      newSections[index + 1].displayOrder = temp;
    }
    newSections.sort((a, b) => a.displayOrder - b.displayOrder);
    newSections.forEach((s, idx) => { s.displayOrder = idx; });

    setAboutContent(prev => ({ ...prev, sections: newSections }));

    try {
      await api.about.update({ ...aboutContent, sections: newSections });
      showToast('Section order updated successfully', 'success');
    } catch (err) {
      showToast(err.message || 'Error reordering sections', 'error');
    }
  };

  const handleSaveContact = async (e) => {
    e.preventDefault();
    setSaving(true);
    try {
      await api.contact.update(contactDetails);
      const cleanedWA = (contactDetails.whatsapp || '').replace(/\D/g, '');
      const updatedWASettings = {
        ...whatsappSettings,
        whatsappNumber: cleanedWA || contactDetails.whatsapp
      };
      await api.whatsapp.update(updatedWASettings);
      setWhatsappSettings(updatedWASettings);
      showToast('Contact details updated successfully');
    } catch (err) {
      showToast(err.message || 'Error updating contact details', 'error');
    } finally {
      setSaving(false);
    }
  };

  const handleSaveWhatsApp = async (e) => {
    e.preventDefault();
    setSaving(true);
    try {
      await api.whatsapp.update(whatsappSettings);
      showToast('WhatsApp settings updated successfully');
    } catch (err) {
      showToast(err.message || 'Error updating WhatsApp settings', 'error');
    } finally {
      setSaving(false);
    }
  };

  const handleChangePassword = async (e) => {
    e.preventDefault();
    if (passwordForm.newPassword !== passwordForm.confirmPassword) {
      showToast('New passwords do not match', 'error');
      return;
    }
    setSaving(true);
    try {
      await api.auth.changePassword({
        currentPassword: passwordForm.currentPassword,
        newPassword: passwordForm.newPassword
      });
      showToast('Password changed successfully');
      setPasswordForm({ currentPassword: '', newPassword: '', confirmPassword: '' });
    } catch (err) {
      showToast(err.message || 'Error changing password', 'error');
    } finally {
      setSaving(false);
    }
  };

  // Medicine operations
  const openMedicineModal = (mode, med = null) => {
    if (mode === 'add') {
      setMedicineForm({
        name: '', teluguName: '', englishName: '', description: '', shortDescription: '', price: '', discountPrice: '', quantity: '', imageUrl: '', 
        availability: 'AVAILABLE', whatsappEnabled: true, displayOrder: 0, 
        categoryIds: selectedCategory ? [selectedCategory.id] : [],
        ingredients: '', benefits: '', usageInstructions: '', isFeatured: false, isActive: true
      });
    } else {
      setMedicineForm({
        name: med.name || '',
        teluguName: med.teluguName || '',
        englishName: med.englishName || '',
        description: med.description || '',
        shortDescription: med.shortDescription || '',
        price: med.price.toString(),
        discountPrice: med.discountPrice ? med.discountPrice.toString() : '',
        quantity: med.quantity || '',
        imageUrl: med.imageUrl || '',
        availability: med.availability,
        whatsappEnabled: med.whatsappEnabled,
        displayOrder: med.displayOrder,
        categoryIds: med.categories ? med.categories.map(c => c.id) : [],
        ingredients: med.ingredients || '',
        benefits: med.benefits || '',
        usageInstructions: med.usageInstructions || '',
        isFeatured: !!med.isFeatured,
        isActive: !!med.isActive
      });
    }
    setMedicineModal({ open: true, mode, data: med });
  };

  const handleSaveMedicine = async (e) => {
    e.preventDefault();
    if (!medicineForm.englishName || !medicineForm.price || medicineForm.categoryIds.length === 0) {
      showToast('English Medicine Name, price, and at least one category are required', 'error');
      return;
    }
    setSaving(true);
    try {
      const payload = {
        ...medicineForm,
        name: medicineForm.englishName || medicineForm.teluguName,
        discountPrice: medicineForm.discountPrice ? parseFloat(medicineForm.discountPrice) : null
      };

      if (medicineModal.mode === 'add') {
        await api.medicines.create(payload);
        showToast('Medicine added successfully');
      } else {
        await api.medicines.update(medicineModal.data.id, payload);
        showToast('Medicine updated successfully');
      }
      setMedicineModal({ open: false, mode: 'add', data: null });
      loadData();
    } catch (err) {
      showToast(err.message || 'Error saving medicine', 'error');
    } finally {
      setSaving(false);
    }
  };

  const startDelete = (type, id, name) => {
    if (type === 'category') {
      const hasMedicines = medicines.some(m => m.categories?.some(c => c.id === id));
      if (hasMedicines) {
        showToast('This category contains medicines. Please move or remove the medicines before deleting the category.', 'error');
        return;
      }
    }
    setDeleteConfirm({ open: true, type, id, name });
  };

  const confirmDelete = async () => {
    setSaving(true);
    try {
      if (deleteConfirm.type === 'medicine') {
        await api.medicines.delete(deleteConfirm.id);
        showToast('Medicine deleted successfully');
      } else if (deleteConfirm.type === 'category') {
        await api.categories.delete(deleteConfirm.id);
        showToast('Category deleted successfully');
      } else if (deleteConfirm.type === 'benefit') {
        await api.benefits.delete(deleteConfirm.id);
        showToast('Benefit deleted successfully');
      } else if (deleteConfirm.type === 'testimonial') {
        await api.testimonials.delete(deleteConfirm.id);
        showToast('Testimonial deleted successfully');
      } else if (deleteConfirm.type === 'promotion') {
        await api.promotions.delete(deleteConfirm.id);
        showToast('Promotion deleted successfully');
      } else if (deleteConfirm.type === 'navigation') {
        await api.navigation.delete(deleteConfirm.id);
        showToast('Navigation link deleted successfully');
      }
      setDeleteConfirm({ open: false, type: '', id: null, name: '' });
      loadData();
    } catch (err) {
      showToast(err.message || 'Error deleting item', 'error');
    } finally {
      setSaving(false);
    }
  };

  // Category operations
  const openCategoryModal = (mode, cat = null) => {
    if (mode === 'add') {
      setCategoryForm({ name: '', teluguName: '', englishName: '', teluguSubtitle: '', englishSubtitle: '', description: '', imageUrl: '', displayOrder: 0, isEnabled: true });
    } else {
      setCategoryForm({
        name: cat.name || '',
        teluguName: cat.teluguName || '',
        englishName: cat.englishName || '',
        teluguSubtitle: cat.teluguSubtitle || '',
        englishSubtitle: cat.englishSubtitle || '',
        description: cat.description || '',
        imageUrl: cat.imageUrl || '',
        displayOrder: cat.displayOrder,
        isEnabled: cat.isEnabled
      });
    }
    setCategoryModal({ open: true, mode, data: cat });
  };

  const handleSaveCategory = async (e) => {
    e.preventDefault();
    if (!categoryForm.teluguName || !categoryForm.englishName) {
      showToast('Telugu and English category names are required', 'error');
      return;
    }
    setSaving(true);
    try {
      const payload = {
        ...categoryForm,
        name: categoryForm.englishName
      };

      if (categoryModal.mode === 'add') {
        await api.categories.create(payload);
        showToast('Category created successfully');
      } else {
        await api.categories.update(categoryModal.data.id, payload);
        showToast('Category updated successfully');
      }
      setCategoryModal({ open: false, mode: 'add', data: null });
      loadData();
    } catch (err) {
      showToast(err.message || 'Error saving category', 'error');
    } finally {
      setSaving(false);
    }
  };

  // Benefit CRUD operations
  const openBenefitModal = (mode, ben = null) => {
    if (mode === 'add') {
      setBenefitForm({ title: '', description: '', imageUrl: '', displayOrder: 0, isActive: true });
    } else {
      setBenefitForm({
        title: ben.title,
        description: ben.description,
        imageUrl: ben.imageUrl || '',
        displayOrder: ben.displayOrder,
        isActive: ben.isActive
      });
    }
    setBenefitModal({ open: true, mode, data: ben });
  };

  const handleSaveBenefit = async (e) => {
    e.preventDefault();
    if (!benefitForm.title || !benefitForm.description) {
      showToast('Title and description are required', 'error');
      return;
    }
    setSaving(true);
    try {
      if (benefitModal.mode === 'add') {
        await api.benefits.create(benefitForm);
        showToast('Benefit added successfully');
      } else {
        await api.benefits.update(benefitModal.data.id, benefitForm);
        showToast('Benefit updated successfully');
      }
      setBenefitModal({ open: false, mode: 'add', data: null });
      loadData();
    } catch (err) {
      showToast(err.message || 'Error saving benefit', 'error');
    } finally {
      setSaving(false);
    }
  };

  // Testimonial CRUD operations
  const openTestimonialModal = (mode, test = null) => {
    if (mode === 'add') {
      setTestimonialForm({ name: '', content: '', rating: 5, imageUrl: '', displayOrder: 0, isActive: true });
    } else {
      setTestimonialForm({
        name: test.name,
        content: test.content,
        rating: test.rating,
        imageUrl: test.imageUrl || '',
        displayOrder: test.displayOrder,
        isActive: test.isActive
      });
    }
    setTestimonialModal({ open: true, mode, data: test });
  };

  const handleSaveTestimonial = async (e) => {
    e.preventDefault();
    if (!testimonialForm.name || !testimonialForm.content) {
      showToast('Name and content are required', 'error');
      return;
    }
    setSaving(true);
    try {
      if (testimonialModal.mode === 'add') {
        await api.testimonials.create(testimonialForm);
        showToast('Testimonial added successfully');
      } else {
        await api.testimonials.update(testimonialModal.data.id, testimonialForm);
        showToast('Testimonial updated successfully');
      }
      setTestimonialModal({ open: false, mode: 'add', data: null });
      loadData();
    } catch (err) {
      showToast(err.message || 'Error saving testimonial', 'error');
    } finally {
      setSaving(false);
    }
  };

  // Promotion CRUD operations
  const openPromotionModal = (mode, promo = null) => {
    const formatDate = (isoString) => {
      if (!isoString) return '';
      return isoString.split('T')[0];
    };

    if (mode === 'add') {
      setPromotionForm({ title: '', description: '', imageUrl: '', buttonText: '', buttonUrl: '', startDate: '', endDate: '', isActive: true });
    } else {
      setPromotionForm({
        title: promo.title,
        description: promo.description,
        imageUrl: promo.imageUrl || '',
        buttonText: promo.buttonText || '',
        buttonUrl: promo.buttonUrl || '',
        startDate: formatDate(promo.startDate),
        endDate: formatDate(promo.endDate),
        isActive: promo.isActive
      });
    }
    setPromotionModal({ open: true, mode, data: promo });
  };

  const handleSavePromotion = async (e) => {
    e.preventDefault();
    if (!promotionForm.title || !promotionForm.description) {
      showToast('Title and description are required', 'error');
      return;
    }
    setSaving(true);
    try {
      if (promotionModal.mode === 'add') {
        await api.promotions.create(promotionForm);
        showToast('Promotion added successfully');
      } else {
        await api.promotions.update(promotionModal.data.id, promotionForm);
        showToast('Promotion updated successfully');
      }
      setPromotionModal({ open: false, mode: 'add', data: null });
      loadData();
    } catch (err) {
      showToast(err.message || 'Error saving promotion', 'error');
    } finally {
      setSaving(false);
    }
  };

  // Navigation Items CRUD operations
  const openNavigationItemModal = (mode, nav = null) => {
    if (mode === 'add') {
      setNavigationItemForm({ name: '', url: '', displayOrder: 0, isActive: true });
    } else {
      setNavigationItemForm({
        name: nav.name,
        url: nav.url,
        displayOrder: nav.displayOrder,
        isActive: nav.isActive
      });
    }
    setNavigationItemModal({ open: true, mode, data: nav });
  };

  const handleSaveNavigationItem = async (e) => {
    e.preventDefault();
    if (!navigationItemForm.name || !navigationItemForm.url) {
      showToast('Menu name and URL path are required', 'error');
      return;
    }
    setSaving(true);
    try {
      if (navigationItemModal.mode === 'add') {
        await api.navigation.create(navigationItemForm);
        showToast('Navigation menu link added');
      } else {
        await api.navigation.update(navigationItemModal.data.id, navigationItemForm);
        showToast('Navigation menu link updated');
      }
      setNavigationItemModal({ open: false, mode: 'add', data: null });
      loadData();
    } catch (err) {
      showToast(err.message || 'Error saving navigation item', 'error');
    } finally {
      setSaving(false);
    }
  };

  return (
    <div className="min-h-screen bg-sand-100 flex flex-col md:flex-row relative">
      
      {/* Toast Alert */}
      {toast.show && (
        <div className={`fixed top-5 right-5 z-55 flex items-center gap-3 px-5 py-4 rounded-xl shadow-lg border ${
          toast.type === 'error' ? 'bg-rose-50 border-rose-100 text-rose-800' : 'bg-emerald-50 border-emerald-100 text-emerald-800'
        }`}>
          {toast.type === 'error' ? <AlertCircle size={20} /> : <CheckCircle2 size={20} />}
          <span className="font-medium text-sm">{toast.message}</span>
        </div>
      )}

      {/* Mobile Sidebar Header */}
      <div className="md:hidden bg-primary-950 text-white px-4 py-4 flex justify-between items-center shadow-md">
        <span className="font-display font-bold text-lg">{siteSettings.businessName} Admin</span>
        <button 
          onClick={() => setIsSidebarOpen(!isSidebarOpen)}
          className="p-1 rounded-md hover:bg-primary-900 transition-colors"
        >
          {isSidebarOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Sidebar Navigation */}
      <aside className={`w-64 bg-primary-950 text-primary-100 shrink-0 flex flex-col justify-between py-6 z-40 transition-transform duration-300 fixed md:relative inset-y-0 left-0 md:translate-x-0 ${
        isSidebarOpen ? 'translate-x-0' : '-translate-x-full'
      }`}>
        <div className="space-y-8 max-h-[90vh] overflow-y-auto scrollbar-thin">
          {/* Logo Branding */}
          <div className="px-6 flex items-center gap-3 border-b border-primary-900 pb-6">
            <div className="h-10 w-10 rounded-full overflow-hidden border border-primary-800 bg-white shrink-0 flex items-center justify-center p-0.5">
              <img src="/logo.jpg" alt="Logo" className="h-full w-full object-contain" />
            </div>
            <div>
              <h2 className="font-display font-bold text-base text-white truncate max-w-[140px]">
                {siteSettings.businessName}
              </h2>
              <span className="text-xs text-primary-400">Admin Control</span>
            </div>
          </div>

          {/* Navigation links */}
          <nav className="space-y-1.5 px-3">
            {[
              { id: 'overview', label: 'Dashboard', icon: LayoutDashboard },
              { id: 'medicines', label: '📦 Medicine Management', icon: Package },
              { id: 'website_images', label: '🖼 Website Images', icon: ImageIcon },
              { id: 'homepage', label: '🏠 Home Page', icon: HomeIcon },
              { id: 'contact', label: '📞 Contact Information', icon: Phone },
              { id: 'logo', label: '🔰 Logo', icon: Award }
            ].map(tab => {
              const Icon = tab.icon;
              const active = activeTab === tab.id;
              return (
                <button
                  key={tab.id}
                  onClick={() => {
                    setActiveTab(tab.id);
                    setIsSidebarOpen(false);
                  }}
                  className={`w-full flex items-center gap-3 px-4 py-3 rounded-lg text-sm font-medium transition-colors cursor-pointer ${
                    active 
                      ? 'bg-primary-900 text-white font-semibold border-l-4 border-accent-500' 
                      : 'text-primary-300 hover:bg-primary-900 hover:text-white'
                  }`}
                >
                  <Icon size={18} />
                  <span>{tab.label}</span>
                </button>
              );
            })}
          </nav>
        </div>

        {/* Logout Button */}
        <div className="px-3 border-t border-primary-900 pt-6">
          <button
            onClick={handleLogoutClick}
            className="w-full flex items-center gap-3 px-4 py-3 rounded-lg text-sm font-medium text-rose-300 hover:bg-rose-955/30 hover:text-rose-100 transition-colors cursor-pointer"
          >
            <LogOut size={18} />
            <span>Logout</span>
          </button>
        </div>
      </aside>

      {/* Main Panel Content Area */}
      <main className="flex-grow p-4 sm:p-8 md:p-10 overflow-y-auto max-w-7xl">
        {dataError && (dataError.toLowerCase().includes('unauthorized') || dataError.toLowerCase().includes('token') || dataError.toLowerCase().includes('login') || dataError.toLowerCase().includes('401') || !localStorage.getItem('admin_token')) ? (
          <div className="flex flex-col items-center justify-center min-h-[60vh] gap-4 bg-white p-8 rounded-3xl border border-rose-100 shadow-xs max-w-md mx-auto text-center mt-12">
            <ShieldAlert className="text-rose-500 h-16 w-16" />
            <h2 className="font-display font-bold text-xl text-primary-955">Your session has expired</h2>
            <p className="text-sand-500 text-sm">Please log in again to manage the medicines store.</p>
            <button
              onClick={() => handleLogoutClick()}
              className="mt-2 inline-flex items-center gap-2 bg-primary-600 hover:bg-primary-700 text-white font-medium px-6 py-3 rounded-xl cursor-pointer shadow-xs text-sm font-bold transition-all animate-pulse"
            >
              <span>Login Again</span>
            </button>
          </div>
        ) : dataError ? (
          <div className="flex flex-col items-center justify-center min-h-[60vh] gap-4 bg-white p-8 rounded-3xl border border-primary-100 shadow-xs max-w-md mx-auto text-center mt-12">
            <AlertCircle className="text-amber-500 h-16 w-16" />
            <h2 className="font-display font-bold text-xl text-primary-955">Unable to load data</h2>
            <p className="text-sand-500 text-sm font-semibold text-rose-600">Error: {dataError}</p>
            <button
              onClick={() => loadData()}
              className="mt-2 inline-flex items-center gap-2 bg-primary-600 hover:bg-primary-700 text-white font-medium px-6 py-3 rounded-xl cursor-pointer shadow-xs text-sm font-bold transition-all"
            >
              <span>Retry Loading</span>
            </button>
          </div>
        ) : loading ? (
          <div className="space-y-6">
            <div className="h-10 w-48 bg-sand-200 rounded-lg animate-pulse"></div>
            <div className="flex flex-wrap gap-4">
              <div className="h-12 w-full max-w-md bg-sand-200 rounded-xl animate-pulse"></div>
              <div className="h-12 w-full max-w-xs bg-sand-200 rounded-xl animate-pulse"></div>
            </div>
            <div className="space-y-3">
              {[1, 2, 3, 4, 5].map((i) => (
                <div key={i} className="h-16 bg-white border border-primary-50 rounded-xl animate-pulse flex items-center justify-between px-6">
                  <div className="flex items-center gap-4">
                    <div className="h-10 w-10 bg-sand-200 rounded-lg animate-pulse"></div>
                    <div className="space-y-1.5">
                      <div className="h-3.5 w-32 bg-sand-200 rounded animate-pulse"></div>
                      <div className="h-3 w-20 bg-sand-200 rounded animate-pulse"></div>
                    </div>
                  </div>
                  <div className="h-3.5 w-16 bg-sand-200 rounded animate-pulse"></div>
                </div>
              ))}
            </div>
          </div>
        ) : (
          <div className="space-y-8 animate-in fade-in duration-200">
            {/* Overview / Stats Tab */}
            {activeTab === 'overview' && (
              <div className="space-y-8">
                <div>
                  <h1 className="font-display font-bold text-3xl text-primary-955">Dashboard Overview</h1>
                  <p className="text-sand-500 text-sm">Key details of your Ayurvedic Medicines store</p>
                </div>

                {/* Cards grid */}
                <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
                  <div className="bg-white p-6 rounded-2xl border border-primary-100 shadow-xs flex justify-between items-center">
                    <div>
                      <span className="text-xs font-semibold text-sand-500 uppercase tracking-wider text-[10px]">Total Categories</span>
                      <h3 className="font-display font-bold text-3xl text-accent-700 mt-1">{stats.totalCategories}</h3>
                    </div>
                    <div className="h-12 w-12 rounded-xl bg-accent-50 flex items-center justify-center text-accent-700">
                      <List size={24} />
                    </div>
                  </div>

                  <div className="bg-white p-6 rounded-2xl border border-primary-100 shadow-xs flex justify-between items-center">
                    <div>
                      <span className="text-xs font-semibold text-sand-500 uppercase tracking-wider text-[10px]">Total Medicines</span>
                      <h3 className="font-display font-bold text-3xl text-primary-955 mt-1">{stats.totalMedicines}</h3>
                    </div>
                    <div className="h-12 w-12 rounded-xl bg-primary-50 flex items-center justify-center text-primary-700">
                      <Package size={24} />
                    </div>
                  </div>

                  <div className="bg-white p-6 rounded-2xl border border-primary-100 shadow-xs flex justify-between items-center">
                    <div>
                      <span className="text-xs font-semibold text-sand-500 uppercase tracking-wider text-[10px]">Website Status</span>
                      <div className="flex items-center gap-2 mt-2">
                        <span className="h-3.5 w-3.5 rounded-full bg-emerald-500 animate-pulse"></span>
                        <span className="font-display font-bold text-xl text-emerald-700">Online</span>
                      </div>
                    </div>
                    <div className="h-12 w-12 rounded-xl bg-emerald-50 flex items-center justify-center text-emerald-700">
                      <CheckCircle2 size={24} />
                    </div>
                  </div>
                </div>

                {/* Quick actions & Recently Added */}
                <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
                  
                  {/* Recent medicines */}
                  <div className="lg:col-span-8 bg-white p-6 sm:p-8 rounded-2xl border border-primary-100 shadow-xs space-y-4">
                    <h3 className="font-display font-bold text-lg text-primary-955">Recently Added Medicines</h3>
                    <div className="overflow-x-auto">
                      <table className="w-full text-left text-sm border-collapse">
                        <thead>
                          <tr className="border-b border-primary-100 text-sand-500 font-semibold">
                            <th className="py-3 px-4">English Name</th>
                            <th className="py-3 px-4">Telugu Name</th>
                            <th className="py-3 px-4">Category</th>
                            <th className="py-3 px-4">Price</th>
                            <th className="py-3 px-4">Status</th>
                          </tr>
                        </thead>
                        <tbody>
                          {medicines.slice(0, 5).map((med) => (
                            <tr key={med.id} className="border-b border-primary-50 hover:bg-sand-50/50">
                              <td className="py-3.5 px-4 font-semibold text-primary-955">{med.englishName || '-'}</td>
                              <td className="py-3.5 px-4 text-sand-600 font-medium">{med.teluguName}</td>
                              <td className="py-3.5 px-4 text-sand-600 text-xs">
                                {med.categories?.map(c => c.englishName).join(', ') || '-'}
                              </td>
                              <td className="py-3.5 px-4 font-medium text-primary-800">
                                {med.price && med.price > 0 ? `₹${med.price}` : 'Price not available'}
                              </td>
                              <td className="py-3.5 px-4">
                                <span className={`inline-block px-2 py-0.5 rounded-full text-xs font-bold ${
                                  med.availability === 'AVAILABLE' ? 'bg-emerald-50 text-emerald-700' :
                                  'bg-rose-50 text-rose-700'
                                }`}>
                                  {med.availability === 'AVAILABLE' ? 'Available' : 'Out of Stock'}
                                </span>
                              </td>
                            </tr>
                          ))}
                          {medicines.length === 0 && (
                            <tr>
                              <td colSpan="5" className="text-center py-8 text-sand-400">No medicines added yet.</td>
                            </tr>
                          )}
                        </tbody>
                      </table>
                    </div>
                  </div>

                  {/* Quick actions box */}
                  <div className="lg:col-span-4 bg-white p-6 sm:p-8 rounded-2xl border border-primary-100 shadow-xs space-y-6">
                    <h3 className="font-display font-bold text-lg text-primary-955">Quick Actions</h3>
                    
                    <div className="grid grid-cols-1 gap-3">
                      <button 
                        onClick={() => openCategoryModal('add')}
                        className="w-full flex items-center justify-between p-3.5 bg-sand-50 hover:bg-primary-50 rounded-xl border border-primary-100 hover:border-primary-200 text-left text-sm font-medium text-primary-955 transition-all cursor-pointer"
                      >
                        <span>Create New Category</span>
                        <Plus size={16} className="text-primary-600" />
                      </button>
                      <button 
                        onClick={() => openMedicineModal('add')}
                        className="w-full flex items-center justify-between p-3.5 bg-sand-50 hover:bg-primary-50 rounded-xl border border-primary-100 hover:border-primary-200 text-left text-sm font-medium text-primary-955 transition-all cursor-pointer"
                      >
                        <span>Add New Medicine</span>
                        <Plus size={16} className="text-primary-600" />
                      </button>
                    </div>
                  </div>

                </div>
              </div>
            )}

            {/* Homepage Management Tab */}
            {activeTab === 'homepage' && (
              <form onSubmit={handleSaveSettings} className="space-y-6 bg-white p-6 sm:p-10 rounded-3xl border border-primary-100 shadow-xs">
                <div>
                  <h1 className="font-display font-bold text-2xl text-primary-955">Home Page Content</h1>
                  <p className="text-sand-500 text-sm">Manage Home Page texts, taglines, and buttons</p>
                </div>

                {/* Hero section visible status */}
                <div className="flex items-center gap-3 bg-sand-50 p-4 rounded-xl border border-primary-100">
                  <input
                    type="checkbox"
                    id="hero-visible"
                    checked={!!siteSettings.heroVisible}
                    onChange={(e) => setSiteSettings({ ...siteSettings, heroVisible: e.target.checked })}
                    className="h-4.5 w-4.5 text-primary-600 focus:ring-primary-500 rounded border-primary-300"
                  />
                  <label htmlFor="hero-visible" className="text-sm font-semibold text-primary-955 select-none">
                    Make Hero Banner visible on the home page
                  </label>
                </div>

                <div className="space-y-4 pt-4">
                  <div className="space-y-2">
                    <label className="text-sm font-bold text-primary-900 block">Business Name</label>
                    <input
                      type="text"
                      value={siteSettings.businessName || ''}
                      onChange={(e) => setSiteSettings({ ...siteSettings, businessName: e.target.value })}
                      className="w-full p-3 bg-sand-50 border border-primary-100 rounded-xl text-sm"
                      required
                    />
                  </div>
                  <div className="space-y-2">
                    <label className="text-sm font-bold text-primary-900 block">Hero Title Header</label>
                    <input
                      type="text"
                      value={siteSettings.heroTitle || ''}
                      onChange={(e) => setSiteSettings({ ...siteSettings, heroTitle: e.target.value })}
                      className="w-full p-3 bg-sand-50 border border-primary-100 rounded-xl text-sm"
                      required
                    />
                  </div>
                  <div className="space-y-2">
                    <label className="text-sm font-bold text-primary-900 block">Hero Tagline Subtitle</label>
                    <textarea
                      value={siteSettings.heroSubtitle || ''}
                      onChange={(e) => setSiteSettings({ ...siteSettings, heroSubtitle: e.target.value })}
                      rows="3"
                      className="w-full p-3 bg-sand-50 border border-primary-100 rounded-xl text-sm"
                      required
                    ></textarea>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div className="space-y-2">
                      <label className="text-sm font-bold text-primary-900 block">Hero Button Text</label>
                      <input
                        type="text"
                        value={siteSettings.heroButtonText || ''}
                        onChange={(e) => setSiteSettings({ ...siteSettings, heroButtonText: e.target.value })}
                        className="w-full p-3 bg-sand-50 border border-primary-100 rounded-xl text-sm"
                        required
                      />
                    </div>
                    <div className="space-y-2">
                      <label className="text-sm font-bold text-primary-900 block">Hero Button Link</label>
                      <input
                        type="text"
                        value={siteSettings.heroButtonLink || ''}
                        onChange={(e) => setSiteSettings({ ...siteSettings, heroButtonLink: e.target.value })}
                        className="w-full p-3 bg-sand-50 border border-primary-100 rounded-xl text-sm"
                        required
                      />
                    </div>
                  </div>

                  <div className="space-y-2">
                    <label className="text-sm font-bold text-primary-900 block">About Welcome Intro Text</label>
                    <textarea
                      value={siteSettings.aboutIntro || ''}
                      onChange={(e) => setSiteSettings({ ...siteSettings, aboutIntro: e.target.value })}
                      rows="3"
                      className="w-full p-3 bg-sand-50 border border-primary-100 rounded-xl text-sm"
                      required
                    ></textarea>
                  </div>

                  <div className="space-y-2">
                    <label className="text-sm font-bold text-primary-900 block">Footer Copyright Text</label>
                    <input
                      type="text"
                      value={siteSettings.footerText || ''}
                      onChange={(e) => setSiteSettings({ ...siteSettings, footerText: e.target.value })}
                      className="w-full p-3 bg-sand-50 border border-primary-100 rounded-xl text-sm"
                      required
                    />
                  </div>
                </div>

                <div className="pt-6 border-t border-primary-50 flex justify-end">
                  <button
                    type="submit"
                    disabled={saving}
                    className="inline-flex items-center gap-2 bg-primary-600 hover:bg-primary-700 text-white font-medium px-6 py-3 rounded-xl cursor-pointer"
                  >
                    <Save size={18} />
                    <span>Save Changes</span>
                  </button>
                </div>
              </form>
            )}

            {/* Website Images Management Tab */}
            {activeTab === 'website_images' && (
              <form onSubmit={async (e) => {
                e.preventDefault();
                setSaving(true);
                try {
                  await Promise.all([
                    api.settings.update(siteSettings),
                    api.about.update(aboutContent)
                  ]);
                  showToast('Website images updated successfully');
                  loadData();
                } catch (err) {
                  showToast(err.message || 'Error saving images', 'error');
                } finally {
                  setSaving(false);
                }
              }} className="space-y-6 bg-white p-6 sm:p-10 rounded-3xl border border-primary-100 shadow-xs">
                <div>
                  <h1 className="font-display font-bold text-2xl text-primary-955">Website Images</h1>
                  <p className="text-sand-500 text-sm">Replace key images across the Home Page and About Us page</p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-8 pt-4">
                  {/* Home Hero Image */}
                  <div className="space-y-3 p-4 bg-sand-50 rounded-2xl border border-primary-50">
                    <label className="text-sm font-bold text-primary-900 block">Home Page Hero Image</label>
                    <div className="h-48 w-full rounded-xl bg-white border border-primary-100 flex items-center justify-center overflow-hidden">
                      {siteSettings.heroImageUrl ? (
                        <img src={siteSettings.heroImageUrl} alt="Hero Banner" className="h-full w-full object-cover" />
                      ) : (
                        <ImageIcon className="text-sand-300" size={32} />
                      )}
                    </div>
                    <div className="flex items-center gap-3">
                      <input
                        type="file"
                        accept="image/*"
                        onChange={(e) => handleImageUpload(e.target.files[0], 'hero')}
                        className="hidden"
                        id="hero-image-replace"
                      />
                      <label htmlFor="hero-image-replace" className="inline-flex items-center gap-2 bg-primary-600 hover:bg-primary-700 text-white text-xs font-semibold px-4 py-2.5 rounded-xl cursor-pointer">
                        <Upload size={14} />
                        <span>Replace Image</span>
                      </label>
                      {siteSettings.heroImageUrl && (
                        <button
                          type="button"
                          onClick={() => setSiteSettings({ ...siteSettings, heroImageUrl: '' })}
                          className="text-xs font-semibold text-rose-600 hover:underline"
                        >
                          Remove
                        </button>
                      )}
                    </div>
                  </div>

                  {/* About Us Our Story Image */}
                  <div className="space-y-3 p-4 bg-sand-50 rounded-2xl border border-primary-50">
                    <label className="text-sm font-bold text-primary-900 block">About Us / Our Story Image</label>
                    <div className="h-48 w-full rounded-xl bg-white border border-primary-100 flex items-center justify-center overflow-hidden">
                      {aboutContent.storyImageUrl ? (
                        <img src={aboutContent.storyImageUrl} alt="Our Story" className="h-full w-full object-cover" />
                      ) : (
                        <ImageIcon className="text-sand-300" size={32} />
                      )}
                    </div>
                    <div className="flex items-center gap-3">
                      <input
                        type="file"
                        accept="image/*"
                        onChange={async (e) => {
                          const file = e.target.files[0];
                          if (!file) return;
                          setSaving(true);
                          try {
                            const data = await api.upload(file);
                            setAboutContent(prev => ({ ...prev, storyImageUrl: data.imageUrl }));
                            showToast('Story image uploaded successfully', 'success');
                          } catch (err) {
                            showToast('Upload failed', 'error');
                          } finally {
                            setSaving(false);
                          }
                        }}
                        className="hidden"
                        id="story-image-replace"
                      />
                      <label htmlFor="story-image-replace" className="inline-flex items-center gap-2 bg-primary-600 hover:bg-primary-700 text-white text-xs font-semibold px-4 py-2.5 rounded-xl cursor-pointer">
                        <Upload size={14} />
                        <span>Replace Image</span>
                      </label>
                      {aboutContent.storyImageUrl && (
                        <button
                          type="button"
                          onClick={() => setAboutContent({ ...aboutContent, storyImageUrl: '' })}
                          className="text-xs font-semibold text-rose-600 hover:underline"
                        >
                          Remove
                        </button>
                      )}
                    </div>
                  </div>
                </div>

                <div className="pt-6 border-t border-primary-50 flex justify-end">
                  <button
                    type="submit"
                    disabled={saving}
                    className="inline-flex items-center gap-2 bg-primary-600 hover:bg-primary-700 text-white font-medium px-6 py-3 rounded-xl cursor-pointer"
                  >
                    <Save size={18} />
                    <span>Save Changes</span>
                  </button>
                </div>
              </form>
            )}

            {/* Logo Management Tab */}
            {activeTab === 'logo' && (
              <form onSubmit={async (e) => {
                e.preventDefault();
                setSaving(true);
                try {
                  await api.settings.update(siteSettings);
                  showToast('Logo settings updated successfully');
                  loadData();
                } catch (err) {
                  showToast(err.message || 'Error saving logo', 'error');
                } finally {
                  setSaving(false);
                }
              }} className="space-y-6 bg-white p-6 sm:p-10 rounded-3xl border border-primary-100 shadow-xs max-w-xl">
                <div>
                  <h1 className="font-display font-bold text-2xl text-primary-955">Website Logo</h1>
                  <p className="text-sand-500 text-sm">Replace the brand logo displayed in the header and footer</p>
                </div>

                <div className="space-y-4 pt-4">
                  <label className="text-sm font-bold text-primary-900 block">Current Logo</label>
                  <div className="h-32 w-32 rounded-full bg-sand-50 border border-primary-200 flex items-center justify-center overflow-hidden p-1 shadow-sm">
                    {siteSettings.logoUrl ? (
                      <img src={siteSettings.logoUrl} alt="Logo" className="h-full w-full object-contain rounded-full" />
                    ) : (
                      <ImageIcon className="text-sand-400" size={32} />
                    )}
                  </div>
                  
                  <div className="flex items-center gap-3 pt-2">
                    <input
                      type="file"
                      accept="image/*"
                      onChange={(e) => handleImageUpload(e.target.files[0], 'logo')}
                      className="hidden"
                      id="logo-upload-tab"
                    />
                    <label htmlFor="logo-upload-tab" className="inline-flex items-center gap-2 bg-primary-600 hover:bg-primary-700 text-white text-xs font-semibold px-4 py-2.5 rounded-xl cursor-pointer">
                      <Upload size={14} />
                      <span>Replace Logo</span>
                    </label>
                    {siteSettings.logoUrl && (
                      <button
                        type="button"
                        onClick={() => setSiteSettings({ ...siteSettings, logoUrl: '' })}
                        className="text-xs font-semibold text-rose-600 hover:underline"
                      >
                        Remove Logo
                      </button>
                    )}
                  </div>
                </div>

                <div className="pt-6 border-t border-primary-50 flex justify-end">
                  <button
                    type="submit"
                    disabled={saving}
                    className="inline-flex items-center gap-2 bg-primary-600 hover:bg-primary-700 text-white font-medium px-6 py-3 rounded-xl cursor-pointer"
                  >
                    <Save size={18} />
                    <span>Save Logo</span>
                  </button>
                </div>
              </form>
            )}

            {/* Medicine Management Tab */}
            {activeTab === 'medicines' && (
              <div className="space-y-6">
                {/* 1. Sub-tab headers (Medicines & Categories Switcher) */}
                {!selectedCategory && (
                  <div className="flex border-b border-primary-100 pb-2 gap-4">
                    <button
                      onClick={() => {
                        setMedSubTab('medicines');
                        setMedicineSearchQuery('');
                      }}
                      className={`pb-2 text-sm font-bold uppercase tracking-wider transition-colors cursor-pointer border-b-2 ${
                        medSubTab === 'medicines'
                          ? 'border-primary-600 text-primary-950 font-bold'
                          : 'border-transparent text-sand-500 hover:text-primary-700'
                      }`}
                    >
                      Medicines
                    </button>
                    <button
                      onClick={() => {
                        setMedSubTab('categories');
                        setCategorySearchQuery('');
                      }}
                      className={`pb-2 text-sm font-bold uppercase tracking-wider transition-colors cursor-pointer border-b-2 ${
                        medSubTab === 'categories'
                          ? 'border-primary-600 text-primary-955 font-bold'
                          : 'border-transparent text-sand-500 hover:text-primary-700'
                      }`}
                    >
                      Categories
                    </button>
                  </div>
                )}

                {/* 2. CATEGORY SPECIFIC VIEW */}
                {selectedCategory ? (
                  <div className="space-y-6">
                    {/* Header info / Back button */}
                    <div className="flex flex-col sm:flex-row justify-between sm:items-center gap-4">
                      <div className="space-y-1">
                        <button
                          onClick={() => setSelectedCategory(null)}
                          className="inline-flex items-center gap-1.5 text-xs text-primary-700 hover:text-primary-900 font-bold mb-1 transition-transform hover:-translate-x-0.5 cursor-pointer"
                        >
                          &larr; Back to Categories
                        </button>
                        <h1 className="font-display font-bold text-2xl text-primary-955">
                          {selectedCategory.englishName}
                        </h1>
                        <p className="text-sand-500 text-xs sm:text-sm">
                          {selectedCategory.englishSubtitle || 'Category Remedies List'}
                        </p>
                      </div>
                      
                      <div className="flex items-center gap-3">
                        <button
                          onClick={() => openMedicineModal('add')}
                          className="inline-flex items-center justify-center gap-2 bg-primary-600 hover:bg-primary-700 text-white font-medium px-5 py-2.5 rounded-xl shadow-xs transition-colors cursor-pointer text-sm font-bold"
                        >
                          <Plus size={16} />
                          <span>Add New Medicine</span>
                        </button>
                      </div>
                    </div>

                    {/* Search inside category */}
                    <div className="relative max-w-md">
                      <input
                        type="text"
                        placeholder="Search medicines in this category..."
                        value={medicineSearchQuery}
                        onChange={(e) => setMedicineSearchQuery(e.target.value)}
                        className="w-full p-3 pl-10 bg-white border border-primary-100 rounded-xl text-sm"
                      />
                      <Search className="absolute left-3.5 top-1/2 -translate-y-1/2 text-sand-400" size={16} />
                    </div>

                    {/* Table for medicines in category */}
                    <div className="bg-white rounded-3xl border border-primary-100 shadow-xs overflow-hidden">
                      <div className="overflow-x-auto">
                        <table className="w-full text-left text-sm border-collapse">
                          <thead>
                            <tr className="border-b border-primary-100 bg-sand-50/50 text-sand-500 font-semibold">
                              <th className="py-4 px-6">Image</th>
                              <th className="py-4 px-6">English Name</th>
                              <th className="py-4 px-6">Telugu Name</th>
                              <th className="py-4 px-6">Price</th>
                              <th className="py-4 px-6">Description</th>
                              <th className="py-4 px-6 text-center">Actions</th>
                            </tr>
                          </thead>
                          <tbody>
                            {(() => {
                              const categoryMeds = medicines.filter(m => {
                                // Must belong to this category
                                const belongs = m.categories && m.categories.some(c => c.id === selectedCategory.id);
                                if (!belongs) return false;
                                
                                // Must match search query
                                const q = medicineSearchQuery.toLowerCase().trim();
                                if (!q) return true;
                                return (m.englishName && m.englishName.toLowerCase().includes(q)) ||
                                       (m.teluguName && m.teluguName.toLowerCase().includes(q));
                              });

                              if (categoryMeds.length === 0) {
                                return (
                                  <tr>
                                    <td colSpan="6" className="text-center py-12 text-sand-400 font-medium">
                                      No medicines found in this category. Click "Add New Medicine" to create one.
                                    </td>
                                  </tr>
                                );
                              }

                              return categoryMeds.map((med) => (
                                <tr key={med.id} className="border-b border-primary-50 hover:bg-sand-50/50">
                                  <td className="py-4 px-6">
                                    <div className="h-12 w-12 rounded-lg bg-sand-100 border border-primary-100 flex items-center justify-center overflow-hidden">
                                      {med.imageUrl ? (
                                        <img src={med.imageUrl} alt={med.englishName || ''} className="h-full w-full object-cover" />
                                      ) : (
                                        <ImageIcon className="text-sand-400" size={18} />
                                      )}
                                    </div>
                                  </td>
                                  <td className="py-4 px-6 font-semibold text-primary-955">{med.englishName || '-'}</td>
                                  <td className="py-4 px-6 text-sand-600 font-medium">{med.teluguName || '-'}</td>
                                  <td className="py-4 px-6 font-semibold text-accent-700 font-mono">
                                    {med.discountPrice ? (
                                      <div>
                                        <span>₹{med.discountPrice}</span>
                                        <span className="text-xs text-sand-400 line-through ml-1.5 font-normal">₹{med.price}</span>
                                      </div>
                                    ) : (
                                      `₹${med.price}`
                                    )}
                                  </td>
                                  <td className="py-4 px-6 text-xs text-sand-500 max-w-xs truncate" title={med.description}>
                                    {med.shortDescription || med.description || '-'}
                                  </td>
                                  <td className="py-4 px-6">
                                    <div className="flex items-center justify-center gap-3">
                                      <button
                                        onClick={() => openMedicineModal('edit', med)}
                                        className="p-1.5 rounded-lg text-primary-600 hover:bg-primary-50 transition-colors cursor-pointer"
                                        title="Edit"
                                      >
                                        <Edit size={16} />
                                      </button>
                                      <button
                                        onClick={() => startDelete('medicine', med.id, med.englishName || med.teluguName)}
                                        className="p-1.5 rounded-lg text-rose-600 hover:bg-rose-50 transition-colors cursor-pointer"
                                        title="Delete"
                                      >
                                        <Trash2 size={16} />
                                      </button>
                                    </div>
                                  </td>
                                </tr>
                              ));
                            })()}
                          </tbody>
                        </table>
                      </div>
                    </div>
                  </div>
                ) : (
                  /* 3. GLOBAL VIEWS (MEDICINES OR CATEGORIES) */
                  <div className="space-y-6">
                    
                    {/* MEDICINES SUBTAB */}
                    {medSubTab === 'medicines' && (
                      <div className="space-y-6">
                        <div className="flex flex-col sm:flex-row justify-between sm:items-center gap-4">
                          <div>
                            <h1 className="font-display font-bold text-2xl text-primary-955">MEDICINE MANAGEMENT</h1>
                            <p className="text-sand-500 text-sm">Search, add, and manage your remedies catalog</p>
                          </div>
                          
                          <button
                            onClick={() => openMedicineModal('add')}
                            className="inline-flex items-center justify-center gap-2 bg-primary-600 hover:bg-primary-700 text-white font-medium px-5 py-2.5 rounded-xl shadow-xs transition-colors cursor-pointer text-sm font-bold"
                          >
                            <Plus size={16} />
                            <span>+ Add Medicine</span>
                          </button>
                        </div>

                        {/* Search and Category Filter controls */}
                        <div className="flex flex-col sm:flex-row gap-4 items-center">
                          <div className="relative w-full sm:max-w-md">
                            <input
                              type="text"
                              placeholder="Search by medicine name..."
                              value={medicineSearchQuery}
                              onChange={(e) => setMedicineSearchQuery(e.target.value)}
                              className="w-full p-3 pl-10 bg-white border border-primary-100 rounded-xl text-sm"
                            />
                            <Search className="absolute left-3.5 top-1/2 -translate-y-1/2 text-sand-400" size={16} />
                          </div>

                          <div className="relative w-full sm:max-w-xs">
                            <select
                              value={selectedCategoryFilter}
                              onChange={(e) => setSelectedCategoryFilter(e.target.value)}
                              className="w-full p-3 bg-white border border-primary-100 rounded-xl text-sm cursor-pointer pr-10 font-medium text-primary-950"
                            >
                              <option value="">All Categories</option>
                              {categories.map((c) => (
                                <option key={c.id} value={c.id}>
                                  {c.englishName} ({c.teluguName})
                                </option>
                              ))}
                            </select>
                          </div>
                        </div>

                        {/* Global Medicines View */}
                        {(() => {
                          const filtered = medicines.filter(med => {
                            const q = medicineSearchQuery.toLowerCase().trim();
                            const matchesSearch = !q ||
                              (med.englishName && med.englishName.toLowerCase().includes(q)) ||
                              (med.teluguName && med.teluguName.toLowerCase().includes(q));
                            
                            const matchesCategory = !selectedCategoryFilter ||
                              (med.categories && med.categories.some(c => c.id === parseInt(selectedCategoryFilter)));
                            
                            return matchesSearch && matchesCategory;
                          });

                          if (medicines.length === 0) {
                            return (
                              <div className="text-center py-16 bg-white rounded-3xl border border-primary-100 shadow-xs p-8 flex flex-col items-center justify-center space-y-4">
                                <span className="text-sand-400 font-medium text-base">No medicines added yet.</span>
                                <button
                                  onClick={() => openMedicineModal('add')}
                                  className="inline-flex items-center gap-2 bg-primary-600 hover:bg-primary-700 text-white font-medium px-5 py-2.5 rounded-xl shadow-xs transition-colors cursor-pointer text-sm font-bold"
                                >
                                  <Plus size={16} />
                                  <span>+ Add Medicine</span>
                                </button>
                              </div>
                            );
                          }

                          if (filtered.length === 0) {
                            return (
                              <div className="text-center py-16 bg-white rounded-3xl border border-primary-100 shadow-xs p-8">
                                <span className="text-sand-400 font-medium text-base">No medicines found matching the search/filter criteria.</span>
                              </div>
                            );
                          }

                          return (
                            <>
                              {/* Desktop Table View */}
                              <div className="hidden md:block bg-white rounded-3xl border border-primary-100 shadow-xs overflow-hidden">
                                <div className="overflow-x-auto">
                                  <table className="w-full text-left text-sm border-collapse">
                                    <thead>
                                      <tr className="border-b border-primary-100 bg-sand-50/50 text-sand-500 font-semibold">
                                        <th className="py-4 px-6">Image</th>
                                        <th className="py-4 px-6">English Name</th>
                                        <th className="py-4 px-6">Telugu Name</th>
                                        <th className="py-4 px-6">Category</th>
                                        <th className="py-4 px-6">Price</th>
                                        <th className="py-4 px-6">Description</th>
                                        <th className="py-4 px-6 text-center">Actions</th>
                                      </tr>
                                    </thead>
                                    <tbody>
                                      {filtered.map((med) => (
                                        <tr key={med.id} className="border-b border-primary-50 hover:bg-sand-50/50">
                                          <td className="py-4 px-6">
                                            <div className="h-12 w-12 rounded-lg bg-sand-100 border border-primary-100 flex items-center justify-center overflow-hidden">
                                              {med.imageUrl ? (
                                                <img src={med.imageUrl} alt={med.englishName || ''} className="h-full w-full object-cover" />
                                              ) : (
                                                <ImageIcon className="text-sand-400" size={18} />
                                              )}
                                            </div>
                                          </td>
                                          <td className="py-4 px-6 font-semibold text-primary-955">{med.englishName || '-'}</td>
                                          <td className="py-4 px-6 text-sand-600 font-medium">{med.teluguName || '-'}</td>
                                          <td className="py-4 px-6">
                                            <div className="flex flex-wrap gap-1">
                                              {med.categories?.map(c => (
                                                <span key={c.id} className="bg-primary-50 text-primary-800 text-[9px] font-bold px-2 py-0.5 rounded-full uppercase tracking-wider">
                                                  {c.englishName}
                                                </span>
                                              ))}
                                            </div>
                                          </td>
                                          <td className="py-4 px-6 font-semibold text-accent-700 font-mono">
                                            {med.discountPrice ? (
                                              <div>
                                                <span>₹{med.discountPrice}</span>
                                                <span className="text-xs text-sand-400 line-through ml-1.5 font-normal">₹{med.price}</span>
                                              </div>
                                            ) : (
                                              `₹${med.price}`
                                            )}
                                          </td>
                                          <td className="py-4 px-6 text-xs text-sand-500 max-w-xs truncate" title={med.description}>
                                            {med.shortDescription || med.description || '-'}
                                          </td>
                                          <td className="py-4 px-6">
                                            <div className="flex items-center justify-center gap-3">
                                              <button
                                                onClick={() => openMedicineModal('edit', med)}
                                                className="p-1.5 rounded-lg text-primary-600 hover:bg-primary-50 transition-colors cursor-pointer"
                                                title="Edit"
                                              >
                                                <Edit size={16} />
                                              </button>
                                              <button
                                                onClick={() => startDelete('medicine', med.id, med.englishName || med.teluguName)}
                                                className="p-1.5 rounded-lg text-rose-600 hover:bg-rose-50 transition-colors cursor-pointer"
                                                title="Delete"
                                              >
                                                <Trash2 size={16} />
                                              </button>
                                            </div>
                                          </td>
                                        </tr>
                                      ))}
                                    </tbody>
                                  </table>
                                </div>
                              </div>

                              {/* Mobile Compact Cards View */}
                              <div className="grid grid-cols-1 gap-4 md:hidden">
                                {filtered.map((med) => (
                                  <div key={med.id} className="bg-white p-5 rounded-2xl border border-primary-100 shadow-xs flex flex-col justify-between space-y-4">
                                    <div className="flex gap-4">
                                      <div className="h-16 w-16 rounded-xl bg-sand-100 border border-primary-100 overflow-hidden flex items-center justify-center shrink-0">
                                        {med.imageUrl ? (
                                          <img src={med.imageUrl} alt={med.englishName || ''} className="h-full w-full object-cover" />
                                        ) : (
                                          <ImageIcon className="text-sand-400" size={20} />
                                        )}
                                      </div>
                                      <div className="overflow-hidden space-y-1">
                                        <h4 className="font-bold text-sm text-primary-955 truncate leading-snug">{med.englishName || '-'}</h4>
                                        <p className="text-xs text-sand-500 font-medium truncate">{med.teluguName || '-'}</p>
                                        <div className="flex flex-wrap gap-1">
                                          {med.categories?.map(c => (
                                            <span key={c.id} className="bg-primary-50 text-primary-800 text-[8px] font-bold px-2 py-0.5 rounded-full uppercase tracking-wider">
                                              {c.englishName}
                                            </span>
                                          ))}
                                        </div>
                                      </div>
                                    </div>
                                    <div className="text-xs text-sand-600 line-clamp-2">
                                      {med.shortDescription || med.description || '-'}
                                    </div>
                                    <div className="flex justify-between items-center pt-3 border-t border-primary-50">
                                      <span className="font-bold text-accent-700 font-mono text-sm">
                                        {med.discountPrice ? `₹${med.discountPrice}` : `₹${med.price}`}
                                      </span>
                                      <div className="flex items-center gap-2">
                                        <button
                                          onClick={() => openMedicineModal('edit', med)}
                                          className="p-2 bg-primary-50 hover:bg-primary-100 text-primary-800 rounded-lg cursor-pointer transition-colors"
                                          title="Edit"
                                        >
                                          <Edit size={16} />
                                        </button>
                                        <button
                                          onClick={() => startDelete('medicine', med.id, med.englishName || med.teluguName)}
                                          className="p-2 bg-rose-50 hover:bg-rose-100 text-rose-800 rounded-lg cursor-pointer transition-colors"
                                          title="Delete"
                                        >
                                          <Trash2 size={16} />
                                        </button>
                                      </div>
                                    </div>
                                  </div>
                                ))}
                              </div>
                            </>
                          );
                        })()}
                      </div>
                    )}

                    {/* CATEGORIES SUBTAB */}
                    {medSubTab === 'categories' && (
                      <div className="space-y-6">
                        <div className="flex flex-col sm:flex-row justify-between sm:items-center gap-4">
                          <div>
                            <h1 className="font-display font-bold text-2xl text-primary-950">Category Management</h1>
                            <p className="text-sand-500 text-sm">Organize products into sections, manage display orders</p>
                          </div>
                          
                          <button
                            onClick={() => openCategoryModal('add')}
                            className="inline-flex items-center justify-center gap-2 bg-primary-600 hover:bg-primary-700 text-white font-medium px-5 py-2.5 rounded-xl shadow-xs transition-colors cursor-pointer text-sm font-bold"
                          >
                            <Plus size={16} />
                            <span>Add Category</span>
                          </button>
                        </div>

                        {/* Search categories */}
                        <div className="relative max-w-md">
                          <input
                            type="text"
                            placeholder="Search categories..."
                            value={categorySearchQuery}
                            onChange={(e) => setCategorySearchQuery(e.target.value)}
                            className="w-full p-3 pl-10 bg-white border border-primary-100 rounded-xl text-sm"
                          />
                          <Search className="absolute left-3.5 top-1/2 -translate-y-1/2 text-sand-400" size={16} />
                        </div>

                        {/* Categories List Cards */}
                        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                          {(() => {
                            const filteredCats = categories.filter(cat => {
                              const q = categorySearchQuery.toLowerCase().trim();
                              if (!q) return true;
                              return cat.englishName.toLowerCase().includes(q) ||
                                     cat.teluguName.toLowerCase().includes(q);
                            });

                            if (filteredCats.length === 0) {
                              return (
                                <div className="col-span-full text-center py-12 text-sand-400 font-medium">No categories found matching the search.</div>
                              );
                            }

                            return filteredCats.map((cat) => {
                              const medCount = medicines.filter(m => m.categories?.some(c => c.id === cat.id)).length;
                              
                              return (
                                <div key={cat.id} className="bg-white rounded-2xl border border-primary-100 shadow-xs p-6 flex flex-col justify-between space-y-4">
                                  <div className="flex gap-4">
                                    <div className="h-16 w-16 rounded-xl bg-primary-50 border border-primary-100 overflow-hidden flex items-center justify-center shrink-0">
                                      {cat.imageUrl ? (
                                        <img src={cat.imageUrl} alt={cat.englishName} className="h-full w-full object-cover" />
                                      ) : (
                                        <ImageIcon className="text-primary-300" size={24} />
                                      )}
                                    </div>
                                    <div className="overflow-hidden">
                                      <h3 className="font-display font-bold text-base text-primary-955 truncate leading-snug">
                                        {cat.englishName}
                                      </h3>
                                      <p className="text-[10px] font-bold text-sand-400 uppercase tracking-wider mt-0.5">
                                        {cat.teluguName}
                                      </p>
                                      <span className="inline-block mt-2 bg-sand-100 text-sand-700 text-xs px-2.5 py-0.5 rounded-full font-bold">
                                        {medCount} {medCount === 1 ? 'Medicine' : 'Medicines'}
                                      </span>
                                    </div>
                                  </div>

                                  <div className="pt-4 border-t border-primary-50 flex items-center justify-between">
                                    <span className={`inline-block px-2 py-0.5 rounded-full text-xs font-bold border ${
                                      cat.isEnabled
                                        ? 'bg-emerald-50 text-emerald-700 border-emerald-100'
                                        : 'bg-sand-150 text-sand-600 border-sand-200'
                                    }`}>
                                      {cat.isEnabled ? 'Enabled' : 'Disabled'}
                                    </span>

                                    <div className="flex items-center gap-2">
                                      <button
                                        onClick={() => setSelectedCategory(cat)}
                                        className="inline-flex items-center gap-1 bg-primary-50 hover:bg-primary-100 text-primary-800 text-xs font-bold px-3 py-1.5 rounded-lg cursor-pointer transition-colors"
                                      >
                                        <span>Manage</span>
                                      </button>
                                      
                                      <button
                                        onClick={() => openCategoryModal('edit', cat)}
                                        className="p-1 text-primary-600 hover:bg-primary-50 rounded transition-colors cursor-pointer"
                                        title="Edit"
                                      >
                                        <Edit size={14} />
                                      </button>
                                      
                                      <button
                                        onClick={() => startDelete('category', cat.id, cat.englishName)}
                                        className="p-1 text-rose-600 hover:bg-rose-50 rounded transition-colors cursor-pointer"
                                        title="Delete"
                                      >
                                        <Trash2 size={14} />
                                      </button>
                                    </div>
                                  </div>

                                </div>
                              );
                            });
                          })()}
                        </div>
                      </div>
                    )}

                  </div>
                )}

              </div>
            )}

            {/* Benefits Management Tab */}
            {activeTab === 'benefits' && (
              <div className="space-y-6">
                <div className="flex flex-col sm:flex-row justify-between sm:items-center gap-4">
                  <div>
                    <h1 className="font-display font-bold text-2xl text-primary-955">Benefits (Why Choose Us)</h1>
                    <p className="text-sand-500 text-sm">Add or edit the dynamic benefits grid cards displayed on the homepage</p>
                  </div>
                  <button
                    onClick={() => openBenefitModal('add')}
                    className="inline-flex items-center justify-center gap-2 bg-primary-600 hover:bg-primary-700 text-white font-medium px-5 py-2.5 rounded-xl shadow-xs transition-colors cursor-pointer text-sm font-semibold"
                  >
                    <Plus size={16} />
                    <span>Add Benefit Card</span>
                  </button>
                </div>

                {/* Benefits Table */}
                <div className="bg-white rounded-3xl border border-primary-100 shadow-xs overflow-hidden">
                  <div className="overflow-x-auto">
                    <table className="w-full text-left text-sm border-collapse">
                      <thead>
                        <tr className="border-b border-primary-100 bg-sand-50/50 text-sand-500 font-semibold">
                          <th className="py-4 px-6">Icon/Image</th>
                          <th className="py-4 px-6">Title</th>
                          <th className="py-4 px-6">Description</th>
                          <th className="py-4 px-6 text-center">Display Order</th>
                          <th className="py-4 px-6 text-center">Status</th>
                          <th className="py-4 px-6 text-center">Actions</th>
                        </tr>
                      </thead>
                      <tbody>
                        {benefits.map((ben) => (
                          <tr key={ben.id} className="border-b border-primary-50 hover:bg-sand-50/50">
                            <td className="py-4 px-6">
                              <div className="h-10 w-10 rounded-lg bg-sand-100 border border-primary-100 flex items-center justify-center overflow-hidden">
                                {ben.imageUrl ? (
                                  <img src={ben.imageUrl} alt={ben.title} className="h-full w-full object-cover" />
                                ) : (
                                  <Award className="text-primary-600" size={20} />
                                )}
                              </div>
                            </td>
                            <td className="py-4 px-6 font-semibold text-primary-950">{ben.title}</td>
                            <td className="py-4 px-6 text-sand-600 max-w-xs truncate">{ben.description}</td>
                            <td className="py-4 px-6 text-center font-mono">{ben.displayOrder}</td>
                            <td className="py-4 px-6 text-center">
                              <span className={`inline-block px-2.5 py-0.5 rounded-full text-xs font-bold border ${
                                ben.isActive 
                                  ? 'bg-emerald-50 text-emerald-700 border-emerald-100' 
                                  : 'bg-sand-150 text-sand-600 border-sand-200'
                              }`}>
                                {ben.isActive ? 'Active' : 'Inactive'}
                              </span>
                            </td>
                            <td className="py-4 px-6">
                              <div className="flex items-center justify-center gap-3">
                                <button
                                  onClick={() => openBenefitModal('edit', ben)}
                                  className="p-1.5 rounded-lg text-primary-600 hover:bg-primary-50 transition-colors cursor-pointer"
                                >
                                  <Edit size={16} />
                                </button>
                                <button
                                  onClick={() => startDelete('benefit', ben.id, ben.title)}
                                  className="p-1.5 rounded-lg text-rose-600 hover:bg-rose-50 transition-colors cursor-pointer"
                                >
                                  <Trash2 size={16} />
                                </button>
                              </div>
                            </td>
                          </tr>
                        ))}
                        {benefits.length === 0 && (
                          <tr>
                            <td colSpan="6" className="text-center py-12 text-sand-400 font-medium">No benefit cards created yet.</td>
                          </tr>
                        )}
                      </tbody>
                    </table>
                  </div>
                </div>
              </div>
            )}

            {/* Testimonials Management Tab */}
            {activeTab === 'testimonials' && (
              <div className="space-y-6">
                <div className="flex flex-col sm:flex-row justify-between sm:items-center gap-4">
                  <div>
                    <h1 className="font-display font-bold text-2xl text-primary-950">Patient Testimonials</h1>
                    <p className="text-sand-500 text-sm">Add or edit verified patient reviews shown on the homepage</p>
                  </div>
                  <button
                    onClick={() => openTestimonialModal('add')}
                    className="inline-flex items-center justify-center gap-2 bg-primary-600 hover:bg-primary-700 text-white font-medium px-5 py-2.5 rounded-xl shadow-xs transition-colors cursor-pointer text-sm font-semibold"
                  >
                    <Plus size={16} />
                    <span>Add Testimonial</span>
                  </button>
                </div>

                {/* Testimonials Table */}
                <div className="bg-white rounded-3xl border border-primary-100 shadow-xs overflow-hidden">
                  <div className="overflow-x-auto">
                    <table className="w-full text-left text-sm border-collapse">
                      <thead>
                        <tr className="border-b border-primary-100 bg-sand-50/50 text-sand-500 font-semibold">
                          <th className="py-4 px-6">Avatar</th>
                          <th className="py-4 px-6">Customer Name</th>
                          <th className="py-4 px-6">Feedback Review</th>
                          <th className="py-4 px-6 text-center">Rating</th>
                          <th className="py-4 px-6 text-center">Status</th>
                          <th className="py-4 px-6 text-center">Actions</th>
                        </tr>
                      </thead>
                      <tbody>
                        {testimonials.map((test) => (
                          <tr key={test.id} className="border-b border-primary-50 hover:bg-sand-50/50">
                            <td className="py-4 px-6">
                              <div className="h-10 w-10 rounded-full bg-sand-100 border border-primary-100 flex items-center justify-center overflow-hidden shrink-0">
                                {test.imageUrl ? (
                                  <img src={test.imageUrl} alt={test.name} className="h-full w-full object-cover" />
                                ) : (
                                  <User className="text-sand-400" size={16} />
                                )}
                              </div>
                            </td>
                            <td className="py-4 px-6 font-semibold text-primary-955">{test.name}</td>
                            <td className="py-4 px-6 text-sand-600 max-w-xs truncate">{test.content}</td>
                            <td className="py-4 px-6 text-center text-amber-500 font-bold font-mono">★ {test.rating}/5</td>
                            <td className="py-4 px-6 text-center">
                              <span className={`inline-block px-2.5 py-0.5 rounded-full text-xs font-bold border ${
                                test.isActive 
                                  ? 'bg-emerald-50 text-emerald-700 border-emerald-100' 
                                  : 'bg-sand-150 text-sand-600 border-sand-200'
                              }`}>
                                {test.isActive ? 'Active' : 'Inactive'}
                              </span>
                            </td>
                            <td className="py-4 px-6">
                              <div className="flex items-center justify-center gap-3">
                                <button
                                  onClick={() => openTestimonialModal('edit', test)}
                                  className="p-1.5 rounded-lg text-primary-600 hover:bg-primary-50 transition-colors cursor-pointer"
                                >
                                  <Edit size={16} />
                                </button>
                                <button
                                  onClick={() => startDelete('testimonial', test.id, test.name)}
                                  className="p-1.5 rounded-lg text-rose-600 hover:bg-rose-50 transition-colors cursor-pointer"
                                >
                                  <Trash2 size={16} />
                                </button>
                              </div>
                            </td>
                          </tr>
                        ))}
                        {testimonials.length === 0 && (
                          <tr>
                            <td colSpan="6" className="text-center py-12 text-sand-400 font-medium">No testimonials created yet.</td>
                          </tr>
                        )}
                      </tbody>
                    </table>
                  </div>
                </div>
              </div>
            )}

            {/* Promotions Management Tab */}
            {activeTab === 'promotions' && (
              <div className="space-y-6">
                <div className="flex flex-col sm:flex-row justify-between sm:items-center gap-4">
                  <div>
                    <h1 className="font-display font-bold text-2xl text-primary-950">Promotional Banners</h1>
                    <p className="text-sand-500 text-sm">Create and activate special headers, sales, or seasonal promotions</p>
                  </div>
                  <button
                    onClick={() => openPromotionModal('add')}
                    className="inline-flex items-center justify-center gap-2 bg-primary-600 hover:bg-primary-700 text-white font-medium px-5 py-2.5 rounded-xl shadow-xs transition-colors cursor-pointer text-sm font-semibold"
                  >
                    <Plus size={16} />
                    <span>Create Offer Banner</span>
                  </button>
                </div>

                {/* Promotions Table */}
                <div className="bg-white rounded-3xl border border-primary-100 shadow-xs overflow-hidden">
                  <div className="overflow-x-auto">
                    <table className="w-full text-left text-sm border-collapse">
                      <thead>
                        <tr className="border-b border-primary-100 bg-sand-50/50 text-sand-500 font-semibold">
                          <th className="py-4 px-6">Promo Title</th>
                          <th className="py-4 px-6">Description Info</th>
                          <th className="py-4 px-6">Button CTA</th>
                          <th className="py-4 px-6 text-center">Active Range</th>
                          <th className="py-4 px-6 text-center">Status</th>
                          <th className="py-4 px-6 text-center">Actions</th>
                        </tr>
                      </thead>
                      <tbody>
                        {promotions.map((promo) => (
                          <tr key={promo.id} className="border-b border-primary-50 hover:bg-sand-50/50">
                            <td className="py-4 px-6 font-semibold text-primary-955">{promo.title}</td>
                            <td className="py-4 px-6 text-sand-600 max-w-xs truncate">{promo.description}</td>
                            <td className="py-4 px-6">
                              {promo.buttonText ? (
                                <span className="text-xs bg-primary-50 border border-primary-200 px-2 py-1 rounded-md text-primary-800 font-semibold">
                                  {promo.buttonText} → {promo.buttonUrl}
                                </span>
                              ) : '-'}
                            </td>
                            <td className="py-4 px-6 text-center text-xs text-sand-500">
                              {promo.startDate ? new Date(promo.startDate).toLocaleDateString() : 'Immediate'} 
                              {' to '}
                              {promo.endDate ? new Date(promo.endDate).toLocaleDateString() : 'Forever'}
                            </td>
                            <td className="py-4 px-6 text-center">
                              <span className={`inline-block px-2.5 py-0.5 rounded-full text-xs font-bold border ${
                                promo.isActive 
                                  ? 'bg-emerald-50 text-emerald-700 border-emerald-100' 
                                  : 'bg-sand-150 text-sand-600 border-sand-200'
                              }`}>
                                {promo.isActive ? 'Active' : 'Inactive'}
                              </span>
                            </td>
                            <td className="py-4 px-6">
                              <div className="flex items-center justify-center gap-3">
                                <button
                                  onClick={() => openPromotionModal('edit', promo)}
                                  className="p-1.5 rounded-lg text-primary-600 hover:bg-primary-50 transition-colors cursor-pointer"
                                >
                                  <Edit size={16} />
                                </button>
                                <button
                                  onClick={() => startDelete('promotion', promo.id, promo.title)}
                                  className="p-1.5 rounded-lg text-rose-600 hover:bg-rose-50 transition-colors cursor-pointer"
                                >
                                  <Trash2 size={16} />
                                </button>
                              </div>
                            </td>
                          </tr>
                        ))}
                        {promotions.length === 0 && (
                          <tr>
                            <td colSpan="6" className="text-center py-12 text-sand-400 font-medium">No special promotions created yet.</td>
                          </tr>
                        )}
                      </tbody>
                    </table>
                  </div>
                </div>
              </div>
            )}

            {/* Navigation Menu Management Tab */}
            {activeTab === 'navigation' && (
              <div className="space-y-6">
                <div className="flex flex-col sm:flex-row justify-between sm:items-center gap-4">
                  <div>
                    <h1 className="font-display font-bold text-2xl text-primary-950">Navigation Links</h1>
                    <p className="text-sand-500 text-sm">Configure the links displayed on the main customer-facing header menu</p>
                  </div>
                  <button
                    onClick={() => openNavigationItemModal('add')}
                    className="inline-flex items-center justify-center gap-2 bg-primary-600 hover:bg-primary-700 text-white font-medium px-5 py-2.5 rounded-xl shadow-xs transition-colors cursor-pointer text-sm font-semibold"
                  >
                    <Plus size={16} />
                    <span>Add Link</span>
                  </button>
                </div>

                {/* Navigation Items Table */}
                <div className="bg-white rounded-3xl border border-primary-100 shadow-xs overflow-hidden">
                  <div className="overflow-x-auto">
                    <table className="w-full text-left text-sm border-collapse">
                      <thead>
                        <tr className="border-b border-primary-100 bg-sand-50/50 text-sand-500 font-semibold">
                          <th className="py-4 px-6">Link Display Name</th>
                          <th className="py-4 px-6">Target Route URL Path</th>
                          <th className="py-4 px-6 text-center">Display Order</th>
                          <th className="py-4 px-6 text-center">Status</th>
                          <th className="py-4 px-6 text-center">Actions</th>
                        </tr>
                      </thead>
                      <tbody>
                        {navigationItems.map((item) => (
                          <tr key={item.id} className="border-b border-primary-50 hover:bg-sand-50/50">
                            <td className="py-4 px-6 font-semibold text-primary-955">{item.name}</td>
                            <td className="py-4 px-6 font-mono text-xs text-sand-650">{item.url}</td>
                            <td className="py-4 px-6 text-center font-mono">{item.displayOrder}</td>
                            <td className="py-4 px-6 text-center">
                              <span className={`inline-block px-2.5 py-0.5 rounded-full text-xs font-bold border ${
                                item.isActive 
                                  ? 'bg-emerald-50 text-emerald-700 border-emerald-100' 
                                  : 'bg-sand-150 text-sand-600 border-sand-200'
                              }`}>
                                {item.isActive ? 'Active' : 'Inactive'}
                              </span>
                            </td>
                            <td className="py-4 px-6">
                              <div className="flex items-center justify-center gap-3">
                                <button
                                  onClick={() => openNavigationItemModal('edit', item)}
                                  className="p-1.5 rounded-lg text-primary-600 hover:bg-primary-50 transition-colors cursor-pointer"
                                >
                                  <Edit size={16} />
                                </button>
                                <button
                                  onClick={() => startDelete('navigation', item.id, item.name)}
                                  className="p-1.5 rounded-lg text-rose-600 hover:bg-rose-50 transition-colors cursor-pointer"
                                >
                                  <Trash2 size={16} />
                                </button>
                              </div>
                            </td>
                          </tr>
                        ))}
                        {navigationItems.length === 0 && (
                          <tr>
                            <td colSpan="5" className="text-center py-12 text-sand-400 font-medium">No menu links created yet.</td>
                          </tr>
                        )}
                      </tbody>
                    </table>
                  </div>
                </div>
              </div>
            )}

            {/* Contact Details Management Tab */}
            {activeTab === 'contact' && (
              <form onSubmit={handleSaveContact} className="space-y-6 bg-white p-6 sm:p-10 rounded-3xl border border-primary-100 shadow-xs max-w-2xl">
                <div>
                  <h1 className="font-display font-bold text-2xl text-primary-955">Contact Information</h1>
                  <p className="text-sand-500 text-sm">Manage business contact number, WhatsApp, and location details</p>
                </div>

                <div className="space-y-4 pt-4">
                  <div className="space-y-2">
                    <label className="text-sm font-bold text-primary-900 block">Phone Number</label>
                    <input
                      type="text"
                      value={contactDetails.phone || ''}
                      onChange={(e) => setContactDetails({ ...contactDetails, phone: e.target.value })}
                      placeholder="e.g. +91 91217 56114"
                      className="w-full p-3 bg-sand-50 border border-primary-100 rounded-xl text-sm"
                      required
                    />
                  </div>

                  <div className="space-y-2">
                    <label className="text-sm font-bold text-primary-900 block">WhatsApp Number</label>
                    <input
                      type="text"
                      value={contactDetails.whatsapp || ''}
                      onChange={(e) => setContactDetails({ ...contactDetails, whatsapp: e.target.value })}
                      placeholder="e.g. 9121756114"
                      className="w-full p-3 bg-sand-50 border border-primary-100 rounded-xl text-sm"
                      required
                    />
                  </div>

                  <div className="space-y-2">
                    <label className="text-sm font-bold text-primary-900 block">Location (Address)</label>
                    <input
                      type="text"
                      value={contactDetails.address || ''}
                      onChange={(e) => setContactDetails({ ...contactDetails, address: e.target.value })}
                      placeholder="e.g. Nandigama, Andhra Pradesh, India"
                      className="w-full p-3 bg-sand-50 border border-primary-100 rounded-xl text-sm"
                      required
                    />
                  </div>
                </div>

                <div className="pt-6 border-t border-primary-50 flex justify-end">
                  <button
                    type="submit"
                    disabled={saving}
                    className="inline-flex items-center gap-2 bg-primary-600 hover:bg-primary-700 text-white font-medium px-6 py-3 rounded-xl cursor-pointer"
                  >
                    <Save size={18} />
                    <span>Save Changes</span>
                  </button>
                </div>
              </form>
            )}

            {/* WhatsApp Settings Tab */}
            {activeTab === 'whatsapp' && (
              <form onSubmit={handleSaveWhatsApp} className="space-y-6 bg-white p-6 sm:p-10 rounded-3xl border border-primary-100 shadow-xs">
                <div>
                  <h1 className="font-display font-bold text-2xl text-primary-950">WhatsApp Order Config</h1>
                  <p className="text-sand-500 text-sm">Configure ordering receiver number and chat template layouts</p>
                </div>

                <div className="space-y-6 pt-4 max-w-2xl">
                  <div className="space-y-2">
                    <label className="text-sm font-bold text-primary-900 block">Order WhatsApp Number (With Country Code, e.g. 916305029231)</label>
                    <input
                      type="text"
                      value={whatsappSettings.whatsappNumber || ''}
                      onChange={(e) => setWhatsappSettings({ ...whatsappSettings, whatsappNumber: e.target.value })}
                      className="w-full p-3 bg-sand-50 border border-primary-100 rounded-xl text-sm font-mono"
                      required
                    />
                  </div>

                  <div className="space-y-2">
                    <label className="text-sm font-bold text-primary-900 block">Default Message Format</label>
                    <textarea
                      value={whatsappSettings.defaultMessage || ''}
                      onChange={(e) => setWhatsappSettings({ ...whatsappSettings, defaultMessage: e.target.value })}
                      rows="4"
                      className="w-full p-3 bg-sand-50 border border-primary-100 rounded-xl text-sm font-mono"
                      required
                    ></textarea>
                    
                    {/* Instructions on parameters */}
                    <div className="p-4 bg-primary-50 rounded-xl border border-primary-100 space-y-2">
                      <span className="text-xs font-bold text-primary-850 block">Message Parameters Allowed:</span>
                      <ul className="text-xs text-primary-800 space-y-1 list-disc pl-4">
                        <li><code className="bg-white px-1.5 py-0.5 rounded border border-primary-200 font-bold">{`{medicineName}`}</code> - Automatically replaced with the Medicine title.</li>
                        <li><code className="bg-white px-1.5 py-0.5 rounded border border-primary-200 font-bold">{`{price}`}</code> - Replaced with the Medicine rate (e.g. ₹299).</li>
                        <li><code className="bg-white px-1.5 py-0.5 rounded border border-primary-200 font-bold">{`{quantity}`}</code> - Replaced with the order quantity (default 1).</li>
                      </ul>
                    </div>
                  </div>
                </div>

                <div className="pt-6 border-t border-primary-50 flex justify-end">
                  <button
                    type="submit"
                    disabled={saving}
                    className="inline-flex items-center gap-2 bg-primary-600 hover:bg-primary-700 text-white font-medium px-6 py-3 rounded-xl cursor-pointer"
                  >
                    <Save size={18} />
                    <span>Save Template</span>
                  </button>
                </div>
              </form>
            )}

            {/* Admin Password Change Settings Tab */}
            {activeTab === 'adminsettings' && (
              <form onSubmit={handleChangePassword} className="space-y-6 bg-white p-6 sm:p-10 rounded-3xl border border-primary-100 shadow-xs max-w-2xl">
                <div>
                  <h1 className="font-display font-bold text-2xl text-primary-950">Admin Security Settings</h1>
                  <p className="text-sand-500 text-sm">Update the primary account access passwords</p>
                </div>

                <div className="space-y-4 pt-4">
                  <div className="space-y-2">
                    <label className="text-sm font-bold text-primary-900 block">Current Admin Password</label>
                    <input
                      type="password"
                      value={passwordForm.currentPassword}
                      onChange={(e) => setPasswordForm({ ...passwordForm, currentPassword: e.target.value })}
                      className="w-full p-3 bg-sand-50 border border-primary-100 rounded-xl text-sm"
                      required
                    />
                  </div>
                  <div className="space-y-2">
                    <label className="text-sm font-bold text-primary-900 block">New Password</label>
                    <input
                      type="password"
                      value={passwordForm.newPassword}
                      onChange={(e) => setPasswordForm({ ...passwordForm, newPassword: e.target.value })}
                      className="w-full p-3 bg-sand-50 border border-primary-100 rounded-xl text-sm"
                      required
                    />
                  </div>
                  <div className="space-y-2">
                    <label className="text-sm font-bold text-primary-900 block">Confirm New Password</label>
                    <input
                      type="password"
                      value={passwordForm.confirmPassword}
                      onChange={(e) => setPasswordForm({ ...passwordForm, confirmPassword: e.target.value })}
                      className="w-full p-3 bg-sand-50 border border-primary-100 rounded-xl text-sm"
                      required
                    />
                  </div>
                </div>

                <div className="pt-6 border-t border-primary-50 flex justify-end">
                  <button
                    type="submit"
                    disabled={saving}
                    className="inline-flex items-center gap-2 bg-primary-600 hover:bg-primary-700 text-white font-medium px-6 py-3 rounded-xl cursor-pointer"
                  >
                    <Save size={18} />
                    <span>Change Password</span>
                  </button>
                </div>
              </form>
            )}

          </div>
        )}
      </main>

      {/* MEDICINE MODAL FORM (ADD/EDIT) */}
      {medicineModal.open && (
        <div className="fixed inset-0 bg-primary-950/65 backdrop-blur-xs flex items-center justify-center p-4 z-50 overflow-y-auto animate-in fade-in duration-150">
          <div className="bg-white rounded-3xl w-full max-w-2xl overflow-hidden border border-primary-100 shadow-xl max-h-[95vh] flex flex-col">
            
            {/* Modal Header */}
            <div className="bg-primary-900 text-white p-5 flex justify-between items-center">
              <h3 className="font-display font-bold text-xl">
                {medicineModal.mode === 'add' ? 'Add New Medicine' : 'Edit Medicine details'}
              </h3>
              <button 
                onClick={() => setMedicineModal({ open: false, mode: 'add', data: null })}
                className="text-primary-300 hover:text-white transition-colors cursor-pointer"
              >
                <X size={20} />
              </button>
            </div>

            {/* Modal Scroll Body */}
            <form onSubmit={handleSaveMedicine} className="flex-grow overflow-y-auto p-6 space-y-5">
              
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                {/* English Name */}
                <div className="space-y-1">
                  <label className="text-xs font-bold text-primary-900">English Medicine Name *</label>
                  <input
                    type="text"
                    value={medicineForm.englishName}
                    onChange={(e) => setMedicineForm({ ...medicineForm, englishName: e.target.value })}
                    placeholder="e.g. Black Pepper"
                    className="w-full p-2.5 bg-sand-50 border border-primary-100 rounded-xl text-sm"
                    required
                  />
                </div>
                {/* Telugu Name */}
                <div className="space-y-1">
                  <label className="text-xs font-bold text-primary-900">Telugu Medicine Name</label>
                  <input
                    type="text"
                    value={medicineForm.teluguName}
                    onChange={(e) => setMedicineForm({ ...medicineForm, teluguName: e.target.value })}
                    placeholder="e.g. మిరియాలు"
                    className="w-full p-2.5 bg-sand-50 border border-primary-100 rounded-xl text-sm"
                  />
                </div>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                {/* Category Selection (Multi-select Checkbox Grid) */}
                <div className="space-y-1 sm:col-span-2">
                  <label className="text-xs font-bold text-primary-900 block mb-1">Select Categories (One or More)</label>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 bg-sand-50 p-3 rounded-xl border border-primary-100 max-h-32 overflow-y-auto">
                    {categories.map((c) => (
                      <label key={c.id} className="flex items-center gap-2 text-xs font-semibold text-sand-750 select-none cursor-pointer">
                        <input
                          type="checkbox"
                          checked={medicineForm.categoryIds.includes(c.id)}
                          onChange={(e) => {
                            const ids = e.target.checked
                              ? [...medicineForm.categoryIds, c.id]
                              : medicineForm.categoryIds.filter(id => id !== c.id);
                            setMedicineForm({ ...medicineForm, categoryIds: ids });
                          }}
                          className="h-4 w-4 text-primary-600 focus:ring-primary-500 rounded border-primary-300 cursor-pointer"
                        />
                        <span>{c.teluguName} ({c.englishName})</span>
                      </label>
                    ))}
                  </div>
                </div>
              </div>

              {/* Short Description */}
              <div className="space-y-1">
                <label className="text-xs font-bold text-primary-900">Short Summary Tagline</label>
                <input
                  type="text"
                  value={medicineForm.shortDescription}
                  onChange={(e) => setMedicineForm({ ...medicineForm, shortDescription: e.target.value })}
                  placeholder="e.g. Relieves cough, reduces sinusitis"
                  className="w-full p-2.5 bg-sand-50 border border-primary-100 rounded-xl text-sm"
                />
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-4 gap-4">
                {/* Price */}
                <div className="space-y-1">
                  <label className="text-xs font-bold text-primary-900">List Price (₹)</label>
                  <input
                    type="number"
                    value={medicineForm.price}
                    onChange={(e) => setMedicineForm({ ...medicineForm, price: e.target.value })}
                    placeholder="e.g. 299"
                    className="w-full p-2.5 bg-sand-50 border border-primary-100 rounded-xl text-sm font-mono"
                    required
                  />
                </div>
                {/* Discount Price */}
                <div className="space-y-1">
                  <label className="text-xs font-bold text-primary-900">Discount Price (₹)</label>
                  <input
                    type="number"
                    value={medicineForm.discountPrice}
                    onChange={(e) => setMedicineForm({ ...medicineForm, discountPrice: e.target.value })}
                    placeholder="Leave empty if none"
                    className="w-full p-2.5 bg-sand-50 border border-primary-100 rounded-xl text-sm font-mono"
                  />
                </div>
                {/* Quantity */}
                <div className="space-y-1">
                  <label className="text-xs font-bold text-primary-900">Quantity / Dose</label>
                  <input
                    type="text"
                    value={medicineForm.quantity}
                    onChange={(e) => setMedicineForm({ ...medicineForm, quantity: e.target.value })}
                    placeholder="e.g. 10 tablets, 100g"
                    className="w-full p-2.5 bg-sand-50 border border-primary-100 rounded-xl text-sm"
                  />
                </div>
                {/* Display Order */}
                <div className="space-y-1">
                  <label className="text-xs font-bold text-primary-900">Sort order</label>
                  <input
                    type="number"
                    value={medicineForm.displayOrder}
                    onChange={(e) => setMedicineForm({ ...medicineForm, displayOrder: parseInt(e.target.value) || 0 })}
                    className="w-full p-2.5 bg-sand-50 border border-primary-100 rounded-xl text-sm font-mono"
                  />
                </div>
              </div>

              {/* Description */}
              <div className="space-y-1">
                <label className="text-xs font-bold text-primary-900">Product Description / Uses</label>
                <textarea
                  value={medicineForm.description}
                  onChange={(e) => setMedicineForm({ ...medicineForm, description: e.target.value })}
                  placeholder="Full properties..."
                  rows="3"
                  className="w-full p-2.5 bg-sand-50 border border-primary-100 rounded-xl text-sm"
                  required
                ></textarea>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
                {/* Ingredients */}
                <div className="space-y-1">
                  <label className="text-xs font-bold text-primary-900 flex items-center gap-1"><Award size={12} /><span>Ingredients</span></label>
                  <textarea
                    value={medicineForm.ingredients}
                    onChange={(e) => setMedicineForm({ ...medicineForm, ingredients: e.target.value })}
                    placeholder="Extracts used..."
                    rows="2"
                    className="w-full p-2 bg-sand-50 border border-primary-100 rounded-xl text-xs"
                  ></textarea>
                </div>
                {/* Benefits */}
                <div className="space-y-1">
                  <label className="text-xs font-bold text-primary-900 flex items-center gap-1"><Heart size={12} /><span>Benefits</span></label>
                  <textarea
                    value={medicineForm.benefits}
                    onChange={(e) => setMedicineForm({ ...medicineForm, benefits: e.target.value })}
                    placeholder="Boosts vitality..."
                    rows="2"
                    className="w-full p-2 bg-sand-50 border border-primary-100 rounded-xl text-xs"
                  ></textarea>
                </div>
                {/* Usage Instructions */}
                <div className="space-y-1">
                  <label className="text-xs font-bold text-primary-900 flex items-center gap-1"><HelpCircle size={12} /><span>Usage Guides</span></label>
                  <textarea
                    value={medicineForm.usageInstructions}
                    onChange={(e) => setMedicineForm({ ...medicineForm, usageInstructions: e.target.value })}
                    placeholder="1 tablet with milk..."
                    rows="2"
                    className="w-full p-2 bg-sand-50 border border-primary-100 rounded-xl text-xs"
                  ></textarea>
                </div>
              </div>

              {/* Medicine Image */}
              <div className="space-y-2">
                <label className="text-xs font-bold text-primary-900 block">Medicine Photo</label>
                <div className="flex items-center gap-4">
                  <div className="h-20 w-20 rounded-2xl bg-sand-100 border border-primary-100 flex items-center justify-center overflow-hidden shrink-0">
                    {medicineForm.imageUrl ? (
                      <img src={medicineForm.imageUrl} alt="Medicine preview" className="h-full w-full object-cover" />
                    ) : (
                      <ImageIcon className="text-sand-400" size={24} />
                    )}
                  </div>
                  <input
                    type="file"
                    accept="image/*"
                    onChange={(e) => handleImageUpload(e.target.files[0], 'medicine')}
                    className="hidden"
                    id="medicine-photo-upload"
                  />
                  <label htmlFor="medicine-photo-upload" className="inline-flex items-center gap-2 bg-primary-50 border border-primary-200 hover:bg-primary-100 text-primary-800 text-xs font-semibold px-4 py-2.5 rounded-xl cursor-pointer">
                    <Upload size={14} />
                    <span>Upload Image</span>
                  </label>
                </div>
              </div>

              {/* Checkboxes */}
              <div className="grid grid-cols-1 sm:grid-cols-4 gap-3">
                <div className="flex items-center gap-3 bg-sand-50 p-3 rounded-xl border border-primary-100">
                  <input
                    type="checkbox"
                    id="med-wa-enabled"
                    checked={medicineForm.whatsappEnabled}
                    onChange={(e) => setMedicineForm({ ...medicineForm, whatsappEnabled: e.target.checked })}
                    className="h-4.5 w-4.5 text-primary-600 focus:ring-primary-500 rounded border-primary-300"
                  />
                  <label htmlFor="med-wa-enabled" className="text-sm font-semibold text-primary-955 select-none">
                    WhatsApp Order
                  </label>
                </div>

                <div className="flex items-center gap-3 bg-sand-50 p-3 rounded-xl border border-primary-100">
                  <input
                    type="checkbox"
                    id="med-featured"
                    checked={medicineForm.isFeatured}
                    onChange={(e) => setMedicineForm({ ...medicineForm, isFeatured: e.target.checked })}
                    className="h-4.5 w-4.5 text-primary-600 focus:ring-primary-500 rounded border-primary-300"
                  />
                  <label htmlFor="med-featured" className="text-sm font-semibold text-primary-955 select-none">
                    Featured Item
                  </label>
                </div>

                <div className="flex items-center gap-3 bg-sand-50 p-3 rounded-xl border border-primary-100">
                  <input
                    type="checkbox"
                    id="med-active"
                    checked={medicineForm.isActive}
                    onChange={(e) => setMedicineForm({ ...medicineForm, isActive: e.target.checked })}
                    className="h-4.5 w-4.5 text-primary-600 focus:ring-primary-500 rounded border-primary-300"
                  />
                  <label htmlFor="med-active" className="text-sm font-semibold text-primary-955 select-none">
                    Active (Show online)
                  </label>
                </div>

                <div className="space-y-1">
                  <select
                    value={medicineForm.availability}
                    onChange={(e) => setMedicineForm({ ...medicineForm, availability: e.target.value })}
                    className="w-full p-2 bg-sand-50 border border-primary-100 rounded-xl text-xs"
                  >
                    <option value="AVAILABLE">Available</option>
                    <option value="OUT_OF_STOCK">Out of Stock</option>
                    <option value="HIDDEN">Hidden</option>
                  </select>
                </div>
              </div>

              {/* Modal Buttons */}
              <div className="pt-4 border-t border-primary-50 flex justify-end gap-3">
                <button
                  type="button"
                  onClick={() => setMedicineModal({ open: false, mode: 'add', data: null })}
                  className="px-5 py-2.5 rounded-xl border border-primary-100 hover:bg-sand-50 text-sand-700 text-sm font-medium transition-colors cursor-pointer"
                >
                  Cancel
                </button>
                <button
                  type="submit"
                  disabled={saving}
                  className="inline-flex items-center gap-2 bg-primary-600 hover:bg-primary-700 text-white font-medium px-6 py-2.5 rounded-xl text-sm cursor-pointer"
                >
                  <Save size={16} />
                  <span>{medicineModal.mode === 'add' ? 'Add Medicine' : 'Save Changes'}</span>
                </button>
              </div>

            </form>
          </div>
        </div>
      )}

      {/* CATEGORY MODAL FORM (ADD/EDIT) */}
      {categoryModal.open && (
        <div className="fixed inset-0 bg-primary-950/65 backdrop-blur-xs flex items-center justify-center p-4 z-50 animate-in fade-in duration-150 overflow-y-auto">
          <div className="bg-white rounded-3xl w-full max-w-md overflow-hidden border border-primary-100 shadow-xl max-h-[95vh] flex flex-col">
            
            <div className="bg-primary-900 text-white p-5 flex justify-between items-center">
              <h3 className="font-display font-bold text-lg">
                {categoryModal.mode === 'add' ? 'Create New Category' : 'Edit Category'}
              </h3>
              <button 
                onClick={() => setCategoryModal({ open: false, mode: 'add', data: null })}
                className="text-primary-300 hover:text-white transition-colors cursor-pointer"
              >
                <X size={20} />
              </button>
            </div>

            <form onSubmit={handleSaveCategory} className="p-6 space-y-4 overflow-y-auto flex-grow">
              <div className="space-y-1.5">
                <label className="text-xs font-bold text-primary-900">Telugu Category Name (తెలుగు పేరు)</label>
                <input
                  type="text"
                  value={categoryForm.teluguName}
                  onChange={(e) => setCategoryForm({ ...categoryForm, teluguName: e.target.value })}
                  placeholder="e.g. ఆస్తమా డస్ట్ ఎలర్జీ"
                  className="w-full p-2.5 bg-sand-50 border border-primary-100 rounded-xl text-sm"
                  required
                />
              </div>

              <div className="space-y-1.5">
                <label className="text-xs font-bold text-primary-900">English Category Name</label>
                <input
                  type="text"
                  value={categoryForm.englishName}
                  onChange={(e) => setCategoryForm({ ...categoryForm, englishName: e.target.value })}
                  placeholder="e.g. Asthma / Dust Allergy"
                  className="w-full p-2.5 bg-sand-50 border border-primary-100 rounded-xl text-sm"
                  required
                />
              </div>

              <div className="grid grid-cols-2 gap-4">
                <div className="space-y-1.5">
                  <label className="text-xs font-bold text-primary-900">Telugu Subtitle</label>
                  <input
                    type="text"
                    value={categoryForm.teluguSubtitle}
                    onChange={(e) => setCategoryForm({ ...categoryForm, teluguSubtitle: e.target.value })}
                    placeholder="e.g. ఆస్తమా సైనస్"
                    className="w-full p-2.5 bg-sand-50 border border-primary-100 rounded-xl text-sm"
                  />
                </div>
                <div className="space-y-1.5">
                  <label className="text-xs font-bold text-primary-900">English Subtitle</label>
                  <input
                    type="text"
                    value={categoryForm.englishSubtitle}
                    onChange={(e) => setCategoryForm({ ...categoryForm, englishSubtitle: e.target.value })}
                    placeholder="e.g. Asthma / Sinus"
                    className="w-full p-2.5 bg-sand-50 border border-primary-100 rounded-xl text-sm"
                  />
                </div>
              </div>

              <div className="space-y-1.5">
                <label className="text-xs font-bold text-primary-900">Category Description</label>
                <textarea
                  value={categoryForm.description}
                  onChange={(e) => setCategoryForm({ ...categoryForm, description: e.target.value })}
                  placeholder="Provide category description details..."
                  rows="2"
                  className="w-full p-2.5 bg-sand-50 border border-primary-100 rounded-xl text-sm"
                ></textarea>
              </div>

              <div className="grid grid-cols-2 gap-4">
                <div className="space-y-1.5">
                  <label className="text-xs font-bold text-primary-900">Display Order Sort</label>
                  <input
                    type="number"
                    value={categoryForm.displayOrder}
                    onChange={(e) => setCategoryForm({ ...categoryForm, displayOrder: parseInt(e.target.value) || 0 })}
                    className="w-full p-2.5 bg-sand-50 border border-primary-100 rounded-xl text-sm font-mono"
                    required
                  />
                </div>
              </div>

              <div className="space-y-2">
                <label className="text-xs font-bold text-primary-900 block">Category Image Icon</label>
                <div className="flex items-center gap-4">
                  <div className="h-14 w-14 rounded-xl bg-sand-100 border border-primary-100 flex items-center justify-center overflow-hidden shrink-0">
                    {categoryForm.imageUrl ? (
                      <img src={categoryForm.imageUrl} alt="Category preview" className="h-full w-full object-cover" />
                    ) : (
                      <ImageIcon className="text-sand-400" size={20} />
                    )}
                  </div>
                  <input
                    type="file"
                    accept="image/*"
                    onChange={(e) => handleImageUpload(e.target.files[0], 'category')}
                    className="hidden"
                    id="category-photo-upload"
                  />
                  <label htmlFor="category-photo-upload" className="inline-flex items-center gap-2 bg-primary-50 border border-primary-200 hover:bg-primary-100 text-primary-800 text-xs font-semibold px-4 py-2 rounded-xl cursor-pointer">
                    <Upload size={12} />
                    <span>Upload Image</span>
                  </label>
                </div>
              </div>

              <div className="flex items-center gap-3 bg-sand-50 p-2.5 rounded-xl border border-primary-100">
                <input
                  type="checkbox"
                  id="cat-enabled"
                  checked={categoryForm.isEnabled}
                  onChange={(e) => setCategoryForm({ ...categoryForm, isEnabled: e.target.checked })}
                  className="h-4 w-4 text-primary-600 focus:ring-primary-500 rounded border-primary-300"
                />
                <label htmlFor="cat-enabled" className="text-sm font-semibold text-primary-955 select-none">
                  Enable Category (Display publicly)
                </label>
              </div>

              <div className="pt-4 border-t border-primary-50 flex justify-end gap-3">
                <button
                  type="button"
                  onClick={() => setCategoryModal({ open: false, mode: 'add', data: null })}
                  className="px-4 py-2 rounded-xl border border-primary-100 hover:bg-sand-50 text-sand-700 text-sm font-medium transition-colors cursor-pointer"
                >
                  Cancel
                </button>
                <button
                  type="submit"
                  disabled={saving}
                  className="inline-flex items-center gap-2 bg-primary-600 hover:bg-primary-700 text-white font-medium px-5 py-2 rounded-xl text-sm cursor-pointer"
                >
                  <Save size={14} />
                  <span>{categoryModal.mode === 'add' ? 'Create' : 'Save'}</span>
                </button>
              </div>
            </form>
          </div>
        </div>
      )}

      {/* BENEFIT MODAL FORM */}
      {benefitModal.open && (
        <div className="fixed inset-0 bg-primary-950/65 backdrop-blur-xs flex items-center justify-center p-4 z-50 animate-in fade-in duration-150">
          <div className="bg-white rounded-3xl w-full max-w-md overflow-hidden border border-primary-100 shadow-xl">
            <div className="bg-primary-900 text-white p-5 flex justify-between items-center">
              <h3 className="font-display font-bold text-lg">
                {benefitModal.mode === 'add' ? 'Add Benefit Card' : 'Edit Benefit Card'}
              </h3>
              <button onClick={() => setBenefitModal({ open: false, mode: 'add', data: null })} className="text-primary-300 hover:text-white transition-colors cursor-pointer"><X size={20} /></button>
            </div>
            <form onSubmit={handleSaveBenefit} className="p-6 space-y-4">
              <div className="space-y-1.5">
                <label className="text-xs font-bold text-primary-900">Title</label>
                <input
                  type="text"
                  value={benefitForm.title}
                  onChange={(e) => setBenefitForm({ ...benefitForm, title: e.target.value })}
                  placeholder="e.g. 100% Pure Herbs"
                  className="w-full p-2.5 bg-sand-50 border border-primary-100 rounded-xl text-sm"
                  required
                />
              </div>
              <div className="space-y-1.5">
                <label className="text-xs font-bold text-primary-900">Description</label>
                <textarea
                  value={benefitForm.description}
                  onChange={(e) => setBenefitForm({ ...benefitForm, description: e.target.value })}
                  placeholder="We prepare organic blends..."
                  rows="3"
                  className="w-full p-2.5 bg-sand-50 border border-primary-100 rounded-xl text-sm"
                  required
                ></textarea>
              </div>
              <div className="space-y-1.5">
                <label className="text-xs font-bold text-primary-900">Display Order</label>
                <input
                  type="number"
                  value={benefitForm.displayOrder}
                  onChange={(e) => setBenefitForm({ ...benefitForm, displayOrder: parseInt(e.target.value) || 0 })}
                  className="w-full p-2.5 bg-sand-50 border border-primary-100 rounded-xl text-sm font-mono"
                  required
                />
              </div>
              <div className="space-y-2">
                <label className="text-xs font-bold text-primary-900 block">Custom Icon/Image (Optional)</label>
                <div className="flex items-center gap-4">
                  <div className="h-12 w-12 rounded-xl bg-sand-100 border border-primary-100 flex items-center justify-center overflow-hidden shrink-0">
                    {benefitForm.imageUrl ? (
                      <img src={benefitForm.imageUrl} alt="preview" className="h-full w-full object-cover" />
                    ) : (
                      <Award className="text-primary-600" size={18} />
                    )}
                  </div>
                  <input
                    type="file"
                    accept="image/*"
                    onChange={(e) => handleImageUpload(e.target.files[0], 'benefit')}
                    className="hidden"
                    id="benefit-upload"
                  />
                  <label htmlFor="benefit-upload" className="inline-flex items-center gap-2 bg-primary-50 border border-primary-200 hover:bg-primary-100 text-primary-800 text-xs font-semibold px-4 py-2 rounded-xl cursor-pointer">
                    <Upload size={12} />
                    <span>Upload Icon</span>
                  </label>
                </div>
              </div>
              <div className="flex items-center gap-3 bg-sand-50 p-2.5 rounded-xl border border-primary-100">
                <input
                  type="checkbox"
                  id="ben-active"
                  checked={benefitForm.isActive}
                  onChange={(e) => setBenefitForm({ ...benefitForm, isActive: e.target.checked })}
                  className="h-4 w-4 text-primary-600 focus:ring-primary-500 rounded border-primary-300"
                />
                <label htmlFor="ben-active" className="text-sm font-semibold text-primary-955 select-none">Active Card</label>
              </div>
              <div className="pt-4 border-t border-primary-50 flex justify-end gap-3">
                <button type="button" onClick={() => setBenefitModal({ open: false, mode: 'add', data: null })} className="px-4 py-2 rounded-xl border border-primary-100 hover:bg-sand-50 text-sand-700 text-sm font-medium cursor-pointer">Cancel</button>
                <button type="submit" disabled={saving} className="bg-primary-600 hover:bg-primary-700 text-white font-medium px-5 py-2 rounded-xl text-sm cursor-pointer">Save</button>
              </div>
            </form>
          </div>
        </div>
      )}

      {/* TESTIMONIAL MODAL FORM */}
      {testimonialModal.open && (
        <div className="fixed inset-0 bg-primary-950/65 backdrop-blur-xs flex items-center justify-center p-4 z-50 animate-in fade-in duration-150">
          <div className="bg-white rounded-3xl w-full max-w-md overflow-hidden border border-primary-100 shadow-xl">
            <div className="bg-primary-900 text-white p-5 flex justify-between items-center">
              <h3 className="font-display font-bold text-lg">
                {testimonialModal.mode === 'add' ? 'Add Testimonial' : 'Edit Testimonial'}
              </h3>
              <button onClick={() => setTestimonialModal({ open: false, mode: 'add', data: null })} className="text-primary-300 hover:text-white transition-colors cursor-pointer"><X size={20} /></button>
            </div>
            <form onSubmit={handleSaveTestimonial} className="p-6 space-y-4">
              <div className="space-y-1.5">
                <label className="text-xs font-bold text-primary-900">Customer Name</label>
                <input
                  type="text"
                  value={testimonialForm.name}
                  onChange={(e) => setTestimonialForm({ ...testimonialForm, name: e.target.value })}
                  placeholder="e.g. Priyanka Sen"
                  className="w-full p-2.5 bg-sand-50 border border-primary-100 rounded-xl text-sm"
                  required
                />
              </div>
              <div className="space-y-1.5">
                <label className="text-xs font-bold text-primary-900">Testimonial content</label>
                <textarea
                  value={testimonialForm.content}
                  onChange={(e) => setTestimonialForm({ ...testimonialForm, content: e.target.value })}
                  placeholder="The remedies helped me..."
                  rows="3"
                  className="w-full p-2.5 bg-sand-50 border border-primary-100 rounded-xl text-sm"
                  required
                ></textarea>
              </div>
              <div className="grid grid-cols-2 gap-4">
                <div className="space-y-1.5">
                  <label className="text-xs font-bold text-primary-900">Rating (1-5 Stars)</label>
                  <input
                    type="number"
                    min="1"
                    max="5"
                    value={testimonialForm.rating}
                    onChange={(e) => setTestimonialForm({ ...testimonialForm, rating: parseInt(e.target.value) || 5 })}
                    className="w-full p-2.5 bg-sand-50 border border-primary-100 rounded-xl text-sm font-mono"
                    required
                  />
                </div>
                <div className="space-y-1.5">
                  <label className="text-xs font-bold text-primary-900">Display Order</label>
                  <input
                    type="number"
                    value={testimonialForm.displayOrder}
                    onChange={(e) => setTestimonialForm({ ...testimonialForm, displayOrder: parseInt(e.target.value) || 0 })}
                    className="w-full p-2.5 bg-sand-50 border border-primary-100 rounded-xl text-sm font-mono"
                    required
                  />
                </div>
              </div>
              <div className="space-y-2">
                <label className="text-xs font-bold text-primary-900 block">Customer Avatar Photo (Optional)</label>
                <div className="flex items-center gap-4">
                  <div className="h-12 w-12 rounded-full bg-sand-100 border border-primary-100 flex items-center justify-center overflow-hidden shrink-0">
                    {testimonialForm.imageUrl ? (
                      <img src={testimonialForm.imageUrl} alt="preview" className="h-full w-full object-cover" />
                    ) : (
                      <User className="text-sand-400" size={18} />
                    )}
                  </div>
                  <input
                    type="file"
                    accept="image/*"
                    onChange={(e) => handleImageUpload(e.target.files[0], 'testimonial')}
                    className="hidden"
                    id="testimonial-upload"
                  />
                  <label htmlFor="testimonial-upload" className="inline-flex items-center gap-2 bg-primary-50 border border-primary-200 hover:bg-primary-100 text-primary-800 text-xs font-semibold px-4 py-2 rounded-xl cursor-pointer">
                    <Upload size={12} />
                    <span>Upload Photo</span>
                  </label>
                </div>
              </div>
              <div className="flex items-center gap-3 bg-sand-50 p-2.5 rounded-xl border border-primary-100">
                <input
                  type="checkbox"
                  id="test-active"
                  checked={testimonialForm.isActive}
                  onChange={(e) => setTestimonialForm({ ...testimonialForm, isActive: e.target.checked })}
                  className="h-4 w-4 text-primary-600 focus:ring-primary-500 rounded border-primary-300"
                />
                <label htmlFor="test-active" className="text-sm font-semibold text-primary-955 select-none">Active Testimonial</label>
              </div>
              <div className="pt-4 border-t border-primary-50 flex justify-end gap-3">
                <button type="button" onClick={() => setTestimonialModal({ open: false, mode: 'add', data: null })} className="px-4 py-2 rounded-xl border border-primary-100 hover:bg-sand-50 text-sand-700 text-sm font-medium cursor-pointer">Cancel</button>
                <button type="submit" disabled={saving} className="bg-primary-600 hover:bg-primary-700 text-white font-medium px-5 py-2 rounded-xl text-sm cursor-pointer">Save</button>
              </div>
            </form>
          </div>
        </div>
      )}

      {/* PROMOTION MODAL FORM */}
      {promotionModal.open && (
        <div className="fixed inset-0 bg-primary-950/65 backdrop-blur-xs flex items-center justify-center p-4 z-50 animate-in fade-in duration-150">
          <div className="bg-white rounded-3xl w-full max-w-md overflow-hidden border border-primary-100 shadow-xl">
            <div className="bg-primary-900 text-white p-5 flex justify-between items-center">
              <h3 className="font-display font-bold text-lg">
                {promotionModal.mode === 'add' ? 'Create Special Promotion' : 'Edit Promotion'}
              </h3>
              <button onClick={() => setPromotionModal({ open: false, mode: 'add', data: null })} className="text-primary-300 hover:text-white transition-colors cursor-pointer"><X size={20} /></button>
            </div>
            <form onSubmit={handleSavePromotion} className="p-6 space-y-4">
              <div className="space-y-1.5">
                <label className="text-xs font-bold text-primary-900">Offer Title</label>
                <input
                  type="text"
                  value={promotionForm.title}
                  onChange={(e) => setPromotionForm({ ...promotionForm, title: e.target.value })}
                  placeholder="e.g. Monsoon Special Deal"
                  className="w-full p-2.5 bg-sand-50 border border-primary-100 rounded-xl text-sm"
                  required
                />
              </div>
              <div className="space-y-1.5">
                <label className="text-xs font-bold text-primary-900">Description</label>
                <textarea
                  value={promotionForm.description}
                  onChange={(e) => setPromotionForm({ ...promotionForm, description: e.target.value })}
                  placeholder="Get 20% off all supplements..."
                  rows="3"
                  className="w-full p-2.5 bg-sand-50 border border-primary-100 rounded-xl text-sm"
                  required
                ></textarea>
              </div>
              <div className="grid grid-cols-2 gap-4">
                <div className="space-y-1.5">
                  <label className="text-xs font-bold text-primary-900">Button Call-to-Action</label>
                  <input
                    type="text"
                    value={promotionForm.buttonText}
                    onChange={(e) => setPromotionForm({ ...promotionForm, buttonText: e.target.value })}
                    placeholder="e.g. View Catalog"
                    className="w-full p-2.5 bg-sand-50 border border-primary-100 rounded-xl text-sm"
                  />
                </div>
                <div className="space-y-1.5">
                  <label className="text-xs font-bold text-primary-900">Target Button URL</label>
                  <input
                    type="text"
                    value={promotionForm.buttonUrl}
                    onChange={(e) => setPromotionForm({ ...promotionForm, buttonUrl: e.target.value })}
                    placeholder="e.g. /medicines"
                    className="w-full p-2.5 bg-sand-50 border border-primary-100 rounded-xl text-sm"
                  />
                </div>
              </div>
              <div className="grid grid-cols-2 gap-4">
                <div className="space-y-1.5">
                  <label className="text-xs font-bold text-primary-900">Start Date</label>
                  <input
                    type="date"
                    value={promotionForm.startDate}
                    onChange={(e) => setPromotionForm({ ...promotionForm, startDate: e.target.value })}
                    className="w-full p-2.5 bg-sand-50 border border-primary-100 rounded-xl text-sm font-mono"
                  />
                </div>
                <div className="space-y-1.5">
                  <label className="text-xs font-bold text-primary-900">End Date</label>
                  <input
                    type="date"
                    value={promotionForm.endDate}
                    onChange={(e) => setPromotionForm({ ...promotionForm, endDate: e.target.value })}
                    className="w-full p-2.5 bg-sand-50 border border-primary-100 rounded-xl text-sm font-mono"
                  />
                </div>
              </div>
              <div className="space-y-2">
                <label className="text-xs font-bold text-primary-900 block">Offer Banner Photo (Optional)</label>
                <div className="flex items-center gap-4">
                  <div className="h-12 w-12 rounded-xl bg-sand-100 border border-primary-100 flex items-center justify-center overflow-hidden shrink-0">
                    {promotionForm.imageUrl ? (
                      <img src={promotionForm.imageUrl} alt="preview" className="h-full w-full object-cover" />
                    ) : (
                      <Sparkles className="text-primary-600" size={18} />
                    )}
                  </div>
                  <input
                    type="file"
                    accept="image/*"
                    onChange={(e) => handleImageUpload(e.target.files[0], 'promotion')}
                    className="hidden"
                    id="promotion-upload"
                  />
                  <label htmlFor="promotion-upload" className="inline-flex items-center gap-2 bg-primary-50 border border-primary-200 hover:bg-primary-100 text-primary-800 text-xs font-semibold px-4 py-2 rounded-xl cursor-pointer">
                    <Upload size={12} />
                    <span>Upload Image</span>
                  </label>
                </div>
              </div>
              <div className="flex items-center gap-3 bg-sand-50 p-2.5 rounded-xl border border-primary-100">
                <input
                  type="checkbox"
                  id="promo-active"
                  checked={promotionForm.isActive}
                  onChange={(e) => setPromotionForm({ ...promotionForm, isActive: e.target.checked })}
                  className="h-4 w-4 text-primary-600 focus:ring-primary-500 rounded border-primary-300"
                />
                <label htmlFor="promo-active" className="text-sm font-semibold text-primary-955 select-none">Activate Promotion Banner</label>
              </div>
              <div className="pt-4 border-t border-primary-50 flex justify-end gap-3">
                <button type="button" onClick={() => setPromotionModal({ open: false, mode: 'add', data: null })} className="px-4 py-2 rounded-xl border border-primary-100 hover:bg-sand-50 text-sand-700 text-sm font-medium cursor-pointer">Cancel</button>
                <button type="submit" disabled={saving} className="bg-primary-600 hover:bg-primary-700 text-white font-medium px-5 py-2 rounded-xl text-sm cursor-pointer">Save</button>
              </div>
            </form>
          </div>
        </div>
      )}

      {/* NAVIGATION LINK MODAL FORM */}
      {navigationItemModal.open && (
        <div className="fixed inset-0 bg-primary-950/65 backdrop-blur-xs flex items-center justify-center p-4 z-50 animate-in fade-in duration-150">
          <div className="bg-white rounded-3xl w-full max-w-md overflow-hidden border border-primary-100 shadow-xl">
            <div className="bg-primary-900 text-white p-5 flex justify-between items-center">
              <h3 className="font-display font-bold text-lg">
                {navigationItemModal.mode === 'add' ? 'Create Navigation Link' : 'Edit Navigation Link'}
              </h3>
              <button onClick={() => setNavigationItemModal({ open: false, mode: 'add', data: null })} className="text-primary-300 hover:text-white transition-colors cursor-pointer"><X size={20} /></button>
            </div>
            <form onSubmit={handleSaveNavigationItem} className="p-6 space-y-4">
              <div className="space-y-1.5">
                <label className="text-xs font-bold text-primary-900">Menu Link Name</label>
                <input
                  type="text"
                  value={navigationItemForm.name}
                  onChange={(e) => setNavigationItemForm({ ...navigationItemForm, name: e.target.value })}
                  placeholder="e.g. Products Catalogue"
                  className="w-full p-2.5 bg-sand-50 border border-primary-100 rounded-xl text-sm"
                  required
                />
              </div>
              <div className="space-y-1.5">
                <label className="text-xs font-bold text-primary-900">Target URL Route Path</label>
                <input
                  type="text"
                  value={navigationItemForm.url}
                  onChange={(e) => setNavigationItemForm({ ...navigationItemForm, url: e.target.value })}
                  placeholder="e.g. /medicines or https://wa.me/..."
                  className="w-full p-2.5 bg-sand-50 border border-primary-100 rounded-xl text-sm font-mono"
                  required
                />
              </div>
              <div className="space-y-1.5">
                <label className="text-xs font-bold text-primary-900">Display Order</label>
                <input
                  type="number"
                  value={navigationItemForm.displayOrder}
                  onChange={(e) => setNavigationItemForm({ ...navigationItemForm, displayOrder: parseInt(e.target.value) || 0 })}
                  className="w-full p-2.5 bg-sand-50 border border-primary-100 rounded-xl text-sm font-mono"
                  required
                />
              </div>
              <div className="flex items-center gap-3 bg-sand-50 p-2.5 rounded-xl border border-primary-100">
                <input
                  type="checkbox"
                  id="nav-active"
                  checked={navigationItemForm.isActive}
                  onChange={(e) => setNavigationItemForm({ ...navigationItemForm, isActive: e.target.checked })}
                  className="h-4 w-4 text-primary-600 focus:ring-primary-500 rounded border-primary-300"
                />
                <label htmlFor="nav-active" className="text-sm font-semibold text-primary-955 select-none">Active Link</label>
              </div>
              <div className="pt-4 border-t border-primary-50 flex justify-end gap-3">
                <button type="button" onClick={() => setNavigationItemModal({ open: false, mode: 'add', data: null })} className="px-4 py-2 rounded-xl border border-primary-100 hover:bg-sand-50 text-sand-700 text-sm font-medium cursor-pointer">Cancel</button>
                <button type="submit" disabled={saving} className="bg-primary-600 hover:bg-primary-700 text-white font-medium px-5 py-2 rounded-xl text-sm cursor-pointer">Save</button>
              </div>
            </form>
          </div>
        </div>
      )}

      {/* DELETE CONFIRMATION DIALOG */}
      {deleteConfirm.open && (
        <div className="fixed inset-0 bg-primary-950/65 backdrop-blur-xs flex items-center justify-center p-4 z-55 animate-in fade-in duration-150">
          <div className="bg-white rounded-3xl w-full max-w-sm p-6 border border-primary-100 shadow-xl space-y-4">
            
            <div className="flex items-center gap-3 text-rose-600">
              <ShieldAlert size={28} />
              <h3 className="font-display font-bold text-lg text-primary-950">Confirm Deletion</h3>
            </div>
            
            <p className="text-sm text-sand-600 leading-relaxed">
              Are you sure you want to delete <strong className="text-primary-950">"{deleteConfirm.name}"</strong>? 
              {deleteConfirm.type === 'category' && (
                <span className="block mt-2 text-rose-800 bg-rose-50 p-3 rounded-xl border border-rose-100 text-xs">
                  <strong>Warning:</strong> Deleting this category will un-assign all medicines belonging to it.
                </span>
              )}
            </p>

            <div className="flex justify-end gap-3 pt-2">
              <button
                onClick={() => setDeleteConfirm({ open: false, type: '', id: null, name: '' })}
                className="px-4 py-2 rounded-xl border border-primary-100 hover:bg-sand-50 text-sand-700 text-xs font-medium cursor-pointer"
              >
                Cancel
              </button>
              <button
                onClick={confirmDelete}
                disabled={saving}
                className="inline-flex items-center gap-1.5 bg-rose-600 hover:bg-rose-700 text-white font-semibold px-4.5 py-2 rounded-xl text-xs cursor-pointer"
              >
                <Trash size={12} />
                <span>Delete</span>
              </button>
            </div>

          </div>
        </div>
      )}

    </div>
  );
}
