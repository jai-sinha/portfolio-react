import { useState, useRef, useEffect } from 'react';
import { Image, Spinner } from 'react-bootstrap';

const OptimizedImage = ({
  src,
  alt,
  className = '',
  fluid = false,
  thumbnail = false,
  priority = false,
  onClick,
  style = {}
}) => {
  const [isLoading, setIsLoading] = useState(true);
  const [hasError, setHasError] = useState(false);
  const [isInView, setIsInView] = useState(priority);
  const imgRef = useRef(null);

  useEffect(() => {
    if (priority) return; // Skip intersection observer for priority images

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setIsInView(true);
            observer.disconnect();
          }
        });
      },
      { threshold: 0.1, rootMargin: '50px' }
    );

    if (imgRef.current) {
      observer.observe(imgRef.current);
    }

    return () => observer.disconnect();
  }, [priority]);

  const handleLoad = () => {
    setIsLoading(false);
  };

  const handleError = () => {
    setIsLoading(false);
    setHasError(true);
  };

  if (hasError) {
    return (
      <div
        className={`image-error-placeholder ${className}`}
        style={{
          ...style,
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          backgroundColor: '#f8f9fa',
          border: '1px solid #dee2e6',
          borderRadius: '0.375rem',
          minHeight: '200px'
        }}
        onClick={onClick}
      >
        <div style={{ textAlign: 'center', color: '#6c757d' }}>
          <svg width="48" height="48" viewBox="0 0 24 24" fill="currentColor">
            <path d="M21 19V5c0-1.1-.9-2-2-2H5c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h14c1.1 0 2-.9 2-2zM8.5 13.5l2.5 3.01L14.5 12l4.5 6H5l3.5-4.5z"/>
          </svg>
          <p style={{ marginTop: '8px', fontSize: '14px' }}>Image failed to load</p>
        </div>
      </div>
    );
  }

  return (
    <div ref={imgRef} className={`image-container ${className}`} style={{ ...style }}>
      {isLoading && (
        <div
          style={{
            position: 'absolute',
            top: 0,
            left: 0,
            right: 0,
            bottom: 0,
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            backgroundColor: '#f8f9fa',
            borderRadius: fluid ? '0.375rem' : '0'
          }}
        >
          <Spinner animation="border" variant="secondary" />
        </div>
      )}
      {isInView && (
        <Image
          src={src}
          alt={alt}
          fluid={fluid}
          loading={priority ? 'eager' : 'lazy'}
          onLoad={handleLoad}
          onError={handleError}
          onClick={onClick}
          style={{
            opacity: isLoading ? 0 : 1,
            transition: 'opacity 0.3s ease-in-out'
          }}
        />
      )}
    </div>
  );
};

export default OptimizedImage;
