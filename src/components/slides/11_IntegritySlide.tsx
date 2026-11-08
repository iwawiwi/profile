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
            Integritas &amp; Batasan Mutlak
          </h2>
        </div>

        {/* Content: 2 Giant Red Alert Cards */}
        <div className="m3-slide-content">
          <div className="m3-grid-split">
            {/* 1. Plagiarisme */}
            <M3Card variant="filled" accentColor="red">

              <div className="m3-card-lead-alert">
                PLAGIARISME = NILAI 0
              </div>

              <p className="m3-body-large mb-3">
                Mencontek, menyalin kode teman, atau copy-paste tugas orang lain otomatis diberi <strong>nilai nol mutlak</strong> untuk kedua belah pihak: <strong>pemberi dan penerima</strong>.
              </p>

              <div className="m3-title-small">
                Bikin kode sendiri yang masih sederhana jauh lebih dihargai daripada kode canggih hasil salinan.
              </div>
            </M3Card>

            {/* 2. Titip Absen */}
            <M3Card variant="filled" accentColor="red">

              <div className="m3-card-lead-alert">
                TITIP ABSEN = SANKSI BERAT
              </div>

              <p className="m3-body-large">
                Jangan gadaikan integritas dan nama baik kalian hanya demi selembar presensi. Manipulasi kehadiran atau pemalsuan tanda tangan akan dilaporkan langsung ke pengelola program studi.
              </p>
            </M3Card>
          </div>
        </div>
      </div>
    </section>
  );
};
