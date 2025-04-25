'use client';

import React, { useState } from 'react';
import { motion } from 'framer-motion';
import './target-audience.css';

const TargetAudience: React.FC = () => {
  const [activeAccordion, setActiveAccordion] = useState<string>('');

  const toggleAccordion = (id: string) => {
    if (activeAccordion === id) {
      setActiveAccordion('');
    } else {
      setActiveAccordion(id);
    }
  };

  const accordionItems = [
    {
      id: 'collapse-1',
      headingId: 'heading-1',
      number: '01',
      title: 'C-suite and HR executives',
      items: [
        'Chief HR officers',
        'Chief people officers',
        'Chief talent officers',
        'Chief human capital officers',
        'Vice presidents of HR',
        'Global, regional, and in-country HR heads'
      ]
    },
    {
      id: 'collapse-2',
      headingId: 'heading-2',
      number: '02',
      title: 'HR team dedicated to',
      items: [
        'People analytics',
        'HR analytics',
        'Talent management',
        'Human capital development',
        'Organisational development',
        'Workforce planning',
        'Recruitment',
        'Learning & development',
        'Future of work',
        'Employer brand',
        'Employee experience',
        'Employee engagement',
        'Culture',
        'Change management',
        'Leadership development',
        'HR business partners'
      ]
    },
  ];

  return (
    <section id="target-audience" className="target-audience-section pt-90 pb-100">
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
                Who Should Attend
              </motion.h2>
            </motion.div>
          </div>
        </div>
        <div className="row justify-content-center">
          <div className="col-lg-10">
            <motion.div 
              className="accordion-container"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.3 }}
            >
              <div className="accordion" id="audience-accordion">
                {accordionItems.map((item, index) => (
                  <motion.div 
                    className="accordion-item" 
                    key={item.id}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5, delay: 0.2 + (index * 0.1) }}
                  >
                    <h2 className="accordion-header" id={item.headingId}>
                      <button
                        className={`accordion-button ${activeAccordion === item.id ? '' : 'collapsed'}`}
                        type="button"
                        onClick={() => toggleAccordion(item.id)}
                        aria-expanded={activeAccordion === item.id}
                        aria-controls={item.id}
                      >
                        <span className="accordion-number">{item.number}</span>
                        <h4>{item.title}</h4>
                        <span className="arrow-icon"></span>
                      </button>
                    </h2>
                    <div
                      id={item.id}
                      className={`accordion-collapse ${activeAccordion === item.id ? 'show' : ''}`}
                      aria-labelledby={item.headingId}
                    >
                      <div className="accordion-body">
                        <ul className="audience-list">
                          {item.items.map((listItem, i) => (
                            <li key={`${item.id}-item-${i}`}>
                              <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="check-icon">
                                <circle cx="12" cy="12" r="10"></circle>
                                <path d="M8 12l2 2 6-6"></path>
                              </svg>
                              {listItem}
                            </li>
                          ))}
                        </ul>
                      </div>
                    </div>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default TargetAudience;
