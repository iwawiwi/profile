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
            Aturan Kehadiran: Toleransi 20 Menit
          </h2>
        </div>

        {/* Content: 2 Giant High-Contrast Decision Cards */}
        <div className="m3-slide-content">
          <div className="m3-grid-2col">
            {/* Condition 1: Tepat Waktu (<= 20 Menit) */}
            <M3Card variant="filled" accentColor="green">
              <div className="m3-card-lead-xl text-green">
                Hadir &le; 20 Menit
              </div>

              <div className="m3-card-sub">
                Presensi Sah &bull; Tercatat 100%
              </div>

              <p className="m3-body-large">
                Mahasiswa yang tiba di kelas dalam rentang waktu toleransi berhak mengisi presensi di portal E-Learning (<strong>kuliah.itera.ac.id</strong>) dan mengikuti seluruh rangkaian kuliah.
              </p>
            </M3Card>

            {/* Condition 2: Terlambat (> 20 Menit) */}
            <M3Card variant="filled" accentColor="yellow">
              <div className="m3-card-lead-xl text-yellow">
                Hadir &gt; 20 Menit
              </div>

              <div className="m3-card-sub">
                Tetap Boleh Masuk Kelas
              </div>

              <p className="m3-body-large">
                Kalau terhalang macet atau urusan darurat, <strong>jangan sungkan masuk kelas</strong>. Kalian tetap boleh menyimak materi dan praktikum, hanya saja presensi pertemuan tersebut dihitung alpa.
              </p>
            </M3Card>
          </div>
        </div>
      </div>
    </section>
  );
};
