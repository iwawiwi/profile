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
            <M3Card variant="filled" accentColor="orange">
              <div className="m3-card-lead-xl text-orange">
                Dosen Terlambat &gt; 20 Menit
              </div>

              <div className="m3-card-sub">
                Kuliah Dibatalkan &amp; Dijadwalkan Pengganti
              </div>

              <p className="m3-body-large">
                Jika dosen belum hadir hingga 20 menit setelah jadwal perkuliahan dimulai tanpa pemberitahuan sebelumnya, maka perkuliahan hari itu dibatalkan. Kita akan menjadwalkan <strong>kuliah pengganti</strong> di waktu yang disepakati bersama.
              </p>
            </M3Card>

            <M3Card variant="tonal" accentColor="green">
              <div className="m3-title-medium text-green">
                Syarat Ujian Akhir (UAS)
              </div>

              <div className="m3-card-lead-alert text-green">
                MINIMAL 80%
              </div>

              <p className="m3-body-medium">
                Kehadiran minimal 80% adalah syarat mutlak dari akademik ITERA untuk dapat mengikuti UAS. Jangan sampai alpa menumpuk di awal semester.
              </p>
            </M3Card>
          </div>
        </div>
      </div>
    </section>
  );
};
