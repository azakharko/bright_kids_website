  import React, { useState } from 'react'
  import "./style/FAQ.css"
  import QuestionCard from '../UI/QuestionCard/QuestionCard'

  const FAQ = ({urrentTranslations, cards, setCards}) => {

    console.log(urrentTranslations)

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
         {urrentTranslations.FAQ.title}
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