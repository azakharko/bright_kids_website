import React from 'react'
import "./style/Feedback.css"

const Feedback = ({currentTranslations}) => {
  return (
	<div className='feedback'>
	  <p className='feedback__title'>{currentTranslations.Feedback.title}</p>

	  <div className="feedback__box">
		<div className="feedback__box-cart feedback__box-cart1"></div>
		<div className="feedback__box-cart feedback__box-cart2"></div>
		<div className="feedback__box-cart feedback__box-cart3"></div>
		<div className="feedback__box-cart feedback__box-cart4"></div>


	  </div>
	</div>
  )
}

export default Feedback;
