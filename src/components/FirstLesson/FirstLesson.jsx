import React, { useState } from 'react';
import { useTranslation } from 'react-i18next';
import './style/FirstLesson.css';
import { useForm, ValidationError } from '@formspree/react';


const FirstLesson = () => {
  const { t } = useTranslation(); 
  const [state, handleSubmits] = useForm("mayrnlqg");
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    address: '',
    message: '',
  });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = async () => {
    let titleElement = document.querySelector('.first-lesson__title');
    let titleElement2 = document.querySelector('.first-lesson__button');

 
    console.log('Form Data:', formData);
    setTimeout(() => {
      setFormData({
        firstName: '',
        lastName: '',
        address: '',
        message: '',
      });
      if (titleElement) {
        titleElement.style.color = '#6ECFA0';
      }

      if (titleElement2) {
        titleElement2.style.color = '#6ECFA0';
      }
    }, 400);

    setTimeout(() => {
      titleElement.style.color = '#fff';
      titleElement2.style.color = '#fff';
    }, 5000);
  };

  
  
  return (
    <form onSubmit={handleSubmits} className="first-lesson" id="firstLesson">
      <p className="first-lesson__title">{t('FirstLesson.title')}</p>

      <div className="first-lesson__box">
        <div className="first-lesson__box-input">
          <div className="first-lesson-input--first">
            <p>{t('FirstLesson.inputName')}</p>
            <input
              className="input"
              type="text"
              name="firstName"
              placeholder={t('FirstLesson.inputNamePlacholder')}
              value={formData.firstName}
              onChange={handleInputChange}
            />
          </div>

          <div className="first-lesson-input--first">
            <p>{t('FirstLesson.inputLastName')}</p>
            <input
              className="input"
              type="text"
              name="lastName"
              placeholder={t('FirstLesson.inputLaseNamePlacholder')}
              value={formData.lastName}
              onChange={handleInputChange}
            />
          </div>
        </div>

        <div className="first-lesson-input--first first-lesson-input--defult">
          <p>{t('FirstLesson.inputAddress')}</p>
          <input
            className="input"
            type="text"
            name="address"
            placeholder={t('FirstLesson.inputAddressPlacholder')}
            value={formData.address}
            onChange={handleInputChange}
          />
        </div>

        <div className="first-lesson-input--first first-lesson-input--defult">
          <p>{t('FirstLesson.inputMessage')}</p>
          <textarea
            className="input"
            type="text"
            name="message"
            placeholder={t('FirstLesson.inputMessagePlacholder')}
            value={formData.message}
            onChange={handleInputChange}
          />
        </div>

        <button className='first-lesson__button' type="submit" onClick={handleSubmit}>{t('FirstLesson.buttonTitle')}</button>
      </div>
    </form>
  );
};

export default FirstLesson;
