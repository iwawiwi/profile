import React from 'react';
import { SlideBackground } from '../common/SlideBackground';
import { M3Card } from '../m3/M3Card';

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
          <div className="m3-grid-2col">
            {/* S2 Magister */}
            <M3Card variant="filled" accentColor="yellow">
              <div className="m3-card-lead-xl">
                Magister Ilmu Komputer (M.Kom.)
              </div>

              <div className="m3-card-sub text-yellow">
                Jenjang S2 &bull; Fasilkom Universitas Indonesia
              </div>

              <div className="m3-body-medium">
                Fokus penelitian pada bidang machine learning, pemrosesan multimedia, dan analisis sinyal digital.
              </div>
            </M3Card>

            {/* S1 Sarjana */}
            <M3Card variant="filled" accentColor="yellow">
              <div className="m3-card-lead-xl">
                Sarjana Ilmu Komputer (S.Kom.)
              </div>

              <div className="m3-card-sub text-yellow">
                Jenjang S1 &bull; Fasilkom Universitas Indonesia
              </div>

              <div className="m3-body-medium">
                Pondasi fundamental algoritma, struktur data, matematika diskrit, dan sistem operasi komputer.
              </div>
            </M3Card>
          </div>
        </div>
      </div>
    </section>
  );
};
