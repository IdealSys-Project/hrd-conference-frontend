'use client';

import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { FaGlobe } from 'react-icons/fa';
import './event-sponsors.css';

interface EventSponsor {
  id: number;
  name: string;
  logo: string;
  description: string;
  website: string;
}

const EventSponsors: React.FC = () => {
  const EventSponsors: EventSponsor[] = [
    {
      id: 1,
      name: 'Eduaction',
      logo: '/assets/images/event-sponsors/Eduaction_logo_sponsor.png',
      description:'',
      website: 'https://www.eduaction.com.my/home-new/',
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
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default EventSponsors;
