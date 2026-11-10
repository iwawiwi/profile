import React, { useEffect, useRef, useState } from 'react';
import Reveal from 'reveal.js';
import 'reveal.js/reveal.css';
import 'reveal.js/reset.css';
import './styles/gruvbox-tokens.css';
import './styles/typography.css';
import './styles/reveal-m3.css';

import { M3ThemeToggle } from './components/m3/M3ThemeToggle';
import { HeroSlide } from './components/slides/01_HeroSlide';
import { AboutSlide } from './components/slides/02_AboutSlide';
import { EducationSlide } from './components/slides/03_EducationSlide';
import { ExperienceSlide } from './components/slides/04_ExperienceSlide';
import { ResearchSlide } from './components/slides/05_ResearchSlide';
import { CoursesSlide } from './components/slides/06_CoursesSlide';
import { AttendanceRuleSlide } from './components/slides/07_AttendanceRuleSlide';
import { FacultyRuleSlide } from './components/slides/08_FacultyRuleSlide';
import { AbsenceNoticeSlide } from './components/slides/09_AbsenceNoticeSlide';
import { MakeupExamSlide } from './components/slides/10_MakeupExamSlide';
import { IntegritySlide } from './components/slides/11_IntegritySlide';
import { ExpectationsSlide } from './components/slides/12_ExpectationsSlide';
import { ContactSlide } from './components/slides/13_ContactSlide';
import { EmailFormatSlide } from './components/slides/14_EmailFormatSlide';
import { ClosingSlide } from './components/slides/15_ClosingSlide';

import { Maximize2, Minimize2, Grid, ChevronLeft, ChevronRight } from 'lucide-react';

