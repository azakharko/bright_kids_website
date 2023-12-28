import React from 'react'
import "./style/HomeCard.css"

const HomeCard = ({currentTranslations}) => {
  return (
	<div className='home-cards'>
	  <div className="home-cards__card">
	  	{currentTranslations.HomeCardPage.card1}
	  </div>

	  <div className="home-cards__card">
	  	{currentTranslations.HomeCardPage.card2}
	  </div>

	  <div className="home-cards__card">
		  {currentTranslations.HomeCardPage.card3}
	  </div>

	  <div className="home-cards__card">
		  {currentTranslations.HomeCardPage.card4}
	  </div>

	  <div className="home-cards__card">
		  {currentTranslations.HomeCardPage.card5}
	  </div>

	  <div className="home-cards__card">
	  	{currentTranslations.HomeCardPage.card6}
	  </div>


	</div>
  )
}

export default HomeCard;
