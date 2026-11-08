import React from 'react';
import { SlideBackground } from '../common/SlideBackground';
import { M3Card } from '../m3/M3Card';

export const AbsenceNoticeSlide: React.FC = () => {
  return (
    <section>
      <div className="m3-slide-frame">
        <SlideBackground />

        {/* Header */}
        <div className="m3-slide-header">
          <h2 className="m3-headline-large">
            Prosedur Izin Tidak Hadir: Maksimal H-1
          </h2>
        </div>

        {/* Content */}
        <div className="m3-slide-content">
          <div className="m3-grid-split">
            {/* Card 1: Aturan H-1 */}
            <M3Card variant="filled" accentColor="yellow">
              <div className="m3-card-header">
                <h3 className="m3-title-medium">
                  Kabari Dosen Paling Lambat H-1
                </h3>
              </div>

              <p className="m3-body-large">
                Jika ada urusan mendesak yang terencana (keperluan keluarga penting, lomba, atau tugas kampus), wajib mengabari dosen <strong>maksimal H-1</strong> dengan alasan jelas. Jangan memberi kabar mendadak beberapa menit sebelum kelas dimulai.
              </p>
            </M3Card>

            {/* Card 2: Format Pesan Izin */}
            <M3Card variant="tonal" accentColor="blue">
              <div className="m3-card-header">
                <h3 className="m3-title-medium">
                  Format Pesan Izin yang Rapi
                </h3>
              </div>

              <p className="m3-body-large">
                Kirim pesan melalui email atau chat resmi dengan menyertakan:
              </p>

              <div className="m3-checklist">
                <div className="m3-checklist-item">
                  <span className="m3-checklist-bullet">&bull;</span>
                  <span><strong>Identitas:</strong> Nama Lengkap &amp; NIM</span>
                </div>
                <div className="m3-checklist-item">
                  <span className="m3-checklist-bullet">&bull;</span>
                  <span><strong>Mata Kuliah:</strong> Nama MK &amp; Kelas / Pertemuan</span>
                </div>
                <div className="m3-checklist-item">
                  <span className="m3-checklist-bullet">&bull;</span>
                  <span><strong>Alasan:</strong> Penyebab berhalangan hadir secara jujur</span>
                </div>
              </div>
            </M3Card>
          </div>
        </div>
      </div>
    </section>
  );
};
