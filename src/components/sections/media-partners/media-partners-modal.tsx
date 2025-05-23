import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { FaGlobe } from 'react-icons/fa';
import './media-partners-modal.css';

interface MediaPartner {
  id: number;
  name: string;
  logo: string;
  description: string;
  website: string;
}

interface MediaPartnerModalProps {
  partner: MediaPartner;
  onClose: () => void;
}

const MediaPartnerModal: React.FC<MediaPartnerModalProps> = ({ partner, onClose }) => {
  return (
    <div className="media-partner-modal-overlay" onClick={onClose}>
      <div className="media-partner-modal-content" onClick={e => e.stopPropagation()}>
        <div className="media-partner-modal-header">
          <h2 className="media-partner-modal-title">Media Partner Profile</h2>
          <button className="media-partner-modal-close" onClick={onClose} aria-label="Close modal">
            ×
          </button>
        </div>

        <div className="media-partner-modal-body">
          <div className="media-partner-modal-image-container">
            <Image
              src={partner.logo}
              alt={partner.name}
              width={240}
              height={120}
              className="media-partner-modal-image object-contain"
            />
          </div>
          <h3 className="mb-3 text-center text-xl font-bold text-gray-900">{partner.name}</h3>
          <p className="media-partner-modal-description">{partner.description}</p>
        </div>

        <div className="media-partner-modal-footer">
          <Link
            href={partner.website}
            target="_blank"
            rel="noopener noreferrer"
            className="media-partner-modal-button"
          >
            <FaGlobe size={14} />
            <span>Visit Website</span>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default MediaPartnerModal;
