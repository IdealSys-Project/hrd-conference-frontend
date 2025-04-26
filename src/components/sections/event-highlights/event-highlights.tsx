'use client';

import React from 'react';
import Image from 'next/image';
import './event-highlights.css';

const EventHighlights: React.FC = () => {

  return (
    <section id="highlights" className="highlights-section">
      <div className="container mx-auto px-4">
        <div className="flex justify-center mb-12">
          <div className="w-full max-w-3xl">
            <div className="text-center">
              <h2 className="text-4xl font-bold text-purple-800 mb-8">
                Highlights from Our Previous Conference
              </h2>
              <p className="text-gray-600 mt-4">
                Relive the memorable moments from our last conference through these captivating images and video highlights
              </p>
            </div>
          </div>
        </div>

        <div className="bento-grid-container">
          <div className="bento-cell bento-cell-video">
            <div className="video-feature-container">
              <div 
                className="video-thumbnail"
                style={{ backgroundImage: "url('/assets/images/event-highlights/previous_10.jpg')" }}
              >
                <a
                  href="https://www.youtube.com/watch?v=rGR1ENje0Ng&t=138s"
                  className="video-popup-btn"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14.752 11.168l-3.197-2.132A1 1 0 0010 9.87v4.263a1 1 0 001.555.832l3.197-2.132a1 1 0 000-1.664z" />
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                </a>
                <div className="video-overlay">
                  <div className="video-text">
                    <h6>Watch Conference Highlights</h6>
                    <p>
                      Click to experience the energy and insights from our previous event
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="bento-cell bento-cell-carousel">
            <div className="gallery-image-container">
              <Image
                src="/assets/images/event-highlights/previous_7.jpg"
                alt="Previous Conference"
                fill
                style={{ objectFit: 'cover' }}
              />
            </div>
          </div>

          <div className="bento-cell bento-cell-small bento-cell-1">
            <div className="gallery-image-container">
              <Image
                src="/assets/images/event-highlights/previous_5.jpg"
                alt="Previous Conference"
                fill
                style={{ objectFit: 'cover' }}
              />
            </div>
          </div>

          <div className="bento-cell bento-cell-small bento-cell-2">
            <div className="gallery-image-container">
              <Image
                src="/assets/images/event-highlights/previous_4.jpg"
                alt="Previous Conference"
                fill
                style={{ objectFit: 'cover' }}
              />
            </div>
          </div>

          <div className="bento-cell bento-cell-small bento-cell-3">
            <div className="gallery-image-container">
              <Image
                src="/assets/images/event-highlights/previous_2.jpg"
                alt="Previous Conference"
                fill
                style={{ objectFit: 'cover' }}
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default EventHighlights;
