'use client';

import React from 'react';
import { motion } from 'framer-motion';
import './key-main-theme.css';

const KeyMainTheme: React.FC = () => {
  return (
    <section id="key-main-theme">
        <div className="theme-bg-circle-1"></div>
        <div className="theme-bg-circle-2"></div>
        <div className="theme-bg-dots"></div>
        <div className="theme-bg-pattern"></div>
        <div className="theme-bg-wave"></div>
        <div className="container">
          <div className="row justify-content-center">
            <div className="col-lg-8">
              <motion.div 
                className="section-title text-center"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6 }}
              >
                <motion.h2 
                  initial={{ opacity: 0, y: -20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: 0.2 }}
                >
                  Key Main Themes
                </motion.h2>
                <motion.p
                  initial={{ opacity: 0 }}
                  whileInView={{ opacity: 1 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: 0.3 }}
                >
                  Explore the cutting-edge topics that will shape the future of HR
                  and workforce development
                </motion.p>
              </motion.div>
            </div>
          </div>
          
          <div className="row">
            <motion.div 
              className="theme-cards-container"
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: 0.4 }}
            >
              <motion.div 
                className="theme-card" 
                data-theme="1"
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: 0.5 }}
                whileHover={{ 
                  y: -10,
                  boxShadow: "0 20px 30px rgba(0, 0, 0, 0.25)",
                  height: 320,
                  transition: { duration: 0.3, ease: [0.23, 1, 0.32, 1] }
                }}
              >
                <div className="theme-card-content">
                  <div className="theme-icon">
                    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="2">
                      <circle cx="12" cy="12" r="3"></circle>
                      <path d="M19.4 15a1.65 1.65 0 0 0 .33 1.82l.06.06a2 2 0 0 1 0 2.83 2 2 0 0 1-2.83 0l-.06-.06a1.65 1.65 0 0 0-1.82-.33 1.65 1.65 0 0 0-1 1.51V21a2 2 0 0 1-2 2 2 2 0 0 1-2-2v-.09A1.65 1.65 0 0 0 9 19.4a1.65 1.65 0 0 0-1.82.33l-.06.06a2 2 0 0 1-2.83 0 2 2 0 0 1 0-2.83l.06-.06a1.65 1.65 0 0 0 .33-1.82 1.65 1.65 0 0 0-1.51-1H3a2 2 0 0 1-2-2 2 2 0 0 1 2-2h.09A1.65 1.65 0 0 0 4.6 9a1.65 1.65 0 0 0-.33-1.82l-.06-.06a2 2 0 0 1 0-2.83 2 2 0 0 1 2.83 0l.06.06a1.65 1.65 0 0 0 1.82.33H9a1.65 1.65 0 0 0 1-1.51V3a2 2 0 0 1 2-2 2 2 0 0 1 2 2v.09a1.65 1.65 0 0 0 1 1.51 1.65 1.65 0 0 0 1.82-.33l.06-.06a2 2 0 0 1 2.83 0 2 2 0 0 1 0 2.83l-.06.06a1.65 1.65 0 0 0-.33 1.82V9a1.65 1.65 0 0 0 1.51 1H21a2 2 0 0 1 2 2 2 2 0 0 1-2 2h-.09a1.65 1.65 0 0 0-1.51 1z"></path>
                    </svg>
                  </div>
                  <h3 className="theme-title">AI in HR Transformation</h3>
                  <p className="theme-description">
                    Discover how artificial intelligence is revolutionizing HR
                    practices, from recruitment to employee engagement and
                    performance management.
                  </p>
                  <span className="theme-number">01</span>
                </div>
              </motion.div>
              
              <motion.div 
                className="theme-card" 
                data-theme="2"
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: 0.6 }}
                whileHover={{ 
                  y: -10,
                  boxShadow: "0 20px 30px rgba(0, 0, 0, 0.25)",
                  height: 320,
                  transition: { duration: 0.3, ease: [0.23, 1, 0.32, 1] }
                }}
              >
                <div className="theme-card-content">
                  <div className="theme-icon">
                    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="2">
                      <path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2"></path>
                      <circle cx="9" cy="7" r="4"></circle>
                      <path d="M23 21v-2a4 4 0 0 0-3-3.87"></path>
                      <path d="M16 3.13a4 4 0 0 1 0 7.75"></path>
                    </svg>
                  </div>
                  <h3 className="theme-title">Future of Work</h3>
                  <p className="theme-description">
                    Explore emerging trends in remote work, hybrid models, and how
                    technology is reshaping the workplace environment and employee
                    expectations.
                  </p>
                  <span className="theme-number">02</span>
                </div>
              </motion.div>
              
              <motion.div 
                className="theme-card" 
                data-theme="3"
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: 0.7 }}
                whileHover={{ 
                  y: -10,
                  boxShadow: "0 20px 30px rgba(0, 0, 0, 0.25)",
                  height: 320,
                  transition: { duration: 0.3, ease: [0.23, 1, 0.32, 1] }
                }}
              >
                <div className="theme-card-content">
                  <div className="theme-icon">
                    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="2">
                      <path d="M22 10v6M2 10l10-5 10 5-10 5z"></path>
                      <path d="M6 12v5c0 2 2 3 6 3s6-1 6-3v-5"></path>
                    </svg>
                  </div>
                  <h3 className="theme-title">Learning & Development</h3>
                  <p className="theme-description">
                    Dive into innovative approaches to upskilling, reskilling, and
                    continuous learning that prepare organizations for rapid
                    technological change.
                  </p>
                  <span className="theme-number">03</span>
                </div>
              </motion.div>
              
              <motion.div 
                className="theme-card" 
                data-theme="4"
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: 0.8 }}
                whileHover={{ 
                  y: -10,
                  boxShadow: "0 20px 30px rgba(0, 0, 0, 0.25)",
                  height: 320,
                  transition: { duration: 0.3, ease: [0.23, 1, 0.32, 1] }
                }}
              >
                <div className="theme-card-content">
                  <div className="theme-icon">
                    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="2">
                      <line x1="18" y1="20" x2="18" y2="10"></line>
                      <line x1="12" y1="20" x2="12" y2="4"></line>
                      <line x1="6" y1="20" x2="6" y2="14"></line>
                    </svg>
                  </div>
                  <h3 className="theme-title">Data-Driven HR</h3>
                  <p className="theme-description">
                    Learn how to leverage people analytics and data-driven
                    insights to make strategic HR decisions and demonstrate
                    business impact.
                  </p>
                  <span className="theme-number">04</span>
                </div>
              </motion.div>
            </motion.div>
          </div>
        </div>
      </section>
  );
};

export default KeyMainTheme;
