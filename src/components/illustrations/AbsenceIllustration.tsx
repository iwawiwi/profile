import React from 'react';

export const AbsenceIllustration: React.FC<{ width?: number | string; height?: number | string }> = ({
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
    aria-label="Ilustrasi Prosedur Izin dan Ujian Susulan"
  >
    {/* Background Aura */}
    <rect x="50" y="40" width="220" height="160" rx="20" fill="var(--gb-blue-soft)" opacity="0.5" />

    {/* Official Document Paper */}
    <g transform="translate(100, 50)">
      <rect x="0" y="0" width="120" height="145" rx="8" fill="var(--gb-bg0-h)" stroke="var(--gb-blue)" strokeWidth="2" />
      {/* Red cross stamp / Medical header */}
      <rect x="15" y="15" width="20" height="20" rx="4" fill="var(--gb-red-soft)" stroke="var(--gb-red)" strokeWidth="1" />
      <path d="M25 19 V31 M19 25 H31" stroke="var(--gb-red)" strokeWidth="2.5" strokeLinecap="round" />
      {/* Official header text lines */}
      <rect x="42" y="18" width="60" height="5" rx="2.5" fill="var(--gb-fg2)" />
      <rect x="42" y="27" width="45" height="4" rx="2" fill="var(--gb-fg3)" />

      {/* Document Body Lines */}
      <rect x="15" y="48" width="90" height="4" rx="2" fill="var(--gb-fg4)" opacity="0.7" />
      <rect x="15" y="58" width="75" height="4" rx="2" fill="var(--gb-fg4)" opacity="0.7" />
      <rect x="15" y="68" width="85" height="4" rx="2" fill="var(--gb-fg4)" opacity="0.7" />
      <rect x="15" y="78" width="60" height="4" rx="2" fill="var(--gb-fg4)" opacity="0.7" />

      {/* Signature & Guardian Seal */}
      <path d="M18 108 Q35 98, 45 112 T65 106" stroke="var(--gb-blue)" strokeWidth="1.8" fill="none" />
      <rect x="15" y="115" width="55" height="2" fill="var(--gb-fg3)" />
      <text x="42" y="125" textAnchor="middle" fill="var(--gb-fg3)" fontSize="6.5" fontWeight="600" fontFamily="Google Sans Flex, sans-serif">
        Ttd Wali / Dokter
      </text>

      {/* Verified Stamp Badge */}
      <circle cx="92" cy="108" r="14" fill="var(--gb-green-soft)" stroke="var(--gb-green)" strokeWidth="1.5" />
      <text x="92" y="111" textAnchor="middle" fill="var(--gb-green)" fontSize="7" fontWeight="bold" fontFamily="Google Sans Flex, sans-serif">
        VALID
      </text>
    </g>

    {/* Floating Tag: H-1 Notification */}
    <g transform="translate(30, 80)">
      <rect x="0" y="0" width="65" height="36" rx="8" fill="var(--gb-yellow-soft)" stroke="var(--gb-yellow)" strokeWidth="1.5" />
      <text x="32.5" y="16" textAnchor="middle" fill="var(--gb-yellow)" fontSize="8" fontWeight="bold" fontFamily="Google Sans Flex, sans-serif">
        NOTIFIKASI
      </text>
      <text x="32.5" y="28" textAnchor="middle" fill="var(--gb-orange)" fontSize="9" fontWeight="800" fontFamily="Google Sans Flex, sans-serif">
        Maks H-1
      </text>
    </g>

    {/* Floating Tag: H+7 Deadline */}
    <g transform="translate(225, 80)">
      <rect x="0" y="0" width="65" height="36" rx="8" fill="var(--gb-orange-soft)" stroke="var(--gb-orange)" strokeWidth="1.5" />
      <text x="32.5" y="16" textAnchor="middle" fill="var(--gb-orange)" fontSize="8" fontWeight="bold" fontFamily="Google Sans Flex, sans-serif">
        SUSULAN
      </text>
      <text x="32.5" y="28" textAnchor="middle" fill="var(--gb-red)" fontSize="9" fontWeight="800" fontFamily="Google Sans Flex, sans-serif">
        Maks H+7
      </text>
    </g>
  </svg>
);
