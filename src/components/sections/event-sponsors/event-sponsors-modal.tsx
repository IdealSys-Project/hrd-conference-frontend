import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { FaGlobe } from 'react-icons/fa';
import './event-sponsors-modal.css';

interface EventSponsor {
  id: number;
  name: string;
  logo: string;
  description: string;
  website: string;
}

interface EventSponsorModalProps {
  sponsor: EventSponsor;
  onClose: () => void;
}

const EventSponsorModal: React.FC<EventSponsorModalProps> = ({ sponsor, onClose }) => {
  return (
    <div className="event-sponsor-modal-overlay" onClick={onClose}>
      <div className="event-sponsor-modal-content" onClick={e => e.stopPropagation()}>
        <div className="event-sponsor-modal-header">
          <h2 className="event-sponsor-modal-title">Event Sponsor Profile</h2>
          <button className="event-sponsor-modal-close" onClick={onClose} aria-label="Close modal">
            ×
          </button>
        </div>

        <div className="event-sponsor-modal-body">
          <div className="event-sponsor-modal-image-container">
            <Image
              src={sponsor.logo}
              alt={sponsor.name}
              width={240}
              height={120}
              className="event-sponsor-modal-image object-contain"
            />
          </div>
          <h3 className="mb-3 text-center text-xl font-bold text-gray-900">{sponsor.name}</h3>
          <p className="event-sponsor-modal-description">{sponsor.description}</p>
        </div>

        <div className="event-sponsor-modal-footer">
          <Link
            href={sponsor.website}
            target="_blank"
            rel="noopener noreferrer"
            className="event-sponsor-modal-button"
          >
            <FaGlobe size={14} />
            <span>Visit Website</span>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default EventSponsorModal;
