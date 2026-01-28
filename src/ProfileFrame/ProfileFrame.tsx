import React, { useState, useEffect, IframeHTMLAttributes } from 'react';

export interface ProfileFrameProps extends Omit<IframeHTMLAttributes<HTMLIFrameElement>, 'src'> {
  /**
   * URL của trang web profile (mặc định: https://personal-website-black-two-43.vercel.app)
   */
  url?: string;
  /**
   * Chiều cao của frame
   */
  height?: string | number;
  /**
   * Chiều rộng của frame
   */
  width?: string | number;
  /**
   * Hiển thị loading spinner
   */
  showLoader?: boolean;
  /**
   * Thông báo loading
   */
  loadingMessage?: string;
  /**
   * Màu nền loading
   */
  loaderBgColor?: string;
  /**
   * Màu spinner
   */
  spinnerColor?: string;
}

export const ProfileFrame: React.FC<ProfileFrameProps> = ({
  url = 'https://personal-website-black-two-43.vercel.app',
  height = '100vh',
  width = '100%',
  showLoader = true,
  loadingMessage = 'Loading Profile...',
  loaderBgColor = '#ffffff',
  spinnerColor = '#3182ce',
  className = '',
  style,
  ...props
}) => {
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState(false);

  useEffect(() => {
    if (!document.getElementById('profile-frame-spinner-keyframes')) {
      const styleElement = document.createElement('style');
      styleElement.id = 'profile-frame-spinner-keyframes';
      styleElement.textContent = `
        @keyframes profile-frame-spin {
          0% { transform: rotate(0deg); }
          100% { transform: rotate(360deg); }
        }
      `;
      document.head.appendChild(styleElement);
    }
  }, []);

  const containerStyles: React.CSSProperties = {
    position: 'relative',
    width: typeof width === 'number' ? `${width}px` : width,
    height: typeof height === 'number' ? `${height}px` : height,
    overflow: 'hidden',
    backgroundColor: loaderBgColor,
    ...style,
  };

  const iframeStyles: React.CSSProperties = {
    width: '100%',
    height: '100%',
    border: 'none',
    display: isLoading && showLoader ? 'none' : 'block',
    opacity: error ? 0.5 : 1,
  };

  const loaderStyles: React.CSSProperties = {
    position: 'absolute',
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
    display: isLoading && showLoader ? 'flex' : 'none',
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: loaderBgColor,
    flexDirection: 'column',
    gap: '20px',
    zIndex: 10,
  };

  const spinnerStyles: React.CSSProperties = {
    width: '50px',
    height: '50px',
    border: '5px solid rgba(0, 0, 0, 0.1)',
    borderTopColor: spinnerColor,
    borderRadius: '50%',
    animation: 'profile-frame-spin 0.8s linear infinite',
  };

  const textStyles: React.CSSProperties = {
    fontSize: '16px',
    color: '#666',
    fontWeight: 500,
    fontFamily: 'system-ui, -apple-system, sans-serif',
  };

  const errorStyles: React.CSSProperties = {
    position: 'absolute',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    textAlign: 'center',
    color: '#e53e3e',
    fontSize: '14px',
    display: error ? 'block' : 'none',
  };

  const handleLoad = () => {
    setIsLoading(false);
    setError(false);
  };

  const handleError = () => {
    setIsLoading(false);
    setError(true);
  };

  return (
    <div className={className} style={containerStyles}>
      {showLoader && (
        <div style={loaderStyles}>
          <div style={spinnerStyles} />
          <div style={textStyles}>{loadingMessage}</div>
        </div>
      )}
      
      <div style={errorStyles}>
        Unable to load profile. Please check the URL or try again later.
      </div>

      <iframe
        src={url}
        style={iframeStyles}
        onLoad={handleLoad}
        onError={handleError}
        title="Profile"
        allowFullScreen
        loading="lazy"
        {...props}
      />
    </div>
  );
};
