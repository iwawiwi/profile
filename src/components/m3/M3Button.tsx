import React from 'react';

export interface M3ButtonProps {
  children: React.ReactNode;
  variant?: 'filled' | 'tonal' | 'outlined' | 'text';
  color?: 'orange' | 'blue' | 'green' | 'red';
  icon?: React.ReactNode;
  onClick?: () => void;
  className?: string;
  style?: React.CSSProperties;
  disabled?: boolean;
  size?: 'sm' | 'md' | 'lg';
}

export const M3Button: React.FC<M3ButtonProps> = ({
  children,
  variant = 'filled',
  color = 'orange',
  icon,
  onClick,
  className = '',
  style = {},
  disabled = false,
  size = 'md',
}) => {
  const colorVar = `var(--gb-${color})`;
  const softColorVar = `var(--gb-${color}-soft)`;

  const getVariantStyles = (): React.CSSProperties => {
    switch (variant) {
      case 'outlined':
        return {
          background: 'transparent',
          color: colorVar,
          border: `1.5px solid ${colorVar}`,
        };
      case 'tonal':
        return {
          background: softColorVar,
          color: colorVar,
          border: '1px solid transparent',
        };
      case 'text':
        return {
          background: 'transparent',
          color: colorVar,
          border: 'none',
        };
      case 'filled':
      default:
        return {
          background: colorVar,
          color: '#ffffff',
          border: 'none',
          boxShadow: 'var(--m3-shadow-1)',
        };
    }
  };

  const getPadding = () => {
    switch (size) {
      case 'sm':
        return '6px 14px';
      case 'lg':
        return '12px 28px';
      case 'md':
      default:
        return '9px 20px';
    }
  };

  return (
    <button
      onClick={onClick}
      disabled={disabled}
      className={`m3-button ${className}`}
      style={{
        display: 'inline-flex',
        alignItems: 'center',
        justifyContent: 'center',
        gap: '8px',
        padding: getPadding(),
        borderRadius: 'var(--m3-shape-corner-full)',
        fontFamily: 'Google Sans Flex, sans-serif',
        fontSize: size === 'sm' ? '0.8rem' : '0.88rem',
        fontWeight: 650,
        cursor: disabled ? 'not-allowed' : 'pointer',
        opacity: disabled ? 0.6 : 1,
        transition: 'all var(--m3-motion-duration-short) ease',
        ...getVariantStyles(),
        ...style,
      }}
      onMouseEnter={(e) => {
        if (!disabled) {
          e.currentTarget.style.transform = 'translateY(-1px)';
          e.currentTarget.style.filter = 'brightness(1.05)';
        }
      }}
      onMouseLeave={(e) => {
        e.currentTarget.style.transform = 'none';
        e.currentTarget.style.filter = 'none';
      }}
    >
      {icon && <span style={{ display: 'inline-flex', alignItems: 'center' }}>{icon}</span>}
      {children}
    </button>
  );
};
