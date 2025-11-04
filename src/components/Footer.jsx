import { Helmet } from 'react-helmet-async';
import { Link } from 'react-router-dom';
import { FiMail, FiPhone, FiMapPin, FiClock } from 'react-icons/fi';
import { getContent, navContent } from '../utils/language';
import '../styles/components.css';

const Footer = () => {
  const phone = '98949 209144';
  const email = 'bharathicentre@gmail.com';
  const address = 'Near Bus Stop, Vijayamangalam, Tamil Nadu 638056';
  const hours = '10:00 AM - 7:00 PM (All days)';

  // JSON-LD structured data
  const jsonLd = {
    '@context': 'https://schema.org',
    '@type': 'LocalBusiness',
    name: 'Bharathi Computer Center',
    image: 'https://bharathicomputercenter.com/logo.png',
    '@id': 'https://bharathicomputercenter.com',
    url: 'https://bharathicomputercenter.com',
    telephone: phone,
    email: email,
    address: {
      '@type': 'PostalAddress',
      streetAddress: 'Near Bus Stop',
      addressLocality: 'Vijayamangalam',
      addressRegion: 'Tamil Nadu',
      postalCode: '638056',
      addressCountry: 'IN',
    },
    geo: {
      '@type': 'GeoCoordinates',
      latitude: '11.2345',
      longitude: '77.8901',
    },
    openingHoursSpecification: {
      '@type': 'OpeningHoursSpecification',
      dayOfWeek: [
        'Monday',
        'Tuesday',
        'Wednesday',
        'Thursday',
        'Friday',
        'Saturday',
        'Sunday',
      ],
      opens: '10:00',
      closes: '19:00',
    },
    priceRange: '$$',
    servesCuisine: false,
    areaServed: {
      '@type': 'City',
      name: 'Vijayamangalam',
    },
    hasOfferCatalog: {
      '@type': 'OfferCatalog',
      name: 'Computer Services',
      itemListElement: [
        {
          '@type': 'Offer',
          itemOffered: {
            '@type': 'Service',
            name: 'Xerox',
          },
        },
        {
          '@type': 'Offer',
          itemOffered: {
            '@type': 'Service',
            name: 'Color Printing',
          },
        },
        {
          '@type': 'Offer',
          itemOffered: {
            '@type': 'Service',
            name: 'Internet Browsing',
          },
        },
        {
          '@type': 'Offer',
          itemOffered: {
            '@type': 'Service',
            name: 'Online Applications',
          },
        },
        {
          '@type': 'Offer',
          itemOffered: {
            '@type': 'Service',
            name: 'Computer Sales & Service',
          },
        },
      ],
    },
  };

  return (
    <>
      <Helmet>
        <script type="application/ld+json">{JSON.stringify(jsonLd)}</script>
      </Helmet>

      <footer className="footer">
        <div className="container">
          <div className="footer-content">
            <div className="footer-section">
              <h3>Bharathi Computer Center</h3>
              <p className="tamil">
                அனைத்து தேவைகளும் ஒரே இடத்தில்
              </p>
              <p>All needs in one place.</p>
            </div>

            <div className="footer-section">
              <h3>Quick Links</h3>
              <Link to="/">{getContent(navContent.home)}</Link>
              <Link to="/services">{getContent(navContent.services)}</Link>
              <Link to="/gallery">{getContent(navContent.gallery)}</Link>
              <Link to="/contact">{getContent(navContent.contact)}</Link>
            </div>

            <div className="footer-section">
              <h3>Contact</h3>
              <p>
                <FiPhone style={{ marginRight: '0.5rem', display: 'inline' }} />
                <a href={`tel:${phone}`}>{phone}</a>
              </p>
              <p>
                <FiMail style={{ marginRight: '0.5rem', display: 'inline' }} />
                <a href={`mailto:${email}`}>{email}</a>
              </p>
              <p>
                <FiMapPin style={{ marginRight: '0.5rem', display: 'inline' }} />
                {address}
              </p>
              <p>
                <FiClock style={{ marginRight: '0.5rem', display: 'inline' }} />
                {hours}
              </p>
            </div>

            <div className="footer-section">
              <h3>Services</h3>
              <p>Xerox & Color Printing</p>
              <p>Internet & Browsing</p>
              <p>Online Applications</p>
              <p>Computer Sales & Service</p>
              <p>School Project Works</p>
              <p>Lamination & Binding</p>
            </div>
          </div>

          <div className="footer-bottom">
            <p>&copy; {new Date().getFullYear()} Bharathi Computer Center. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </>
  );
};

export default Footer;

