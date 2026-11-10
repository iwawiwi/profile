import React from 'react';
import { Mail } from 'lucide-react';
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
          <div className="m3-email-format-stage">
            <M3Card variant="filled" accentColor="orange" className="m3-email-format-card">
              <div className="m3-card-header">
                <span className="m3-card-category-label text-orange">
                  FORMAT BAKU SUBJEK EMAIL:
                </span>
              </div>

              {/* Big Code Block */}
              <div className="m3-code-subject-box">
                [Nama MK] - [NIM] - [Keperluan Singkat]
              </div>

              {/* Realistic Email Input Bar with Typewriter Animation */}
              <div className="m3-email-input-container">
                <div className="m3-email-input-tag">
                  <Mail size={18} className="text-orange" />
                  <span>Contoh Penerapan Nyata:</span>
                </div>
                <div className="m3-email-input-bar">
                  <span className="m3-email-input-prefix">Subject:</span>
                  <div className="m3-typewriter-wrapper">
                    <span className="m3-typewriter-text">
                      [Sistem Operasi] - [121140001] - Pengumpulan Tugas Praktikum 2
                    </span>
                    <span className="m3-typewriter-cursor">|</span>
                  </div>
                </div>
              </div>

              <div className="m3-grid-2col border-top-dashed pt-4">
                <div className="m3-body-medium">
                  &bull; <strong>Awali dengan salam:</strong> Sebutkan identitas nama, NIM, dan kelas dengan sopan.
                </div>
                <div className="m3-body-medium">
                  &bull; <strong>Tulis singkat dan jelas:</strong> Hindari mengirim pesan di larut malam (di luar jam kerja).
                </div>
              </div>
            </M3Card>
          </div>
        </div>
      </div>
    </section>
  );
};

