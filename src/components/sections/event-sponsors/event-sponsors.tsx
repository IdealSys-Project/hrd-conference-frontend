'use client';

import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { FaGlobe, FaMedal } from 'react-icons/fa';
import './event-sponsors.css';

interface EventSponsor {
  id: number;
  name: string;
  logo: string;
  description: string;
  website: string;
  level: 'Bronze' | 'Silver' | 'Gold';
}

const EventSponsors: React.FC = () => {
  const EventSponsors: EventSponsor[] = [
    {
      id: 1,
      name: 'The Growth Perspective',
      logo: '/assets/images/event-sponsors/The_Growth_Perspective_logo_sponsor.png',
      description: '',
      website: 'https://www.thegrowthperspective.com/',
      level: 'Gold',
    },
    {
      id: 2,
      name: "Laurea People's Signature",
      logo: '/assets/images/event-sponsors/Laurea_People_Signature_logo_sponsor.png',
      description: '',
      website: 'https://laureapeoplessignature.com/',
      level: 'Gold',
    },
    {
      id: 3,
      name: "TaskHuman",
      logo: '/assets/images/event-sponsors/TaskHuman_logo_sponsor.png',
      description: '',
      website: 'https://taskhuman.com/',
      level: 'Silver',
    },
    {
      id: 4,
      name: 'Eduaction',
      logo: '/assets/images/event-sponsors/Eduaction_logo_sponsor.png',
      description: '',
      website: 'https://www.eduaction.com.my/home-new/',
      level: 'Bronze',
    },
  ];

  return (
    <section id="event-sponsors" className="event-sponsors-section py-16">
      <div className="container mx-auto px-4">
        <div className="mb-12 flex justify-center">
          <div className="w-full max-w-3xl">
            <div className="text-center">
              <h2 className="mb-8 text-4xl font-bold text-purple-800">Sponsors</h2>
            </div>
          </div>
        </div>

        <div className="flex justify-center">
          <div className="event-sponsor-grid">
            {EventSponsors.map(partner => (
              <div
                key={partner.id}
                className="event-sponsor-logo-container"
              >
                <div className="relative">
                  <div className={`event-sponsor-level ${partner.level.toLowerCase()}`}>
                    <FaMedal className="inline-block mr-1.5" />
                    <span>{partner.level} Sponsor</span>
                  </div>
                  <div className="event-sponsor-logo">
                  <Image
                    src={partner.logo}
                    alt={partner.name}
                    width={200}
                    height={100}
                    className="object-contain"
                  />
                  <div className="event-sponsor-social-links">
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
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default EventSponsors;
