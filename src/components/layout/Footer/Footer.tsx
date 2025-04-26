'use client';

import React, { useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import './footer.css';

const Footer: React.FC = () => {
  const currentYear = new Date().getFullYear();
  const [showAnalytics, setShowAnalytics] = useState(false);

  const toggleAnalytics = () => {
    setShowAnalytics(!showAnalytics);
  };

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
                      style={{ maxHeight: '60px', width: 'auto' }}
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
                <p className="text text-white">D8-5-1 Pusat Perdagangan Dana 1,</p>
                <p className="text text-white mt-0">Jalan PJU 1A/46, 47301 Petaling</p>
                <p className="text text-white mt-0">Jaya, Selangor Darul Ehsan.</p>
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
          {/* Analytics Section (Hidden by default) */}
          {showAnalytics && (
            <div id="simple-analytics" className="mb-5">
              <div className="analytics-container">
                <div className="mt-4 text-center">
                  <h5 className="text-white mb-3">Live Traffic Feed</h5>
                  <div className="live-traffic-container">
                    <div dangerouslySetInnerHTML={{ 
                      __html: '<script type="text/javascript" src="https://cdn.livetrafficfeed.com/static/static-counter/live.v2.js?ro=1&tz=Asia%2FKuala_Lumpur&v=1"></script>' 
                    }} />
                  </div>
                </div>
              </div>
            </div>
          )}

          <div className="flex justify-center">
            <div className="copyright">
              <button 
                className="text text-white bg-transparent border-0 cursor-pointer"
                onClick={toggleAnalytics}
                aria-label="Toggle analytics display"
              >
                &copy; Copyright {currentYear} - Room of Leaders.
              </button>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
