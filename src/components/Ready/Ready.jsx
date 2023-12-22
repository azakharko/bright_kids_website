import React from 'react'
import "./style/Ready.css"
import Button from '../UI/Button/Button';

const Ready = ({urrentTranslations}) => {
	const handleScrollToSection = (sectionId) => {
		if (!sectionId || sectionId === 'top') {
			window.scrollTo({ top: 0, behavior: 'smooth' });
			return;
		}

		const sectionRef = document.getElementById(sectionId);
		if (sectionRef) {
			sectionRef.scrollIntoView({ behavior: 'smooth' });
		}
	};

  return (
	<div className='ready'>

	  <div className="ready__box">
		<div className="ready__box-img"></div>

		<div className="ready__box-container">
			<p className='ready__title'>{urrentTranslations.ReadyPage.title}</p>
			<p className='ready__description'>{urrentTranslations.ReadyPage.description}</p>
			<div className="ready__buttons">
				<a target='_blank' rel="noreferrer"href="tel:+15127868874">
					<Button text={urrentTranslations.ReadyPage.callUsButton} width={300} height={85} className="ready__buttons-button" />
				</a>

				<div onClick={() => handleScrollToSection('firstLesson')}>
					<Button text={urrentTranslations.ReadyPage.trialLessonButton} width={300} height={85} className="ready__buttons-button" />
				</div>

			</div>
		</div>
	  </div>
	</div>
  )
}

export default Ready;
