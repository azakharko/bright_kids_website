import React, { useEffect, useRef, useState } from 'react';
import './style/QuestionCard.css';

const QuestionCard = ({ question, answer, isOpen, toggleCard }) => {
  const handleClick = () => {
    toggleCard(question);
  };

  const cardRef = useRef(null);
  const dropdownTextRef = useRef(null);

  const [cardHeight, setCardHeight] = useState(0);
  const [dropdownTextHeight, setDropdownTextHeight] = useState(0);

  useEffect(() => {
    const handleResize = () => {
      if (cardRef.current && dropdownTextRef.current) {
        const cardHeights = [
          100, 80, 70, 60, // Add other heights from media queries here
        ];

        const maxHeight = Math.max(...cardHeights);
        const textHeight = dropdownTextRef.current.scrollHeight + 100;
        const dropdownTextHeight = textHeight > maxHeight ? textHeight : maxHeight

        setCardHeight(maxHeight);
        setDropdownTextHeight(dropdownTextHeight);
      }
    };

    handleResize();

    window.addEventListener('resize', handleResize);

    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  return (
    <div
      className={`faq__card ${isOpen ? '_open' : ''}`}
      onClick={handleClick}
      style={{
        height: isOpen ? `${cardHeight + dropdownTextHeight - 50}px` : '',
      }}
      ref={cardRef}
    >
      <div className="faq__card-question" onClick={handleClick}>
        <p className="faq__card-question-text">{question}</p>
        <div className={isOpen ? 'faq__card-btn _active' : 'faq__card-btn'}>
        <svg xmlns="http://www.w3.org/2000/svg" width="52" height="52" viewBox="0 0 52 52" fill="none">
            <path
              d="M27.6253 15.1665C27.6253 14.269 26.8978 13.5415 26.0003 13.5415C25.1029 13.5415 24.3753 14.269 24.3753 15.1665V24.3748H15.167C14.2695 24.3748 13.542 25.1024 13.542 25.9998C13.542 26.8973 14.2695 27.6248 15.167 27.6248H24.3753V36.8332C24.3753 37.7306 25.1029 38.4582 26.0003 38.4582C26.8978 38.4582 27.6253 37.7306 27.6253 36.8332V27.6248H36.8337C37.7311 27.6248 38.4587 26.8973 38.4587 25.9998C38.4587 25.1024 37.7311 24.3748 36.8337 24.3748H27.6253V15.1665Z"
              fill="white"
            />
          </svg>
        </div>
      </div>

      <p
        className="faq__card-dropdown-text"
        ref={dropdownTextRef}
        style={{ marginBottom: '40px' }} // Set the bottom margin here
      >
        {answer}
      </p>
    </div>
  );
};

export default QuestionCard;
