import { useEffect } from 'react';
import { Helmet } from 'react-helmet-async';
import { Link } from 'react-router-dom';
import {
  FiPrinter,
  FiMonitor,
  FiScissors,
  FiFileText,
  FiGlobe,
  FiLayers,
  FiBookOpen,
  FiShoppingBag,
} from 'react-icons/fi';
import Hero from '../components/Hero';
import ServiceCard from '../components/ServiceCard';
import PackageCard from '../components/PackageCard';
import TestimonialCarousel from '../components/TestimonialCarousel';
import FAQAccordion from '../components/FAQAccordion';
import { getContent, bilingual, uiContent } from '../utils/language';
import { initScrollAnimations } from '../utils/animations';
import '../styles/main.css';

const Home = () => {
  useEffect(() => {
    // Initialize scroll animations
    initScrollAnimations();
  }, []);

  // Key services for preview
  const keyServices = [
    {
      icon: FiPrinter,
      title: 'Xerox',
      titleTamil: 'ஜெராக்ஸ்',
      description: 'High-quality photocopying services',
      descriptionTamil: 'உயர்தர போட்டோகாபி சேவைகள்',
    },
    {
      icon: FiPrinter,
      title: 'Color Printing',
      titleTamil: 'கலர் பிரிண்ட்',
      description: 'Color and laser printouts',
      descriptionTamil: 'கலர் மற்றும் லேசர் அச்சிடுதல்',
    },
    {
      icon: FiMonitor,
      title: 'Scanning',
      titleTamil: 'ஸ்கேனிங்',
      description: 'Color scanning services',
      descriptionTamil: 'கலர் ஸ்கேனிங் சேவைகள்',
    },
    {
      icon: FiLayers,
      title: 'Lamination',
      titleTamil: 'லமினேசன்',
      description: 'Document lamination',
      descriptionTamil: 'ஆவண லமினேசன்',
    },
    {
      icon: FiScissors,
      title: 'Spiral Binding',
      titleTamil: 'பைரல் பைண்டிங்',
      description: 'Document binding services',
      descriptionTamil: 'ஆவண பைண்டிங் சேவைகள்',
    },
    {
      icon: FiBookOpen,
      title: 'School Projects',
      titleTamil: 'ஸ்கூல் புராஜக்ட்',
      description: 'School project works',
      descriptionTamil: 'பள்ளி திட்ட பணிகள்',
    },
    {
      icon: FiGlobe,
      title: 'Internet & Browsing',
      titleTamil: 'இணையம் & பிரவுசிங்',
      description: 'Browsing and voice chat',
      descriptionTamil: 'பிரவுசிங் மற்றும் வாய்ஸ் சாட்',
    },
    {
      icon: FiShoppingBag,
      title: 'System Sales & Service',
      titleTamil: 'சிஸ்டம் சேல்ஸ் & சர்வீஸ்',
      description: 'Computer sales and service',
      descriptionTamil: 'கணினி விற்பனை மற்றும் சேவை',
    },
  ];

  // Popular packages
  const packages = [
    {
      name: 'Student Package',
      nameTamil: 'மாணவர் தொகுப்பு',
      price: '299',
      features: [
        'Xerox (100 pages)',
        'Color Printing (10 pages)',
        'Scanning (20 pages)',
        'Lamination (5 pages)',
        'School Project Assistance',
      ],
      featuresTamil: [
        'ஜெராக்ஸ் (100 பக்கங்கள்)',
        'கலர் பிரிண்ட் (10 பக்கங்கள்)',
        'ஸ்கேனிங் (20 பக்கங்கள்)',
        'லமினேசன் (5 பக்கங்கள்)',
        'பள்ளி திட்ட உதவி',
      ],
      featured: true,
    },
    {
      name: 'Business Package',
      nameTamil: 'வணிக தொகுப்பு',
      price: '599',
      features: [
        'Xerox (500 pages)',
        'Color Printing (50 pages)',
        'Scanning (100 pages)',
        'Lamination (20 pages)',
        'Spiral Binding (5 sets)',
      ],
      featuresTamil: [
        'ஜெராக்ஸ் (500 பக்கங்கள்)',
        'கலர் பிரிண்ட் (50 பக்கங்கள்)',
        'ஸ்கேனிங் (100 பக்கங்கள்)',
        'லமினேசன் (20 பக்கங்கள்)',
        'பைரல் பைண்டிங் (5 செட்)',
      ],
      featured: false,
    },
    {
      name: 'Premium Package',
      nameTamil: 'பிரீமியம் தொகுப்பு',
      price: '999',
      features: [
        'All services included',
        'Unlimited Xerox (1 month)',
        'Priority support',
        'Discount on additional services',
        'Free consultation',
      ],
      featuresTamil: [
        'அனைத்து சேவைகளும் உள்ளடக்கியது',
        'வரம்பற்ற ஜெராக்ஸ் (1 மாதம்)',
        'முன்னுரிமை ஆதரவு',
        'கூடுதல் சேவைகளில் தள்ளுபடி',
        'இலவச ஆலோசனை',
      ],
      featured: false,
    },
  ];

  // Testimonials
  const testimonials = [
    {
      text: 'Excellent service and fast printing. Very helpful staff!',
      textTamil: 'சிறந்த சேவை மற்றும் வேகமான அச்சிடுதல். மிகவும் உதவியாக இருக்கும் ஊழியர்கள்!',
      author: 'Ramesh Kumar',
      authorTamil: 'ரமேஷ் குமார்',
    },
    {
      text: 'Best computer center in Vijayamangalam. Affordable prices and quality work.',
      textTamil: 'விஜயமங்கலத்தில் சிறந்த கணினி மையம். மலிவான விலைகள் மற்றும் தரமான வேலை.',
      author: 'Priya Devi',
      authorTamil: 'பிரியா தேவி',
    },
    {
      text: 'They helped me with my school project. Very professional and on time delivery.',
      textTamil: 'அவர்கள் எனது பள்ளி திட்டத்தில் எனக்கு உதவினார்கள். மிகவும் தொழில்முறை மற்றும் சரியான நேரத்தில் வழங்கல்.',
      author: 'Arjun S',
      authorTamil: 'அர்ஜுன் எஸ்',
    },
  ];

  // FAQ items
  const faqItems = [
    {
      question: 'What are your opening hours?',
      questionTamil: 'உங்கள் திறப்பு நேரம் என்ன?',
      answer: 'We are open from 10:00 AM to 7:00 PM, all days of the week.',
      answerTamil: 'நாங்கள் காலை 10:00 மணி முதல் மாலை 7:00 மணி வரை, வாரத்தின் அனைத்து நாட்களிலும் திறந்திருக்கிறோம்.',
    },
    {
      question: 'Do you offer discounts for students?',
      questionTamil: 'மாணவர்களுக்கு தள்ளுபடி வழங்குகிறீர்களா?',
      answer: 'Yes, we offer special fee concessions for school and college students. Please bring your student ID for verification.',
      answerTamil: 'ஆம், பள்ளி மற்றும் கல்லூரி மாணவர்களுக்கு சிறப்பு கட்டண சலுகைகளை வழங்குகிறோம். சரிபார்ப்புக்கு உங்கள் மாணவர் அடையாள அட்டையைக் கொண்டு வாருங்கள்.',
    },
    {
      question: 'Can I make online applications here?',
      questionTamil: 'நான் இங்கே ஆன்லைன் விண்ணப்பங்களை செய்யலாமா?',
      answer: 'Yes, we help with various online applications including PAN Card, TNPSC Group Exams, Employment Registration, and government services.',
      answerTamil: 'ஆம், பான் கார்டு, TNPSC குழு தேர்வுகள், வேலைவாய்ப்பு பதிவு மற்றும் அரசு சேவைகள் உட்பட பல்வேறு ஆன்லைன் விண்ணப்பங்களில் நாங்கள் உதவுகிறோம்.',
    },
    {
      question: 'Do you provide UPS facility?',
      questionTamil: 'நீங்கள் UPS வசதியை வழங்குகிறீர்களா?',
      answer: 'Yes, we have UPS facility available to ensure uninterrupted service even during power cuts.',
      answerTamil: 'ஆம், மின்சார வெட்டு காலங்களிலும் குறுக்கிடாத சேவையை உறுதி செய்ய UPS வசதி எங்களிடம் உள்ளது.',
    },
    {
      question: 'What payment methods do you accept?',
      questionTamil: 'நீங்கள் என்ன பணம் செலுத்தும் முறைகளை ஏற்கிறீர்கள்?',
      answer: 'We accept cash, UPI, and card payments for your convenience.',
      answerTamil: 'உங்கள் வசதிக்காக பணம், UPI மற்றும் கார்டு செலுத்துதல்களை நாங்கள் ஏற்றுக்கொள்கிறோம்.',
    },
    {
      question: 'Can I get my documents typed in Tamil and English?',
      questionTamil: 'எனது ஆவணங்களை தமிழ் மற்றும் ஆங்கிலத்தில் தட்டச்சு செய்யலாமா?',
      answer: 'Yes, we provide typing services in both Tamil and English languages.',
      answerTamil: 'ஆம், தமிழ் மற்றும் ஆங்கிலம் ஆகிய இரண்டு மொழிகளிலும் தட்டச்சு சேவைகளை வழங்குகிறோம்.',
    },
  ];

  return (
    <>
      <Helmet>
        <title>Bharathi Computer Center — Vijayamangalam | Xerox, Printing & Internet Services</title>
        <meta
          name="description"
          content="Bharathi Computer Center offers Xerox, Color Printing, Internet Browsing, Online Applications, Computer Sales & Service in Vijayamangalam, Tamil Nadu. Open 10 AM - 7 PM all days."
        />
        <meta property="og:title" content="Bharathi Computer Center — Vijayamangalam" />
        <meta
          property="og:description"
          content="Your one-stop solution for all computer and printing services in Vijayamangalam"
        />
        <meta property="og:type" content="website" />
      </Helmet>

      <Hero />

      {/* Services Preview Section */}
      <section className="section">
        <div className="container">
          <h2 className="text-center" style={{ marginBottom: '3rem' }}>
            {getContent(bilingual('Our Services', 'எங்கள் சேவைகள்'))}
          </h2>
          <div className="grid grid-4">
            {keyServices.map((service, index) => (
              <ServiceCard key={index} {...service} />
            ))}
          </div>
          <div className="text-center" style={{ marginTop: '3rem' }}>
            <Link to="/services" className="btn btn-outline btn-lg">
              {getContent(uiContent.viewAll)}
            </Link>
          </div>
        </div>
      </section>

      {/* Popular Packages Section */}
      <section className="section" style={{ background: 'var(--bg-secondary)' }}>
        <div className="container">
          <h2 className="text-center" style={{ marginBottom: '3rem' }}>
            {getContent(bilingual('Popular Packages', 'பிரபலமான தொகுப்புகள்'))}
          </h2>
          <div className="grid grid-3">
            {packages.map((pkg, index) => (
              <PackageCard key={index} {...pkg} />
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <TestimonialCarousel testimonials={testimonials} />

      {/* FAQ Section */}
      <FAQAccordion items={faqItems} />
    </>
  );
};

export default Home;

