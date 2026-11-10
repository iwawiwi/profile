import React from 'react';
import { SlideBackground } from '../common/SlideBackground';
import { M3Card } from '../m3/M3Card';
import { GraduationCap } from 'lucide-react';

export const EducationSlide: React.FC = () => {
  return (
    <section>
      <div className="m3-slide-frame">
        <SlideBackground />

        {/* Header */}
        <div className="m3-slide-header">
          <h2 className="m3-headline-large">
            Riwayat Pendidikan
          </h2>
        </div>

        {/* Content */}
        <div className="m3-slide-content">
          <div className="m3-education-stack">
            {/* S2 Magister */}
            <M3Card variant="filled" accentColor="yellow" className="m3-education-card">
              <div className="m3-education-card-header">
                <div className="m3-card-lead-xl m3-education-title">
                  Magister Ilmu Komputer (M.Kom.)
                </div>
                <div className="text-yellow m3-education-sub">
                  Jenjang S2 &bull; Fasilkom Universitas Indonesia
                </div>
              </div>

              <div className="m3-education-research">
                <div className="m3-education-research-label">
                  <GraduationCap size={22} color="var(--gb-yellow)" />
                  <span>Judul Tesis:</span>
                </div>
                <div className="m3-body-medium">
                  &ldquo;Pengenalan Emosi pada Musik Digital Berdasarkan Model Emosi Dimensional Valence dan Arousal dengan Aplikasinya dalam Sistem Pembangkit Visualisasi Musik Otomatis&rdquo;
                </div>
              </div>
            </M3Card>

            {/* S1 Sarjana */}
            <M3Card variant="filled" accentColor="yellow" className="m3-education-card">
              <div className="m3-education-card-header">
                <div className="m3-card-lead-xl m3-education-title">
                  Sarjana Ilmu Komputer (S.Kom.)
                </div>
                <div className="text-yellow m3-education-sub">
                  Jenjang S1 &bull; Fasilkom Universitas Indonesia
                </div>
              </div>

              <div className="m3-education-research">
                <div className="m3-education-research-label">
                  <GraduationCap size={22} color="var(--gb-yellow)" />
                  <span>Judul Skripsi:</span>
                </div>
                <div className="m3-body-medium">
                  &ldquo;Penerapan Steganografi pada Musik Digital dengan Pendekatan Transformasi Wavelet Diskret&rdquo;
                </div>
              </div>
            </M3Card>
          </div>
        </div>
      </div>
    </section>
  );
};
