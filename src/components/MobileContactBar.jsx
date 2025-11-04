import { FiPhone } from 'react-icons/fi';
import { FaWhatsapp } from 'react-icons/fa';
import { getContent, uiContent } from '../utils/language';
import '../styles/components.css';

const MobileContactBar = () => {
  const phone = '98949209144';
  const whatsappUrl = `https://wa.me/91${phone}`;
  const callUrl = `tel:+91${phone}`;

  return (
    <div className="mobile-contact-bar">
      <a
        href={callUrl}
        className="btn btn-primary"
        aria-label="Call us now"
      >
        <FiPhone size={20} />
        {getContent(uiContent.call)}
      </a>
      <a
        href={whatsappUrl}
        className="btn btn-accent"
        target="_blank"
        rel="noopener noreferrer"
        aria-label="Contact us on WhatsApp"
      >
        <FaWhatsapp size={20} />
        {getContent(uiContent.whatsapp)}
      </a>
    </div>
  );
};

export default MobileContactBar;