export const App: React.FC = () => {
  const deckRef = useRef<HTMLDivElement>(null);
  const revealInstance = useRef<any>(null);
  const [isFullscreen, setIsFullscreen] = useState(false);
  const [currentSlide, setCurrentSlide] = useState(1);
  const [totalSlides, setTotalSlides] = useState(15);
  const [canGoPrev, setCanGoPrev] = useState(false);
  const [canGoNext, setCanGoNext] = useState(true);

  // 4:3 Projector / 16:9 Widescreen aspect ratio state
  const [aspectRatio, setAspectRatio] = useState<'16:9' | '4:3'>(() => {
    if (typeof window !== 'undefined') {
      const saved = localStorage.getItem('reveal-aspect-ratio');
      if (saved === '4:3' || saved === '16:9') return saved;
      return window.innerWidth / window.innerHeight <= 1.45 ? '4:3' : '16:9';
    }
    return '16:9';
  });

  const applyAspectRatio = (ratio: '16:9' | '4:3') => {
    const is43 = ratio === '4:3';
    document.documentElement.setAttribute('data-ratio', is43 ? '4-3' : '16-9');
    if (revealInstance.current) {
      revealInstance.current.configure({
        width: is43 ? 1440 : 1920,
        height: 1080,
      });
      revealInstance.current.layout();
    }
  };

  const toggleAspectRatio = () => {
    const next = aspectRatio === '16:9' ? '4:3' : '16:9';
    setAspectRatio(next);
    localStorage.setItem('reveal-aspect-ratio', next);
    applyAspectRatio(next);
  };

  useEffect(() => {
    const handleResize = () => {
      const saved = localStorage.getItem('reveal-aspect-ratio');
      if (!saved) {
        const autoRatio = window.innerWidth / window.innerHeight <= 1.45 ? '4:3' : '16:9';
        if (autoRatio !== aspectRatio) {
          setAspectRatio(autoRatio);
          applyAspectRatio(autoRatio);
        }
      }
    };
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, [aspectRatio]);

  useEffect(() => {
    if (!deckRef.current) return;

    const initialIs43 = aspectRatio === '4:3';
    document.documentElement.setAttribute('data-ratio', initialIs43 ? '4-3' : '16-9');

    const deck = new Reveal(deckRef.current, {
      hash: true,
      slideNumber: false,
      controls: false,
      progress: true,
      center: false,
      transition: 'fade',
      transitionSpeed: 'default',
      backgroundTransition: 'fade',
      width: initialIs43 ? 1440 : 1920,
      height: 1080,
      margin: 0.02,
      minScale: 0.2,
      maxScale: 2.0,
      mouseWheel: false,
      keyboard: true,
    });

    const updateSlideState = () => {
      const indices = deck.getIndices();
      const total = deck.getTotalSlides();
      setCurrentSlide(indices.h + 1);
      setTotalSlides(total);
      setCanGoPrev(indices.h > 0);
      setCanGoNext(indices.h < total - 1);
    };

    deck.initialize().then(() => {
      revealInstance.current = deck;
      deck.layout();
      updateSlideState();
    });

    deck.on('slidechanged', updateSlideState);

    const handleResize = () => {
      if (revealInstance.current) {
        revealInstance.current.layout();
      }
    };

    window.addEventListener('resize', handleResize);

    const handleFullscreenChange = () => {
      setIsFullscreen(!!document.fullscreenElement);
    };
    document.addEventListener('fullscreenchange', handleFullscreenChange);

    return () => {
      window.removeEventListener('resize', handleResize);
      document.removeEventListener('fullscreenchange', handleFullscreenChange);
      try {
        deck.off('slidechanged', updateSlideState);
        deck.destroy();
      } catch (err) {
        // safe destroy cleanup
      }
    };
  }, []);

  const toggleFullscreen = () => {
    if (!document.fullscreenElement) {
      document.documentElement.requestFullscreen().catch(() => {});
    } else {
      document.exitFullscreen().catch(() => {});
    }
  };

  const toggleOverview = () => {
    if (revealInstance.current) {
      revealInstance.current.toggleOverview();
    }
  };

  const handlePrev = () => {
    if (revealInstance.current) {
      revealInstance.current.prev();
    }
  };

  const handleNext = () => {
    if (revealInstance.current) {
      revealInstance.current.next();
    }
  };

  return (
    <div className="reveal-viewport-wrapper">
      {/* Reveal Deck Wrapper */}
      <div className="reveal" ref={deckRef}>
        <div className="slides">
          {/* 1. Cover / Hero */}
          <HeroSlide />

          {/* 2. Biodata dan Personal */}
          <AboutSlide />

          {/* 3. Riwayat Pendidikan */}
          <EducationSlide />

          {/* 4. Pengalaman Kerja dan Karir */}
          <ExperienceSlide />

          {/* 5. Tiga Pilar Riset */}
          <ResearchSlide />

          {/* 6. Mata Kuliah yang Diampu */}
          <CoursesSlide />

          {/* 7. Toleransi Keterlambatan 20 Menit */}
          <AttendanceRuleSlide />

          {/* 8. Aturan Waktu untuk Dosen */}
          <FacultyRuleSlide />

          {/* 9. Prosedur Izin Kuliah H-1 */}
          <AbsenceNoticeSlide />

          {/* 10. Kuis dan Ujian Susulan H+7 */}
          <MakeupExamSlide />

          {/* 11. Nol Toleransi Plagiarisme dan Titip Absen */}
          <IntegritySlide />

          {/* 12. Ekspektasi dan Ketertiban LMS */}
          <ExpectationsSlide />

          {/* 13. Saluran Kontak Dosen */}
          <ContactSlide />

          {/* 14. Format Wajib Subjek Email */}
          <EmailFormatSlide />

          {/* 15. Penutup dan Motto Belajar */}
          <ClosingSlide />

          {/* Persistent Slide Frame Controls (Anchored to the 1920x1080 Canvas) */}
          <div className="m3-slide-controls">
            {/* Top Floating Actions Bar */}
            <div className="m3-floating-bar">
              {/* Aspect Ratio Toggle (16:9 Widescreen / 4:3 Proyektor) */}
              <button
                onClick={toggleAspectRatio}
                title={`Ubah Rasio Layar Proyektor (Saat ini: ${aspectRatio} - Klik untuk ubah ke ${aspectRatio === '16:9' ? '4:3 Proyektor' : '16:9 Widescreen'})`}
                aria-label="Toggle Aspect Ratio"
                className="m3-icon-btn m3-ratio-btn"
              >
                <span className="m3-ratio-tag">{aspectRatio}</span>
              </button>

              <M3ThemeToggle />

              <button
                onClick={toggleOverview}
                title="Tinjauan Semua Slide (ESC)"
                aria-label="Toggle slide overview"
                className="m3-icon-btn"
              >
                <Grid size={18} />
              </button>

              <button
                onClick={toggleFullscreen}
                title={isFullscreen ? 'Keluar Layar Penuh' : 'Layar Penuh (F)'}
                aria-label="Toggle fullscreen"
                className="m3-icon-btn"
              >
                {isFullscreen ? <Minimize2 size={18} /> : <Maximize2 size={18} />}
              </button>
            </div>

            {/* Aesthetic Integrated Navigation Dock */}
            <div className="m3-nav-dock">
              <button
                onClick={handlePrev}
                disabled={!canGoPrev}
                title="Slide Sebelumnya (←)"
                aria-label="Previous Slide"
                className="m3-nav-btn"
              >
                <ChevronLeft size={18} />
              </button>

              <div className="m3-nav-page">
                <span className="m3-nav-cur">{String(currentSlide).padStart(2, '0')}</span>
                <span className="m3-nav-sep">/</span>
                <span className="m3-nav-tot">{String(totalSlides).padStart(2, '0')}</span>
              </div>

              <button
                onClick={handleNext}
                disabled={!canGoNext}
                title="Slide Selanjutnya (→)"
                aria-label="Next Slide"
                className="m3-nav-btn"
              >
                <ChevronRight size={18} />
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
