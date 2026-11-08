import React from 'react';

export const EthicsIllustration: React.FC<{ width?: number | string; height?: number | string }> = ({
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
    aria-label="Ilustrasi Integritas Akademik dan Anti-Plagiarisme"
  >
    {/* Background Soft Aura */}
    <circle cx="160" cy="120" r="90" fill="var(--gb-red-soft)" opacity="0.4" />

    {/* Center Academic Shield */}
    <path
      d="M160 45 L210 65 V125 C210 165, 160 195, 160 195 C160 195, 110 165, 110 125 V65 Z"
      fill="var(--md-sys-color-surface-container-high)"
      stroke="var(--gb-red)"
      strokeWidth="3"
    />

    {/* Balance Scale of Academic Justice inside Shield */}
    {/* Pillar */}
    <line x1="160" y1="80" x2="160" y2="145" stroke="var(--gb-fg2)" strokeWidth="3" strokeLinecap="round" />
    <path d="M148 145 H172" stroke="var(--gb-fg2)" strokeWidth="3" strokeLinecap="round" />
    {/* Beam */}
    <line x1="135" y1="92" x2="185" y2="92" stroke="var(--gb-fg2)" strokeWidth="2.5" strokeLinecap="round" />
    {/* Left Pan (Honesty) */}
    <line x1="135" y1="92" x2="125" y2="115" stroke="var(--gb-green)" strokeWidth="1.5" />
    <line x1="135" y1="92" x2="145" y2="115" stroke="var(--gb-green)" strokeWidth="1.5" />
    <path d="M120 115 Q135 125 150 115 Z" fill="var(--gb-green-soft)" stroke="var(--gb-green)" strokeWidth="1.5" />
    {/* Right Pan (Cheat) */}
    <line x1="185" y1="92" x2="175" y2="115" stroke="var(--gb-red)" strokeWidth="1.5" />
    <line x1="185" y1="92" x2="195" y2="115" stroke="var(--gb-red)" strokeWidth="1.5" />
    <path d="M170 115 Q185 125 200 115 Z" fill="var(--gb-red-soft)" stroke="var(--gb-red)" strokeWidth="1.5" />

    {/* Zero Tolerance Stamp / Badge */}
    <g transform="translate(100, 155)">
      <rect x="0" y="0" width="120" height="28" rx="14" fill="var(--gb-red)" />
      <text x="60" y="18" textAnchor="middle" fill="#ffffff" fontSize="9.5" fontWeight="900" fontFamily="Google Sans Flex, sans-serif" letterSpacing="0.05em">
        PLAGIARISME = 0
      </text>
    </g>

    {/* Left Side: Positive Expectation */}
    <g transform="translate(30, 95)">
      <rect x="0" y="0" width="70" height="34" rx="8" fill="var(--gb-green-soft)" stroke="var(--gb-green)" strokeWidth="1.5" />
      <text x="35" y="15" textAnchor="middle" fill="var(--gb-green)" fontSize="8" fontWeight="bold" fontFamily="Google Sans Flex, sans-serif">
        KOMITMEN
      </text>
      <text x="35" y="27" textAnchor="middle" fill="var(--gb-fg1)" fontSize="7.5" fontWeight="600" fontFamily="Google Sans Flex, sans-serif">
        Jujur & Santun
      </text>
    </g>

    {/* Right Side: Prohibited */}
    <g transform="translate(220, 95)">
      <rect x="0" y="0" width="70" height="34" rx="8" fill="var(--gb-red-soft)" stroke="var(--gb-red)" strokeWidth="1.5" />
      <text x="35" y="15" textAnchor="middle" fill="var(--gb-red)" fontSize="8" fontWeight="bold" fontFamily="Google Sans Flex, sans-serif">
        DILARANG
      </text>
      <text x="35" y="27" textAnchor="middle" fill="var(--gb-fg1)" fontSize="7.5" fontWeight="600" fontFamily="Google Sans Flex, sans-serif">
        Titip Absen
      </text>
    </g>
  </svg>
);
