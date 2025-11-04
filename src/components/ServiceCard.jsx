import { getContent } from '../utils/language';
import '../styles/components.css';

const ServiceCard = ({ icon: Icon, title, titleTamil, description, descriptionTamil }) => {
  const titleContent = titleTamil ? { en: title, ta: titleTamil } : title;
  const descContent = descriptionTamil ? { en: description, ta: descriptionTamil } : description;

  return (
    <div className="card service-card fade-in-on-scroll">
      {Icon && (
        <div className="service-card-icon">
          <Icon size={32} />
        </div>
      )}
      <h3 className={`service-card-title ${titleTamil ? 'tamil' : ''}`}>
        {typeof titleContent === 'object' ? getContent(titleContent) : titleContent}
      </h3>
      {descContent && (
        <p className="service-card-description">
          {typeof descContent === 'object' ? getContent(descContent) : descContent}
        </p>
      )}
    </div>
  );
};

export default ServiceCard;

