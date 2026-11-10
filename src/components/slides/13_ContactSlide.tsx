import React from 'react';
import { SlideBackground } from '../common/SlideBackground';
import { M3Card } from '../m3/M3Card';

export const ContactSlide: React.FC = () => {
  return (
    <section>
      <div className="m3-slide-frame">
        <SlideBackground />

        {/* Header */}
        <div className="m3-slide-header">
          <h2 className="m3-headline-large">
            Saluran Komunikasi dan Kontak
          </h2>
        </div>

        {/* Content: 3 Massive Cards */}
        <div className="m3-slide-content">
          <div className="m3-grid-3col m3-contact-grid">
            {/* 1. Email */}
            <M3Card variant="filled" accentColor="orange">
              <span className="m3-card-category-label text-orange mb-2">
                SUREL RESMI
              </span>
              <div className="m3-card-lead-single">
                wayan.wisesa@if.itera.ac.id
              </div>
              <div className="m3-body-medium">
                Gunakan akun email resmi mahasiswa ITERA (<em>@student.itera.ac.id</em>) agar pesan tidak masuk folder spam.
              </div>
            </M3Card>

            {/* 2. Ruang Kerja */}
            <M3Card variant="filled" accentColor="blue">
              <span className="m3-card-category-label text-blue mb-2">
                LOKASI RUANGAN
              </span>
              <div className="m3-card-lead-single">
                Lab IoT dan Jaringan Komputer
              </div>
              <div className="m3-body-medium">
                Gedung Labtek 3 Lantai 3, Kampus ITERA. Tempat riset, praktikum IoT, serta ruang diskusi dan bimbingan Tugas Akhir.
              </div>
            </M3Card>

            {/* 3. Jam Konsultasi */}
            <M3Card variant="filled" accentColor="green">
              <span className="m3-card-category-label text-green mb-2">
                JAM KONSULTASI
              </span>
              <div className="m3-card-lead-single">
                08.00 — 16.00 WIB
              </div>
              <div className="m3-body-medium">
                Senin sampai Jumat pada jam kerja kampus, saat saya tidak sedang memiliki jadwal mengajar di kelas lain.
              </div>
            </M3Card>
          </div>
        </div>
      </div>
    </section>
  );
};
