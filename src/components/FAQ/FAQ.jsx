import React from 'react'
import { useTranslation } from 'react-i18next';
import QuestionCard from '../UI/QuestionCard/QuestionCard'
import "./style/FAQ.css"

const FAQ = ({ cards, setCards }) => {
  const { t } = useTranslation(); // useTranslation hook

  const toggleCard = (clickedQuestion) => {
    const updatedCards = cards.map((card) => {
      if (card.question === clickedQuestion) {
        return { ...card, isOpen: !card.isOpen };
      }
      return { ...card, isOpen: false };
    });

    setCards(updatedCards);
  };


  return (
    <section className="faq" id='faq'>
      <h2 className="faq__title">
        {t('FAQ.title')}
      </h2>

      <div className="faq__content">
        {cards.map(card => (
          <QuestionCard
            key={card.question}
            question={card.question}
            answer={card.answer}
            isOpen={card.isOpen}
            toggleCard={toggleCard}
          />
        ))}
      </div>
    </section>
  )
}

export default FAQ