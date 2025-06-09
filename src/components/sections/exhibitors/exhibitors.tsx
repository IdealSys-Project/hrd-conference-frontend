'use client';

import React, { useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { FaGlobe } from 'react-icons/fa';
import ExhibitorModal from './exhibitors-modal';
import './exhibitors.css';

interface Exhibitor {
  id: number;
  name: string;
  logo: string;
  description: string;
  website: string;
}

const Exhibitors: React.FC = () => {
  const [selectedExhibitor, setSelectedExhibitor] = useState<Exhibitor | null>(null);

  const exhibitors: Exhibitor[] = [
    {
      id: 1,
      name: 'Serojatech Sdn Bhd',
      logo: '/assets/images/exhibitors/Serojatech_logo.png',
      description:
        'Serojatech Sdn Bhd is an innovative IT solutions and software company specializing in AI-driven technologies, blockchain security, and digital transformation. With a commitment to integrity and continuous learning, Serojatech pioneers cutting-edge solutions in Big Data, IoT, and Machine Learning to empower businesses and drive sustainable growth.',
      website: 'https://www.serojatech.my/',
    },
  ];

  return (
    <section id="exhibitors" className="exhibitors-section py-16">
      <div className="container mx-auto px-4">
        <div className="mb-12 flex justify-center">
          <div className="w-full max-w-3xl">
            <div className="text-center">
              <h2 className="mb-8 text-4xl font-bold text-purple-800">Exhibitor</h2>
            </div>
          </div>
        </div>

        <div className="flex justify-center">
          <div className="exhibitor-grid">
            {exhibitors.map(partner => (
              <div
                key={partner.id}
                className="exhibitor-logo-container"
                onClick={() => setSelectedExhibitor(partner)}
              >
                <div className="exhibitor-logo">
                  <Image
                    src={partner.logo}
                    alt={partner.name}
                    width={200}
                    height={100}
                    className="object-contain"
                  />
                  <div className="exhibitor-social-links">
                    <Link
                      href={partner.website}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="social-icon"
                      onClick={e => e.stopPropagation()}
                    >
                      <FaGlobe size={16} />
                    </Link>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {selectedExhibitor && (
        <ExhibitorModal exhibitor={selectedExhibitor} onClose={() => setSelectedExhibitor(null)} />
      )}
    </section>
  );
};

export default Exhibitors;
