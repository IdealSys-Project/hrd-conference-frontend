'use client';

import React, { useEffect, useState } from 'react';
import { motion } from 'framer-motion';
import './event-countdown.css';

interface CountdownValues {
  days: number;
  hours: number;
  minutes: number;
  seconds: number;
}

const EventCountdown: React.FC = () => {
  const [countdownValues, setCountdownValues] = useState<CountdownValues>({
    days: 0,
    hours: 0,
    minutes: 0,
    seconds: 0
  });

  useEffect(() => {
    const headerContentArea = document.querySelector('.header-content-area');
    if (headerContentArea?.getAttribute('data-bg')) {
      const bgUrl = headerContentArea.getAttribute('data-bg');
      const img = new Image();
      img.src = bgUrl ?? '';
      img.onload = () => {
        const htmlElement = headerContentArea as HTMLElement;
        htmlElement.style.backgroundImage = `url(${bgUrl})`;
        htmlElement.classList.add('loaded-background');
      };
    }

    const targetDate = new Date('2025/08/12').getTime();
    
    const updateCountdown = () => {
      const now = new Date().getTime();
      const distance = targetDate - now;
      
      if (distance > 0) {
        setCountdownValues({
          days: Math.floor(distance / (1000 * 60 * 60 * 24)),
          hours: Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)),
          minutes: Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60)),
          seconds: Math.floor((distance % (1000 * 60)) / 1000)
        });
      }
    };

    updateCountdown();
    
    const interval = setInterval(updateCountdown, 1000);
    
    const animationTimeout = setTimeout(() => {
      startSequentialAnimation();
    }, 500);
    
    return () => {
      clearInterval(interval);
      clearTimeout(animationTimeout);
    };
  }, []);

  const startSequentialAnimation = () => {
    const elements = [
      { number: 'days-number', label: 'days-label', delay: 300 },
      { number: 'hours-number', label: 'hours-label', delay: 800 },
      { number: 'minutes-number', label: 'minutes-label', delay: 1300 },
      { number: 'seconds-number', label: 'seconds-label', delay: 1800 }
    ];

    elements.forEach(({ number, label, delay }) => {
      setTimeout(() => {
        const numberElement = document.getElementById(number);
        const labelElement = document.getElementById(label);
        
        if (numberElement) {
          numberElement.classList.add('flip-animate');
        }
        
        if (labelElement) {
          labelElement.classList.add('fade-animate');
        }
        
        if (number === 'seconds-number' && numberElement) {
          numberElement.classList.add('seconds-flip');
        }
      }, delay);
    });
  };

  return (
    <div className="home-background">
      <div
        id="home"
        className="header-content-area bg_cover d-flex align-items-center lazy-background"
        data-bg="/assets/images/event-countdown/ai_brochure_3.png"
      >
        <div className="container">
          <div className="row justify-content-center">
            <div className="col-lg-10">
              <div id="countdown-timer">
                <div className="countdown-item" id="days-item">
                  <div className="countdown-number" id="days-number">
                    {countdownValues.days.toString().padStart(2, '0')}
                  </div>
                  <div className="countdown-label" id="days-label">Days</div>
                </div>
                <div className="countdown-item" id="hours-item">
                  <div className="countdown-number" id="hours-number">
                    {countdownValues.hours.toString().padStart(2, '0')}
                  </div>
                  <div className="countdown-label" id="hours-label">Hours</div>
                </div>
                <div className="countdown-item" id="minutes-item">
                  <div className="countdown-number" id="minutes-number">
                    {countdownValues.minutes.toString().padStart(2, '0')}
                  </div>
                  <div className="countdown-label" id="minutes-label">Minutes</div>
                </div>
                <div className="countdown-item" id="seconds-item">
                  <div className="countdown-number" id="seconds-number">
                    {countdownValues.seconds.toString().padStart(2, '0')}
                  </div>
                  <div className="countdown-label" id="seconds-label">Seconds</div>
                </div>
              </div>

              <motion.div 
                className="header-content text-center"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 0.5 }}
              >
                <motion.h2 
                  className="header-title"
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.3 }}
                >
                  Second Annual Human Resource Development Conference 2025
                </motion.h2>
                <motion.div 
                  className="formula-subtitle"
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 0.5, delay: 0.3 }}
                >
                  <motion.span 
                    className="formula-part"
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5, delay: 0.5 }}
                    whileHover={{ 
                      scale: 1.05, 
                      y: -5,
                      boxShadow: "0 8px 20px rgba(0, 0, 0, 0.4)",
                      background: "linear-gradient(135deg, rgba(60, 90, 180, 0.9) 0%, rgba(140, 20, 220, 0.9) 100%)"
                    }}
                  >
                    AI
                  </motion.span>
                  <motion.span 
                    className="formula-symbol"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ duration: 0.5, delay: 0.6 }}
                  >
                    +
                  </motion.span>
                  <motion.span 
                    className="formula-part"
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5, delay: 0.5 }}
                    whileHover={{ 
                      scale: 1.05, 
                      y: -5,
                      boxShadow: "0 8px 20px rgba(0, 0, 0, 0.4)",
                      background: "linear-gradient(135deg, rgba(60, 90, 180, 0.9) 0%, rgba(140, 20, 220, 0.9) 100%)"
                    }}
                  >
                    HI
                  </motion.span>
                  <motion.span 
                    className="formula-symbol"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ duration: 0.5, delay: 0.6 }}
                  >
                    =
                  </motion.span>
                  <motion.span 
                    className="formula-part"
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5, delay: 0.5 }}
                    whileHover={{ 
                      scale: 1.05, 
                      y: -5,
                      boxShadow: "0 8px 20px rgba(0, 0, 0, 0.4)",
                      background: "linear-gradient(135deg, rgba(60, 90, 180, 0.9) 0%, rgba(140, 20, 220, 0.9) 100%)"
                    }}
                  >
                    ROI
                  </motion.span>
                </motion.div>
                <motion.h5 
                  className="date-subtitle"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ duration: 0.5, delay: 1 }}
                >
                  12 & 13 August 2025
                </motion.h5>
              </motion.div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default EventCountdown;
