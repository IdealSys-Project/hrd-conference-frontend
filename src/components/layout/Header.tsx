'use client';

import Link from 'next/link';
import Image from 'next/image';
import { useState, useEffect, useRef } from 'react';
import { FaMapMarkerAlt, FaBars, FaTimes, FaCalendarAlt } from 'react-icons/fa';
import { motion, AnimatePresence } from 'framer-motion';
import './Header.css';

const Header = () => {
  const [isTop, setIsTop] = useState(true);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isVenueModalOpen, setIsVenueModalOpen] = useState(false);
  const modalRef = useRef<HTMLDialogElement>(null);

  const handleNavLinkClick = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    e.preventDefault();
    const targetId = href.replace('#', '');
    const targetElement = document.getElementById(targetId);

    if (targetElement) {
      if (isMobileMenuOpen) {
        setIsMobileMenuOpen(false);
      }

      targetElement.scrollIntoView({ behavior: 'smooth' });

      window.history.pushState(null, '', href);
    }
  };

  useEffect(() => {
    const handleScroll = () => {
      setIsTop(window.scrollY === 0);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape' && isVenueModalOpen) {
        setIsVenueModalOpen(false);
      }
    };

    if (isVenueModalOpen && modalRef.current) {
      modalRef.current.focus();
    }

    if (isVenueModalOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = '';
    }

    window.addEventListener('keydown', handleKeyDown);
    return () => {
      window.removeEventListener('keydown', handleKeyDown);
    };
  }, [isVenueModalOpen]);

  const menuItems = [
    { text: 'Home', href: '#home' },
    { text: 'Speakers', href: '#speakers' },
    { text: 'Sponsors', href: '#sponsors' },
    { text: 'Media Partners', href: '#media-partners' },
    { text: 'Speaking Opportunity', href: '#speaking-opportunity' },
    { text: 'Registration', href: '#registration' },
  ];

  return (
    <header
      className={`sticky top-0 z-[999] p-4 transition-all duration-500 ease-out ${isTop ? 'bg-black' : 'bg-gradient-to-r from-[#141e46e6] via-[#1e3264e6] to-[#4b0082e6] shadow-md'}`}
    >
      <div className="mx-auto flex max-w-[1320px] items-center justify-between">
        <Link href="/" className="text-xl font-bold text-white md:text-2xl">
          <Image src="/assets/logo.png" alt="logo" width={120} height={40} className="h-[30px]" />
        </Link>

        <nav className="mx-auto hidden flex-grow justify-center space-x-8 lg:flex">
          {menuItems.map(item => (
            <Link
              key={item.href}
              href={item.href}
              onClick={e => handleNavLinkClick(e as React.MouseEvent<HTMLAnchorElement>, item.href)}
              className="group relative cursor-pointer text-base font-semibold text-white"
            >
              {item.text}
              <span className="absolute bottom-[-4px] left-0 h-0.5 w-0 bg-white transition-all duration-300 group-hover:w-full"></span>
            </Link>
          ))}
        </nav>

        <div className="z-[1001] flex items-center space-x-4 lg:hidden">
          <button
            className="main-btn location-btn px-6 py-2 text-sm lg:text-base"
            onClick={() => setIsVenueModalOpen(true)}
          >
            <FaMapMarkerAlt className="mr-1 text-base" />
            Venue
          </button>
          <button
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            className="text-2xl text-white focus:outline-none"
          >
            {isMobileMenuOpen ? <FaTimes /> : <FaBars />}
          </button>
        </div>

        <div className="ml-auto hidden lg:block">
          <button className="main-btn location-btn" onClick={() => setIsVenueModalOpen(true)}>
            <FaMapMarkerAlt className="mr-1 text-base" />
            Venue
          </button>
        </div>
      </div>

      {/* Venue Modal */}
      {isVenueModalOpen && (
        <div className="venue-modal-overlay" aria-hidden="true">
          <button
            className="overlay-dismiss-button"
            onClick={() => setIsVenueModalOpen(false)}
            aria-label="Close modal"
          />
          <dialog className="venue-modal" ref={modalRef} open aria-labelledby="venue-modal-title">
            <div className="venue-modal-header">
              <h2 id="venue-modal-title">Conference Venue</h2>
              <button
                className="venue-close-button"
                onClick={() => setIsVenueModalOpen(false)}
                aria-label="Close modal"
              >
                <FaTimes />
              </button>
            </div>

            <div className="venue-modal-body">
              <div className="venue-info-container">
                <div className="venue-info-item">
                  <div className="venue-icon-container">
                    <FaCalendarAlt className="venue-icon" />
                  </div>
                  <div className="venue-info-text">
                    <h3>Date</h3>
                    <p>12 & 13 August 2025</p>
                  </div>
                </div>

                <div className="venue-info-item">
                  <div className="venue-icon-container">
                    <FaMapMarkerAlt className="venue-icon" />
                  </div>
                  <div className="venue-info-text">
                    <h3>Location</h3>
                    <p>Berjaya Time Square Hotel, Kuala Lumpur</p>
                  </div>
                </div>
              </div>

              <div className="venue-map">
                <iframe
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3983.7762766622516!2d101.70841361475844!3d3.1421946977075767!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x31cc362855555555%3A0x1e34a06ee3b2cf0!2sBerjaya%20Times%20Square%20Hotel%2C%20Kuala%20Lumpur!5e0!3m2!1sen!2smy!4v1616661000000!5m2!1sen!2smy"
                  width="100%"
                  height="300"
                  style={{ border: 0 }}
                  allowFullScreen
                  loading="lazy"
                  title="Berjaya Times Square Hotel, Kuala Lumpur Map"
                />
              </div>
            </div>

            <div className="venue-modal-footer">
              <button
                className="venue-close-btn"
                onClick={() => setIsVenueModalOpen(false)}
                aria-label="Close venue modal"
              >
                Close
              </button>
            </div>
          </dialog>
        </div>
      )}

      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div
            key="mobile-menu"
            initial={{ y: -100, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            exit={{ y: -100, opacity: 0 }}
            transition={{
              duration: 0.4,
              ease: 'easeInOut',
              opacity: { duration: 0.3 },
              y: { stiffness: 100, damping: 25 },
            }}
            className="fixed left-0 right-0 top-16 z-[998] border-0 bg-[rgba(20,30,70,0.95)] backdrop-blur-md lg:hidden"
          >
            <div className="flex flex-col items-center space-y-6 p-6 text-base text-white">
              {menuItems.map(item => (
                <Link
                  key={item.href}
                  href={item.href}
                  onClick={e =>
                    handleNavLinkClick(e as React.MouseEvent<HTMLAnchorElement>, item.href)
                  }
                  className="transition hover:text-purple-300"
                >
                  {item.text}
                </Link>
              ))}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
};

export default Header;
