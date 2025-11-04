import { useState, useEffect, useRef } from 'react';
import { FiChevronLeft, FiChevronRight } from 'react-icons/fi';
import { getContent, bilingual } from '../utils/language';
import '../styles/components.css';

const TestimonialCarousel = ({ testimonials }) => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isAutoPlaying, setIsAutoPlaying] = useState(true);
  const intervalRef = useRef(null);

  // Auto-rotate testimonials
  useEffect(() => {
    if (isAutoPlaying && testimonials.length > 1) {
      intervalRef.current = setInterval(() => {
        setCurrentIndex((prev) => (prev + 1) % testimonials.length);
      }, 5000);
    }

    return () => {
      if (intervalRef.current) {
        clearInterval(intervalRef.current);
      }
    };
  }, [isAutoPlaying, testimonials.length]);

  const goToNext = () => {
    setCurrentIndex((prev) => (prev + 1) % testimonials.length);
    setIsAutoPlaying(false);
  };

  const goToPrevious = () => {
    setCurrentIndex((prev) => (prev - 1 + testimonials.length) % testimonials.length);
    setIsAutoPlaying(false);
  };

  const handleKeyDown = (e) => {
    if (e.key === 'ArrowLeft') {
      goToPrevious();
    } else if (e.key === 'ArrowRight') {
      goToNext();
    }
  };

  if (!testimonials || testimonials.length === 0) return null;

  const currentTestimonial = testimonials[currentIndex];

  return (
    <section className="section">
      <div className="container">
        <div className="testimonial-carousel" onKeyDown={handleKeyDown} tabIndex={0}>
          <div
            className="testimonial-track"
            style={{ transform: `translateX(-${currentIndex * 100}%)` }}
          >
            {testimonials.map((testimonial, index) => {
              const textContent = testimonial.textTamil
                ? bilingual(testimonial.text, testimonial.textTamil)
                : testimonial.text;
              const authorContent = testimonial.authorTamil
                ? bilingual(testimonial.author, testimonial.authorTamil)
                : testimonial.author;

              return (
                <div key={index} className="testimonial-item">
                  <div className="testimonial-content">
                    <p className="testimonial-text">
                      "{typeof textContent === 'object' ? getContent(textContent) : textContent}"
                    </p>
                    <p className="testimonial-author">
                      — {typeof authorContent === 'object' ? getContent(authorContent) : authorContent}
                    </p>
                  </div>
                </div>
              );
            })}
          </div>

          {testimonials.length > 1 && (
            <>
              <button
                className="lightbox-nav prev"
                onClick={goToPrevious}
                aria-label="Previous testimonial"
              >
                <FiChevronLeft />
              </button>
              <button
                className="lightbox-nav next"
                onClick={goToNext}
                aria-label="Next testimonial"
              >
                <FiChevronRight />
              </button>

              <div style={{ display: 'flex', gap: '0.5rem', justifyContent: 'center', marginTop: '2rem' }}>
                {testimonials.map((_, index) => (
                  <button
                    key={index}
                    onClick={() => {
                      setCurrentIndex(index);
                      setIsAutoPlaying(false);
                    }}
                    aria-label={`Go to testimonial ${index + 1}`}
                    style={{
                      width: '12px',
                      height: '12px',
                      borderRadius: '50%',
                      border: 'none',
                      background: index === currentIndex ? 'var(--color-primary)' : 'var(--color-neutral-300)',
                      cursor: 'pointer',
                      transition: 'background var(--transition-fast)',
                    }}
                  />
                ))}
              </div>
            </>
          )}
        </div>
      </div>
    </section>
  );
};

export default TestimonialCarousel;

