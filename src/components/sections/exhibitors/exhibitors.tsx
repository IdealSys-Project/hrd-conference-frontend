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
    {
      id: 2,
      name: 'EduAction',
      logo: '/assets/images/exhibitors/Eduaction_logo_exhibitor.png',
      description:
        'At EduAction, our journey began with a vision to transform teams through immersive experiential learning. With over a decade of experience, we have proudly served over 2000 corporate clients and engaged over 90,000 participants in our transformative team-building programmes. Our track record speaks volumes about our commitment to excellence and ability to deliver impactful results.',
      website: 'https://www.eduaction.com.my/home-new/',
    },
    {
      id: 3,
      name: 'TaskHuman',
      logo: '/assets/images/exhibitors/TaskHuman_logo_exhibitor.png',
      description:
        'TaskHuman is a global coaching platform designed to support personal and professional growth through real-time, human-to-human coaching. It offers 24/7 access to over 2,250 expert coaches across 1,200+ skills, including leadership, wellness, sales, and personal development—all within a single platform',
      website: 'https://taskhuman.com/',
    },
  ];

  return (
    <section id="exhibitors" className="exhibitors-section py-16">
      <div className="container mx-auto px-4">
        <div className="mb-12 flex justify-center">
          <div className="w-full max-w-3xl">
            <div className="text-center">
              <h2 className="mb-8 text-4xl font-bold text-purple-800">Exhibitors</h2>
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
