import React from 'react'
import "./style/FirstLesson.css"

const FirstLesson = (urrentTranslations) => {
  return (
	<div className='first-lesson' id='firstLesson'>
		<p className='first-lesson__title'>{urrentTranslations.urrentTranslations.FirstLesson.title}</p>

		<div className="first-lesson__box">
			<div className="first-lesson__box-input">
				<div className="first-lesson-input--first">
					<p>{urrentTranslations.urrentTranslations.FirstLesson.inputName}</p>
					<input className='input' type="text" placeholder={urrentTranslations.urrentTranslations.FirstLesson.inputNamePlacholder} />
				</div>

				<div className="first-lesson-input--first">
					<p>{urrentTranslations.urrentTranslations.FirstLesson.inputLastName}</p>
					<input className='input' type="text" placeholder={urrentTranslations.urrentTranslations.FirstLesson.inputLaseNamePlacholder} />
				</div>

			</div>

			<div className="first-lesson-input--first first-lesson-input--defult">
					<p>{urrentTranslations.urrentTranslations.FirstLesson.inputAddress}</p>
					<input className='input' type="text" placeholder={urrentTranslations.urrentTranslations.FirstLesson.inputAddressPlacholder} />
			</div>


			<div className="first-lesson-input--first first-lesson-input--defult">
					<p>{urrentTranslations.urrentTranslations.FirstLesson.inputMessage}</p>
					<textarea className='input' type="text" placeholder={urrentTranslations.urrentTranslations.FirstLesson.inputMessagePlacholder} ></textarea>
			</div>

			<button>{urrentTranslations.urrentTranslations.FirstLesson.buttonTitle}</button>

		</div>
	</div>
  )
}

export default FirstLesson;
