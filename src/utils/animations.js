/**
 * Animation Utilities
 * Handles scroll animations and intersection observer
 */

/**
 * Initialize scroll animations using Intersection Observer
 * @param {string} selector - CSS selector for elements to animate
 * @param {Object} options - Intersection Observer options
 */
export const initScrollAnimations = (selector = '.fade-in-on-scroll', options = {}) => {
  const defaultOptions = {
    threshold: 0.1,
    rootMargin: '0px 0px -50px 0px',
  };

  const observerOptions = { ...defaultOptions, ...options };

  const observer = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        entry.target.classList.add('visible');
        // Optionally stop observing after animation
        // observer.unobserve(entry.target);
      }
    });
  }, observerOptions);

  // Observe all elements with the selector
  const elements = document.querySelectorAll(selector);
  elements.forEach((el) => observer.observe(el));

  return observer;
};

/**
 * Initialize scroll animations for React components
 * @param {HTMLElement} ref - React ref to the element
 * @param {Object} options - Intersection Observer options
 */
export const useScrollAnimation = (ref, options = {}) => {
  if (typeof window === 'undefined' || !ref?.current) return;

  const defaultOptions = {
    threshold: 0.1,
    rootMargin: '0px 0px -50px 0px',
  };

  const observerOptions = { ...defaultOptions, ...options };

  const observer = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        entry.target.classList.add('visible');
      }
    });
  }, observerOptions);

  observer.observe(ref.current);

  return () => {
    if (ref.current) {
      observer.unobserve(ref.current);
    }
  };
};

/**
 * Smooth scroll to element
 * @param {string|HTMLElement} target - Element ID or element
 * @param {Object} options - Scroll options
 */
export const scrollTo = (target, options = {}) => {
  const defaultOptions = {
    behavior: 'smooth',
    block: 'start',
  };

  const scrollOptions = { ...defaultOptions, ...options };

  let element;
  if (typeof target === 'string') {
    element = document.querySelector(target);
  } else {
    element = target;
  }

  if (element) {
    element.scrollIntoView(scrollOptions);
  }
};

/**
 * Check if user prefers reduced motion
 */
export const prefersReducedMotion = () => {
  if (typeof window === 'undefined') return false;
  return window.matchMedia('(prefers-reduced-motion: reduce)').matches;
};

/**
 * Throttle function for scroll events
 */
export const throttle = (func, wait) => {
  let timeout;
  return function executedFunction(...args) {
    const later = () => {
      clearTimeout(timeout);
      func(...args);
    };
    clearTimeout(timeout);
    timeout = setTimeout(later, wait);
  };
};

/**
 * Debounce function
 */
export const debounce = (func, wait) => {
  let timeout;
  return function executedFunction(...args) {
    const later = () => {
      clearTimeout(timeout);
      func(...args);
    };
    clearTimeout(timeout);
    timeout = setTimeout(later, wait);
  };
};

