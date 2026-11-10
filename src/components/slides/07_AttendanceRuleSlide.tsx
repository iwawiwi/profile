import React from 'react';
import { SlideBackground } from '../common/SlideBackground';
import { M3Card } from '../m3/M3Card';

export const AttendanceRuleSlide: React.FC = () => {
  return (
    <section>
      <div className="m3-slide-frame">
        <SlideBackground />

        {/* Header */}
        <div className="m3-slide-header">
          <h2 className="m3-headline-large">
            Aturan Kehadiran
          </h2>
        </div>

        {/* Content: 2 Giant High-Contrast Decision Cards */}
        <div className="m3-slide-content">
          <div className="m3-grid-2col">
            {/* Condition 1: Tepat Waktu (<= 20 Menit) */}
            <M3Card variant="filled" accentColor="green" className="m3-policy-card">
              <div className="m3-card-lead-xl text-green">
                Hadir &le; 20 Menit
              </div>

              <p className="m3-policy-desc">
                Tiba dalam batas toleransi 20 menit berhak melakukan <strong>presensi mandiri via scan QR Code di SIAKAD</strong> dan mengikuti perkuliahan penuh.
              </p>
            </M3Card>

            {/* Condition 2: Terlambat (> 20 Menit) */}
            <M3Card variant="filled" accentColor="yellow" className="m3-policy-card">
              <div className="m3-card-lead-xl text-yellow">
                Hadir &gt; 20 Menit
              </div>

              <p className="m3-policy-desc">
                Terlambat karena macet atau kendala di jalan? <strong>Tetap masuk kelas</strong> untuk belajar dan menyimak praktikum, meski presensi pertemuan ini dihitung alpa.
              </p>
            </M3Card>
          </div>
        </div>
      </div>
    </section>
  );
};
