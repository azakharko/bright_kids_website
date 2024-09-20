import React, { useEffect, useState } from 'react';
import { useTranslation } from 'react-i18next';
import './style/FirstLesson.css';
import Button from '../UI/Button/Button';
import FormPopup from '../UI/PopupForm/FormPopup';


const FirstLesson = () => {
  const { t, i18n } = useTranslation();
  const [, setThisLanguage] = useState('en')

  useEffect(() => {
    setThisLanguage(i18n.language)
  }, [t])


  const [nameError] = [t(`Form.inputName.error`)];
	const [emailError] = [t(`Form.inputEmail.error`)];
	const [emailError2] = [t(`Form.inputEmail.error2`)];
	const [emailMessage] = [t(`Form.inputMessage.error`)];

	const [formData, setFormData] = useState({
        name: '',
        email: '',
        message: ''
  });

	const [errors, setErrors] = useState({});
  const [formSubmitted, setFormSubmitted] = useState(false);


	const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData(prevState => ({
            ...prevState,
            [name]: value
        }));
    };

	const handleSubmit2 = (e) => {
        e.preventDefault();
        if (validateForm()) {
            sendFormData(formData);
        }
    };

	const validateForm = () => {
        const { name, email, message } = formData;
        const errors = {};

        if (!name.trim()) {
            errors.name = nameError;
        }

        if (!email.trim()) {
            errors.email = emailError2;
        } else if (!/\S+@\S+\.\S+/.test(email)) {
            errors.email = emailError;
        }

        if (!message.trim()) {
            errors.message = emailMessage;
        }

        setErrors(errors);
        return Object.keys(errors).length === 0;
    };

	const sendFormData = async (data) => {
        try {
            const response = await fetch('https://my-node-app-ub6hoxgggq-uc.a.run.app/api/post', {
				method: 'POST',
				headers: {
					'Content-Type': 'application/json',
					'x-secret': '6a408858320f411eb8e55c806b3a545d'
				},
				body: JSON.stringify({
					full_name: data.name,
					contact_email: data.email,
					message: data.message
				})
       	 	});
            const responseData = await response.json();
            console.log('Form data sent successfully:', responseData);
			setFormSubmitted(true);

			setFormData({
				name: '',
				email: '',
				message: ''
			});

			setTimeout(() => {
				setFormSubmitted(false);
			}, 4000);

        } catch (error) {
            console.error('Error sending form data:', error);
        }
    };

  return (
    <div id='firstLesson' className="first-lesson">
      <FormPopup status={formSubmitted}/>

      <div className="CoursePage__form">
          <form onSubmit={handleSubmit2} name="main-form">
            <p className='CoursePage__form-title' style={{ color: formSubmitted ? 'green' : 'black' }}>
              {formSubmitted ? 
                t(`Form.successfully-send`)
              : 								
                t(`Form.title`)
              }
            </p>

            <div className="CoursePage__form-input">
              <p>{t(`Form.inputName.subTitle`)}</p>
              <input
                type="text"
                name='name'
                value={formData.name}
                onChange={handleChange}
                placeholder={t(`Form.input-placeholder`)}
              />
              {errors.name && <p className='form__error'>{errors.name}</p>}
            </div>

            <div className="CoursePage__form-input">
              <p>{t(`Form.inputEmail.subTitle`)}</p>
              <input
                type="text"
                name='email'
                value={formData.email}
                onChange={handleChange}
                placeholder={t(`Form.input-placeholder`)}
              />
              {errors.email && <p className='form__error'>{errors.email}</p>}
            </div>

            <div className="CoursePage__form-input">
              <p>{t(`Form.inputMessage.subTitle`)}</p>
              <textarea
                name='message'
                value={formData.message}
                onChange={handleChange}
                placeholder={t(`Form.input-placeholder`)}
              />
              {errors.message && <p className='form__error'>{errors.message}</p>}
            </div>

            <Button type="submit" id="btn-main-send-form" width={700} height={70} className="course__buttons" text={t("ReadyPage.trialLessonButton")} />
          </form>
			</div>
    </div>
 
  );
};

export default FirstLesson;
