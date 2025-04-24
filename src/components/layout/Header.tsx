"use client";

import Link from "next/link";
import Image from "next/image";
import { useState, useEffect } from "react";
import { FaMapMarkerAlt, FaBars, FaTimes } from "react-icons/fa";
import { motion, AnimatePresence } from "framer-motion";

const Header = () => {
  const [isTop, setIsTop] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsTop(window.scrollY === 0);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const menuItems = [
    { text: "Home", href: "#home" },
    { text: "Speakers", href: "#speakers" },
    { text: "Sponsors", href: "#sponsors" },
    { text: "Partners", href: "#partners" },
    { text: "Speaking Opportunity", href: "#speaking-opportunity" },
    { text: "Registration", href: "#registration" },
  ];

  return (
    <header
      className={`sticky top-0 z-[999] transition-all duration-500 ease-out p-4 ${isTop ? "bg-transparent" : "bg-gradient-to-r from-[#141e46e6] via-[#1e3264e6] to-[#4b0082e6] shadow-md"}`}
    >
      <div className="max-w-[1320px] mx-auto flex items-center justify-between">
        <Link href="/" className="text-white text-xl md:text-2xl font-bold">
          <Image
            src="/assets/logo.png"
            alt="logo"
            width={120}
            height={40}
            className="h-[30px]"
          />
        </Link>

        <nav className="hidden lg:flex flex-grow justify-center space-x-8 mx-auto">
          {menuItems.map((item) => (
            <Link key={item.href} href={item.href}>
              <span className="text-white relative group cursor-pointer text-base font-semibold">
                {item.text}
                <span className="absolute bottom-[-4px] left-0 w-0 h-0.5 bg-white group-hover:w-full transition-all duration-300"></span>
              </span>
            </Link>
          ))}
        </nav>

        <div className="flex items-center space-x-4 lg:hidden z-[1001]">
          <button className="main-btn location-btn px-6 py-2 text-sm lg:text-base">
            <FaMapMarkerAlt className="text-base mr-1" />
            Venue
          </button>
          <button
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            className="text-white text-2xl focus:outline-none"
          >
            {isMobileMenuOpen ? <FaTimes /> : <FaBars />}
          </button>
        </div>

        <div className="hidden lg:block ml-auto">
          <button className="main-btn location-btn">
            <FaMapMarkerAlt className="text-base" />
            Venue
          </button>
        </div>
      </div>

      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div
            key="mobile-menu"
            initial={{ y: -100, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            exit={{ y: -100, opacity: 0 }}
            transition={{
              duration: 0.4,
              ease: "easeInOut",
              opacity: { duration: 0.3 },
              y: { stiffness: 100, damping: 25 },
            }}
            className="fixed top-16 left-0 right-0 bg-[rgba(20,30,70,0.95)] backdrop-blur-md lg:hidden z-[998] border-0"
          >
            <div className="flex flex-col items-center space-y-6 p-6 text-white text-base">
              {menuItems.map((item) => (
                <Link
                  key={item.href}
                  href={item.href}
                  onClick={() => setIsMobileMenuOpen(false)}
                  className="hover:text-purple-300 transition"
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
