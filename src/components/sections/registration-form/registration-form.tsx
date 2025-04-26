'use client';

import React, { useState } from 'react';
import Image from 'next/image';
import './registration-form.css';

const RegistrationForm: React.FC = () => {
  const [formData, setFormData] = useState({
    fullName: '',
    email: '',
    company: '',
    jobTitle: '',
    contactNumber: '',
    promoCode: ''
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log('Registration submitted:', formData);
    alert('Thank you for your registration! We will contact you soon.');
    
    setFormData({
      fullName: '',
      email: '',
      company: '',
      jobTitle: '',
      contactNumber: '',
      promoCode: ''
    });
  };

  const pricingPackages = [
    {
      id: 1,
      icon: (
        <svg className="w-8 h-8 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 5v2m0 4v2m0 4v2M5 5a2 2 0 00-2 2v3a2 2 0 110 4v3a2 2 0 002 2h14a2 2 0 002-2v-3a2 2 0 110-4V7a2 2 0 00-2-2H5z" />
        </svg>
      ),
      title: 'Normal Price',
      price: 'RM 1900',
      info: 'for 1 Pax'
    },
    {
      id: 2,
      icon: (
        <svg className="w-8 h-8 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.75 17L9 20l-1 1h8l-1-1-.75-3M3 13h18M5 17h14a2 2 0 002-2V5a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
        </svg>
      ),
      title: 'Solution Provider Price',
      price: 'RM 2600',
      info: 'for 1 Pax',
      description: 'Vendors, Suppliers, and Solution Providers'
    },
    {
      id: 3,
      icon: (
        <svg className="w-8 h-8 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
        </svg>
      ),
      title: 'Table Group Price',
      price: 'RM 8900',
      info: '6 Pax for Dedicated Table',
      description: 'Limited to 20 tables/company only'
    },
    {
      id: 4,
      icon: (
        <svg className="w-8 h-8 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3.055 11H5a2 2 0 012 2v1a2 2 0 002 2 2 2 0 012 2v2.945M8 3.935V5.5A2.5 2.5 0 0010.5 8h.5a2 2 0 012 2 2 2 0 104 0 2 2 0 012-2h1.064M15 20.488V18a2 2 0 012-2h3.064M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
        </svg>
      ),
      title: 'International Price',
      price: 'USD 650',
      info: 'for 1 Pax'
    }
  ];

  return (
    <section id="registration" className="registration-section py-16">
      <div className="container mx-auto px-4">
        <div className="flex justify-center mb-12">
          <div className="w-full max-w-3xl">
            <div className="text-center">
              <h2 className="text-4xl font-bold text-purple-800 mb-8">
                Pricing Packages
              </h2>
            </div>
          </div>
        </div>

        {/* Pricing Packages */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
          {pricingPackages.map((pkg) => (
            <div key={pkg.id} className="pricing-card">
              <div className="pricing-card-header">
                <div className="pricing-icon-container">
                  {pkg.icon}
                </div>
                <h3 className="pricing-title">{pkg.title}</h3>
              </div>
              <div className="pricing-price">
                <span className="price">{pkg.price}</span>
                <p className="price-info">{pkg.info}</p>
              </div>
              {pkg.description && (
                <p className="pricing-description">{pkg.description}</p>
              )}
            </div>
          ))}
        </div>

        {/* Registration Form */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          <div className="hrd-corp-container">
            <div className="text-center">
              <Image
                src="/assets/images/registration-form/HRD_Corp_Claimable_logo.png"
                alt="HRD Corp Claimable"
                width={300}
                height={300}
                className="mx-auto"
              />
              <p className="mt-4 text-gray-800 font-bold">
                The Conference is fully HRD Corp Claimable.
              </p>
            </div>
          </div>

          <div className="registration-form-container">
            <div className="bg-white rounded-lg shadow-lg p-8">
              <div className="text-center mb-6">
                <h4 className="text-2xl font-bold text-gray-800">Registration Form</h4>
              </div>
              <form id="registration-form" onSubmit={handleSubmit}>
                <div className="mb-4">
                  <div className="relative rounded-full bg-gray-50 flex items-center px-4 py-3 shadow-sm">
                    <svg className="w-5 h-5 text-gray-500 mr-3" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                      <path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2"></path>
                      <circle cx="12" cy="7" r="4"></circle>
                    </svg>
                    <input
                      type="text"
                      name="fullName"
                      className="w-full bg-transparent border-none focus:outline-none text-gray-700"
                      placeholder="Full Name"
                      required
                      value={formData.fullName}
                      onChange={handleChange}
                    />
                  </div>
                </div>
                
                <div className="mb-4">
                  <div className="relative rounded-full bg-gray-50 flex items-center px-4 py-3 shadow-sm">
                    <svg className="w-5 h-5 text-gray-500 mr-3" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                      <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"></path>
                      <polyline points="22,6 12,13 2,6"></polyline>
                    </svg>
                    <input
                      type="email"
                      name="email"
                      className="w-full bg-transparent border-none focus:outline-none text-gray-700"
                      placeholder="Email Address"
                      required
                      value={formData.email}
                      onChange={handleChange}
                    />
                  </div>
                </div>
                
                <div className="mb-4">
                  <div className="relative rounded-full bg-gray-50 flex items-center px-4 py-3 shadow-sm">
                    <svg className="w-5 h-5 text-gray-500 mr-3" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                      <rect x="4" y="2" width="16" height="20" rx="2" ry="2"></rect>
                      <line x1="12" y1="6" x2="12" y2="6.01"></line>
                      <line x1="12" y1="10" x2="12" y2="10.01"></line>
                      <line x1="12" y1="14" x2="12" y2="14.01"></line>
                      <line x1="12" y1="18" x2="12" y2="18.01"></line>
                    </svg>
                    <input
                      type="text"
                      name="company"
                      className="w-full bg-transparent border-none focus:outline-none text-gray-700"
                      placeholder="Company Name"
                      required
                      value={formData.company}
                      onChange={handleChange}
                    />
                  </div>
                </div>
                
                <div className="mb-4">
                  <div className="relative rounded-full bg-gray-50 flex items-center px-4 py-3 shadow-sm">
                    <svg className="w-5 h-5 text-gray-500 mr-3" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                      <rect x="2" y="7" width="20" height="14" rx="2" ry="2"></rect>
                      <path d="M16 21V5a2 2 0 0 0-2-2h-4a2 2 0 0 0-2 2v16"></path>
                    </svg>
                    <input
                      type="text"
                      name="jobTitle"
                      className="w-full bg-transparent border-none focus:outline-none text-gray-700"
                      placeholder="Job Title"
                      required
                      value={formData.jobTitle}
                      onChange={handleChange}
                    />
                  </div>
                </div>
                
                <div className="mb-4">
                  <div className="relative rounded-full bg-gray-50 flex items-center px-4 py-3 shadow-sm">
                    <svg className="w-5 h-5 text-gray-500 mr-3" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                      <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"></path>
                    </svg>
                    <input
                      type="tel"
                      name="contactNumber"
                      className="w-full bg-transparent border-none focus:outline-none text-gray-700"
                      placeholder="Contact Number"
                      required
                      value={formData.contactNumber}
                      onChange={handleChange}
                    />
                  </div>
                </div>
                
                <div className="mb-4">
                  <div className="relative rounded-full bg-gray-50 flex items-center px-4 py-3 shadow-sm">
                    <svg className="w-5 h-5 text-gray-500 mr-3" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                      <path d="M21.5 12H16c-.7 0-1.4.3-1.9.8l-4.2 4.2c-.5.5-1.2.8-1.9.8s-1.4-.3-1.9-.8l-.6-.6C5.3 16.3 5 15.7 5 15s.3-1.4.8-1.9L10 9c.5-.5 1.2-.8 1.9-.8h5.6"></path>
                      <path d="M18 1v6h6"></path>
                    </svg>
                    <input
                      type="text"
                      name="promoCode"
                      className="w-full bg-transparent border-none focus:outline-none text-gray-700"
                      placeholder="Promo Code (optional)"
                      value={formData.promoCode}
                      onChange={handleChange}
                    />
                  </div>
                </div>
                
                <button 
                  type="submit" 
                  className="w-full py-3 mt-4 bg-blue-600 text-white font-semibold rounded-full hover:bg-blue-700 transition-all duration-300 flex items-center justify-center"
                >
                  Submit
                </button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default RegistrationForm;
