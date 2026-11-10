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
  style,
  onClick,
  accentColor,
}) => {
  const cardClasses = [
    'm3-card',
    `m3-card-${variant}`,
    accentColor ? `m3-card-accent-${accentColor}` : '',
    onClick ? 'm3-card-clickable' : '',
    className,
  ]
    .filter(Boolean)
    .join(' ');

  return (
    <div
      onClick={onClick}
      className={cardClasses}
      style={style && Object.keys(style).length > 0 ? style : undefined}
    >
      {children}
    </div>
  );
};
