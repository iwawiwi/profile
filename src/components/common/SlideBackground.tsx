import React from 'react';
import iteraLabtekImg from '../../assets/images/itera-labtek.jpg';

export interface SlideBackgroundProps {
  variant?: string;
  showPhoto?: boolean;
}

export const SlideBackground: React.FC<SlideBackgroundProps> = ({
  showPhoto = true,
}) => {
  return (
    <div className="m3-slide-bg-container" aria-hidden="true">
      {showPhoto && (
        <div className="m3-photo-bg-layer">
          <img
            src={iteraLabtekImg}
            alt="Gedung Laboratorium Teknik ITERA"
            className="m3-photo-bg-img"
          />
          <div className="m3-photo-bg-overlay" />
        </div>
      )}
    </div>
  );
};
