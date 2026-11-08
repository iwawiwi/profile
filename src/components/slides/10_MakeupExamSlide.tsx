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
            Ketentuan Kuis &amp; Ujian Susulan
          </h2>
        </div>

        {/* Content */}
        <div className="m3-slide-content">
          <div className="m3-grid-split">
            {/* Card 1: Syarat Surat Resmi */}
            <M3Card variant="filled" accentColor="blue">

              <div className="m3-card-lead-xl">
                Pengajuan Maksimal H+7
              </div>

              <p className="m3-body-large">
                Untuk mengikuti kuis atau ujian susulan, wajib melampirkan <strong>surat keterangan dokter asli</strong> atau surat resmi bermeterai dengan <strong>tanda tangan orang tua/wali</strong>. Pengajuan diserahkan selambat-lambatnya <strong>H+7</strong> setelah tanggal ujian berlangsung.
              </p>
            </M3Card>

            {/* Card 2: Tidak Ada Tugas Pengatrol Nilai */}
            <M3Card variant="filled" accentColor="red">
              <div className="m3-card-lead-xl text-red">
                Tidak Ada Tugas Tambahan
              </div>

              <p className="m3-body-large">
                Saya <strong>tidak memberikan tugas tambahan</strong> untuk mengatrol nilai yang jebol di akhir semester. Nilai akhir dihitung murni dari tugas mingguan, kuis, praktikum, UTS, dan UAS yang dikerjakan tepat waktu sejak awal.
              </p>
            </M3Card>
          </div>
        </div>
      </div>
    </section>
  );
};
