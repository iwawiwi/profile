import React from 'react';
import { SlideBackground } from '../common/SlideBackground';
import { M3Card } from '../m3/M3Card';
import { M3Chip } from '../m3/M3Chip';

export const AboutSlide: React.FC = () => {
  return (
    <section>
      <div className="m3-slide-frame">
        <SlideBackground />

        {/* Header */}
        <div className="m3-slide-header">
          <h2 className="m3-headline-large">
            Perkenalan
          </h2>
        </div>

        {/* Content */}
        <div className="m3-slide-content">
          <div className="m3-grid-2col">
            {/* Card 1: Nama & Panggilan */}
            <M3Card variant="filled" accentColor="orange">
              <div className="m3-card-header">
                <h3 className="m3-title-large">
                  Nama Lengkap &amp; Panggilan
                </h3>
              </div>

              <div className="m3-card-lead">
                I Wayan Wiprayoga Wisesa
              </div>

              <div className="m3-body-large mb-4">
                Biasa dipanggil <strong>Pak Wayan</strong> atau <strong>Pak Yoga</strong>.
              </div>

              <div className="m3-card-actions">
                <M3Chip label="Kode Dosen: IWW" color="orange" />
              </div>
            </M3Card>

            {/* Card 2: Asal & Domisili */}
            <M3Card variant="filled" accentColor="aqua">
              <div className="m3-card-header">
                <h3 className="m3-title-large">
                  Asal &amp; Domisili
                </h3>
              </div>

              <div className="m3-card-lead">
                Bali &rarr; Lampung Selatan
              </div>

              <div className="m3-body-large mb-4">
                Berasal dari <strong>Bali</strong>, saat ini menetap di <strong>Lampung Selatan</strong>.
              </div>

              <div className="m3-card-actions">
                <M3Chip label="Bataranila, Hajimena" color="aqua" />
              </div>
            </M3Card>
          </div>
        </div>
      </div>
    </section>
  );
};
