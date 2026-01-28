import React, { ButtonHTMLAttributes } from 'react';

export interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  /**
   * Kích thước của button
   */
  size?: 'small' | 'medium' | 'large';
  /**
   * Kiểu button
   */
  variant?: 'primary' | 'secondary' | 'outline';
  /**
   * Trạng thái loading
   */
  loading?: boolean;
}

export const Button: React.FC<ButtonProps> = ({
  children,
  size = 'medium',
  variant = 'primary',
  loading = false,
  disabled,
  className = '',
  style,
  ...props
}) => {
  // Base styles
  const baseStyles: React.CSSProperties = {
    padding: size === 'small' ? '6px 12px' : size === 'large' ? '12px 24px' : '8px 16px',
    fontSize: size === 'small' ? '14px' : size === 'large' ? '18px' : '16px',
    border: 'none',
    borderRadius: '4px',
    cursor: disabled || loading ? 'not-allowed' : 'pointer',
    fontWeight: 500,
    transition: 'all 0.2s ease',
    opacity: disabled || loading ? 0.6 : 1,
    ...style,
  };

  // Variant styles
  const variantStyles: React.CSSProperties = 
    variant === 'primary'
      ? { backgroundColor: '#007bff', color: '#fff' }
      : variant === 'secondary'
      ? { backgroundColor: '#6c757d', color: '#fff' }
      : { backgroundColor: 'transparent', color: '#007bff', border: '1px solid #007bff' };

  const combinedStyles = { ...baseStyles, ...variantStyles };

  return (
    <button
      className={className}
      style={combinedStyles}
      disabled={disabled || loading}
      {...props}
    >
      {loading ? 'Loading...' : children}
    </button>
  );
};
