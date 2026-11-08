import React from 'react';

export const ContactIllustration: React.FC<{ width?: number | string; height?: number | string }> = ({
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
    aria-label="Ilustrasi Kontak dan Lab IoT ITERA"
  >
    {/* Background Aura */}
    <rect x="50" y="45" width="220" height="150" rx="20" fill="var(--gb-aqua-soft)" opacity="0.5" />

    {/* Email Envelope with Microcontroller / Antenna */}
    <g transform="translate(100, 70)">
      {/* Envelope Backing */}
      <rect x="0" y="20" width="120" height="75" rx="10" fill="var(--gb-bg0-h)" stroke="var(--gb-blue)" strokeWidth="2.5" />
      {/* Envelope Flap Lines */}
      <path d="M0 25 L60 65 L120 25" stroke="var(--gb-blue)" strokeWidth="2" fill="none" />
      <path d="M0 95 L45 55 M120 95 L75 55" stroke="var(--gb-fg4)" strokeWidth="1.5" />

      {/* IoT Antenna Symbol */}
      <circle cx="60" cy="10" r="4" fill="var(--gb-orange)" />
      <line x1="60" y1="14" x2="60" y2="20" stroke="var(--gb-orange)" strokeWidth="2" />
      <path d="M50 8 A12 12 0 0 1 70 8" stroke="var(--gb-orange)" strokeWidth="1.5" fill="none" strokeLinecap="round" />
      <path d="M44 4 A18 18 0 0 1 76 4" stroke="var(--gb-orange)" strokeWidth="1.5" fill="none" strokeLinecap="round" />
    </g>

    {/* Structured Subject Format Pill */}
    <g transform="translate(50, 155)">
      <rect x="0" y="0" width="220" height="28" rx="14" fill="var(--md-sys-color-surface-container-high)" stroke="var(--gb-orange)" strokeWidth="1.5" />
      <text x="110" y="18" textAnchor="middle" fill="var(--gb-orange)" fontSize="8.5" fontWeight="bold" fontFamily="Google Sans Flex, sans-serif">
        📧 Format: [MK] - [NIM] - [Keperluan]
      </text>
    </g>

    {/* Location Tag */}
    <g transform="translate(30, 45)">
      <rect x="0" y="0" width="90" height="26" rx="8" fill="var(--gb-blue-soft)" stroke="var(--gb-blue)" strokeWidth="1.2" />
      <text x="45" y="17" textAnchor="middle" fill="var(--gb-blue)" fontSize="7.5" fontWeight="bold" fontFamily="Google Sans Flex, sans-serif">
        🏢 Labtek 3 Lt 3
      </text>
    </g>

    {/* Consultation Time Tag */}
    <g transform="translate(200, 45)">
      <rect x="0" y="0" width="90" height="26" rx="8" fill="var(--gb-green-soft)" stroke="var(--gb-green)" strokeWidth="1.2" />
      <text x="45" y="17" textAnchor="middle" fill="var(--gb-green)" fontSize="7.5" fontWeight="bold" fontFamily="Google Sans Flex, sans-serif">
        🕐 Jam Kerja
      </text>
    </g>
  </svg>
);
