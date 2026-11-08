import React, { useEffect, useState } from 'react';
import { Sun, Moon, Laptop } from 'lucide-react';

export type ThemeMode = 'system' | 'light' | 'dark';

export const M3ThemeToggle: React.FC = () => {
  const [mode, setMode] = useState<ThemeMode>('system');
  const [effectiveTheme, setEffectiveTheme] = useState<'light' | 'dark'>('light');

  const applyTheme = (targetMode: ThemeMode) => {
    let resolvedTheme: 'light' | 'dark' = 'light';

    if (targetMode === 'system') {
      const prefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches;
      resolvedTheme = prefersDark ? 'dark' : 'light';
    } else {
      resolvedTheme = targetMode;
    }

    setEffectiveTheme(resolvedTheme);
    document.documentElement.setAttribute('data-theme', resolvedTheme);
  };

  useEffect(() => {
    const saved = localStorage.getItem('profile_iwawiwi_theme_mode') as ThemeMode | null;
    const initialMode: ThemeMode = saved || 'system';
    setMode(initialMode);
    applyTheme(initialMode);

    const mediaQuery = window.matchMedia('(prefers-color-scheme: dark)');
    const handleSystemChange = (e: MediaQueryListEvent) => {
      const currentSaved = localStorage.getItem('profile_iwawiwi_theme_mode') as ThemeMode | null;
      if (!currentSaved || currentSaved === 'system') {
        const newTheme = e.matches ? 'dark' : 'light';
        setEffectiveTheme(newTheme);
        document.documentElement.setAttribute('data-theme', newTheme);
      }
    };

    mediaQuery.addEventListener('change', handleSystemChange);
    return () => mediaQuery.removeEventListener('change', handleSystemChange);
  }, []);

  const cycleTheme = () => {
    let nextMode: ThemeMode;
    if (mode === 'system') {
      nextMode = 'light';
    } else if (mode === 'light') {
      nextMode = 'dark';
    } else {
      nextMode = 'system';
    }

    setMode(nextMode);
    localStorage.setItem('profile_iwawiwi_theme_mode', nextMode);
    applyTheme(nextMode);
  };

  const getLabel = () => {
    if (mode === 'system') {
      return `Otomatis (${effectiveTheme === 'dark' ? 'Dark' : 'Light'})`;
    }
    return mode === 'light' ? 'Gruvbox Light' : 'Gruvbox Dark';
  };

  const getIcon = () => {
    if (mode === 'system') return <Laptop size={16} />;
    return mode === 'light' ? <Sun size={16} /> : <Moon size={16} />;
  };

  return (
    <button
      onClick={cycleTheme}
      title={`Tema: ${getLabel()} (Klik untuk ganti mode)`}
      aria-label="Ganti mode tema (Sistem, Terang, Gelap)"
      className="m3-theme-toggle-btn"
    >
      {getIcon()}
      <span>{getLabel()}</span>
    </button>
  );
};
