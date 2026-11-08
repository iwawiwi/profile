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

  useEffect(() => {
    if (!deckRef.current) return;

    const deck = new Reveal(deckRef.current, {
      hash: true,
      slideNumber: false,
      controls: false,
      progress: true,
      center: false,
      transition: 'fade',
      transitionSpeed: 'default',
      backgroundTransition: 'fade',
      width: '100%',
      height: '100%',
      margin: 0,
      minScale: 1,
      maxScale: 1,
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
      {/* Floating Top Bar (Unobtrusive & Transparent by Default, Opaque on Hover) */}
      <div className="m3-floating-bar">
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

      {/* Reveal Deck Wrapper */}
      <div className="reveal" ref={deckRef}>
        <div className="slides">
          {/* 1. Cover / Hero */}
          <HeroSlide />

          {/* 2. Biodata & Personal */}
          <AboutSlide />

          {/* 3. Riwayat Pendidikan */}
          <EducationSlide />

          {/* 4. Pengalaman Kerja & Karir */}
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

          {/* 10. Kuis & Ujian Susulan H+7 */}
          <MakeupExamSlide />

          {/* 11. Nol Toleransi Plagiarisme & Titip Absen */}
          <IntegritySlide />

          {/* 12. Ekspektasi & Ketertiban LMS */}
          <ExpectationsSlide />

          {/* 13. Saluran Kontak Dosen */}
          <ContactSlide />

          {/* 14. Format Wajib Subjek Email */}
          <EmailFormatSlide />

          {/* 15. Penutup & Motto Belajar */}
          <ClosingSlide />
        </div>
      </div>

      {/* Aesthetic Integrated Navigation Dock: [ Panah Kiri ] [ Nomor Halaman ] [ Panah Kanan ] */}
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
  );
};
