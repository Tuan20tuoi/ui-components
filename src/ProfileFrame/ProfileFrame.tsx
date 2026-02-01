import React, { useState, IframeHTMLAttributes } from 'react';
import './ProfileFrame.css';

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

  const handleLoad = () => {
    setIsLoading(false);
    setError(false);
  };

  const handleError = () => {
    setIsLoading(false);
    setError(true);
  };

  const iframeClasses = `profile-frame-iframe ${
    isLoading && showLoader ? 'profile-frame-iframe--loading' : ''
  } ${error ? 'profile-frame-iframe--error' : ''}`.trim();

  const loaderClasses = `profile-frame-loader ${
    !(isLoading && showLoader) ? 'profile-frame-loader--hidden' : ''
  }`.trim();

  const errorClasses = `profile-frame-error ${
    error ? 'profile-frame-error--visible' : ''
  }`.trim();

  return (
    <div 
      className={`profile-frame-container ${className}`.trim()} 
      style={{
        '--frame-width': typeof width === 'number' ? `${width}px` : width,
        '--frame-height': typeof height === 'number' ? `${height}px` : height,
        '--loader-bg-color': loaderBgColor,
        '--spinner-color': spinnerColor,
        ...style,
      } as React.CSSProperties}
    >
      <div className={loaderClasses}>
        <div className="profile-frame-spinner" />
        <div className="profile-frame-loading-text">{loadingMessage}</div>
      </div>
      
      <div className={errorClasses}>
        <div className="profile-frame-error__title">⚠️ Không thể load profile</div>
        <div className="profile-frame-error__message">
          Website có thể đã chặn việc hiển thị trong iframe do chính sách bảo mật (X-Frame-Options).
          <br />
          Bạn có thể truy cập trực tiếp tại đây:
        </div>
        <a 
          href={url} 
          target="_blank" 
          rel="noopener noreferrer"
          className="profile-frame-error__link"
        >
          Mở trang web →
        </a>
      </div>

      <iframe
        src={url}
        className={iframeClasses}
        onLoad={handleLoad}
        onError={handleError}
        title="Profile"
        allowFullScreen
        loading="lazy"
        sandbox="allow-same-origin allow-scripts allow-popups allow-forms"
        {...props}
      />
    </div>
  );
};
