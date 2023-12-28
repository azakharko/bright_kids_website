import React from 'react'
import "./style/FirstLesson.css"

const FirstLesson = (currentTranslations) => {
  return (
	<div className='first-lesson' id='firstLesson'>
		<p className='first-lesson__title'>{currentTranslations.currentTranslations.FirstLesson.title}</p>

		<div className="first-lesson__box">
			<div className="first-lesson__box-input">
				<div className="first-lesson-input--first">
					<p>{currentTranslations.currentTranslations.FirstLesson.inputName}</p>
					<input className='input' type="text" placeholder={currentTranslations.currentTranslations.FirstLesson.inputNamePlacholder} />
				</div>

				<div className="first-lesson-input--first">
					<p>{currentTranslations.currentTranslations.FirstLesson.inputLastName}</p>
					<input className='input' type="text" placeholder={currentTranslations.currentTranslations.FirstLesson.inputLaseNamePlacholder} />
				</div>

			</div>

			<div className="first-lesson-input--first first-lesson-input--defult">
					<p>{currentTranslations.currentTranslations.FirstLesson.inputAddress}</p>
					<input className='input' type="text" placeholder={currentTranslations.currentTranslations.FirstLesson.inputAddressPlacholder} />
			</div>


			<div className="first-lesson-input--first first-lesson-input--defult">
					<p>{currentTranslations.currentTranslations.FirstLesson.inputMessage}</p>
					<textarea className='input' type="text" placeholder={currentTranslations.currentTranslations.FirstLesson.inputMessagePlacholder} ></textarea>
			</div>

			<button>{currentTranslations.currentTranslations.FirstLesson.buttonTitle}</button>

		</div>
	</div>
  )
}

export default FirstLesson;
