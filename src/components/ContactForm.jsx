import { useState } from 'react';
import emailjs from '@emailjs/browser';
import { getContent, bilingual, uiContent } from '../utils/language';
import '../styles/components.css';

const ContactForm = () => {
  // EmailJS Configuration
  const EMAILJS_SERVICE_ID = 'service_0nb0p2k';
  const EMAILJS_TEMPLATE_ID = 'template_ocwi88a';
  const EMAILJS_PUBLIC_KEY = 'gngf9rTyTecv2Mgnf';

  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    message: '',
  });
  const [errors, setErrors] = useState({});
  const [submitted, setSubmitted] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);

  const formLabels = {
    name: bilingual('Name', 'பெயர்'),
    email: bilingual('Email', 'மின்னஞ்சல்'),
    phone: bilingual('Phone', 'தொலைபேசி'),
    message: bilingual('Message', 'செய்தி'),
    submit: bilingual('Send Message', 'செய்தியை அனுப்பவும்'),
    success: bilingual('Thank you! We will contact you soon.', 'நன்றி! விரைவில் உங்களைத் தொடர்பு கொள்வோம்.'),
  };

  const validate = () => {
    const newErrors = {};

    if (!formData.name.trim()) {
      newErrors.name = getContent(bilingual('Name is required', 'பெயர் தேவையானது'));
    }

    if (!formData.email.trim()) {
      newErrors.email = getContent(bilingual('Email is required', 'மின்னஞ்சல் தேவையானது'));
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) {
      newErrors.email = getContent(bilingual('Invalid email format', 'தவறான மின்னஞ்சல் வடிவம்'));
    }

    if (!formData.phone.trim()) {
      newErrors.phone = getContent(bilingual('Phone is required', 'தொலைபேசி தேவையானது'));
    } else if (!/^[0-9]{10}$/.test(formData.phone.replace(/\D/g, ''))) {
      newErrors.phone = getContent(bilingual('Invalid phone number', 'தவறான தொலைபேசி எண்'));
    }

    if (!formData.message.trim()) {
      newErrors.message = getContent(bilingual('Message is required', 'செய்தி தேவையானது'));
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
    // Clear error when user starts typing
    if (errors[name]) {
      setErrors((prev) => ({
        ...prev,
        [name]: '',
      }));
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    
    if (!validate()) {
      return;
    }

    setIsSubmitting(true);

    try {
      // Send email using EmailJS
      await emailjs.send(
        EMAILJS_SERVICE_ID,
        EMAILJS_TEMPLATE_ID,
        {
          from_name: formData.name,
          from_email: formData.email,
          phone: formData.phone,
          message: formData.message,
          to_email: 'bharathicentre@gmail.com',
        },
        EMAILJS_PUBLIC_KEY
      );

      setSubmitted(true);
      setFormData({ name: '', email: '', phone: '', message: '' });
      
      // Reset success message after 5 seconds
      setTimeout(() => setSubmitted(false), 5000);
    } catch (error) {
      console.error('Error sending email:', error);
      setErrors({ submit: getContent(bilingual('Failed to send message. Please try again or call us directly.', 'செய்தியை அனுப்ப முடியவில்லை. தயவுசெய்து மீண்டும் முயற்சிக்கவும் அல்லது நேரடியாக நமக்கு அழைக்கவும்.')) });
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <form className="contact-form fade-in-on-scroll" onSubmit={handleSubmit} noValidate>
      <h2 style={{ marginBottom: '2rem', textAlign: 'center' }}>
        {getContent(bilingual('Send us a Message', 'எங்களுக்கு ஒரு செய்தியை அனுப்பவும்'))}
      </h2>

      {submitted && (
        <div
          style={{
            padding: '1rem',
            background: 'var(--color-primary-light)',
            color: 'var(--text-inverse)',
            borderRadius: 'var(--radius-lg)',
            marginBottom: '1.5rem',
            textAlign: 'center',
          }}
        >
          {getContent(formLabels.success)}
        </div>
      )}

      {errors.submit && (
        <div
          style={{
            padding: '1rem',
            background: '#fee2e2',
            color: '#dc2626',
            borderRadius: 'var(--radius-lg)',
            marginBottom: '1.5rem',
            textAlign: 'center',
          }}
        >
          {errors.submit}
        </div>
      )}

      <div className="form-group">
        <label htmlFor="name" className="form-label">
          {getContent(formLabels.name)}
        </label>
        <input
          type="text"
          id="name"
          name="name"
          value={formData.name}
          onChange={handleChange}
          className={`form-input ${errors.name ? 'error' : ''}`}
          aria-invalid={!!errors.name}
          aria-describedby={errors.name ? 'name-error' : undefined}
        />
        {errors.name && (
          <span id="name-error" role="alert" style={{ color: 'red', fontSize: '0.875rem', marginTop: '0.25rem' }}>
            {errors.name}
          </span>
        )}
      </div>

      <div className="form-group">
        <label htmlFor="email" className="form-label">
          {getContent(formLabels.email)}
        </label>
        <input
          type="email"
          id="email"
          name="email"
          value={formData.email}
          onChange={handleChange}
          className={`form-input ${errors.email ? 'error' : ''}`}
          aria-invalid={!!errors.email}
          aria-describedby={errors.email ? 'email-error' : undefined}
        />
        {errors.email && (
          <span id="email-error" role="alert" style={{ color: 'red', fontSize: '0.875rem', marginTop: '0.25rem' }}>
            {errors.email}
          </span>
        )}
      </div>

      <div className="form-group">
        <label htmlFor="phone" className="form-label">
          {getContent(formLabels.phone)}
        </label>
        <input
          type="tel"
          id="phone"
          name="phone"
          value={formData.phone}
          onChange={handleChange}
          className={`form-input ${errors.phone ? 'error' : ''}`}
          aria-invalid={!!errors.phone}
          aria-describedby={errors.phone ? 'phone-error' : undefined}
        />
        {errors.phone && (
          <span id="phone-error" role="alert" style={{ color: 'red', fontSize: '0.875rem', marginTop: '0.25rem' }}>
            {errors.phone}
          </span>
        )}
      </div>

      <div className="form-group">
        <label htmlFor="message" className="form-label">
          {getContent(formLabels.message)}
        </label>
        <textarea
          id="message"
          name="message"
          value={formData.message}
          onChange={handleChange}
          className={`form-textarea ${errors.message ? 'error' : ''}`}
          aria-invalid={!!errors.message}
          aria-describedby={errors.message ? 'message-error' : undefined}
        />
        {errors.message && (
          <span id="message-error" role="alert" style={{ color: 'red', fontSize: '0.875rem', marginTop: '0.25rem' }}>
            {errors.message}
          </span>
        )}
      </div>

      <button 
        type="submit" 
        className="btn btn-primary btn-lg" 
        style={{ width: '100%' }}
        disabled={isSubmitting}
      >
        {isSubmitting ? getContent(bilingual('Sending...', 'அனுப்புகிறது...')) : getContent(formLabels.submit)}
      </button>
    </form>
  );
};

export default ContactForm;

