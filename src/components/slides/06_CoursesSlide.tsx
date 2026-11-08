import React from 'react';
import { SlideBackground } from '../common/SlideBackground';
import { M3Card } from '../m3/M3Card';

export const CoursesSlide: React.FC = () => {
  return (
    <section>
      <div className="m3-slide-frame">
        <SlideBackground />

        {/* Header */}
        <div className="m3-slide-header">
          <h2 className="m3-headline-large">
            Mata Kuliah yang Diampu
          </h2>
        </div>

        {/* Content: 6 Perfectly Uniform Bento Course Cards (Single Line Titles Without Icons) */}
        <div className="m3-slide-content m3-slide-content-center">
          <div className="m3-grid-courses">
            <M3Card variant="filled" accentColor="orange">
              <div className="m3-title-medium">
                Sistem Operasi
              </div>
              <p className="m3-body-medium">
                Manajemen memori, proses konkurensi, thread CPU, dan arsitektur kernel Linux.
              </p>
            </M3Card>

            <M3Card variant="filled" accentColor="blue">
              <div className="m3-title-medium">
                Algoritma &amp; Struktur Data
              </div>
              <p className="m3-body-medium">
                Efisiensi memori, analisis Big-O, linked list, tree, graph, dan dynamic programming.
              </p>
            </M3Card>

            <M3Card variant="filled" accentColor="purple">
              <div className="m3-title-medium">
                Pembelajaran Mesin Multimodal
              </div>
              <p className="m3-body-medium">
                Representasi fitur lintas modalitas (teks, audio, citra), arsitektur model mendalam, dan pemrosesan data multimedia adaptif.
              </p>
            </M3Card>

            <M3Card variant="filled" accentColor="aqua">
              <div className="m3-title-medium">
                Organisasi Komputer
              </div>
              <p className="m3-body-medium">
                Arsitektur mikroprosesor, instruksi set ISA, ALU, cache memori, dan bus data.
              </p>
            </M3Card>

            <M3Card variant="filled" accentColor="green">
              <div className="m3-title-medium">
                Algoritma Pemrograman
              </div>
              <p className="m3-body-medium">
                Pondasi logika coding, percabangan, perulangan, fungsi modular, dan debugging kode.
              </p>
            </M3Card>

            <M3Card variant="filled" accentColor="yellow">
              <div className="m3-title-medium">
                Probabilitas &amp; Statistik
              </div>
              <p className="m3-body-medium">
                Distribusi peluang, uji hipotesis data, regresi linier, dan analisis statistik komputasi.
              </p>
            </M3Card>
          </div>
        </div>
      </div>
    </section>
  );
};
