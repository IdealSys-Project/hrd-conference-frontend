'use client';

import React, { useEffect } from 'react';
import Image from 'next/image';
import './speaker-modal.css';

interface SpeakerModalProps {
  speaker: {
    id: number;
    name: string;
    position: string;
    company: string;
    image: string;
    companyLogo: string;
    linkedIn: string;
    bio?: string;
  } | null;
  isOpen: boolean;
  onClose: () => void;
}

const SpeakerModal: React.FC<SpeakerModalProps> = ({ speaker, isOpen, onClose }) => {
  useEffect(() => {
    const handleEscapeKey = (e: KeyboardEvent) => {
      if (e.key === 'Escape' && isOpen) {
        onClose();
      }
    };

    if (isOpen) {
      document.body.style.overflow = 'hidden';
      document.addEventListener('keydown', handleEscapeKey);
    }

    return () => {
      document.body.style.overflow = '';
      document.removeEventListener('keydown', handleEscapeKey);
    };
  }, [isOpen, onClose]);

  if (!speaker || !isOpen) return null;

  return (
    <div className="modal-container">
      <button 
        className="modal-backdrop" 
        onClick={onClose}
        onKeyDown={(e) => e.key === 'Escape' && onClose()}
        aria-label="Close modal"
      ></button>
      
      <div className="modal speaker-modal">
        <div className="modal-dialog modal-dialog-centered">
          <div className="modal-content">
            <div className="modal-header">
              <h5 className="modal-title">Speaker Profile</h5>
              <button
                type="button"
                className="modal-close-btn"
                onClick={onClose}
                aria-label="Close"
              >
                <span className="close-icon">×</span>
              </button>
            </div>
            <div className="modal-body">
              <div className="speaker-profile-container">
                <div className="speaker-modal-image">
                  <Image
                    src={speaker.image}
                    alt={speaker.name}
                    width={120}
                    height={120}
                  />
                </div>
                
                <div className="speaker-info-container">
                  <h4 className="speaker-name">{speaker.name}</h4>
                  <p className="speaker-position">{speaker.position}</p>
                  
                  <div className="company-container">
                    <Image
                      src={speaker.companyLogo}
                      alt={speaker.company}
                      width={80}
                      height={30}
                      className="company-logo"
                    />
                    <span className="company-name">{speaker.company}</span>
                  </div>
                </div>
              </div>
              
              <div className="speaker-bio-container">
                <h5>About</h5>
                <p className="bio-text">
                  {speaker.bio ?? 
                    `${speaker.name} is one of the speakers at the HRD Conference 2025.`}
                </p>
              </div>
            </div>
            <div className="modal-footer">
              <button
                type="button"
                className="btn btn-primary"
                onClick={onClose}
              >
                Close
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SpeakerModal;
