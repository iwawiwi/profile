import React from 'react';

export interface M3ChipProps {
  label: string;
  icon?: React.ReactNode;
  color?: 'orange' | 'blue' | 'green' | 'yellow' | 'purple' | 'aqua' | 'red' | 'default';
  variant?: 'tonal' | 'outlined' | 'solid';
  size?: 'sm' | 'md';
  className?: string;
  style?: React.CSSProperties;
}

export const M3Chip: React.FC<M3ChipProps> = ({
  label,
  icon,
  color = 'orange',
  variant = 'tonal',
  size = 'md',
  className = '',
  style = {},
}) => {
  const isDefault = color === 'default';
  const colorVar = isDefault ? 'var(--gb-fg3)' : `var(--gb-${color})`;
  const softColorVar = isDefault
    ? 'var(--md-sys-color-surface-container-high)'
    : `var(--gb-${color}-soft)`;

  const getVariantStyles = (): React.CSSProperties => {
    switch (variant) {
      case 'solid':
        return {
          background: colorVar,
          color: '#ffffff',
          border: 'none',
        };
      case 'outlined':
        return {
          background: 'transparent',
          color: colorVar,
          border: `1.5px solid ${colorVar}`,
        };
      case 'tonal':
      default:
        return {
          background: softColorVar,
          color: colorVar,
          border: `1px solid ${isDefault ? 'var(--md-sys-color-outline-variant)' : colorVar}44`,
        };
    }
  };

  const isSmall = size === 'sm';

  return (
    <span
      className={`m3-chip ${className}`}
      style={{
        display: 'inline-flex',
        alignItems: 'center',
        gap: isSmall ? '8px' : '10px',
        padding: isSmall ? '6px 14px' : '9px 20px',
        borderRadius: 'var(--m3-shape-corner-full)',
        fontSize: isSmall ? '0.85rem' : '0.98rem',
        fontWeight: 650,
        letterSpacing: '0.03em',
        fontFamily: 'Google Sans Flex, sans-serif',
        lineHeight: 1,
        transition: 'all 200ms ease',
        ...getVariantStyles(),
        ...style,
      }}
    >
      {icon && <span style={{ display: 'inline-flex', alignItems: 'center' }}>{icon}</span>}
      {label}
    </span>
  );
};
