import React, { useState } from 'react';
import { ArrowLeft } from 'lucide-react';
import toast, { Toaster } from 'react-hot-toast';

const ConnectForm = ({ onBack }) => {
  const [formData, setFormData] = useState({
    fullName: '',
    companyName: '',
    email: '',
    phone: '',
    website: '',
    location: '',
    termsAgreed: false
  });

  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleInputChange = (e) => {
    const { name, value, type, checked } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: type === 'checkbox' ? checked : value
    }));
  };

  const submitToGoogleSheets = async (data) => {
    const GOOGLE_SCRIPT_URL = "https://script.google.com/macros/s/AKfycbyb96ImeYJwEI_ZXf6_GUkjQEDNqgDwsUoqeQQzRv0Wu5H_zIJE7kS_Y4eI5UGtQjZzDw/exec";

    try {
      console.log("📤 Submitting to Google Apps Script:", data);

      // Create URL-encoded body string
      const body = `fullName=${encodeURIComponent(data.fullName)}&companyName=${encodeURIComponent(data.companyName)}&email=${encodeURIComponent(data.email)}&phone=${encodeURIComponent(data.phone)}&website=${encodeURIComponent(data.website || '')}&location=${encodeURIComponent(data.location || '')}&termsAgreed=${encodeURIComponent(data.termsAgreed)}`;

      const response = await fetch(GOOGLE_SCRIPT_URL, {
        method: "POST",
        headers: { 
          "Content-Type": "application/x-www-form-urlencoded" 
        },
        body: body
      });

      const result = await response.text();
      console.log("✅ Response from Google Apps Script:", result);
      
      // Check if the response indicates success
      return result.includes('Added') || result.includes('success');
      
    } catch (error) {
      console.error("💥 Error submitting to Google Apps Script:", error);
      return false;
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);

    try {
      const success = await submitToGoogleSheets(formData);
      if (success) {
        toast.success('🎉 Form submitted successfully! We will get back to you soon.', {
          duration: 4000,
          position: 'top-right',
          style: {
            background: '#10B981',
            color: '#fff',
            fontWeight: 'bold',
            zIndex: 9999,
          },
        });
        setFormData({
          fullName: '',
          companyName: '',
          email: '',
          phone: '',
          website: '',
          location: '',
          termsAgreed: false
        });
      } else {
        toast.error('❌ Failed to submit form. Please check your internet connection and try again.', {
          duration: 4000,
          position: 'top-right',
          style: {
            background: '#EF4444',
            color: '#fff',
            fontWeight: 'bold',
            zIndex: 9999,
          },
        });
      }
    } catch (error) {
      console.error('Submission error:', error);
      toast.error('⚠️ An unexpected error occurred. Please try again later or contact support.', {
        duration: 4000,
        position: 'top-right',
        style: {
          background: '#EF4444',
          color: '#fff',
          fontWeight: 'bold',
          zIndex: 9999,
        },
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="min-h-screen bg-gray-100 font-sans">
      <main className="max-w-2xl mx-auto p-4">
        <div className="bg-white rounded-2xl shadow-lg border border-gray-200 p-6">
          <form onSubmit={handleSubmit} className="space-y-5">
            {/* Full Name */}
            <div>
              <label className="text-[#014695] block text-sm font-semibold mb-2 text-[#014695]">
                Full Name<span className="text-red-500">*</span>
              </label>
              <input
                type="text"
                name="fullName"
                value={formData.fullName}
                onChange={handleInputChange}
                placeholder="Enter your full name"
                required
                className="w-full rounded-xl border border-gray-300 px-4 py-3 focus:outline-none focus:ring-2 focus:ring-purple-400 focus:border-purple-400"
              />
            </div>

            {/* Company Name */}
            <div>
              <label className="text-[#014695] block text-sm font-semibold mb-2">
                Company Name<span className="text-red-500">*</span>
              </label>
              <input
                type="text"
                name="companyName"
                value={formData.companyName}
                onChange={handleInputChange}
                placeholder="Enter your Company name"
                required
                className="w-full rounded-xl border border-gray-300 px-4 py-3 focus:outline-none focus:ring-2 focus:ring-purple-400 focus:border-purple-400"
              />
            </div>

            {/* Email + Phone */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div>
                <label className="text-[#014695] block text-sm font-semibold mb-2">
                  Email Address<span className="text-red-500">*</span>
                </label>
                <input
                  type="email"
                  name="email"
                  value={formData.email}
                  onChange={handleInputChange}
                  placeholder="Enter your email address"
                  required
                  className="w-full rounded-xl border border-gray-300 px-4 py-3 focus:outline-none focus:ring-2 focus:ring-purple-400 focus:border-purple-400"
                />
              </div>
              <div>
                <label className="text-[#014695] block text-sm font-semibold mb-2">
                  Phone Number<span className="text-red-500">*</span>
                </label>
                <input
                  type="tel"
                  name="phone"
                  value={formData.phone}
                  onChange={handleInputChange}
                  placeholder="Enter your phone number"
                  required
                  className="w-full rounded-xl border border-gray-300 px-4 py-3 focus:outline-none focus:ring-2 focus:ring-purple-400 focus:border-purple-400"
                />
              </div>
            </div>

            {/* Website + Location */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div>
                <label className="text-[#014695] block text-sm font-semibold mb-2">Website</label>
                <input
                  type="url"
                  name="website"
                  value={formData.website}
                  onChange={handleInputChange}
                  placeholder="Enter your website"
                  className="w-full rounded-xl border border-gray-300 px-4 py-3 focus:outline-none focus:ring-2 focus:ring-purple-400 focus:border-purple-400"
                />
              </div>
              <div>
                <label className="text-[#014695] block text-sm font-semibold mb-2">Location</label>
                <input
                  type="text"
                  name="location"
                  value={formData.location}
                  onChange={handleInputChange}
                  placeholder="Enter your location"
                  className="w-full rounded-xl border border-gray-300 px-4 py-3 focus:outline-none focus:ring-2 focus:ring-purple-400 focus:border-purple-400"
                />
              </div>
            </div>

            {/* Checkbox */}
            <div className="flex items-start gap-2 text-sm text-gray-700">
              <input
                type="checkbox"
                name="termsAgreed"
                checked={formData.termsAgreed}
                onChange={handleInputChange}
                required
                className="w-4 h-4 mt-1 accent-purple-600 rounded"
              />
              <p>
                I agree with the{" "}
                <a href="#" className="text-purple-600 hover:underline">
                  Terms
                </a>
                ,{" "}
                <a href="#" className="text-purple-600 hover:underline">
                  Conditions
                </a>{" "}
                &amp;{" "}
                <a href="#" className="text-purple-600 hover:underline">
                  Privacy Policy
                </a>
              </p>
            </div>

            {/* Buttons */}
            <div className="flex gap-4">
              <button
                type="button"
                onClick={onBack}
                className="flex-1 bg-gray-200 hover:bg-gray-300 text-gray-800 font-semibold py-3 rounded-xl transition"
              >
                Back
              </button>
              <button
                type="submit"
                disabled={isSubmitting}
                className="flex-1 bg-[#6D3E93] hover:bg-purple-800 text-white font-semibold py-3 rounded-xl shadow-lg transition disabled:opacity-50"
              >
                {isSubmitting ? 'Submitting...' : 'Connect'}
              </button>
            </div>
          </form>
        </div>
      </main>

      {/* React Hot Toast Container */}
      <Toaster
        position="top-right"
        toastOptions={{
          duration: 4000,
          style: {
            zIndex: 99999,
            minWidth: '300px',
            fontSize: '14px',
          },
          success: {
            style: {
              background: '#10B981',
              color: '#fff',
            },
          },
          error: {
            style: {
              background: '#EF4444',
              color: '#fff',
            },
          },
        }}
      />
    </div>
  );
};

export default ConnectForm;