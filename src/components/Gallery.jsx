import { useState, useEffect } from 'react';
import { FiX, FiChevronLeft, FiChevronRight } from 'react-icons/fi';
import '../styles/components.css';

const Gallery = ({ images = [] }) => {
  const [lightboxOpen, setLightboxOpen] = useState(false);
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  // Handle keyboard navigation
  useEffect(() => {
    if (!lightboxOpen) return;

    const handleKeyDown = (e) => {
      if (e.key === 'Escape') {
        setLightboxOpen(false);
      } else if (e.key === 'ArrowLeft') {
        goToPrevious();
      } else if (e.key === 'ArrowRight') {
        goToNext();
      }
    };

    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [lightboxOpen, currentImageIndex]);

  // Prevent body scroll when lightbox is open
  useEffect(() => {
    if (lightboxOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = '';
    }
    return () => {
      document.body.style.overflow = '';
    };
  }, [lightboxOpen]);

  const openLightbox = (index) => {
    setCurrentImageIndex(index);
    setLightboxOpen(true);
  };

  const closeLightbox = () => {
    setLightboxOpen(false);
  };

  const goToNext = () => {
    setCurrentImageIndex((prev) => (prev + 1) % images.length);
  };

  const goToPrevious = () => {
    setCurrentImageIndex((prev) => (prev - 1 + images.length) % images.length);
  };

  // Generate placeholder images if none provided
  const galleryImages = images.length > 0
    ? images
    : Array.from({ length: 12 }, (_, i) => ({
        src: `/images/${i < 6 ? `computer-image-${i + 1}.jpg` : `image-${i - 5}.jpg`}`,
        alt: `Gallery image ${i + 1}`,
      }));

  if (galleryImages.length === 0) return null;

  return (
    <>
      <div className="gallery-grid">
        {galleryImages.map((image, index) => (
          <div
            key={index}
            className="gallery-item fade-in-on-scroll"
            onClick={() => openLightbox(index)}
            role="button"
            tabIndex={0}
            onKeyDown={(e) => {
              if (e.key === 'Enter' || e.key === ' ') {
                e.preventDefault();
                openLightbox(index);
              }
            }}
            aria-label={`View image ${index + 1}`}
          >
            <img
              src={image.src}
              alt={image.alt || `Gallery image ${index + 1}`}
              className="gallery-image"
              loading="lazy"
            />
          </div>
        ))}
      </div>

      {lightboxOpen && (
        <div
          className="lightbox open"
          onClick={closeLightbox}
          role="dialog"
          aria-modal="true"
          aria-label="Image lightbox"
        >
          <div className="lightbox-content" onClick={(e) => e.stopPropagation()}>
            <button
              className="lightbox-close"
              onClick={closeLightbox}
              aria-label="Close lightbox"
            >
              <FiX />
            </button>

            {galleryImages.length > 1 && (
              <>
                <button
                  className="lightbox-nav prev"
                  onClick={goToPrevious}
                  aria-label="Previous image"
                >
                  <FiChevronLeft />
                </button>
                <button
                  className="lightbox-nav next"
                  onClick={goToNext}
                  aria-label="Next image"
                >
                  <FiChevronRight />
                </button>
              </>
            )}

            <img
              src={galleryImages[currentImageIndex].src}
              alt={galleryImages[currentImageIndex].alt || `Gallery image ${currentImageIndex + 1}`}
              className="lightbox-image"
            />
          </div>
        </div>
      )}
    </>
  );
};

export default Gallery;

