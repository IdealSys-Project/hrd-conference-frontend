'use client';

import React, { useState } from 'react';
import './sponsorship-form.css';

const SponsorshipForm: React.FC = () => {
  const [formData, setFormData] = useState({
    fullName: '',
    email: '',
    company: '',
    jobTitle: '',
    contactNumber: '',
    interest: ''
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log('Form submitted:', formData);
    alert('Thank you for your interest! We will contact you soon.');
    
    setFormData({
      fullName: '',
      email: '',
      company: '',
      jobTitle: '',
      contactNumber: '',
      interest: ''
    });
  };

  return (
    <section id="sponsorship" className="sponsorship-section py-24">
      <div className="container mx-auto px-4">
        <div className="flex justify-center">
          <div className="w-full max-w-3xl">
            <div className="text-center mb-12">
              <h2 className="title gradient-title wow fadeInUp" data-wow-delay="0.4s">
                Sponsorship Packages
              </h2>
              <p className="mt-8 wow fadeInUp text-black" data-wow-delay="0.8s">
                Showcase your brand to a targeted audience of HR and L&D
                professionals. Our sponsorship packages offer exceptional
                visibility and networking opportunities.
              </p>
            </div>
          </div>
        </div>
        
        <div className="flex flex-wrap justify-center">
          {/* Left Column - Sponsorship Cards */}
          <div className="w-full lg:w-5/12 px-4">
            {/* Card 1: Sponsorship Packages */}
            <div className="sponsor-info-card wow fadeInUp" data-wow-delay="0.2s">
              <div className="sponsor-info-header">
                <h3 className="sponsor-info-title">Sponsorship Packages</h3>
                <div className="sponsor-info-icon">
                  <svg className="header-icon" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2"></polygon>
                  </svg>
                </div>
              </div>
              <div className="sponsor-info-content">
                <ul className="sponsor-info-list">
                  <li className="sponsor-info-item">
                    <div className="package-info">
                      <div className="package-color gold-color"></div>
                      <span className="package-name">Gold Sponsor:</span>
                    </div>
                    <span className="package-slots">2 slots available</span>
                  </li>
                  <li className="sponsor-info-item">
                    <div className="package-info">
                      <div className="package-color silver-color"></div>
                      <span className="package-name">Silver Sponsor:</span>
                    </div>
                    <span className="package-slots">2 slots available</span>
                  </li>
                  <li className="sponsor-info-item">
                    <div className="package-info">
                      <div className="package-color bronze-color"></div>
                      <span className="package-name">Bronze Sponsor:</span>
                    </div>
                    <span className="package-slots">1 slot available</span>
                  </li>
                </ul>
              </div>
            </div>

            {/* Card 2: Exhibition Space */}
            <div className="sponsor-info-card wow fadeInUp" data-wow-delay="0.4s">
              <div className="sponsor-info-header">
                <h3 className="sponsor-info-title">Exhibition Space</h3>
                <div className="sponsor-info-icon">
                  <svg className="header-icon" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <rect x="2" y="3" width="20" height="14" rx="2" ry="2"></rect>
                    <line x1="8" y1="21" x2="16" y2="21"></line>
                    <line x1="12" y1="17" x2="12" y2="21"></line>
                  </svg>
                </div>
              </div>
              <div className="sponsor-info-content">
                <div className="exhibition-space-info">
                  <div className="exhibition-text">
                    <span className="exhibition-highlight text-black">
                      Limited to 20 slots
                    </span>
                    <p className="text-black">
                      Showcase your products and services at our exclusive
                      exhibition area
                    </p>
                  </div>
                </div>
              </div>
            </div>

            {/* Card 3: Customized Sponsorship */}
            <div className="sponsor-info-card wow fadeInUp" data-wow-delay="0.6s">
              <div className="sponsor-info-header">
                <h3 className="sponsor-info-title">Customized Sponsorship</h3>
                <div className="sponsor-info-icon">
                  <svg className="header-icon" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M12 19l7-7 3 3-7 7-3-3z"></path>
                    <path d="M18 13l-1.5-7.5L2 2l3.5 14.5L13 18l5-5z"></path>
                    <path d="M2 2l7.586 7.586"></path>
                    <circle cx="11" cy="11" r="2"></circle>
                  </svg>
                </div>
              </div>
              <div className="sponsor-info-content">
                <p className="sponsor-info-text text-black">Kindly contact us at:</p>
                <ul className="sponsor-contact-list">
                  <li className="sponsor-contact-item">
                    <svg className="contact-icon" xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                      <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"></path>
                      <polyline points="22,6 12,13 2,6"></polyline>
                    </svg>
                    <a href="mailto:Farah@roomofleaders.com">
                      Farah@roomofleaders.com
                    </a>
                  </li>
                </ul>
              </div>
            </div>
          </div>

          {/* Right Column - Sponsorship Form */}
          <div className="w-full lg:w-7/12 px-4">
            <div className="sponsor-contact-form wow fadeInRight" data-wow-delay="0.5s">
              <div className="form-header">
                <h4 className="sponsor-form-title">Sponsorship Inquiry Form</h4>
              </div>
              <form id="sponsor-form" onSubmit={handleSubmit}>
                <div className="form-fields-container">
                  <div className="sponsor-form-group">
                    <div className="input-with-icon">
                      <svg className="form-icon" xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                        <path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2"></path>
                        <circle cx="12" cy="7" r="4"></circle>
                      </svg>
                      <input
                        type="text"
                        name="fullName"
                        className="sponsor-form-control"
                        placeholder="Full Name"
                        required
                        value={formData.fullName}
                        onChange={handleChange}
                      />
                    </div>
                  </div>
                  <div className="sponsor-form-group">
                    <div className="input-with-icon">
                      <svg className="form-icon" xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                        <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"></path>
                        <polyline points="22,6 12,13 2,6"></polyline>
                      </svg>
                      <input
                        type="email"
                        name="email"
                        className="sponsor-form-control"
                        placeholder="Email Address"
                        required
                        value={formData.email}
                        onChange={handleChange}
                      />
                    </div>
                  </div>
                  <div className="sponsor-form-group">
                    <div className="input-with-icon">
                      <svg className="form-icon" xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                        <rect x="4" y="2" width="16" height="20" rx="2" ry="2"></rect>
                        <line x1="12" y1="6" x2="12" y2="6.01"></line>
                        <line x1="12" y1="10" x2="12" y2="10.01"></line>
                        <line x1="12" y1="14" x2="12" y2="14.01"></line>
                        <line x1="12" y1="18" x2="12" y2="18.01"></line>
                      </svg>
                      <input
                        type="text"
                        name="company"
                        className="sponsor-form-control"
                        placeholder="Company Name"
                        required
                        value={formData.company}
                        onChange={handleChange}
                      />
                    </div>
                  </div>
                  <div className="sponsor-form-group">
                    <div className="input-with-icon">
                      <svg className="form-icon" xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                        <rect x="2" y="7" width="20" height="14" rx="2" ry="2"></rect>
                        <path d="M16 21V5a2 2 0 0 0-2-2h-4a2 2 0 0 0-2 2v16"></path>
                      </svg>
                      <input
                        type="text"
                        name="jobTitle"
                        className="sponsor-form-control"
                        placeholder="Job Title"
                        required
                        value={formData.jobTitle}
                        onChange={handleChange}
                      />
                    </div>
                  </div>
                  <div className="sponsor-form-group">
                    <div className="input-with-icon">
                      <svg className="form-icon" xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                        <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"></path>
                      </svg>
                      <input
                        type="tel"
                        name="contactNumber"
                        className="sponsor-form-control"
                        placeholder="Contact Number"
                        required
                        value={formData.contactNumber}
                        onChange={handleChange}
                      />
                    </div>
                  </div>
                  <div className="sponsor-form-group">
                    <div className="input-with-icon">
                      <svg className="form-icon" xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                        <polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2"></polygon>
                      </svg>
                      <select 
                        name="interest" 
                        className="sponsor-form-control" 
                        required
                        value={formData.interest}
                        onChange={handleChange}
                      >
                        <option value="" disabled>Select Interest</option>
                        <option value="speaking">Speaking Opportunity</option>
                        <option value="exhibitor">Exhibitor</option>
                        <option value="branding">Branding Packages</option>
                        <option value="media">Media</option>
                        <option value="sponsor">Sponsor</option>
                      </select>
                    </div>
                  </div>
                </div>
                <button type="submit" className="sponsor-form-submit">
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

export default SponsorshipForm;
