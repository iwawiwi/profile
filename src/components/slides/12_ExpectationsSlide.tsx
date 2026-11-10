import React from 'react';
import { SlideBackground } from '../common/SlideBackground';
import { M3Card } from '../m3/M3Card';

export const ExpectationsSlide: React.FC = () => {
  return (
    <section>
      <div className="m3-slide-frame">
        <SlideBackground />

        {/* Header */}
        <div className="m3-slide-header">
          <h2 className="m3-headline-large">
            Ekspektasi Perkuliahan
          </h2>
        </div>

        {/* Content: 3 Big Bento Cards */}
        <div className="m3-slide-content">
          <div className="m3-grid-3col m3-expectations-grid">
            {/* 1. Enroll LMS */}
            <M3Card variant="filled" accentColor="green">
              <div className="m3-card-lead">
                Enroll di E-Learning
              </div>
              <div className="m3-body-medium">
                Segera enroll mandiri di kelas mata kuliah di <strong>kuliah.itera.ac.id</strong>. Pastikan akun profil kalian memakai format resmi: <strong>First Name = NIM</strong>.
              </div>
            </M3Card>

            {/* 2. Format Tugas */}
            <M3Card variant="filled" accentColor="blue">
              <div className="m3-card-lead">
                Tepat Waktu
              </div>
              <div className="m3-body-medium">
                Kumpulkan tugas sebelum batas waktu berakhir. Ikuti format penamaan berkas di lembar instruksi agar tugas kalian tidak tercecer atau tertukar.
              </div>
            </M3Card>

            {/* 3. Berani Bertanya */}
            <M3Card variant="filled" accentColor="orange">
              <div className="m3-card-lead">
                Aktif Bertanya
              </div>
              <div className="m3-body-medium">
                Kalau kodingan error, logika algoritma mentok, atau materi belum paham, langsung tanyakan di kelas atau temui saya di lab. Belajar koding itu wajar bingung di awal.
              </div>
            </M3Card>
          </div>
        </div>
      </div>
    </section>
  );
};
