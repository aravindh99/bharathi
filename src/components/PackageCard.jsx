import { Link } from 'react-router-dom';
import { getContent, uiContent, bilingual } from '../utils/language';
import '../styles/components.css';

const PackageCard = ({ name, nameTamil, price, features, featuresTamil, featured = false, link = '/contact' }) => {
  const nameContent = nameTamil ? bilingual(name, nameTamil) : name;

  return (
    <div className={`card package-card ${featured ? 'featured' : ''} fade-in-on-scroll`}>
      {featured && (
        <span className="package-badge">
          {getContent(bilingual('Popular', 'பிரபலமான'))}
        </span>
      )}
      <div className="card-header">
        <h3 className="card-title tamil">
          {typeof nameContent === 'object' ? getContent(nameContent) : nameContent}
        </h3>
      </div>
      <div className="package-price">
        ₹{price}
      </div>
      <ul className="package-features">
        {(features || featuresTamil)?.map((feature, index) => {
          const featureContent = featuresTamil?.[index]
            ? bilingual(feature, featuresTamil[index])
            : feature;
          return (
            <li key={index} className="package-feature">
              {typeof featureContent === 'object' ? getContent(featureContent) : featureContent}
            </li>
          );
        })}
      </ul>
      <Link to={link} className="btn btn-primary" style={{ width: '100%', marginTop: 'auto' }}>
        {getContent(uiContent.learnMore)}
      </Link>
    </div>
  );
};

export default PackageCard;

