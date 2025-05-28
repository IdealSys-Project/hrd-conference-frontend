"use client";

import React from "react";
import Image from "next/image";
import Link from "next/link";
import "./Footer.css";

const Footer: React.FC = () => {
  const currentYear = new Date().getFullYear();

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
            <div className="copyright">
              <p className="text text-white">&copy; Copyright {currentYear} - Room of Leaders.</p>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
