import { FiPhone, FiMail, FiMapPin, FiClock, FiCopy } from 'react-icons/fi';
import { useState } from 'react';
import { getContent, bilingual, uiContent } from '../utils/language';
import '../styles/components.css';

const ContactCard = () => {
  const phone = '98949 209144';
  const email = 'bharathicentre@gmail.com';
  const address = 'Near Bus Stop, Vijayamangalam, Tamil Nadu 638056';
  const hours = '10:00 AM - 7:00 PM (All days)';

  const [copied, setCopied] = useState(null);

  const copyToClipboard = (text, type) => {
    navigator.clipboard.writeText(text).then(() => {
      setCopied(type);
      setTimeout(() => setCopied(null), 2000);
    });
  };

  const contactItems = [
    {
      icon: FiPhone,
      title: getContent(bilingual('Phone', 'தொலைபேசி')),
      content: phone,
      href: `tel:+91${phone.replace(/\s/g, '')}`,
      copy: phone.replace(/\s/g, ''),
      type: 'phone',
    },
    {
      icon: FiMail,
      title: getContent(bilingual('Email', 'மின்னஞ்சல்')),
      content: email,
      href: `mailto:${email}`,
      copy: email,
      type: 'email',
    },
    {
      icon: FiMapPin,
      title: getContent(bilingual('Address', 'முகவரி')),
      content: address,
      copy: address,
      type: 'address',
    },
    {
      icon: FiClock,
      title: getContent(bilingual('Opening Hours', 'திறப்பு நேரம்')),
      content: hours,
      copy: hours,
      type: 'hours',
    },
  ];

  return (
    <div className="contact-card fade-in-on-scroll">
      <h2 style={{ marginBottom: '2rem', textAlign: 'center' }}>
        {getContent(bilingual('Contact Information', 'தொடர்பு தகவல்'))}
      </h2>
      {contactItems.map((item, index) => (
        <div key={index} className="contact-item">
          <div className="contact-icon">
            <item.icon size={24} />
          </div>
          <div className="contact-info">
            <h3>{item.title}</h3>
            {item.href ? (
              <a href={item.href}>
                {item.content}
              </a>
            ) : (
              <p>{item.content}</p>
            )}
          </div>
          {item.copy && (
            <button
              onClick={() => copyToClipboard(item.copy, item.type)}
              aria-label={`Copy ${item.title}`}
              style={{
                background: 'none',
                border: 'none',
                cursor: 'pointer',
                color: 'var(--color-primary)',
                padding: '0.5rem',
              }}
            >
              <FiCopy size={18} />
              {copied === item.type && (
                <span style={{ fontSize: '0.75rem', marginLeft: '0.25rem' }}>
                  {getContent(bilingual('Copied!', 'நகலெடுக்கப்பட்டது!'))}
                </span>
              )}
            </button>
          )}
        </div>
      ))}
    </div>
  );
};

export default ContactCard;

