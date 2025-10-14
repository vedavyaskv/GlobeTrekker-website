import React, { useState } from 'react';

const faqData = [
  {
    question: "What travel documents do I need?",
    answer: "You typically need a valid passport and visa depending on your destination. Check embassy requirements before travel."
  },
  {
    question: "Can I customize my travel package?",
    answer: "Yes, our Explorer and Globetrotter packages are fully customizable. You can also add-on experiences to other packages."
  },
  {
    question: "Do you offer travel insurance?",
    answer: "Yes, we provide comprehensive travel insurance as an optional add-on."
  },
  {
    question: "How do I contact my tour guide?",
    answer: "Your guide's contact will be shared 24 hours before your journey. You can reach them via phone, email, or WhatsApp."
  },
  {
    question: "Can I reschedule or cancel my trip?",
    answer: "Yes. Reschedules and cancellations depend on your package and how close it is to the travel date."
  },
  {
    question: "Are meals included?",
    answer: "Meal inclusion depends on your package. Details will be clear during booking."
  },
  {
    question: "What payment methods are accepted?",
    answer: "We accept credit/debit cards, UPI, net banking, and EMI options."
  },
  {
    question: "Will I get a trip itinerary?",
    answer: "Yes, detailed itineraries are sent via email and dashboard."
  },
  {
    question: "What if my flight is delayed?",
    answer: "Our team tracks flights and adjusts your schedule to accommodate delays."
  }
];

export default function FAQ() {
  const [openIndexes, setOpenIndexes] = useState([]);

  const toggle = index => {
    setOpenIndexes(prev => 
      prev.includes(index) ? prev.filter(i => i !== index) : [...prev, index]
    );
  };

  return (
    <section
      style={{
        padding: '60px 20px',
        backgroundColor: '#f9f9f9',
        minHeight: '100vh',
        fontFamily: "'Poppins', sans-serif",
      }}
    >
      <h2 style={{
        textAlign: 'center',
        fontSize: '2.8rem',
        color: '#07406e',
        marginTop: 60,
        marginBottom: 40,
      }}>
        Frequently Asked Questions
      </h2>

      <div style={{
        maxWidth: 800,
        margin: '0 auto'
      }}>
        {faqData.map(({ question, answer }, idx) => (
          <div key={idx} style={{
            marginBottom: 20,
            borderRadius: 10,
            overflow: 'hidden',
            boxShadow: '0 4px 10px rgba(0,0,0,0.1)',
            backgroundColor: '#fff',
          }}>
            <button 
              onClick={() => toggle(idx)}
              style={{
                width: '100%',
                padding: 18,
                fontSize: '1.2rem',
                textAlign: 'left',
                cursor: 'pointer',
                border: 'none',
                backgroundColor: openIndexes.includes(idx) ? '#062e4f' : '#07406e',
                color: '#fff',
                transition: 'background-color 0.3s ease',
              }}
              aria-expanded={openIndexes.includes(idx)}
            >
              {question}
            </button>
            {openIndexes.includes(idx) && (
              <div style={{
                padding: 20,
                backgroundColor: '#f0f0f0',
                fontSize: '1rem',
                lineHeight: 1.5,
                color: '#333',
              }}>
                {answer}
              </div>
            )}
          </div>
        ))}
      </div>
    </section>
  );
}
