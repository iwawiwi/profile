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
  style,
}) => {
  const chipClass = [
    'm3-chip',
    `m3-chip-${size}`,
    `m3-chip-${variant}-${color}`,
    className,
  ]
    .filter(Boolean)
    .join(' ');

  return (
    <span
      className={chipClass}
      style={style && Object.keys(style).length > 0 ? style : undefined}
    >
      {icon && <span className="m3-chip-icon">{icon}</span>}
      {label}
    </span>
  );
};
