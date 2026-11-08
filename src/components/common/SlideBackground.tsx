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
    <div
      style={{
        position: 'absolute',
        top: 0,
        right: 0,
        bottom: 0,
        left: 0,
        width: '100%',
        height: '100%',
        pointerEvents: 'none',
        overflow: 'hidden',
        zIndex: 0,
      }}
      aria-hidden="true"
    >
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
