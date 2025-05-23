'use client';

import React, { useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { FaGlobe } from 'react-icons/fa';
import MediaPartnerModal from './media-partners-modal';
import './media-partners.css';

interface MediaPartner {
  id: number;
  name: string;
  logo: string;
  description: string;
  website: string;
}

const MediaPartners: React.FC = () => {
  const [selectedPartner, setSelectedPartner] = useState<MediaPartner | null>(null);

  const mediaPartners: MediaPartner[] = [
    {
      id: 1,
      name: 'ACN Newswire',
      logo: '/assets/images/media-partners/ACNNewswire_logo.png',
      description:
        'ACN Newswire is a leading press release distributor in Asia, delivering news to institutional investors, media, and global audiences in multiple languages. It provides real-time XML press release distribution to financial terminals, syndication partners, and websites, reaching 3,500 platforms, 8,000 media outlets, and 1.5 million professionals across 70 countries.',
      website: 'https://www.acnnewswire.com/allevents/',
    },
    {
      id: 2,
      name: 'Media Elements',
      logo: '/assets/images/media-partners/MediaElements_logo.png',
      description:
        'Media Elements is a creative production company based in Kuala Lumpur, Malaysia, specializing in cinematic video production and compelling storytelling. They craft impactful campaign videos, professional photography, and short documentary-style content, helping brands connect with audiences through authentic narratives and expert visual storytelling.',
      website: 'https://mediaelements.co/',
    },
  ];

  return (
    <section id="media-partners" className="media-partners-section py-16">
      <div className="container mx-auto px-4">
        <div className="mb-12 flex justify-center">
          <div className="w-full max-w-3xl">
            <div className="text-center">
              <h2 className="mb-8 text-4xl font-bold text-purple-800">Media Partners</h2>
            </div>
          </div>
        </div>

        <div className="flex justify-center">
          <div className="media-partner-grid">
            {mediaPartners.map(partner => (
              <div
                key={partner.id}
                className="media-partner-logo-container"
                onClick={() => setSelectedPartner(partner)}
              >
                <div className="media-partner-logo">
                  <Image
                    src={partner.logo}
                    alt={partner.name}
                    width={200}
                    height={100}
                    className="object-contain"
                  />
                  <div className="media-partner-social-links">
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
        <MediaPartnerModal partner={selectedPartner} onClose={() => setSelectedPartner(null)} />
      )}
    </section>
  );
};

export default MediaPartners;
