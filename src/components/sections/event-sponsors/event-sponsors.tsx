'use client';

import React, { useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { FaGlobe, FaMedal } from 'react-icons/fa';
import EventSponsorModal from './event-sponsors-modal';
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
  const [selectedSponsor, setSelectedSponsor] = useState<EventSponsor | null>(null);

  const EventSponsors: EventSponsor[] = [
    {
      id: 1,
      name: 'The Growth Perspective',
      logo: '/assets/images/event-sponsors/The_Growth_Perspective_logo_sponsor.png',
      description: "The Growth Perspective is a Singapore-based learning strategy consultancy that embeds capability-building into the heart of HR. We diagnose performance issues, design strategic interventions, and use AI critically - not just quickly - to drive measurable ROI. Whether you're adopting AI tools, rethinking L&D, or addressing workforce gaps, we bring a systems-level approach that delivers sustainable results. Grounded in Singapore's values of ethics, strategic thinking, and long-term sustainability, we help organisations stop training symptoms and start building real capability that transforms both AI investments and business outcomes.",
      website: 'https://www.thegrowthperspective.com/',
      level: 'Gold',
    },
    {
      id: 2,
      name: "Laurea People's Signature",
      logo: '/assets/images/event-sponsors/Laurea_People_Signature_logo_sponsor.png',
      description: 'Laurea People’s Signature (LPS) is Asia’s Best B2B Martech Agency, redefining how brands grow in a digital-first world. Known for fusing AI-powered strategies with emotionally intelligent branding, LPS helps businesses break through the digital noise, scale faster, and connect deeper. With award-winning innovation and a results-first mindset, LPS is redefining how modern brands grow, connect, and  positions to lead with impact across global markets.',
      website: 'https://laureapeoplessignature.com/',
      level: 'Gold',
    },
    {
      id: 3,
      name: "TaskHuman",
      logo: '/assets/images/event-sponsors/TaskHuman_logo_sponsor.png',
      description: 'TaskHuman is a global coaching platform designed to support personal and professional growth through real-time, human-to-human coaching. It offers 24/7 access to over 2,250 expert coaches across 1,200+ skills, including leadership, wellness, sales, and personal development—all within a single platform',
      website: 'https://taskhuman.com/',
      level: 'Silver',
    },
    {
      id: 4,
      name: "eduCLaaS",
      logo: '/assets/images/event-sponsors/Educlaas_logo.png',
      description: 'eduCLaaS is a Pan-Asia Digital Skilling Platform which aims to bridge the missing connection between education and the workplace. We foster a tripartite partnership across public, private, and non-profit sectors, to recontextualize education as a global common good for lifelong applied learning delivery, to develop future-ready talents and enterprises in the glocalized digital economy.',
      website: 'https://www.educlaas.com/',
      level: 'Silver',
    },
    {
      id: 5,
      name: 'Eduaction',
      logo: '/assets/images/event-sponsors/Eduaction_logo_sponsor.png',
      description: 'At EduAction, our journey began with a vision to transform teams through immersive experiential learning. With over a decade of experience, we have proudly served over 2000 corporate clients and engaged over 90,000 participants in our transformative team-building programmes. Our track record speaks volumes about our commitment to excellence and ability to deliver impactful results.',
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
            {EventSponsors.map(sponsor => (
              <div
                key={sponsor.id}
                className="event-sponsor-logo-container"
                onClick={() => setSelectedSponsor(sponsor)}
              >
                <div className="relative">
                  <div className={`event-sponsor-level ${sponsor.level.toLowerCase()}`}>
                    <FaMedal className="inline-block mr-1.5" />
                    <span>{sponsor.level} Sponsor</span>
                  </div>
                  <div className="event-sponsor-logo">
                  <Image
                    src={sponsor.logo}
                    alt={sponsor.name}
                    width={200}
                    height={100}
                    className="object-contain"
                  />
                  <div className="event-sponsor-social-links">
                    <Link
                      href={sponsor.website}
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

      {selectedSponsor && (
        <EventSponsorModal sponsor={selectedSponsor} onClose={() => setSelectedSponsor(null)} />
      )}
    </section>
  );
};

export default EventSponsors;
