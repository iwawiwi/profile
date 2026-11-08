import React from 'react';

export const AboutIllustration: React.FC<{ width?: number | string; height?: number | string }> = ({
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
    aria-label="Ilustrasi Asal Bali dan Domisili Lampung ITERA"
  >
    {/* Background Aura */}
    <circle cx="160" cy="120" r="95" fill="var(--gb-aqua-soft)" opacity="0.6" />

    {/* Siger Lampung & Balinese Candi Bentar Cultural Fusion Symbol */}
    {/* Left Gate Wing */}
    <path
      d="M100 190 L100 90 Q110 85 125 70 L125 190 Z"
      fill="var(--gb-orange)"
      stroke="var(--gb-fg2)"
      strokeWidth="2"
    />
    <path d="M90 190 L135 190" stroke="var(--gb-fg2)" strokeWidth="3" strokeLinecap="round" />
    <path d="M100 120 L125 120 M100 150 L125 150" stroke="var(--gb-bg0)" strokeWidth="1.5" />

    {/* Right Gate Wing */}
    <path
      d="M220 190 L220 90 Q210 85 195 70 L195 190 Z"
      fill="var(--gb-orange)"
      stroke="var(--gb-fg2)"
      strokeWidth="2"
    />
    <path d="M185 190 L230 190" stroke="var(--gb-fg2)" strokeWidth="3" strokeLinecap="round" />
    <path d="M195 120 L220 120 M195 150 L220 150" stroke="var(--gb-bg0)" strokeWidth="1.5" />

    {/* Center Academic Avatar Profile */}
    <circle cx="160" cy="115" r="32" fill="var(--md-sys-color-surface-container-high)" stroke="var(--gb-blue)" strokeWidth="2.5" />
    {/* Glasses / Academic character */}
    <circle cx="151" cy="112" r="7" stroke="var(--gb-fg1)" strokeWidth="2" fill="var(--gb-bg0-h)" />
    <circle cx="169" cy="112" r="7" stroke="var(--gb-fg1)" strokeWidth="2" fill="var(--gb-bg0-h)" />
    <path d="M158 112 L162 112" stroke="var(--gb-fg1)" strokeWidth="2" />
    {/* Friendly Smile */}
    <path d="M154 126 Q160 132 166 126" stroke="var(--gb-fg1)" strokeWidth="2" strokeLinecap="round" fill="none" />
    {/* Academic Tie / Collar */}
    <path d="M148 147 L160 162 L172 147 Z" fill="var(--gb-yellow)" stroke="var(--gb-fg2)" strokeWidth="1.5" />

    {/* Floating Badges */}
    <g transform="translate(40, 45)">
      <rect x="0" y="0" width="75" height="30" rx="15" fill="var(--gb-yellow-soft)" stroke="var(--gb-yellow)" strokeWidth="1.5" />
      <text x="37.5" y="19" textAnchor="middle" fill="var(--gb-yellow)" fontSize="10.5" fontWeight="bold" fontFamily="Google Sans Flex, sans-serif">
        🌴 Asal: Bali
      </text>
    </g>

    <g transform="translate(195, 45)">
      <rect x="0" y="0" width="95" height="30" rx="15" fill="var(--gb-blue-soft)" stroke="var(--gb-blue)" strokeWidth="1.5" />
      <text x="47.5" y="19" textAnchor="middle" fill="var(--gb-blue)" fontSize="10" fontWeight="bold" fontFamily="Google Sans Flex, sans-serif">
        🏛️ ITERA Lampung
      </text>
    </g>

    {/* Ground Pathway */}
    <path d="M60 215 C120 205, 200 205, 260 215" stroke="var(--gb-fg4)" strokeWidth="2.5" strokeDasharray="4 4" />
  </svg>
);
