import React from 'react';
import { SlideBackground } from '../common/SlideBackground';
import { M3Card } from '../m3/M3Card';
import { Building2, Sparkles, Mail } from 'lucide-react';
import logoItera from '../../assets/images/logo-itera.png';
import logoIfItera from '../../assets/images/logo-if-itera.png';

export const HeroSlide: React.FC = () => {
  return (
    <section>
      <div className="m3-slide-frame m3-slide-frame-center">
        <SlideBackground />

        {/* Center Main Hero Content */}
        <div className="m3-slide-content m3-slide-content-center">
          <div className="m3-center-stage-hero">

            {/* Official Institutional Logos (Large & In-Slide, Pure White on Dark Theme) */}
            <div className="m3-slide-brand-lockup">
              <img
                src={logoItera}
                alt="Logo Institut Teknologi Sumatera (ITERA)"
                className="m3-logo-itera"
              />
              <img
                src={logoIfItera}
                alt="Logo Teknik Informatika ITERA"
                className="m3-logo-if"
              />
            </div>

            <span className="m3-eyebrow">
              Profil Dosen &amp; Kontrak Belajar
            </span>

            <h1 className="m3-display-large m3-title-single-line">
              I <span className="m3-shimmer-text">WAYAN</span> Wipra<span className="m3-shimmer-text">YOGA </span>Wisesa
            </h1>

            <div className="m3-hero-subhead">
              <span className="m3-hero-subhead-primary">
                Program Studi Teknik Informatika
              </span>
              <span className="m3-hero-subhead-secondary">
                &bull; Institut Teknologi Sumatera (ITERA)
              </span>
            </div>

            {/* Bento Highlights Cards */}
            <div className="m3-grid-3col">
              <M3Card variant="tonal" accentColor="orange">
                <div className="m3-card-header">
                  <Building2 size={26} color="var(--gb-orange)" />
                  <span className="m3-card-category-label text-orange">
                    RUANG KERJA
                  </span>
                </div>
                <div className="m3-title-medium">
                  Lab IoT &amp; Jaringan Komputer
                </div>
                <div className="m3-body-small text-muted">
                  Gedung Labtek 3 Lantai 3
                </div>
              </M3Card>

              <M3Card variant="tonal" accentColor="blue">
                <div className="m3-card-header">
                  <Sparkles size={26} color="var(--gb-blue)" />
                  <span className="m3-card-category-label text-blue">
                    FOKUS RISET
                  </span>
                </div>
                <div className="m3-title-medium">
                  Machine Learning &amp; Multimedia
                </div>
                <div className="m3-body-small text-muted">
                  Multimodal AI, MIR, &amp; HCI
                </div>
              </M3Card>

              <M3Card variant="tonal" accentColor="green">
                <div className="m3-card-header">
                  <Mail size={26} color="var(--gb-green)" />
                  <span className="m3-card-category-label text-green">
                    EMAIL RESMI
                  </span>
                </div>
                <div className="m3-title-medium">
                  wayan.wisesa@if.itera.ac.id
                </div>
                <div className="m3-body-small text-muted">
                  Surel Akademik Dosen
                </div>
              </M3Card>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
