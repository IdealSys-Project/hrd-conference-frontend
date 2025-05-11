'use client';

import React from 'react';
import './sponsorship-form.css';
import { useSponsorshipAction } from './sponsorship-form.action';
import { getIconSVG } from './svg-mapping';
import { get } from 'lodash';

const formFields = [
  { name: 'fullName', type: 'text', placeholder: 'Full Name', icon: 'user' },
  { name: 'email', type: 'email', placeholder: 'Email Address', icon: 'mail' },
  { name: 'company', type: 'text', placeholder: 'Company Name', icon: 'building' },
  { name: 'jobTitle', type: 'text', placeholder: 'Job Title', icon: 'briefcase' },
  { name: 'contactNumber', type: 'tel', placeholder: 'Contact Number', icon: 'phone' },
  {
    name: 'interest',
    type: 'select',
    placeholder: 'Interest',
    options: ['Speaking', 'Exhibitor', 'Branding', 'Media', 'Sponsor'],
    icon: 'star',
  },
];

const SponsorshipForm: React.FC = () => {
  const { formik, isSubmitting } = useSponsorshipAction();

  return (
    <section id="sponsorship" className="sponsorship-section py-24">
      <div className="container mx-auto px-4">
        <div className="flex justify-center">
          <div className="w-full max-w-3xl">
            <div className="mb-12 text-center">
              <h2 className="title gradient-title wow fadeInUp" data-wow-delay="0.4s">
                Sponsorship Packages
              </h2>
              <p className="wow fadeInUp mt-8 text-black" data-wow-delay="0.8s">
                Showcase your brand to a targeted audience of HR and L&D professionals. Our
                sponsorship packages offer exceptional visibility and networking opportunities.
              </p>
            </div>
          </div>
        </div>

        <div className="flex flex-wrap justify-center">
          {/* Left Column - Sponsorship Cards */}
          <div className="w-full px-4 lg:w-5/12">
            {/* Card 1: Sponsorship Packages */}
            <div className="sponsor-info-card wow fadeInUp" data-wow-delay="0.2s">
              <div className="sponsor-info-header">
                <h3 className="sponsor-info-title">Sponsorship Packages</h3>
                <div className="sponsor-info-icon">
                  <svg
                    className="header-icon"
                    xmlns="http://www.w3.org/2000/svg"
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  >
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
                  <svg
                    className="header-icon"
                    xmlns="http://www.w3.org/2000/svg"
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  >
                    <rect x="2" y="3" width="20" height="14" rx="2" ry="2"></rect>
                    <line x1="8" y1="21" x2="16" y2="21"></line>
                    <line x1="12" y1="17" x2="12" y2="21"></line>
                  </svg>
                </div>
              </div>
              <div className="sponsor-info-content">
                <div className="exhibition-space-info">
                  <div className="exhibition-text">
                    <span className="exhibition-highlight text-black">Limited to 20 slots</span>
                    <p className="text-black">
                      Showcase your products and services at our exclusive exhibition area
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
                  <svg
                    className="header-icon"
                    xmlns="http://www.w3.org/2000/svg"
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  >
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
                    <svg
                      className="contact-icon"
                      xmlns="http://www.w3.org/2000/svg"
                      width="18"
                      height="18"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    >
                      <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"></path>
                      <polyline points="22,6 12,13 2,6"></polyline>
                    </svg>
                    <a href="mailto:Farah@roomofleaders.com">Farah@roomofleaders.com</a>
                  </li>
                </ul>
              </div>
            </div>
          </div>

          {/* Right Column - Sponsorship Form */}
          <div className="w-full px-4 lg:w-7/12">
            <div className="sponsor-contact-form wow fadeInRight" data-wow-delay="0.5s">
              <div className="form-header">
                <h4 className="sponsor-form-title">Sponsorship Inquiry Form</h4>
              </div>
              <form id="sponsor-form" onSubmit={formik.handleSubmit}>
                <div className="form-fields-container">
                  {formFields.map(({ name, type, placeholder, icon, options }) => (
                    <div key={name} className="sponsor-form-group">
                      <div className="input-with-icon">
                        {getIconSVG(icon)}
                        {type === 'select' ? (
                          <select
                            name={name}
                            className={`sponsor-form-control ${get(formik.touched, name) && get(formik.errors, name) ? 'border border-red-500' : ''}`}
                            required
                            value={get(formik.values, name)}
                            onChange={formik.handleChange}
                            onBlur={formik.handleBlur}
                          >
                            <option value="" disabled>
                              {placeholder}
                            </option>
                            {options?.map(opt => (
                              <option key={opt} value={opt.toLowerCase()}>
                                {opt}
                              </option>
                            ))}
                          </select>
                        ) : (
                          <input
                            type={type}
                            name={name}
                            className={`sponsor-form-control ${get(formik.touched, name) && get(formik.errors, name) ? 'border border-red-500' : ''}`}
                            placeholder={placeholder}
                            required
                            value={get(formik.values, name)}
                            onChange={formik.handleChange}
                            onBlur={formik.handleBlur}
                          />
                        )}
                      </div>
                      {get(formik.errors, name) && get(formik.touched, name) && (
                        <p className="mt-1 text-sm text-red-500">
                          {get(formik.errors, name) as string}
                        </p>
                      )}
                    </div>
                  ))}
                </div>
                <button type="submit" className="sponsor-form-submit" disabled={isSubmitting}>
                  {isSubmitting ? (
                    <svg className="mr-2 h-5 w-5 animate-spin" viewBox="0 0 24 24">
                      <circle
                        className="opacity-25"
                        cx="12"
                        cy="12"
                        r="10"
                        stroke="white"
                        strokeWidth="4"
                      ></circle>
                      <path
                        className="opacity-75"
                        fill="white"
                        d="M12 2a10 10 0 0110 10h-2a8 8 0 00-8-8V2z"
                      ></path>
                    </svg>
                  ) : (
                    'Submit'
                  )}
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
