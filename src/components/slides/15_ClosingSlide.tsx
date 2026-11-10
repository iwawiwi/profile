import React from 'react';
import { SlideBackground } from '../common/SlideBackground';
import { M3Card } from '../m3/M3Card';
import { M3Chip } from '../m3/M3Chip';

export const ClosingSlide: React.FC = () => {
  return (
    <section>
      <div className="m3-slide-frame m3-slide-frame-center">
        <SlideBackground />

        {/* Content: Massive Center Stage */}
        <div className="m3-slide-content m3-slide-content-center">
          <div className="m3-center-stage m3-closing-stage">
            <h1 className="m3-display-large m3-title-single-line m3-closing-title">
              Siap Mulai Perkuliahan?
            </h1>

            <M3Card variant="tonal" accentColor="orange" className="m3-quote-card">
              <div className="m3-quote-text">
                &ldquo;<strong>Satu langkah konsisten</strong> tiap minggu akan membawa kita sampai ke akhir semester dengan tenang dan tuntas.&rdquo;
              </div>
            </M3Card>

            {/* Core Values Chips */}
            <div className="m3-chips-wrap m3-closing-chips">
              <M3Chip label="Konsisten" color="orange" variant="outlined" />
              <M3Chip label="Jujur" color="green" variant="outlined" />
              <M3Chip label="Tepat Waktu" color="blue" variant="outlined" />
              <M3Chip label="Rapi" color="purple" variant="outlined" />
              <M3Chip label="Pantang Menyerah" color="aqua" variant="outlined" />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
