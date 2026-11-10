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

        {/* Content: 6 Clean Expanded Course Cards */}
        <div className="m3-slide-content m3-slide-content-center">
          <div className="m3-grid-courses">
            <M3Card variant="filled" accentColor="orange">
              <div className="m3-title-medium">
                Sistem Operasi
              </div>
            </M3Card>

            <M3Card variant="filled" accentColor="blue">
              <div className="m3-title-medium">
                Algoritma dan Struktur Data
              </div>
            </M3Card>

            <M3Card variant="filled" accentColor="purple">
              <div className="m3-title-medium">
                Pembelajaran Mesin Multimodal
              </div>
            </M3Card>

            <M3Card variant="filled" accentColor="aqua">
              <div className="m3-title-medium">
                Organisasi Komputer
              </div>
            </M3Card>

            <M3Card variant="filled" accentColor="green">
              <div className="m3-title-medium">
                Algoritma Pemrograman
              </div>
            </M3Card>

            <M3Card variant="filled" accentColor="yellow">
              <div className="m3-title-medium">
                Probabilitas dan Statistik
              </div>
            </M3Card>
          </div>
        </div>
      </div>
    </section>
  );
};
