import React from 'react';
import { SlideBackground } from '../common/SlideBackground';
import { M3Card } from '../m3/M3Card';

export const ExperienceSlide: React.FC = () => {
  return (
    <section>
      <div className="m3-slide-frame">
        <SlideBackground />

        {/* Header */}
        <div className="m3-slide-header">
          <h2 className="m3-headline-large">
            Pengalaman Kerja &amp; Riset
          </h2>
        </div>

        {/* Content: 3 Massive Cards */}
        <div className="m3-slide-content">
          <div className="m3-grid-3col">
            {/* 1. Programmer */}
            <M3Card variant="filled" accentColor="aqua">
              <div className="m3-card-lead">
                Programmer
              </div>
              <div className="m3-card-sub text-aqua">
                2011 — 2012 &bull; LKPP RI
              </div>
              <div className="m3-body-medium">
                Membangun aplikasi, integrasi backend sistem, penanganan bug produksi, dan kerja tim engineering.
              </div>
            </M3Card>

            {/* 2. Research Assistant */}
            <M3Card variant="filled" accentColor="purple">
              <div className="m3-card-lead">
                Research Assistant
              </div>
              <div className="m3-card-sub text-purple">
                2012 — 2016 &bull; Fasilkom UI
              </div>
              <div className="m3-body-medium">
                Eksperimen algoritma pengolahan sinyal suara, machine learning pada multimedia, dan publikasi ilmiah.
              </div>
            </M3Card>

            {/* 3. Dosen ITERA */}
            <M3Card variant="filled" accentColor="orange">
              <div className="m3-card-lead">
                Dosen Tetap ITERA
              </div>
              <div className="m3-card-sub text-orange">
                2017 — Sekarang &bull; Informatika ITERA
              </div>
              <div className="m3-body-medium">
                Mengajar mata kuliah komputasi, membimbing tugas akhir mahasiswa, dan meneliti di Lab IoT &amp; Jaringan Komputer.
              </div>
            </M3Card>
          </div>
        </div>
      </div>
    </section>
  );
};
