import React from 'react';

export const HeroIllustration: React.FC<{ width?: number | string; height?: number | string }> = ({
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
    aria-label="Ilustrasi Profil Dosen Teknik Informatika ITERA"
  >
    {/* Ambient Glow */}
    <ellipse cx="160" cy="130" rx="140" ry="85" fill="var(--gb-orange-soft)" opacity="0.7" />

    {/* Laptop / Workstation */}
    <rect x="65" y="80" width="190" height="110" rx="12" fill="var(--md-sys-color-surface-container-high)" stroke="var(--gb-blue)" strokeWidth="2.5" />
    <rect x="75" y="90" width="170" height="85" rx="8" fill="var(--gb-bg0-h)" />

    {/* Code Editor Window Header */}
    <circle cx="87" cy="98" r="4" fill="var(--gb-red)" />
    <circle cx="98" cy="98" r="4" fill="var(--gb-yellow)" />
    <circle cx="109" cy="98" r="4" fill="var(--gb-green)" />

    {/* Code Lines / Visual representation */}
    <rect x="87" y="112" width="75" height="6" rx="3" fill="var(--gb-blue)" />
    <rect x="168" y="112" width="55" height="6" rx="3" fill="var(--gb-purple)" />
    <rect x="87" y="125" width="45" height="6" rx="3" fill="var(--gb-orange)" />
    <rect x="138" y="125" width="80" height="6" rx="3" fill="var(--gb-green)" />
    <rect x="87" y="138" width="95" height="6" rx="3" fill="var(--gb-aqua)" />
    <rect x="87" y="151" width="60" height="6" rx="3" fill="var(--gb-fg3)" opacity="0.8" />

    {/* Laptop Base */}
    <path d="M40 195 C40 190 48 188 65 188 L255 188 C272 188 280 190 280 195 L270 202 C265 204 255 204 250 204 L70 204 C65 204 55 204 50 202 Z" fill="var(--gb-bg2)" stroke="var(--gb-fg4)" strokeWidth="1.5" />
    <rect x="135" y="190" width="50" height="5" rx="2.5" fill="var(--gb-bg3)" />

    {/* Floating Academic Badge (ITERA & Informatics) */}
    <g transform="translate(210, 40)">
      <rect x="0" y="0" width="80" height="48" rx="14" fill="var(--md-sys-color-surface-container)" stroke="var(--gb-orange)" strokeWidth="2" />
      <text x="40" y="22" textAnchor="middle" fill="var(--gb-orange)" fontSize="10" fontWeight="bold" fontFamily="Google Sans Flex, sans-serif">
        ITERA IF
      </text>
      <text x="40" y="36" textAnchor="middle" fill="var(--gb-fg2)" fontSize="9" fontWeight="600" fontFamily="Google Sans Flex, sans-serif">
        Dosen Tetap
      </text>
    </g>

    {/* Floating Security & Multimedia Badge */}
    <g transform="translate(30, 48)">
      <rect x="0" y="0" width="70" height="42" rx="12" fill="var(--md-sys-color-surface-container)" stroke="var(--gb-blue)" strokeWidth="1.8" />
      <text x="35" y="20" textAnchor="middle" fill="var(--gb-blue)" fontSize="9.5" fontWeight="bold" fontFamily="Google Sans Flex, sans-serif">
        Kode: IWW
      </text>
      <text x="35" y="32" textAnchor="middle" fill="var(--gb-green)" fontSize="8.5" fontWeight="600" fontFamily="Google Sans Flex, sans-serif">
        Aktif 2017
      </text>
    </g>
  </svg>
);
