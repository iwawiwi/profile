import React from 'react';
import { SlideBackground } from '../common/SlideBackground';
import { M3Card } from '../m3/M3Card';

export const FacultyRuleSlide: React.FC = () => {
  return (
    <section>
      <div className="m3-slide-frame">
        <SlideBackground />

        {/* Header */}
        <div className="m3-slide-header">
          <h2 className="m3-headline-large">
            Aturan Waktu Berlaku Dua Arah
          </h2>
        </div>

        {/* Content: 1 Giant Focus Hero Card + 1 Summary Card */}
        <div className="m3-slide-content">
          <div className="m3-grid-split">
            <M3Card variant="filled" accentColor="orange" className="m3-policy-card">
              <div className="m3-card-lead-xl text-orange">
                Dosen Terlambat &gt; 20 Menit
              </div>

              <p className="m3-policy-desc">
                Jika saya belum hadir 20 menit tanpa kabar, kelas hari itu dibatalkan. Kita akan sepakati bersama jadwal untuk <strong>kuliah pengganti</strong>.
              </p>
            </M3Card>

            <M3Card variant="tonal" accentColor="green" className="m3-faculty-uas-card">
              <div className="m3-title-medium text-green">
                Syarat Ujian Akhir (UAS)
              </div>

              <div className="m3-card-lead-alert text-green">
                MINIMAL 80%
              </div>

              <p className="m3-uas-desc">
                Kehadiran minimal <strong>80%</strong> adalah syarat mutlak akademik ITERA agar bisa ikut UAS. Jangan biarkan alpa menumpuk sejak awal semester.
              </p>
            </M3Card>
          </div>
        </div>
      </div>
    </section>
  );
};
