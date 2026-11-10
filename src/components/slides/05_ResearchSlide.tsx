import React from 'react';
import { SlideBackground } from '../common/SlideBackground';
import { M3Card } from '../m3/M3Card';

export const ResearchSlide: React.FC = () => {
  return (
    <section>
      <div className="m3-slide-frame">
        <SlideBackground />

        {/* Header */}
        <div className="m3-slide-header">
          <h2 className="m3-headline-large">
            Fokus Penelitian dan Riset
          </h2>
        </div>

        {/* Content: 3 Massive Cards */}
        <div className="m3-slide-content">
          <div className="m3-grid-3col m3-research-grid">
            {/* 1. Machine Learning */}
            <M3Card variant="filled" accentColor="blue">
              <div className="m3-card-lead">
                Machine Learning
              </div>
              <div className="m3-body-medium">
                Penerapan machine learning untuk analisis data visual dan teks, ekstraksi fitur cerdas, serta eksplorasi arsitektur deep learning terapan.
              </div>
            </M3Card>

            {/* 2. Pemrosesan Sinyal */}
            <M3Card variant="filled" accentColor="purple">
              <div className="m3-card-lead">
                Pemrosesan Sinyal
              </div>
              <div className="m3-body-medium">
                Analisis sinyal audio digital, ekstraksi frekuensi suara, serta representasi komputasi sinyal untuk pengenalan sistem cerdas.
              </div>
            </M3Card>

            {/* 3. Low Power System */}
            <M3Card variant="filled" accentColor="aqua">
              <div className="m3-card-lead">
                Low Power System
              </div>
              <div className="m3-body-medium">
                Pengembangan model kecerdasan buatan yang sadar terhadap efisiensi memori dan batasan daya (<em>power constraint</em>).
              </div>
            </M3Card>
          </div>
        </div>
      </div>
    </section>
  );
};
