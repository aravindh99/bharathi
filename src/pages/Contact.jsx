import { useEffect } from 'react';
import { Helmet } from 'react-helmet-async';
import ContactCard from '../components/ContactCard';
import ContactForm from '../components/ContactForm';
import MobileContactBar from '../components/MobileContactBar';
import { getContent, bilingual } from '../utils/language';
import { initScrollAnimations } from '../utils/animations';
import '../styles/main.css';

const Contact = () => {
  useEffect(() => {
    initScrollAnimations();
  }, []);

  // Google Maps embed URL using Plus Code: 6GR3+XQ Vijayamangalam, Tamil Nadu
  // Using the Plus Code in search query - no API key needed
  // This method works reliably without requiring Google Maps API setup
  const locationQuery = encodeURIComponent('6GR3+XQ Vijayamangalam Tamil Nadu');
  const mapEmbedUrl = `https://www.google.com/maps?q=${locationQuery}&output=embed`;

  return (
    <>
      <Helmet>
        <title>Contact Us — Bharathi Computer Center | Vijayamangalam</title>
        <meta
          name="description"
          content="Contact Bharathi Computer Center in Vijayamangalam. Call 98949 209144 or visit us near bus stop. Open 10 AM - 7 PM all days."
        />
      </Helmet>

      <section className="section" style={{ paddingTop: '6rem' }}>
        <div className="container">
          <h1 className="text-center" style={{ marginBottom: '1rem' }}>
            {getContent(bilingual('Contact Us', 'எங்களைத் தொடர்பு கொள்ளுங்கள்'))}
          </h1>
          <p className="text-center" style={{ marginBottom: '4rem', color: 'var(--text-secondary)' }}>
            {getContent(
              bilingual(
                'Get in touch with us for all your computer and printing needs',
                'உங்கள் அனைத்து கணினி மற்றும் அச்சிடுதல் தேவைகளுக்கும் எங்களைத் தொடர்பு கொள்ளுங்கள்'
              )
            )}
          </p>

          <div className="grid grid-2" style={{ gap: '3rem', marginBottom: '4rem' }}>
            <ContactCard />
            <ContactForm />
          </div>

          {/* Map Section */}
          <div style={{ marginBottom: '4rem' }}>
            <h2 style={{ marginBottom: '2rem', textAlign: 'center' }}>
              {getContent(bilingual('Find Us', 'எங்களைக் கண்டறியவும்'))}
            </h2>
            <div
              style={{
                borderRadius: 'var(--radius-xl)',
                overflow: 'hidden',
                boxShadow: 'var(--shadow-lg)',
                height: '400px',
              }}
            >
              <iframe
                src={mapEmbedUrl}
                width="100%"
                height="100%"
                style={{ border: 0 }}
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                title="Bharathi Computer Center Location"
              />
            </div>
            <p style={{ textAlign: 'center', marginTop: '1rem', color: 'var(--text-secondary)' }}>
              Near Bus Stop, Vijayamangalam, Tamil Nadu 638056
            </p>
          </div>
        </div>
      </section>

      <MobileContactBar />
    </>
  );
};

export default Contact;

