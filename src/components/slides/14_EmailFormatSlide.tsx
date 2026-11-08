import React from 'react';
import { SlideBackground } from '../common/SlideBackground';
import { M3Card } from '../m3/M3Card';

export const EmailFormatSlide: React.FC = () => {
  return (
    <section>
      <div className="m3-slide-frame">
        <SlideBackground />

        {/* Header */}
        <div className="m3-slide-header">
          <h2 className="m3-headline-large">
            Format Wajib Subjek Surel
          </h2>
        </div>

        {/* Content: 1 Giant Focus Card */}
        <div className="m3-slide-content">
          <div className="m3-center-stage">
            <M3Card variant="filled" accentColor="orange">
              <div className="m3-card-header">
                <span className="m3-card-category-label text-orange">
                  FORMAT BAKU SUBJEK EMAIL:
                </span>
              </div>

              {/* Big Code Block */}
              <div className="m3-code-subject-box">
                [Nama MK] - [NIM] - [Keperluan Singkat]
              </div>

              {/* Contoh Realistis */}
              <div className="m3-body-large mb-3">
                <strong>Contoh Penerapan</strong>{' '}<br />
                <span className="text-orange fst-italic">
                  &ldquo;[Sistem Operasi] - [121140001] - Izin Sakit Pertemuan Minggu ke-3&rdquo;
                </span>
              </div>

              <div className="m3-grid-2col border-top-dashed pt-3">
                <div className="m3-body-medium">
                  &bull; <strong>Awali dengan salam:</strong> Sebutkan identitas nama, NIM, dan kelas dengan sopan.
                </div>
                <div className="m3-body-medium">
                  &bull; <strong>Tulis singkat &amp; jelas:</strong> Hindari mengirim pesan di larut malam (di luar jam kerja).
                </div>
              </div>
            </M3Card>
          </div>
        </div>
      </div>
    </section>
  );
};
