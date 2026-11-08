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
            Fokus Penelitian &amp; Riset
          </h2>
        </div>

        {/* Content: 3 Massive Cards */}
        <div className="m3-slide-content">
          <div className="m3-grid-3col">
            {/* 1. Machine Learning */}
            <M3Card variant="filled" accentColor="blue">
              <div className="m3-card-lead">
                Machine Learning
              </div>
              <div className="m3-card-sub">
                Model Komputasi &amp; Multimodal AI
              </div>
              <div className="m3-body-medium">
                Pengembangan algoritma pembelajaran mesin terapan, representasi pola data multimedia, ekstraksi fitur adaptif, dan kecerdasan artifisial.
              </div>
            </M3Card>

            {/* 2. Multimedia / Audio */}
            <M3Card variant="filled" accentColor="purple">
              <div className="m3-card-lead">
                Music Info Retrieval
              </div>
              <div className="m3-card-sub">
                Pemrosesan Sinyal Suara
              </div>
              <div className="m3-body-medium">
                Analisis frekuensi audio digital, ekstraksi pola nada, pengenalan genre instrumen musik, dan sintesis audio komputasional.
              </div>
            </M3Card>

            {/* 3. HCI / Gesture */}
            <M3Card variant="filled" accentColor="aqua">
              <div className="m3-card-lead">
                Gesture Recognition
              </div>
              <div className="m3-card-sub">
                Deteksi Gerak &amp; HCI
              </div>
              <div className="m3-body-medium">
                Pengenalan gestur tangan dan tubuh berbasis sensor kamera (computer vision) untuk kendali sistem komputer tanpa sentuh.
              </div>
            </M3Card>
          </div>
        </div>
      </div>
    </section>
  );
};
