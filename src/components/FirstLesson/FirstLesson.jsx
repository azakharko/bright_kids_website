import React from 'react';
import { useTranslation } from 'react-i18next';
import './style/FirstLesson.css';

const FirstLesson = () => {
  const { t } = useTranslation(); // useTranslation hook

  return (
    <div className="first-lesson" id="firstLesson">
      <p className="first-lesson__title">{t('FirstLesson.title')}</p>

      <div className="first-lesson__box">
        <div className="first-lesson__box-input">
          <div className="first-lesson-input--first">
            <p>{t('FirstLesson.inputName')}</p>
            <input className="input" type="text" placeholder={t('FirstLesson.inputNamePlacholder')} />
          </div>

          <div className="first-lesson-input--first">
            <p>{t('FirstLesson.inputLastName')}</p>
            <input className="input" type="text" placeholder={t('FirstLesson.inputLaseNamePlacholder')} />
          </div>
        </div>

        <div className="first-lesson-input--first first-lesson-input--defult">
          <p>{t('FirstLesson.inputAddress')}</p>
          <input className="input" type="text" placeholder={t('FirstLesson.inputAddressPlacholder')} />
        </div>

        <div className="first-lesson-input--first first-lesson-input--defult">
          <p>{t('FirstLesson.inputMessage')}</p>
          <textarea className="input" type="text" placeholder={t('FirstLesson.inputMessagePlacholder')} />
        </div>

        <button>{t('FirstLesson.buttonTitle')}</button>
      </div>
    </div>
  );
};

export default FirstLesson;
