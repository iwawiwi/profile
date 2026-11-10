import React from 'react';
import { SlideBackground } from '../common/SlideBackground';
import { M3Card } from '../m3/M3Card';

export const MakeupExamSlide: React.FC = () => {
  return (
    <section>
      <div className="m3-slide-frame">
        <SlideBackground />

        {/* Header */}
        <div className="m3-slide-header">
          <h2 className="m3-headline-large">
            Ketentuan Kuis dan Ujian Susulan
          </h2>
        </div>

        {/* Content: 2 Balanced High-Impact Policy Cards */}
        <div className="m3-slide-content">
          <div className="m3-grid-2col">
            {/* Card 1: Syarat Surat Resmi */}
            <M3Card variant="filled" accentColor="blue" className="m3-policy-card">
              <div className="m3-card-lead-xl text-blue">
                Pengajuan Maksimal H+7
              </div>

              <p className="m3-policy-desc">
                Jika berhalangan saat kuis atau ujian karena sakit atau musibah, wajib sertakan <strong>surat dokter asli</strong> atau izin orang tua. Batas pengajuan paling lambat <strong>H+7</strong> setelah hari ujian.
              </p>
            </M3Card>

            {/* Card 2: Tidak Ada Tugas Pengatrol Nilai */}
            <M3Card variant="filled" accentColor="red" className="m3-policy-card">
              <div className="m3-card-lead-xl text-red">
                Tidak Ada Tugas Tambahan
              </div>

              <p className="m3-policy-desc">
                Saya <strong>tidak memberikan tugas pengatrol nilai</strong> di akhir semester. Nilai akhir murni hasil jerih payah tugas mingguan, kuis, praktikum, UTS, dan UAS tepat waktu.
              </p>
            </M3Card>
          </div>
        </div>
      </div>
    </section>
  );
};
