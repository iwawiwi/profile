import React, { useRef, useState } from 'react';
import { SlideBackground } from '../common/SlideBackground';
import { M3Card } from '../m3/M3Card';
import { M3Chip } from '../m3/M3Chip';
import { Volume2, VolumeX } from 'lucide-react';
import helloVideo from '../../assets/videos/hello-iww.mp4';

export const AboutSlide: React.FC = () => {
  const videoRef = useRef<HTMLVideoElement>(null);
  const [isMuted, setIsMuted] = useState(true);

  const toggleSound = (e: React.MouseEvent) => {
    e.stopPropagation();
    if (videoRef.current) {
      const nextMuted = !videoRef.current.muted;
      videoRef.current.muted = nextMuted;
      setIsMuted(nextMuted);
      if (!nextMuted) {
        videoRef.current.play().catch(() => {});
      }
    } else {
      setIsMuted((prev) => !prev);
    }
  };

  return (
    <section>
      <div className="m3-slide-frame">
        <SlideBackground />

        {/* Header */}
        <div className="m3-slide-header">
          <h2 className="m3-headline-large">
            Perkenalan
          </h2>
        </div>

        {/* Content */}
        <div className="m3-slide-content">
          <div className="m3-about-layout">
            {/* Left Column: Looping Video Avatar */}
            <div className="m3-about-video-card">
              <video
                ref={videoRef}
                src={helloVideo}
                autoPlay
                loop
                muted={isMuted}
                playsInline
                data-autoplay
                className="m3-about-video"
              />
              <button
                type="button"
                className="m3-video-sound-toggle"
                onClick={toggleSound}
                title={isMuted ? 'Nyalakan Audio' : 'Bisukan Audio'}
                aria-label={isMuted ? 'Nyalakan Audio' : 'Bisukan Audio'}
              >
                {isMuted ? <VolumeX size={22} /> : <Volume2 size={22} />}
              </button>
            </div>

            {/* Right Column: Bio Cards */}
            <div className="m3-about-cards-col">
              {/* Card 1: Nama dan Panggilan */}
              <M3Card variant="filled" accentColor="orange" className="m3-about-card">
                <div className="m3-card-header">
                  <h3 className="m3-title-large">
                    Nama Lengkap dan Panggilan
                  </h3>
                </div>

                <div className="m3-card-lead">
                  I Wayan Wiprayoga Wisesa
                </div>

                <div className="m3-body-large mb-4">
                  Biasa dipanggil <strong>Pak Wayan</strong> atau <strong>Pak Yoga</strong>.
                </div>

                <div className="m3-card-actions">
                  <M3Chip label="Kode Dosen: IWW" color="orange" />
                </div>
              </M3Card>

              {/* Card 2: Asal dan Domisili */}
              <M3Card variant="filled" accentColor="aqua" className="m3-about-card">
                <div className="m3-card-header">
                  <h3 className="m3-title-large">
                    Asal dan Domisili
                  </h3>
                </div>

                <div className="m3-card-lead">
                  Bali &rarr; Lampung Selatan
                </div>

                <div className="m3-body-large mb-4">
                  Berasal dari <strong>Bali</strong>, saat ini menetap di <strong>Lampung Selatan</strong>.
                </div>

                <div className="m3-card-actions">
                  <M3Chip label="Bataranila, Hajimena" color="aqua" />
                </div>
              </M3Card>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
