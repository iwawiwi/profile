import React from 'react';

export interface M3CardProps {
  children: React.ReactNode;
  variant?: 'elevated' | 'filled' | 'outlined' | 'tonal';
  className?: string;
  style?: React.CSSProperties;
  onClick?: () => void;
  accentColor?: 'orange' | 'blue' | 'green' | 'yellow' | 'purple' | 'aqua' | 'red';
}

export const M3Card: React.FC<M3CardProps> = ({
  children,
  variant = 'filled',
  className = '',
  style = {},
  onClick,
  accentColor,
}) => {
  const getVariantStyles = (): React.CSSProperties => {
    switch (variant) {
      case 'elevated':
        return {
          background: accentColor
            ? `var(--gb-${accentColor}-soft)`
            : 'var(--md-sys-color-surface-container)',
          boxShadow: 'var(--m3-shadow-2)',
          border: '1.5px solid var(--md-sys-color-outline-variant)',
        };
      case 'outlined':
        return {
          background: accentColor ? `var(--gb-${accentColor}-soft)` : 'transparent',
          border: '1.5px solid var(--md-sys-color-outline)',
        };
      case 'tonal':
        return {
          background: accentColor
            ? `var(--gb-${accentColor}-soft)`
            : 'var(--md-sys-color-surface-container-high)',
          border: '1.5px solid var(--md-sys-color-outline-variant)',
          boxShadow: 'var(--m3-shadow-1)',
        };
      case 'filled':
      default:
        return {
          background: accentColor
            ? `var(--gb-${accentColor}-soft)`
            : 'var(--md-sys-color-surface-container-low)',
          border: '1.5px solid var(--md-sys-color-outline-variant)',
          boxShadow: 'var(--m3-shadow-1)',
        };
    }
  };

  return (
    <div
      onClick={onClick}
      className={`m3-card ${className}`}
      style={{
        boxSizing: 'border-box',
        display: 'flex',
        flexDirection: 'column',
        borderRadius: 'clamp(12px, 1.4vw, 18px)',
        padding: 'clamp(20px, 2.4vh, 30px) clamp(24px, 2.8vw, 36px)',
        transition:
          'transform var(--m3-motion-duration-short) var(--m3-motion-spring), box-shadow var(--m3-motion-duration-short) ease, background-color var(--m3-motion-duration-medium) ease',
        cursor: onClick ? 'pointer' : 'default',
        ...getVariantStyles(),
        ...style,
      }}
    >
      {children}
    </div>
  );
};
