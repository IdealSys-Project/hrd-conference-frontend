'use client';

import React, { useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { FaGlobe } from 'react-icons/fa';
import AssociationPartnerModal from './association-partners-modal';
import './association-partners.css';

interface AssociationPartner {
  id: number;
  name: string;
  logo: string;
  description: string;
  website: string;
}

const AssociationPartners: React.FC = () => {
  const [selectedPartner, setSelectedPartner] = useState<AssociationPartner | null>(null);

  const AssociationPartners: AssociationPartner[] = [
    {
      id: 1,
      name: 'AsiaHRM',
      logo: '/assets/images/association-partners/Asia_HRM_logo.png',
      description:
        'AsiaHRM is the leading online platform for HR professionals across Asia, empowering them to thrive in an ever-evolving industry. Established in 2018, we connect a vibrant community of HR practitioners through cutting-edge resources, professional development programs, and networking opportunities.',
      website: 'https://asiahrm.com/',
    },
    {
      id: 2,
      name: 'Asia HR Woman Club',
      logo: '/assets/images/association-partners/Asia_HR_Women_Club_logo.png',
      description:
        'Asia HR Woman Club is an organization dedicated to grooming and nurturing HR woman managers both personally and professionally in the HR domain, transforming them into HR Leaders.',
      website: 'https://asiahrwomanclub.com/',
    },
  ];

  return (
    <section id="association-partners" className="association-partners-section py-16">
      <div className="container mx-auto px-4">
        <div className="mb-12 flex justify-center">
          <div className="w-full max-w-3xl">
            <div className="text-center">
              <h2 className="mb-8 text-4xl font-bold text-purple-800">Association Partners</h2>
            </div>
          </div>
        </div>

        <div className="flex justify-center">
          <div className="association-partner-grid">
            {AssociationPartners.map(partner => (
              <div
                key={partner.id}
                className="association-partner-logo-container"
                onClick={() => setSelectedPartner(partner)}
              >
                <div className="association-partner-logo">
                  <Image
                    src={partner.logo}
                    alt={partner.name}
                    width={200}
                    height={100}
                    className="object-contain"
                  />
                  <div className="association-partner-social-links">
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

      {selectedPartner && (
        <AssociationPartnerModal partner={selectedPartner} onClose={() => setSelectedPartner(null)} />
      )}
    </section>
  );
};

export default AssociationPartners;
