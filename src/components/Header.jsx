import { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { FiMenu, FiX } from 'react-icons/fi';
import { getLanguage, setLanguage, subscribeToLanguage, navContent, getContent } from '../utils/language';
import '../styles/components.css';

const Header = () => {
  const [language, setLang] = useState(getLanguage());
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [headerVisible, setHeaderVisible] = useState(true);
  const location = useLocation();

  // Subscribe to language changes
  useEffect(() => {
    const unsubscribe = subscribeToLanguage((lang) => {
      setLang(lang);
    });
    return unsubscribe;
  }, []);

  // Handle scroll to show/hide header
  useEffect(() => {
    let lastScrollY = window.scrollY;
    
    const handleScroll = () => {
      const currentScrollY = window.scrollY;
      
      // Show header when at top or scrolling up
      if (currentScrollY < 10 || currentScrollY < lastScrollY) {
        setHeaderVisible(true);
      } else {
        // Hide header when scrolling down (mobile only)
        if (window.innerWidth < 768) {
          setHeaderVisible(false);
        }
      }
      
      lastScrollY = currentScrollY;
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Close mobile menu on route change
  useEffect(() => {
    setMobileMenuOpen(false);
  }, [location]);

  // Close mobile menu on escape key
  useEffect(() => {
    const handleEscape = (e) => {
      if (e.key === 'Escape') {
        setMobileMenuOpen(false);
      }
    };
    window.addEventListener('keydown', handleEscape);
    return () => window.removeEventListener('keydown', handleEscape);
  }, []);

  const toggleLanguage = () => {
    const newLang = language === 'en' ? 'ta' : 'en';
    setLanguage(newLang);
  };

  const toggleMobileMenu = () => {
    setMobileMenuOpen(!mobileMenuOpen);
  };

  const isActive = (path) => location.pathname === path;

  return (
    <>
      <header className={`header ${!headerVisible ? 'hidden' : ''}`}>
        <nav className="header-nav container">
          <Link to="/" className="logo" aria-label="Bharathi Computer Center Home">
            <span style={{ fontSize: '1.5rem', fontWeight: 'bold', color: 'var(--color-primary)' }}>
              B
            </span>
            <span style={{ marginLeft: '0.5rem', fontWeight: 'bold' }}>
              Bharathi Computer Center
            </span>
          </Link>

          <div className={`nav-links ${mobileMenuOpen ? 'open' : ''}`}>
            <Link
              to="/"
              className={`nav-link ${isActive('/') ? 'active' : ''}`}
              onClick={() => setMobileMenuOpen(false)}
            >
              {getContent(navContent.home)}
            </Link>
            <Link
              to="/services"
              className={`nav-link ${isActive('/services') ? 'active' : ''}`}
              onClick={() => setMobileMenuOpen(false)}
            >
              {getContent(navContent.services)}
            </Link>
            <Link
              to="/gallery"
              className={`nav-link ${isActive('/gallery') ? 'active' : ''}`}
              onClick={() => setMobileMenuOpen(false)}
            >
              {getContent(navContent.gallery)}
            </Link>
            <Link
              to="/contact"
              className={`nav-link ${isActive('/contact') ? 'active' : ''}`}
              onClick={() => setMobileMenuOpen(false)}
            >
              {getContent(navContent.contact)}
            </Link>

            <button
              className="btn btn-outline btn-sm"
              onClick={toggleLanguage}
              aria-label="Toggle language"
              style={{ marginTop: '1rem' }}
            >
              {language === 'en' ? 'த' : 'EN'}
            </button>
          </div>

          <button
            className="mobile-menu-toggle"
            onClick={toggleMobileMenu}
            aria-label="Toggle menu"
            aria-expanded={mobileMenuOpen}
          >
            {mobileMenuOpen ? <FiX size={24} /> : <FiMenu size={24} />}
          </button>
        </nav>
      </header>

      {mobileMenuOpen && (
        <div
          className="nav-overlay open"
          onClick={() => setMobileMenuOpen(false)}
          aria-hidden="true"
        />
      )}
    </>
  );
};

export default Header;

