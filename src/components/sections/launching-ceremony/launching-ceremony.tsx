'use client';

import React from 'react';
import Image from 'next/image';
import './launching-ceremony.css';

const LaunchingCeremony: React.FC = () => {
  return (
    <section id="launching-ceremony" className="launching-ceremony-section py-20 bg-gradient-to-b from-blue-50 to-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="mb-8 text-4xl font-bold text-purple-800">Launching Ceremony</h2>
        </div>

        <div className="flex flex-col items-center launching-ceremony-content">
          <div className="relative w-64 h-64 md:w-80 md:h-80 rounded-full overflow-hidden border-4 border-white shadow-xl mb-8 transform transition-transform duration-300 hover:scale-105">
            <Image
              src="/assets/images/launching-ceremony/yb_fadhilah.png"
              alt="YAB DATO' SRI HAJI FADILLAH BIN HAJI YUSOF"
              fill
              className="object-cover"
              sizes="(max-width: 768px) 100vw, 50vw"
              priority
            />
          </div>
          
          <div className="text-center">
            <h3 className="text-2xl font-bold text-gray-900 mb-2">
              YAB DATO&apos; SRI HAJI FADILLAH BIN HAJI YUSOF
            </h3>
            <div className="flex items-center justify-center mb-4">
              <span className="font-medium">Deputy Prime Minister II</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default LaunchingCeremony;
