import React from 'react';

export const ExpertiseIllustration: React.FC<{ width?: number | string; height?: number | string }> = ({
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
    aria-label="Ilustrasi Riset Keamanan Informasi, Multimedia, dan HCI"
  >
    {/* Pillar 1: Machine Learning */}
    <g transform="translate(30, 45)">
      <rect x="0" y="0" width="80" height="150" rx="16" fill="var(--gb-blue-soft)" stroke="var(--gb-blue)" strokeWidth="1.8" />
      {/* Padlock with Pixel Grid */}
      <rect x="22" y="32" width="36" height="30" rx="6" fill="var(--gb-blue)" />
      <path d="M30 32 V22 A10 10 0 0 1 50 22 V32" stroke="var(--gb-blue)" strokeWidth="3" fill="none" strokeLinecap="round" />
      <circle cx="40" cy="46" r="4" fill="var(--gb-bg0)" />
      {/* Matrix binary dots */}
      <circle cx="25" cy="80" r="2.5" fill="var(--gb-blue)" opacity="0.6" />
      <circle cx="40" cy="80" r="2.5" fill="var(--gb-blue)" />
      <circle cx="55" cy="80" r="2.5" fill="var(--gb-blue)" opacity="0.4" />
      <circle cx="25" cy="95" r="2.5" fill="var(--gb-blue)" />
      <circle cx="40" cy="95" r="2.5" fill="var(--gb-blue)" opacity="0.8" />
      <circle cx="55" cy="95" r="2.5" fill="var(--gb-blue)" />
      <text x="40" y="125" textAnchor="middle" fill="var(--gb-blue)" fontSize="8.5" fontWeight="bold" fontFamily="Google Sans Flex, sans-serif">
        Machine
      </text>
      <text x="40" y="138" textAnchor="middle" fill="var(--gb-blue)" fontSize="8" fontWeight="600" fontFamily="Google Sans Flex, sans-serif">
        Learning
      </text>
    </g>

    {/* Pillar 2: Multimedia & Music Information Retrieval */}
    <g transform="translate(120, 45)">
      <rect x="0" y="0" width="80" height="150" rx="16" fill="var(--gb-purple-soft)" stroke="var(--gb-purple)" strokeWidth="1.8" />
      {/* Soundwave bars */}
      <line x1="20" y1="52" x2="20" y2="28" stroke="var(--gb-purple)" strokeWidth="3" strokeLinecap="round" />
      <line x1="28" y1="58" x2="28" y2="22" stroke="var(--gb-purple)" strokeWidth="3" strokeLinecap="round" />
      <line x1="36" y1="64" x2="36" y2="16" stroke="var(--gb-purple)" strokeWidth="3.5" strokeLinecap="round" />
      <line x1="44" y1="58" x2="44" y2="24" stroke="var(--gb-purple)" strokeWidth="3" strokeLinecap="round" />
      <line x1="52" y1="50" x2="52" y2="30" stroke="var(--gb-purple)" strokeWidth="3" strokeLinecap="round" />
      <line x1="60" y1="44" x2="60" y2="36" stroke="var(--gb-purple)" strokeWidth="2.5" strokeLinecap="round" />
      {/* Musical Note */}
      <circle cx="34" cy="88" r="6" fill="var(--gb-purple)" />
      <line x1="40" y1="88" x2="40" y2="72" stroke="var(--gb-purple)" strokeWidth="2" />
      <line x1="40" y1="72" x2="52" y2="75" stroke="var(--gb-purple)" strokeWidth="3" strokeLinecap="round" />
      <text x="40" y="125" textAnchor="middle" fill="var(--gb-purple)" fontSize="8.5" fontWeight="bold" fontFamily="Google Sans Flex, sans-serif">
        Multimedia
      </text>
      <text x="40" y="138" textAnchor="middle" fill="var(--gb-purple)" fontSize="8" fontWeight="600" fontFamily="Google Sans Flex, sans-serif">
        & Audio MIR
      </text>
    </g>

    {/* Pillar 3: HCI & Gesture Recognition */}
    <g transform="translate(210, 45)">
      <rect x="0" y="0" width="80" height="150" rx="16" fill="var(--gb-aqua-soft)" stroke="var(--gb-aqua)" strokeWidth="1.8" />
      {/* Hand Gesture Sensor Points */}
      <circle cx="40" cy="36" r="4" fill="var(--gb-aqua)" />
      <circle cx="28" cy="44" r="3.5" fill="var(--gb-aqua)" />
      <circle cx="52" cy="44" r="3.5" fill="var(--gb-aqua)" />
      <circle cx="34" cy="58" r="3" fill="var(--gb-aqua)" />
      <circle cx="46" cy="58" r="3" fill="var(--gb-aqua)" />
      <path d="M40 36 L28 44 L34 58 L46 58 L52 44 Z" stroke="var(--gb-aqua)" strokeWidth="1.5" strokeDasharray="2 2" fill="none" />
      {/* Radar waves */}
      <path d="M22 84 A24 24 0 0 1 58 84" stroke="var(--gb-aqua)" strokeWidth="2" fill="none" strokeLinecap="round" />
      <path d="M28 92 A16 16 0 0 1 52 92" stroke="var(--gb-aqua)" strokeWidth="2" fill="none" strokeLinecap="round" />
      <text x="40" y="125" textAnchor="middle" fill="var(--gb-aqua)" fontSize="8.5" fontWeight="bold" fontFamily="Google Sans Flex, sans-serif">
        HCI & Gesture
      </text>
      <text x="40" y="138" textAnchor="middle" fill="var(--gb-aqua)" fontSize="8" fontWeight="600" fontFamily="Google Sans Flex, sans-serif">
        Recognition
      </text>
    </g>
  </svg>
);
