import React from 'react';

export const JourneyIllustration: React.FC<{ width?: number | string; height?: number | string }> = ({
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
    aria-label="Ilustrasi Riwayat Pendidikan dan Karir"
  >
    {/* Milestone 1: S1/S2 Fasilkom UI (Makara Yellow) */}
    <g transform="translate(30, 80)">
      <circle cx="28" cy="28" r="24" fill="var(--gb-yellow-soft)" stroke="var(--gb-yellow)" strokeWidth="2.5" />
      {/* Graduation Cap */}
      <polygon points="28,16 12,24 28,32 44,24" fill="var(--gb-yellow)" />
      <polygon points="28,32 18,27 18,36 28,41 38,36 38,27" fill="var(--gb-yellow)" opacity="0.8" />
      <text x="28" y="65" textAnchor="middle" fill="var(--gb-fg1)" fontSize="9" fontWeight="bold" fontFamily="Google Sans Flex, sans-serif">
        UI (S1/S2)
      </text>
    </g>

    {/* Connector 1 */}
    <path d="M82 108 L112 108" stroke="var(--gb-fg4)" strokeWidth="2" strokeDasharray="4 3" />

    {/* Milestone 2: Programmer 2011-2012 */}
    <g transform="translate(112, 80)">
      <circle cx="28" cy="28" r="24" fill="var(--gb-aqua-soft)" stroke="var(--gb-aqua)" strokeWidth="2.5" />
      {/* Code Brackets */}
      <path d="M22 22 L17 28 L22 34 M34 22 L39 28 L34 34 M30 18 L26 38" stroke="var(--gb-aqua)" strokeWidth="2" strokeLinecap="round" />
      <text x="28" y="65" textAnchor="middle" fill="var(--gb-fg1)" fontSize="8.5" fontWeight="bold" fontFamily="Google Sans Flex, sans-serif">
        Dev (11-12)
      </text>
    </g>

    {/* Connector 2 */}
    <path d="M168 108 L198 108" stroke="var(--gb-fg4)" strokeWidth="2" strokeDasharray="4 3" />

    {/* Milestone 3: Research Assistant 2012-2016 */}
    <g transform="translate(198, 80)">
      <circle cx="28" cy="28" r="24" fill="var(--gb-purple-soft)" stroke="var(--gb-purple)" strokeWidth="2.5" />
      {/* Microscope / Atom icon */}
      <circle cx="28" cy="28" r="8" stroke="var(--gb-purple)" strokeWidth="2" fill="none" />
      <ellipse cx="28" cy="28" rx="14" ry="5" stroke="var(--gb-purple)" strokeWidth="1.5" transform="rotate(30 28 28)" fill="none" />
      <ellipse cx="28" cy="28" rx="14" ry="5" stroke="var(--gb-purple)" strokeWidth="1.5" transform="rotate(-30 28 28)" fill="none" />
      <text x="28" y="65" textAnchor="middle" fill="var(--gb-fg1)" fontSize="8.5" fontWeight="bold" fontFamily="Google Sans Flex, sans-serif">
        Riset (12-16)
      </text>
    </g>

    {/* Connector 3 downwards curve */}
    <path d="M226 136 C226 160, 160 170, 160 170" stroke="var(--gb-orange)" strokeWidth="2.5" strokeDasharray="4 3" />

    {/* Destination: ITERA Lecturer (2017 - Sekarang) */}
    <g transform="translate(110, 165)">
      <rect x="0" y="0" width="100" height="42" rx="14" fill="var(--gb-orange-soft)" stroke="var(--gb-orange)" strokeWidth="2" />
      <text x="50" y="20" textAnchor="middle" fill="var(--gb-orange)" fontSize="10.5" fontWeight="bold" fontFamily="Google Sans Flex, sans-serif">
        👨‍🏫 Dosen ITERA
      </text>
      <text x="50" y="34" textAnchor="middle" fill="var(--gb-fg2)" fontSize="9" fontWeight="600" fontFamily="Google Sans Flex, sans-serif">
        2017 - Sekarang
      </text>
    </g>
  </svg>
);
