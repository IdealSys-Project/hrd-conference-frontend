"use client";

import React from "react";
import Image from "next/image";
import Link from "next/link";
import { useAnalytics } from "@/lib/firebase/analytics";
import "./Footer.css";

const Footer: React.FC = () => {
  const currentYear = new Date().getFullYear();
  const {
    analytics,
    loading,
    error,
    showAnalytics,
    toggleAnalytics
  } = useAnalytics();

  return (
    <footer id="footer" className="footer-area">
      <div className="footer-widget">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div>
              <div className="footer-about">
                <div className="footer-logo">
                  <Link href="/">
                    <Image
                      src="/assets/images/footer/ROL_white_logo.png"
                      alt="Room of Leaders Logo"
                      width={180}
                      height={60}
                      style={{ maxHeight: "60px", width: "auto" }}
                    />
                  </Link>
                </div>
                <p className="text text-white">12 & 13 August 2025</p>
                <p className="text text-white">
                  Berjaya Time Square Hotel, Kuala Lumpur
                </p>
              </div>
            </div>

            <div>
              <div className="footer-address">
                <h5 className="f-title text-white">Event Details</h5>
                <p className="text text-white">
                  D8-5-1 Pusat Perdagangan Dana 1,
                </p>
                <p className="text text-white mt-0">
                  Jalan PJU 1A/46, 47301 Petaling
                </p>
                <p className="text text-white mt-0">
                  Jaya, Selangor Darul Ehsan.
                </p>
              </div>
            </div>

            <div>
              <div className="footer-contact">
                <h5 className="f-title text-white">Stay Updated</h5>
                <div className="footer-website">
                  <p className="text text-white">
                    <Link
                      href="https://www.roomofleaders.com"
                      target="_blank"
                      className="text text-white"
                    >
                      www.roomofleaders.com
                    </Link>
                  </p>
                  <p className="text text-white">Contact us: 03-7831 2838</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="footer-copyright">
        <div className="container mx-auto px-4">
          <div className="flex justify-center">
            <div className="copyright relative">
              <button 
                onClick={toggleAnalytics}
                className="text text-white hover:text-blue-300 transition-colors focus:outline-none"
                aria-label="Toggle analytics"
              >
                &copy; Copyright {currentYear} - Room of Leaders.
              </button>
              
              {showAnalytics && (
                <div className="absolute bottom-full left-1/2 transform -translate-x-1/2 mb-3 w-72 bg-gray-800 rounded-lg shadow-xl z-50 overflow-hidden">
                  <div className="p-4">
                    <h3 className="text-white font-medium text-center text-sm mb-3">Page Views</h3>
                    {loading ? (
                      <div className="text-center text-gray-400 text-sm py-2">Loading...</div>
                    ) : error ? (
                      <div className="text-center text-red-400 text-sm py-2">{error}</div>
                    ) : (
                      <div className="grid grid-cols-2 gap-3">
                        {analytics && Object.entries(analytics)
                          .filter(([key]) => key !== 'lastResetDate' && key !== 'lastUpdated')
                          .map(([key, value]) => (
                            <div key={key} className="bg-gray-700/50 p-3 rounded text-center">
                              <div className="text-blue-400 text-xs uppercase tracking-wider">
                                {key === 'total' ? 'Total' : key.replace(/([A-Z])/g, ' $1').trim()}
                              </div>
                              <div className="text-white font-bold text-lg mt-1">
                                {typeof value === 'number' ? value.toLocaleString() : '0'}
                              </div>
                            </div>
                          ))}
                      </div>
                    )}
                    <div className="text-gray-400 text-xs text-center mt-3">
                      Last updated: {new Date().toLocaleDateString('en-GB')}, {new Date().toLocaleTimeString('en-GB', {
                        hour: '2-digit',
                        minute: '2-digit',
                        hour12: false
                      })}
                    </div>
                  </div>
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
