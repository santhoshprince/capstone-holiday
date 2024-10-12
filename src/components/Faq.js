import React, { useState } from 'react';
import '../components/Faq.css'; // Import the CSS file

const FAQ = ({ faqData, defaultOpenIndex = 0 }) => {
  const [activeIndex, setActiveIndex] = useState(defaultOpenIndex);

  const toggleAccordion = (index) => {
    setActiveIndex(activeIndex === index ? null : index);
  };

  return (
    <div className="faq-section new-section">
      <div className="accordion-area">
        {faqData.map((faq, index) => (
          <div
            className={`accordion-card ${activeIndex === index ? 'active' : ''}`}
            key={index}
          >
            <div
              className="accordion-header"
              id={`collapse-item-${index}`}
              onClick={() => toggleAccordion(index)}
              tabIndex={0} // Allows keyboard access
              onKeyDown={(e) => e.key === 'Enter' && toggleAccordion(index)} // Handles keyboard 'Enter' press
              role="button"
              aria-expanded={activeIndex === index}
            >
              <button
                className={`accordion-button ${
                  activeIndex === index ? '' : 'collapsed'
                }`}
                type="button"
              >
                Q{index + 1}. {faq.question}
              </button>
            </div>
            <div
              id={`collapse-${index}`}
              className={`accordion-collapse ${activeIndex === index ? 'show' : ''}`}
              aria-labelledby={`collapse-item-${index}`}
            >
              <div className="accordion-body">
                <p className="faq-text">{faq.answer}</p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default FAQ;
