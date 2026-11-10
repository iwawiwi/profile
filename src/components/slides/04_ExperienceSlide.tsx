import React from 'react';
import { SlideBackground } from '../common/SlideBackground';
import { Code2, FlaskConical, GraduationCap } from 'lucide-react';

export const ExperienceSlide: React.FC = () => {
  return (
    <section>
      <div className="m3-slide-frame">
        <SlideBackground />

        {/* Header */}
        <div className="m3-slide-header">
          <h2 className="m3-headline-large">
            Pengalaman Kerja dan Riset
          </h2>
        </div>

        {/* Content: Aesthetic Vertical Career Timeline */}
        <div className="m3-slide-content">
          <div className="m3-timeline-container">
            <div className="m3-timeline-rail" />

            {/* 1. Programmer LKPP */}
            <div className="m3-timeline-item">
              <div className="m3-timeline-node aqua">
                <Code2 size={28} />
              </div>
              <div className="m3-timeline-card aqua">
                <div className="m3-timeline-role">Programmer</div>
                <div className="m3-timeline-sub">
                  <span className="m3-timeline-period">2011 &mdash; 2012</span>
                  <span className="m3-timeline-sep">&bull;</span>
                  <span className="m3-timeline-inst text-aqua">
                    Lembaga Kebijakan Pengadaan Barang/Jasa Pemerintah (LKPP RI)
                  </span>
                </div>
              </div>
            </div>

            {/* 2. Research Assistant Fasilkom UI */}
            <div className="m3-timeline-item">
              <div className="m3-timeline-node purple">
                <FlaskConical size={28} />
              </div>
              <div className="m3-timeline-card purple">
                <div className="m3-timeline-role">Research Assistant</div>
                <div className="m3-timeline-sub">
                  <span className="m3-timeline-period">2012 &mdash; 2016</span>
                  <span className="m3-timeline-sep">&bull;</span>
                  <span className="m3-timeline-inst text-purple">
                    Fasilkom Universitas Indonesia
                  </span>
                </div>
              </div>
            </div>

            {/* 3. Dosen Tetap ITERA (Breathing Active Node) */}
            <div className="m3-timeline-item">
              <div className="m3-timeline-node orange breathing">
                <GraduationCap size={28} />
              </div>
              <div className="m3-timeline-card orange">
                <div className="m3-timeline-role">Dosen Tetap ITERA</div>
                <div className="m3-timeline-sub">
                  <span className="m3-timeline-period">2017 &mdash; Sekarang</span>
                  <span className="m3-timeline-sep">&bull;</span>
                  <span className="m3-timeline-inst text-orange">
                    Program Studi Teknik Informatika, ITERA
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
