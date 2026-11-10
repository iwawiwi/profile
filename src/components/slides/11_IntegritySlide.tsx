import React from 'react';
import { SlideBackground } from '../common/SlideBackground';
import { M3Card } from '../m3/M3Card';

export const IntegritySlide: React.FC = () => {
  return (
    <section>
      <div className="m3-slide-frame">
        <SlideBackground />

        {/* Header */}
        <div className="m3-slide-header">
          <h2 className="m3-headline-large">
            Integritas dan Batasan Mutlak
          </h2>
        </div>

        {/* Content: Single Prominent Alert Card + Bottom Callout Card */}
        <div className="m3-slide-content">
          <div className="m3-integrity-stage">
            {/* 1. Plagiarisme - Single Alert Box */}
            <M3Card variant="filled" accentColor="red" className="m3-integrity-card">
              <div className="m3-card-lead-alert">
                PLAGIARISME = NILAI NOL
              </div>

              <p className="m3-body-large">
                Mencontek, menyalin kode teman, atau copy-paste tugas orang lain otomatis diberi <strong>nilai nol mutlak</strong> untuk kedua belah pihak: <strong>pemberi dan penerima</strong>.
              </p>
            </M3Card>

            {/* Bottom Reusable Callout Card */}
            <M3Card variant="tonal" accentColor="orange" className="m3-callout-card">
              <div className="m3-callout-text">
                &ldquo;Bikin kode sendiri yang masih sederhana <strong>jauh lebih dihargai</strong> daripada kode canggih hasil salinan.&rdquo;
              </div>
            </M3Card>
          </div>
        </div>
      </div>
    </section>
  );
};


