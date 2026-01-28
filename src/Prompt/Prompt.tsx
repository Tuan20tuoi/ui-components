import React, { HTMLAttributes, useState } from 'react';

export interface PromptProps extends Omit<HTMLAttributes<HTMLDivElement>, 'title'> {
  /**
   * Tiêu đề của prompt
   */
  title: string;
  /**
   * Nội dung mô tả
   */
  message: string;
  /**
   * Kiểu prompt
   */
  type?: 'info' | 'success' | 'warning' | 'error';
  /**
   * Có thể đóng được không
   */
  closable?: boolean;
  /**
   * Callback khi đóng
   */
  onClose?: () => void;
}

export const Prompt: React.FC<PromptProps> = ({
  title,
  message,
  type = 'info',
  closable = true,
  onClose,
  className = '',
  style,
  ...props
}) => {
  const [isVisible, setIsVisible] = useState(true);

  const handleClose = () => {
    setIsVisible(false);
    onClose?.();
  };

  if (!isVisible) return null;

  // Base styles
  const baseStyles: React.CSSProperties = {
    padding: '16px',
    borderRadius: '6px',
    marginBottom: '16px',
    position: 'relative',
    border: '1px solid',
    ...style,
  };

  // Type styles
  const typeStyles: React.CSSProperties =
    type === 'success'
      ? { backgroundColor: '#d4edda', borderColor: '#c3e6cb', color: '#155724' }
      : type === 'warning'
      ? { backgroundColor: '#fff3cd', borderColor: '#ffeaa7', color: '#856404' }
      : type === 'error'
      ? { backgroundColor: '#f8d7da', borderColor: '#f5c6cb', color: '#721c24' }
      : { backgroundColor: '#d1ecf1', borderColor: '#bee5eb', color: '#0c5460' };

  const combinedStyles = { ...baseStyles, ...typeStyles };

  return (
    <div className={className} style={combinedStyles} role="alert" {...props}>
      <div style={{ fontWeight: 'bold', marginBottom: '8px', fontSize: '16px' }}>
        {title}
      </div>
      <div style={{ fontSize: '14px', lineHeight: '1.5' }}>{message}</div>
      {closable && (
        <button
          onClick={handleClose}
          style={{
            position: 'absolute',
            top: '12px',
            right: '12px',
            background: 'none',
            border: 'none',
            fontSize: '20px',
            cursor: 'pointer',
            color: 'inherit',
            opacity: 0.7,
            padding: '0 4px',
          }}
          aria-label="Close"
        >
          ×
        </button>
      )}
    </div>
  );
};
