import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { FaGlobe } from 'react-icons/fa';
import './exhibitors-modal.css';

interface Exhibitor {
  id: number;
  name: string;
  logo: string;
  description: string;
  website: string;
}

interface ExhibitorModalProps {
  exhibitor: Exhibitor;
  onClose: () => void;
}

const ExhibitorModal: React.FC<ExhibitorModalProps> = ({ exhibitor, onClose }) => {
  return (
    <div className="exhibitor-modal-overlay" onClick={onClose}>
      <div className="exhibitor-modal-content" onClick={e => e.stopPropagation()}>
        <div className="exhibitor-modal-header">
          <h2 className="exhibitor-modal-title">Exhibitor Profile</h2>
          <button className="exhibitor-modal-close" onClick={onClose} aria-label="Close modal">
            ×
          </button>
        </div>

        <div className="exhibitor-modal-body">
          <div className="exhibitor-modal-image-container">
            <Image
              src={exhibitor.logo}
              alt={exhibitor.name}
              width={240}
              height={120}
              className="exhibitor-modal-image object-contain"
            />
          </div>
          <h3 className="mb-3 text-center text-xl font-bold text-gray-900">{exhibitor.name}</h3>
          <p className="exhibitor-modal-description">{exhibitor.description}</p>
        </div>

        <div className="exhibitor-modal-footer">
          <Link
            href={exhibitor.website}
            target="_blank"
            rel="noopener noreferrer"
            className="exhibitor-modal-button"
          >
            <FaGlobe size={14} />
            <span>Visit Website</span>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default ExhibitorModal;
