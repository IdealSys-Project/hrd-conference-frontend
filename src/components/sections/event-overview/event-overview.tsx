'use client';

import React from 'react';
import Image from 'next/image';
import { motion } from 'framer-motion';
import './event-overview.css';

const EventOverview: React.FC = () => {
  return (
    <section id="event-overview" className="event-overview-section">
      <div className="container">
        <div className="event-overview-container">
          <motion.div 
            className="event-image-wrapper"
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <div className="event-image-container">
              <Image
                src="/assets/images/event-overview/ai_brochure_banner.jpg"
                alt="VR Technology User"
                fill
                sizes="(max-width: 768px) 100vw, 500px"
                style={{ objectFit: 'cover', objectPosition: 'center' }}
                className="event-image"
                priority
              />
            </div>
          </motion.div>
          
          <motion.div 
            className="event-content"
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <motion.h2 
              className="event-title"
              initial={{ opacity: 0, y: -20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
            >
              Event Overview
            </motion.h2>
            
            <motion.p 
              className="event-text text-justify"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.1 }}
            >
              A business&apos;s success depends on its people, making talent
              development vital for competitive advantage. AI is transforming
              HR and revolutionizing Learning and Development (L&D), requiring
              leaders to adapt quickly. The pandemic accelerated this shift,
              emphasizing the need for flexible, AI-driven solutions that
              deliver data-driven insights and personalized learning
              experiences.
            </motion.p>
            
            <motion.p 
              className="event-text text-justify"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.2 }}
            >
              The Second Annual Human Resource Development Conference 2025,
              themed <span className="highlight-text">&apos;AI + HI = New ROI&apos;</span>,
              is a must-attend event for HR and L&D professionals in Malaysia
              and the ASEAN region. With 150+ attendees expected, this
              conference will focus on transformational strategies to enhance
              talent development and maximize L&D opportunities in the age of
              AI.
            </motion.p>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default EventOverview;
