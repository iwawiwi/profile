import React from 'react';

export const AttendanceIllustration: React.FC<{ width?: number | string; height?: number | string }> = ({
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
    aria-label="Ilustrasi Toleransi Keterlambatan 20 Menit"
  >
    {/* Background Soft Circle */}
    <circle cx="160" cy="120" r="90" fill="var(--gb-yellow-soft)" opacity="0.6" />

    {/* Large Stopwatch / Clock */}
    <circle cx="160" cy="125" r="65" fill="var(--md-sys-color-surface-container-high)" stroke="var(--gb-orange)" strokeWidth="3.5" />
    <rect x="156" y="48" width="8" height="14" rx="3" fill="var(--gb-orange)" />
    <circle cx="160" cy="48" r="6" stroke="var(--gb-orange)" strokeWidth="2.5" fill="none" />

    {/* 20 Minute Wedge highlighted in Yellow/Orange */}
    <path
      d="M160 125 L160 65 A60 60 0 0 1 212 155 Z"
      fill="var(--gb-yellow)"
      opacity="0.35"
    />

    {/* Clock Hands showing 20 minutes */}
    <line x1="160" y1="125" x2="160" y2="75" stroke="var(--gb-fg1)" strokeWidth="3" strokeLinecap="round" />
    <line x1="160" y1="125" x2="200" y2="148" stroke="var(--gb-orange)" strokeWidth="3" strokeLinecap="round" />
    <circle cx="160" cy="125" r="5" fill="var(--gb-orange)" />

    {/* Hour tick marks */}
    <circle cx="160" cy="72" r="2" fill="var(--gb-fg3)" />
    <circle cx="213" cy="125" r="2" fill="var(--gb-fg3)" />
    <circle cx="160" cy="178" r="2" fill="var(--gb-fg3)" />
    <circle cx="107" cy="125" r="2" fill="var(--gb-fg3)" />

    {/* Floating Badges */}
    <g transform="translate(35, 60)">
      <rect x="0" y="0" width="85" height="34" rx="10" fill="var(--gb-green-soft)" stroke="var(--gb-green)" strokeWidth="1.5" />
      <text x="42.5" y="16" textAnchor="middle" fill="var(--gb-green)" fontSize="8.5" fontWeight="bold" fontFamily="Google Sans Flex, sans-serif">
        ≤ 20 MENIT
      </text>
      <text x="42.5" y="27" textAnchor="middle" fill="var(--gb-green)" fontSize="7.5" fontWeight="bold" fontFamily="Google Sans Flex, sans-serif">
        Presensi Sah ✓
      </text>
    </g>

    <g transform="translate(200, 60)">
      <rect x="0" y="0" width="85" height="34" rx="10" fill="var(--gb-red-soft)" stroke="var(--gb-red)" strokeWidth="1.5" />
      <text x="42.5" y="16" textAnchor="middle" fill="var(--gb-red)" fontSize="8.5" fontWeight="bold" fontFamily="Google Sans Flex, sans-serif">
        &gt; 20 MENIT
      </text>
      <text x="42.5" y="27" textAnchor="middle" fill="var(--gb-red)" fontSize="7.5" fontWeight="bold" fontFamily="Google Sans Flex, sans-serif">
        Ikut (Alpa)
      </text>
    </g>
  </svg>
);
