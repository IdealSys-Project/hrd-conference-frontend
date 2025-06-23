import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { FaGlobe } from 'react-icons/fa';
import './association-partners-modal.css';

interface AssociationPartner {
  id: number;
  name: string;
  logo: string;
  description: string;
  website: string;
}

interface AssociationPartnerModalProps {
  partner: AssociationPartner;
  onClose: () => void;
}

const AssociationPartnerModal: React.FC<AssociationPartnerModalProps> = ({ partner, onClose }) => {
  return (
    <div className="association-partner-modal-overlay" onClick={onClose}>
      <div className="association-partner-modal-content" onClick={e => e.stopPropagation()}>
        <div className="association-partner-modal-header">
          <h2 className="association-partner-modal-title">Association Partner Profile</h2>
          <button className="association-partner-modal-close" onClick={onClose} aria-label="Close modal">
            ×
          </button>
        </div>

        <div className="association-partner-modal-body">
          <div className="association-partner-modal-image-container">
            <Image
              src={partner.logo}
              alt={partner.name}
              width={240}
              height={120}
              className="association-partner-modal-image object-contain"
            />
          </div>
          <h3 className="mb-3 text-center text-xl font-bold text-gray-900">{partner.name}</h3>
          <p className="association-partner-modal-description">{partner.description}</p>
        </div>

        <div className="association-partner-modal-footer">
          <Link
            href={partner.website}
            target="_blank"
            rel="noopener noreferrer"
            className="association-partner-modal-button"
          >
            <FaGlobe size={14} />
            <span>Visit Website</span>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default AssociationPartnerModal;
