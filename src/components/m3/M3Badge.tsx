import React from 'react';

export interface M3BadgeProps {
  children: React.ReactNode;
  status?: 'success' | 'warning' | 'danger' | 'info' | 'neutral';
  className?: string;
  style?: React.CSSProperties;
}

export const M3Badge: React.FC<M3BadgeProps> = ({
  children,
  status = 'neutral',
  className = '',
  style = {},
}) => {
  const getColors = () => {
    switch (status) {
      case 'success':
        return { bg: 'var(--gb-green-soft)', text: 'var(--gb-green)', border: 'var(--gb-green)' };
      case 'warning':
        return { bg: 'var(--gb-yellow-soft)', text: 'var(--gb-yellow)', border: 'var(--gb-yellow)' };
      case 'danger':
        return { bg: 'var(--gb-red-soft)', text: 'var(--gb-red)', border: 'var(--gb-red)' };
      case 'info':
        return { bg: 'var(--gb-blue-soft)', text: 'var(--gb-blue)', border: 'var(--gb-blue)' };
      case 'neutral':
      default:
        return {
          bg: 'var(--md-sys-color-surface-container-high)',
          text: 'var(--gb-fg2)',
          border: 'var(--md-sys-color-outline-variant)',
        };
    }
  };

  const c = getColors();

  return (
    <span
      className={`m3-badge ${className}`}
      style={{
        display: 'inline-flex',
        alignItems: 'center',
        padding: '4px 12px',
        borderRadius: 'var(--m3-shape-corner-small)',
        fontSize: '0.85rem',
        fontWeight: 750,
        backgroundColor: c.bg,
        color: c.text,
        border: `1.5px solid ${c.border}77`,
        letterSpacing: '0.04em',
        textTransform: 'uppercase',
        ...style,
      }}
    >
      {children}
    </span>
  );
};
