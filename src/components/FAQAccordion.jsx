import { useState } from 'react';
import { FiChevronDown } from 'react-icons/fi';
import { getContent, bilingual } from '../utils/language';
import '../styles/components.css';

const FAQAccordion = ({ items }) => {
  const [openIndex, setOpenIndex] = useState(null);

  const toggleItem = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  const handleKeyDown = (e, index) => {
    if (e.key === 'Enter' || e.key === ' ') {
      e.preventDefault();
      toggleItem(index);
    }
  };

  if (!items || items.length === 0) return null;

  return (
    <section className="section">
      <div className="container">
        <h2 style={{ textAlign: 'center', marginBottom: '3rem' }}>
          {getContent(bilingual('Frequently Asked Questions', 'அடிக்கடி கேட்கப்படும் கேள்விகள்'))}
        </h2>
        <div className="faq-list">
          {items.map((item, index) => {
            const questionContent = item.questionTamil
              ? bilingual(item.question, item.questionTamil)
              : item.question;
            const answerContent = item.answerTamil
              ? bilingual(item.answer, item.answerTamil)
              : item.answer;

            const isOpen = openIndex === index;

            return (
              <div key={index} className={`faq-item ${isOpen ? 'open' : ''}`}>
                <button
                  className="faq-question"
                  onClick={() => toggleItem(index)}
                  onKeyDown={(e) => handleKeyDown(e, index)}
                  aria-expanded={isOpen}
                  aria-controls={`faq-answer-${index}`}
                >
                  <span>
                    {typeof questionContent === 'object' ? getContent(questionContent) : questionContent}
                  </span>
                  <FiChevronDown className="faq-icon" />
                </button>
                <div
                  id={`faq-answer-${index}`}
                  className={`faq-answer ${isOpen ? 'open' : ''}`}
                  role="region"
                  aria-labelledby={`faq-question-${index}`}
                >
                  {typeof answerContent === 'object' ? getContent(answerContent) : answerContent}
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default FAQAccordion;

