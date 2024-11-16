import React, { useState } from 'react';
import './FAQPage.css';

const faqData = [
  {
    question: 'What is Studybuddy?',
    answer: 'Studybuddy is an online platform that connects students with expert tutors for various subjects and study help.',
  },
  {
    question: 'How do I book a tutor?',
    answer: 'You can browse our tutor listings, select a tutor based on your needs, and book a session directly through their profile.',
  },
  {
    question: 'What subjects do you offer tutoring in?',
    answer: 'We offer tutoring in a wide range of subjects including Math, Science, English, History, and more.',
  },
  {
    question: 'How much do tutors charge?',
    answer: 'Our tutors set their own rates, but you can view pricing on their profiles before booking a session.',
  },
  {
    question: 'Is there a money-back guarantee?',
    answer: 'Yes, we offer a money-back guarantee if you are not satisfied with your session. Please refer to our terms for more details.',
  },
];

const FaqPage = () => {
  const [activeIndex, setActiveIndex] = useState(null);

  const toggleAnswer = (index) => {
    if (activeIndex === index) {
      setActiveIndex(null); // Close the currently open answer
    } else {
      setActiveIndex(index); // Open the new answer
    }
  };

  return (
    <div className="faq-page">
      <div className="faq-container">
        <h1 className="faq-title">Frequently Asked Questions</h1>
        <div className="faq-list">
          {faqData.map((item, index) => (
            <div key={index} className="faq-item">
              <div
                className="faq-question"
                onClick={() => toggleAnswer(index)}
              >
                <h2>{item.question}</h2>
                <span className={`arrow ${activeIndex === index ? 'open' : ''}`}>&#9660;</span>
              </div>
              {activeIndex === index && (
                <div className="faq-answer">
                  <p>{item.answer}</p>
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default FaqPage;
