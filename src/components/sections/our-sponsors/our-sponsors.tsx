'use client';

import React from 'react';
import Image from 'next/image';
import './our-sponsors.css';

const OurSponsors: React.FC = () => {
  const sponsors = [
    {
      id: 1,
      name: 'TACK TMI',
      logo: '/assets/images/our-sponsors/past_sponsor_1.png',
    },
    {
      id: 2,
      name: 'CLaaS',
      logo: '/assets/images/our-sponsors/past_sponsor_2.png',
    },
    {
      id: 3,
      name: 'Innoveam',
      logo: '/assets/images/our-sponsors/past_sponsor_3.png',
    },
    {
      id: 4,
      name: 'Udemy Business',
      logo: '/assets/images/our-sponsors/past_sponsor_4.png',
    },
    {
      id: 5,
      name: 'Go1',
      logo: '/assets/images/our-sponsors/past_sponsor_5.png',
    },
    {
      id: 6,
      name: 'ELSA',
      logo: '/assets/images/our-sponsors/past_sponsor_6.png',
    },
    {
      id: 7,
      name: 'QuickDesk',
      logo: '/assets/images/our-sponsors/past_sponsor_7.png',
    },
    {
      id: 8,
      name: 'HealthMetrics',
      logo: '/assets/images/our-sponsors/past_sponsor_8.png',
    },
    {
      id: 9,
      name: 'Disprz',
      logo: '/assets/images/our-sponsors/past_sponsor_9.png',
    },
  ];

  return (
    <section id="sponsors" className="our-sponsors-section py-16">
      <div className="container mx-auto px-4">
        <div className="flex justify-center mb-12">
          <div className="w-full max-w-3xl">
            <div className="text-center">
              <h2 className="text-4xl font-bold text-purple-800 mb-8">
                Past Sponsors
              </h2>
            </div>
          </div>
        </div>

        <div className="flex justify-center items-center">
          <div className="w-full max-w-6xl">
            <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-3 gap-8 md:gap-10 lg:gap-12">
              {sponsors.map((sponsor) => (
                <div key={sponsor.id} className="sponsor-logo-container flex justify-center">
                  <div className="sponsor-logo">
                    <Image
                      src={sponsor.logo}
                      alt={sponsor.name}
                      width={150}
                      height={80}
                      className="object-contain"
                    />
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default OurSponsors;
