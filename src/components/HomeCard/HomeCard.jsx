import React from 'react'
import "./style/HomeCard.css"

const HomeCard = ({urrentTranslations}) => {
  return (
	<div className='home-cards'>
	  <div className="home-cards__card">
	  	{urrentTranslations.HomeCardPage.card1}
	  </div>

	  <div className="home-cards__card">
	  	{urrentTranslations.HomeCardPage.card2}
	  </div>

	  <div className="home-cards__card">
		  {urrentTranslations.HomeCardPage.card3}
	  </div>

	  <div className="home-cards__card">
		  {urrentTranslations.HomeCardPage.card4}
	  </div>

	  <div className="home-cards__card">
		  {urrentTranslations.HomeCardPage.card5}
	  </div>

	  <div className="home-cards__card">
	  	{urrentTranslations.HomeCardPage.card6}
	  </div>


	</div>
  )
}

export default HomeCard;
