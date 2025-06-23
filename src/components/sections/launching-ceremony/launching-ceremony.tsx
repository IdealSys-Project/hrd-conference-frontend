'use client';

import React from 'react';
import Image from 'next/image';
import './launching-ceremony.css';

const LaunchingCeremony: React.FC = () => {
  return (
    <section id="launching-ceremony" className="py-16 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold text-purple-800 mb-4">Launching Ceremony</h2>
        </div>

        <div className="flex flex-col items-center">
          <div className="relative w-64 h-64 md:w-72 md:h-72 mb-8">
            <div className="absolute inset-0 rounded-full overflow-hidden p-1 bg-gradient-to-r from-blue-600 to-purple-600 shadow-xl">
              <div className="relative w-full h-full rounded-full overflow-hidden bg-white">
                <Image
                  src="/assets/images/launching-ceremony/yb_fadhilah.png"
                  alt="YAB DATO' SRI HAJI FADILLAH BIN HAJI YUSOF"
                  fill
                  className="object-cover"
                  sizes="(max-width: 768px) 100vw, 50vw"
                  priority
                />
              </div>
            </div>
            <div className="absolute -inset-1 rounded-full bg-gradient-to-r from-blue-600 to-blue-400 opacity-20 blur-md -z-10" />
          </div>
          
          <div className="text-center">
            <h3 className="text-2xl font-bold text-gray-800 mb-2">
              YAB DATO&apos; SRI HAJI FADILLAH BIN HAJI YUSOF
            </h3>
            <div className="font-medium">
              Deputy Prime Minister II
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default LaunchingCeremony;
