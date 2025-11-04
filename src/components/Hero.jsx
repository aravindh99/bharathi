import { useState, useEffect } from 'react';
import { FiPhone } from 'react-icons/fi';
import { FaWhatsapp } from 'react-icons/fa';
import { getContent, uiContent, bilingual, getLanguage, subscribeToLanguage } from '../utils/language';
import '../styles/components.css';

const Hero = () => {
  const [language, setLanguage] = useState(getLanguage());
  const phone = '98949209144';
  const whatsappUrl = `https://wa.me/91${phone}`;
  const callUrl = `tel:+91${phone}`;

  // Subscribe to language changes
  useEffect(() => {
    const unsubscribe = subscribeToLanguage((lang) => {
      setLanguage(lang);
    });
    return unsubscribe;
  }, []);

  const heroContent = {
    title: bilingual(
      'Bharathi Computer Center',
      'பாரதி கணினி மையம்'
    ),
    subtitle: bilingual(
      'Your one-stop solution for Xerox, Printing, Internet, and Computer Services in Vijayamangalam',
      'விஜயமங்கலத்தில் ஜெராக்ஸ், அச்சிடுதல், இணையம் மற்றும் கணினி சேவைகளுக்கான உங்கள் ஒரே தீர்வு'
    ),
  };

  return (
    <section className="hero">
      <div className="container">
        <div className="hero-content">
          <h1 className={`hero-title fade-in-on-scroll ${language === 'ta' ? 'tamil' : ''}`}>
            {getContent(heroContent.title)}
          </h1>
          <p className="hero-subtitle fade-in-on-scroll">
            {getContent(heroContent.subtitle)}
          </p>
          <div className="hero-cta fade-in-on-scroll">
            <a
              href={callUrl}
              className="btn btn-primary btn-lg"
              aria-label="Call us now"
            >
              <FiPhone size={20} />
              {getContent(uiContent.call)}
            </a>
            <a
              href={whatsappUrl}
              className="btn btn-accent btn-lg"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Contact us on WhatsApp"
            >
              <FaWhatsapp size={20} />
              {getContent(uiContent.whatsapp)}
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;

