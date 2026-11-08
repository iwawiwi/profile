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
          <div className="m3-grid-3col">
            {/* 1. Enroll LMS */}
            <M3Card variant="filled" accentColor="green">
              <div className="m3-card-lead">
                Enroll di E-Learning
              </div>
              <div className="m3-card-sub">
                kuliah.itera.ac.id
              </div>
              <div className="m3-body-medium">
                Wajib enroll mandiri di kelas MK masing-masing. Atur akun profil kalian dengan format: <strong>First Name = NIM</strong>.
              </div>
            </M3Card>

            {/* 2. Format Tugas */}
            <M3Card variant="filled" accentColor="blue">
              <div className="m3-card-lead">
                Format Tugas Rapi
              </div>
              <div className="m3-card-sub">
                Tepat Waktu &amp; Sesuai Nama
              </div>
              <div className="m3-body-medium">
                Kumpulkan tugas sebelum batas deadline. Gunakan format penamaan file yang diminta di lembar soal agar file tidak tertukar.
              </div>
            </M3Card>

            {/* 3. Berani Bertanya */}
            <M3Card variant="filled" accentColor="orange">
              <div className="m3-card-lead">
                Berani Bertanya
              </div>
              <div className="m3-card-sub">
                Jangan Dipendam Sendiri
              </div>
              <div className="m3-body-medium">
                Kalau ada kodingan macet, logika algoritma belum jelas, atau konsep teori yang membingungkan, segera tanyakan langsung di kelas atau lab.
              </div>
            </M3Card>
          </div>
        </div>
      </div>
    </section>
  );
};
