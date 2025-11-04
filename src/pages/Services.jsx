import { useEffect } from 'react';
import { Helmet } from 'react-helmet-async';
import {
  FiPrinter,
  FiMonitor,
  FiScissors,
  FiFileText,
  FiGlobe,
  FiLayers,
  FiBookOpen,
  FiShoppingBag,
  FiType,
  FiUserCheck,
  FiCreditCard,
  FiFile,
  FiShield,
} from 'react-icons/fi';
import ServiceCard from '../components/ServiceCard';
import { getContent, bilingual } from '../utils/language';
import { initScrollAnimations } from '../utils/animations';
import '../styles/main.css';

const Services = () => {
  useEffect(() => {
    initScrollAnimations();
  }, []);

  // All services organized by category
  const serviceCategories = [
    {
      title: bilingual('Printing Services', 'அச்சிடுதல் சேவைகள்'),
      services: [
        {
          icon: FiPrinter,
          title: 'Xerox',
          titleTamil: 'ஜெராக்ஸ்',
          description: 'High-quality black and white photocopying',
          descriptionTamil: 'உயர்தர கருப்பு மற்றும் வெள்ளை போட்டோகாபி',
        },
        {
          icon: FiPrinter,
          title: 'Color Xerox',
          titleTamil: 'கலர் ஜெராக்ஸ்',
          description: 'Color photocopying services',
          descriptionTamil: 'கலர் போட்டோகாபி சேவைகள்',
        },
        {
          icon: FiPrinter,
          title: 'Color Printout',
          titleTamil: 'கலர் பிரிண்ட்',
          description: 'Color printing from digital files',
          descriptionTamil: 'டிஜிட்டல் கோப்புகளிலிருந்து கலர் அச்சிடுதல்',
        },
        {
          icon: FiPrinter,
          title: 'Laser Printout',
          titleTamil: 'லேசர் பிரிண்ட்',
          description: 'High-quality laser printing',
          descriptionTamil: 'உயர்தர லேசர் அச்சிடுதல்',
        },
      ],
    },
    {
      title: bilingual('Digital Services', 'டிஜிட்டல் சேவைகள்'),
      services: [
        {
          icon: FiMonitor,
          title: 'Scanning (Color)',
          titleTamil: 'ஸ்கேனிங் (கலர்)',
          description: 'Color document scanning services',
          descriptionTamil: 'கலர் ஆவண ஸ்கேனிங் சேவைகள்',
        },
        {
          icon: FiLayers,
          title: 'Lamination',
          titleTamil: 'லமினேசன்',
          description: 'Document lamination for protection',
          descriptionTamil: 'பாதுகாப்புக்கான ஆவண லமினேசன்',
        },
        {
          icon: FiScissors,
          title: 'Spiral Binding',
          titleTamil: 'பைரல் பைண்டிங்',
          description: 'Professional document binding',
          descriptionTamil: 'தொழில்முறை ஆவண பைண்டிங்',
        },
      ],
    },
    {
      title: bilingual('Project Services', 'திட்ட சேவைகள்'),
      services: [
        {
          icon: FiBookOpen,
          title: 'School Project Works',
          titleTamil: 'ஸ்கூல் புராஜக்ட்',
          description: 'Complete school project assistance',
          descriptionTamil: 'முழுமையான பள்ளி திட்ட உதவி',
        },
      ],
    },
    {
      title: bilingual('Internet Services', 'இணையம் சேவைகள்'),
      services: [
        {
          icon: FiGlobe,
          title: 'Browsing & Voice Chat',
          titleTamil: 'பிரவுசிங் & வாய்ஸ் சாட்',
          description: 'Internet browsing and voice chat facilities',
          descriptionTamil: 'இணையம் பிரவுசிங் மற்றும் வாய்ஸ் சாட் வசதிகள்',
        },
      ],
    },
    {
      title: bilingual('Hardware Services', 'வன்பொருள் சேவைகள்'),
      services: [
        {
          icon: FiShoppingBag,
          title: 'System Sales & Service',
          titleTamil: 'சிஸ்டம் சேல்ஸ் & சர்வீஸ்',
          description: 'Computer sales and repair services',
          descriptionTamil: 'கணினி விற்பனை மற்றும் பழுதுபார்க்கும் சேவைகள்',
        },
      ],
    },
    {
      title: bilingual('Online Application Services', 'ஆன்லைன் விண்ணப்ப சேவைகள்'),
      services: [
        {
          icon: FiType,
          title: 'Typing in Tamil & English',
          titleTamil: 'தமிழ் & ஆங்கிலத்தில் டைப்பிங்',
          description: 'Professional typing services in both languages',
          descriptionTamil: 'இரண்டு மொழிகளிலும் தொழில்முறை தட்டச்சு சேவைகள்',
        },
        {
          icon: FiUserCheck,
          title: 'Employment Registration',
          titleTamil: 'எம்ப்ளாய்மென்ட் பதிவு',
          description: 'Help with employment registration',
          descriptionTamil: 'வேலைவாய்ப்பு பதிவில் உதவி',
        },
        {
          icon: FiCreditCard,
          title: 'PAN Card Applications',
          titleTamil: 'பான் கார்டு விண்ணப்பங்கள்',
          description: 'Online PAN card application assistance',
          descriptionTamil: 'ஆன்லைன் பான் கார்டு விண்ணப்ப உதவி',
        },
        {
          icon: FiFile,
          title: 'TNPSC Group Exams',
          titleTamil: 'TNPSC குழு தேர்வுகள்',
          description: 'Online application guidance for TNPSC exams',
          descriptionTamil: 'TNPSC தேர்வுகளுக்கான ஆன்லைன் விண்ணப்ப வழிகாட்டுதல்',
        },
        {
          icon: FiShield,
          title: 'Government & Other Works',
          titleTamil: 'அரசு மற்றும் இதர பணிகள்',
          description: 'Online registration for various government services',
          descriptionTamil: 'பல்வேறு அரசு சேவைகளுக்கான ஆன்லைன் பதிவு',
        },
      ],
    },
  ];

  return (
    <>
      <Helmet>
        <title>Services — Bharathi Computer Center | All Computer & Printing Services</title>
        <meta
          name="description"
          content="Complete list of services offered by Bharathi Computer Center: Xerox, Printing, Scanning, Lamination, Internet, Online Applications, and more in Vijayamangalam."
        />
      </Helmet>

      <section className="section" style={{ paddingTop: '6rem' }}>
        <div className="container">
          <h1 className="text-center" style={{ marginBottom: '1rem' }}>
            {getContent(bilingual('Our Services', 'எங்கள் சேவைகள்'))}
          </h1>
          <p className="text-center" style={{ marginBottom: '4rem', color: 'var(--text-secondary)' }}>
            {getContent(
              bilingual(
                'All your computer and printing needs in one place',
                'உங்கள் அனைத்து கணினி மற்றும் அச்சிடுதல் தேவைகளும் ஒரே இடத்தில்'
              )
            )}
          </p>

          {serviceCategories.map((category, categoryIndex) => (
            <div key={categoryIndex} style={{ marginBottom: '4rem' }}>
              <h2
                className="fade-in-on-scroll"
                style={{
                  marginBottom: '2rem',
                  color: 'var(--color-primary)',
                  borderBottom: '2px solid var(--color-primary-light)',
                  paddingBottom: '0.5rem',
                }}
              >
                {getContent(category.title)}
              </h2>
              <div className="grid grid-3">
                {category.services.map((service, serviceIndex) => (
                  <ServiceCard key={serviceIndex} {...service} />
                ))}
              </div>
            </div>
          ))}
        </div>
      </section>
    </>
  );
};

export default Services;

