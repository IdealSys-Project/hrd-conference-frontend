'use client';

import React, { useState } from 'react';
import './speaking-form.css';

const SpeakingForm: React.FC = () => {
  const [formData, setFormData] = useState({
    fullName: '',
    email: '',
    company: '',
    jobTitle: '',
    contactNumber: '',
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value,
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
      contactNumber: '',
    });
  };

  return (
    <section id="speaking-opportunity" className="relative overflow-hidden py-12">
      <div
        className="absolute inset-0 z-0"
        style={{
          backgroundImage: 'url("/assets/images/speaker-opportunity/ai_brochure_1.png")',
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          backgroundRepeat: 'no-repeat',
          backgroundAttachment: 'fixed',
        }}
      >
        <div
          className="absolute inset-0"
          style={{
            background: 'linear-gradient(135deg, rgba(64, 84, 178, 0.9), rgba(128, 19, 174, 0.85))',
            zIndex: 1,
          }}
        ></div>
      </div>

      <div className="container relative z-10 mx-auto px-4">
        <div className="mb-12 text-center">
          <h2 className="mb-4 text-4xl font-bold text-white">Speaking Opportunity</h2>
        </div>

        <div className="-mx-4 flex flex-wrap">
          {/* Left Column - Text */}
          <div className="mb-8 w-full px-4 lg:mb-0 lg:w-1/2">
            <div className="text-white">
              <h3 className="mb-6 text-3xl font-bold leading-tight">
                Are you interested in speaking at our conference?
              </h3>
              <p className="mb-6 text-lg leading-relaxed">
                Share your ideas, experiences, insights, case studies, or solutions and make an
                impact on this exclusive regional conference.
              </p>
            </div>
          </div>

          {/* Right Column - Form */}
          <div className="w-full px-4 lg:w-1/2">
            <div className="rounded-lg bg-white p-8 shadow-lg transition-transform duration-300 hover:translate-y-[-5px] hover:shadow-xl">
              <div className="mb-6 text-center">
                <h4 className="text-2xl font-bold text-gray-800">Speaker Proposal Form</h4>
              </div>
              <form id="speaking-form" onSubmit={handleSubmit}>
                <div className="mb-4">
                  <div className="relative flex items-center rounded-full bg-gray-50 px-4 py-3 shadow-sm">
                    <svg
                      className="mr-3 h-5 w-5 text-gray-500"
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    >
                      <path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2"></path>
                      <circle cx="12" cy="7" r="4"></circle>
                    </svg>
                    <input
                      type="text"
                      name="fullName"
                      className="w-full border-none bg-transparent text-gray-700 focus:outline-none"
                      placeholder="Full Name"
                      required
                      value={formData.fullName}
                      onChange={handleChange}
                    />
                  </div>
                </div>

                <div className="mb-4">
                  <div className="relative flex items-center rounded-full bg-gray-50 px-4 py-3 shadow-sm">
                    <svg
                      className="mr-3 h-5 w-5 text-gray-500"
                      xmlns="http://www.w3.org/2000/svg"
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
                    <input
                      type="email"
                      name="email"
                      className="w-full border-none bg-transparent text-gray-700 focus:outline-none"
                      placeholder="Email Address"
                      required
                      value={formData.email}
                      onChange={handleChange}
                    />
                  </div>
                </div>

                <div className="mb-4">
                  <div className="relative flex items-center rounded-full bg-gray-50 px-4 py-3 shadow-sm">
                    <svg
                      className="mr-3 h-5 w-5 text-gray-500"
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    >
                      <rect x="4" y="2" width="16" height="20" rx="2" ry="2"></rect>
                      <line x1="12" y1="6" x2="12" y2="6.01"></line>
                      <line x1="12" y1="10" x2="12" y2="10.01"></line>
                      <line x1="12" y1="14" x2="12" y2="14.01"></line>
                      <line x1="12" y1="18" x2="12" y2="18.01"></line>
                    </svg>
                    <input
                      type="text"
                      name="company"
                      className="w-full border-none bg-transparent text-gray-700 focus:outline-none"
                      placeholder="Company Name"
                      required
                      value={formData.company}
                      onChange={handleChange}
                    />
                  </div>
                </div>

                <div className="mb-4">
                  <div className="relative flex items-center rounded-full bg-gray-50 px-4 py-3 shadow-sm">
                    <svg
                      className="mr-3 h-5 w-5 text-gray-500"
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    >
                      <rect x="2" y="7" width="20" height="14" rx="2" ry="2"></rect>
                      <path d="M16 21V5a2 2 0 0 0-2-2h-4a2 2 0 0 0-2 2v16"></path>
                    </svg>
                    <input
                      type="text"
                      name="jobTitle"
                      className="w-full border-none bg-transparent text-gray-700 focus:outline-none"
                      placeholder="Job Title"
                      required
                      value={formData.jobTitle}
                      onChange={handleChange}
                    />
                  </div>
                </div>

                <div className="mb-4">
                  <div className="relative flex items-center rounded-full bg-gray-50 px-4 py-3 shadow-sm">
                    <svg
                      className="mr-3 h-5 w-5 text-gray-500"
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    >
                      <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"></path>
                    </svg>
                    <input
                      type="tel"
                      name="contactNumber"
                      className="w-full border-none bg-transparent text-gray-700 focus:outline-none"
                      placeholder="Contact Number"
                      required
                      value={formData.contactNumber}
                      onChange={handleChange}
                    />
                  </div>
                </div>

                <button
                  type="submit"
                  className="mt-4 flex w-full items-center justify-center rounded-full bg-blue-600 py-3 font-semibold text-white transition-all duration-300 hover:bg-blue-700"
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
