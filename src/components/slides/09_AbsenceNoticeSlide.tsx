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
            Prosedur Izin Tidak Hadir
          </h2>
        </div>

        {/* Content: Reusable Dual Card Stage (2 Top Cards + 1 Bottom Callout Card) */}
        <div className="m3-slide-content">
          <div className="m3-dual-card-stage">
            <div className="m3-dual-card-grid">
              {/* Card 1: Wajib Lampirkan Bukti Sah (Kiri) */}
              <M3Card variant="tonal" accentColor="blue" className="m3-absence-card">
                <div className="m3-card-header">
                  <h3 className="m3-title-medium">
                    Wajib Lampirkan Bukti Sah
                  </h3>
                </div>

                <p className="m3-body-large">
                  Izin tidak hadir wajib disertai bukti pendukung resmi agar presensi dapat diproses:
                </p>

                <div className="m3-checklist">
                  <div className="m3-checklist-item">
                    <span className="m3-checklist-bullet text-blue">&bull;</span>
                    <span><strong>Izin Sakit:</strong> Surat Keterangan Sakit resmi dari dokter atau faskes.</span>
                  </div>
                  <div className="m3-checklist-item">
                    <span className="m3-checklist-bullet text-blue">&bull;</span>
                    <span><strong>Tugas / Lomba:</strong> Surat Dispensasi resmi yang disahkan pimpinan prodi / jurusan.</span>
                  </div>
                  <div className="m3-checklist-item">
                    <span className="m3-checklist-bullet text-blue">&bull;</span>
                    <span><strong>Format Surel:</strong> Lampirkan foto atau hasil scan jelas pada email resmi kampus.</span>
                  </div>
                </div>
              </M3Card>

              {/* Card 2: Batas Waktu H-1 dan Etika (Kanan) */}
              <M3Card variant="filled" accentColor="yellow" className="m3-absence-card">
                <div className="m3-card-header">
                  <h3 className="m3-title-medium">
                    Kabari Paling Lambat H-1
                  </h3>
                </div>

                <p className="m3-body-large">
                  Untuk keperluan terencana (acara keluarga, tugas dinas, atau lomba), wajib konfirmasi lebih awal:
                </p>

                <div className="m3-checklist">
                  <div className="m3-checklist-item">
                    <span className="m3-checklist-bullet text-yellow">&bull;</span>
                    <span><strong>Batas Waktu H-1:</strong> Kabari dosen maksimal satu hari sebelum perkuliahan dimulai.</span>
                  </div>
                  <div className="m3-checklist-item">
                    <span className="m3-checklist-bullet text-yellow">&bull;</span>
                    <span><strong>Etika Komunikasi:</strong> Hindari mengabari secara mendadak beberapa menit sebelum kelas.</span>
                  </div>
                  <div className="m3-checklist-item">
                    <span className="m3-checklist-bullet text-yellow">&bull;</span>
                    <span><strong>Pesan Terstruktur:</strong> Sertakan nama lengkap, NIM, kelas MK, dan alasan yang jelas.</span>
                  </div>
                </div>
              </M3Card>
            </div>

            {/* Bottom Reusable Callout Card: Kondisi Gawat Darurat Hari-H */}
            <M3Card variant="tonal" accentColor="orange" className="m3-callout-card">
              <div className="m3-callout-text">
                &ldquo;Khusus kondisi gawat darurat (musibah atau sakit mendadak hari-H): <strong>segera kabari saya sebelum kelas</strong>, bukti fisik resmi bisa disusulkan setelah pulih.&rdquo;
              </div>
            </M3Card>
          </div>
        </div>
      </div>
    </section>
  );
};

