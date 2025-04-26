'use client';

import React, { useState } from 'react';
import './speaking-form.css';

const SpeakingForm: React.FC = () => {
  const [formData, setFormData] = useState({
    fullName: '',
    email: '',
    company: '',
    jobTitle: '',
    contactNumber: ''
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
    console.log('Speaker proposal submitted:', formData);
    alert('Thank you for your interest! We will contact you soon.');
    
    setFormData({
      fullName: '',
      email: '',
      company: '',
      jobTitle: '',
      contactNumber: ''
    });
  };

  return (
    <section id="speaking-opportunity" className="relative py-12 overflow-hidden">
      <div 
        className="absolute inset-0 z-0" 
        style={{
          backgroundImage: 'url("/assets/images/speaker-opportunity/ai_brochure_1.png")',
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          backgroundRepeat: 'no-repeat',
          backgroundAttachment: 'fixed'
        }}
      >
        <div 
          className="absolute inset-0" 
          style={{
            background: 'linear-gradient(135deg, rgba(64, 84, 178, 0.9), rgba(128, 19, 174, 0.85))',
            zIndex: 1
          }}
        ></div>
      </div>

      <div className="container mx-auto px-4 relative z-10">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold text-white mb-4">Speaking Opportunity</h2>
        </div>
        
        <div className="flex flex-wrap -mx-4">
          {/* Left Column - Text */}
          <div className="w-full lg:w-1/2 px-4 mb-8 lg:mb-0">
            <div className="text-white">
              <h3 className="text-3xl font-bold mb-6 leading-tight">
                Are you interested in speaking at our conference?
              </h3>
              <p className="text-lg mb-6 leading-relaxed">
                Share your ideas, experiences, insights, case studies, or
                solutions and make an impact on this exclusive regional
                conference.
              </p>
            </div>
          </div>
          
          {/* Right Column - Form */}
          <div className="w-full lg:w-1/2 px-4">
            <div className="bg-white rounded-lg shadow-lg p-8 transition-transform duration-300 hover:translate-y-[-5px] hover:shadow-xl">
              <div className="text-center mb-6">
                <h4 className="text-2xl font-bold text-gray-800">Speaker Proposal Form</h4>
              </div>
              <form id="speaking-form" onSubmit={handleSubmit}>
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

export default SpeakingForm;
