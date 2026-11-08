import React from 'react';

export const ClosingIllustration: React.FC<{ width?: number | string; height?: number | string }> = ({
  width = 240,
  height = 180,
}) => (
  <svg
    viewBox="0 0 320 240"
    width={width}
    height={height}
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    role="img"
    aria-label="Ilustrasi Semangat Kolaborasi dan Sukses Belajar"
  >
    {/* Background Soft Rays */}
    <circle cx="160" cy="120" r="95" fill="var(--gb-orange-soft)" opacity="0.6" />

    {/* Collaborative Launchpad Steps */}
    <rect x="70" y="165" width="180" height="12" rx="6" fill="var(--gb-bg2)" />
    <rect x="90" y="150" width="140" height="12" rx="6" fill="var(--gb-bg3)" />
    <rect x="115" y="135" width="90" height="12" rx="6" fill="var(--gb-orange)" />

    {/* Ascending Rocket / Success Icon */}
    <g transform="translate(142, 60)">
      {/* Rocket Body */}
      <path
        d="M18 0 C10 18, 5 35, 5 45 H31 C31 35, 26 18, 18 0 Z"
        fill="var(--gb-blue)"
      />
      {/* Window */}
      <circle cx="18" cy="24" r="5" fill="var(--gb-bg0)" stroke="var(--gb-yellow)" strokeWidth="1.5" />
      {/* Fins */}
      <path d="M5 40 L0 50 L6 48 Z" fill="var(--gb-red)" />
      <path d="M31 40 L36 50 L30 48 Z" fill="var(--gb-red)" />
      {/* Exhaust Flame */}
      <path d="M10 46 Q18 64 26 46 Q18 54 10 46 Z" fill="var(--gb-yellow)" />
    </g>

    {/* Floating Stars and Constellations */}
    <polygon points="70,70 73,77 80,78 75,83 76,90 70,86 64,90 65,83 60,78 67,77" fill="var(--gb-yellow)" />
    <polygon points="250,75 252,80 258,81 254,85 255,90 250,87 245,90 246,85 242,81 248,80" fill="var(--gb-yellow)" />
    <polygon points="230,120 231,124 235,125 232,128 233,132 230,130 227,132 228,128 225,125 229,124" fill="var(--gb-aqua)" />
    <polygon points="90,120 91,124 95,125 92,128 93,132 90,130 87,132 88,128 85,125 89,124" fill="var(--gb-purple)" />

    {/* Collaborative Hands High-Five Silhouette */}
    <g transform="translate(110, 185)">
      <rect x="0" y="0" width="100" height="28" rx="14" fill="var(--gb-green-soft)" stroke="var(--gb-green)" strokeWidth="1.5" />
      <text x="50" y="18" textAnchor="middle" fill="var(--gb-green)" fontSize="9" fontWeight="bold" fontFamily="Google Sans Flex, sans-serif">
        ✨ Siap Belajar!
      </text>
    </g>
  </svg>
);
