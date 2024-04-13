import React, { useState, useEffect } from 'react';
import "./style/GiftPopup.css";
import { useTranslation } from 'react-i18next';

const GiftPopup = ({ setOpenGiftPopup, openGiftPopup }) => {
    const { t, i18n } = useTranslation();
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [courseSelect, setCourseSelect] = useState('');
    const [nameError, setNameError] = useState('');
    const [emailError, setEmailError] = useState('');
    const [courseError, setCourseError] = useState('');

    const courseTitles = [];

    for (let i = 1; i <= 14; i++) {
        const title = t(`CoursePage.course${i}.title`);
        if (title) {
            courseTitles.push(title);
        }
    }

    useEffect(() => {
        const giftPopup = document.querySelector('.gift-popup');
        if (openGiftPopup) {
            giftPopup.classList.add('gift-popup--open');
        } else {
            giftPopup.classList.remove('gift-popup--open');
        }
    }, [openGiftPopup]);

    const handleClosePopupGift = () => {
        setOpenGiftPopup(false);
    }

    const handleSubmit = async (event) => {
        event.preventDefault();
        if (!name.trim()) {
            setNameError('Please enter your name.');
        } else {
            setNameError('');
        }
        if (!/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(email)) {
            setEmailError('Please enter a valid email address.');
        } else {
            setEmailError('');
        }
        if (!courseSelect) {
            setCourseError('Please choose a course.');
        } else {
            setCourseError('');
        }
        if (name.trim() && /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(email) && courseSelect) {
            console.log('Form submitted:', { name, email, courseSelect: courseTitles[parseInt(courseSelect.slice(-1)) - 1] });

			try {
				const response = await fetch('https://my-node-app-ub6hoxgggq-uc.a.run.app/api/post', {
					method: 'POST',
					headers: {
						'Content-Type': 'application/json',
						'x-secret': '6a408858320f411eb8e55c806b3a545d'
					},
					body: JSON.stringify({
						full_name: name,
						contact_email: email,
						message: courseTitles[parseInt(courseSelect.slice(-1)) - 1]
					})
				});
				const responseData = await response.json();
				console.log('Form data sent successfully:', responseData);
	
				setName('');
				setEmail('');
				setCourseSelect('');

			} catch (error) {
				console.error('Error sending form data:', error);
			}
        }
    }

    return (
        <div className='gift-popup'>
            <div onClick={handleClosePopupGift} className="gift-popup__close"></div>
            <p className='gift-popup__title'>{t("Gift.title")}</p>
            <p className='gift-popup__description'>{t("Gift.description")}<span> {t("Gift.sub-description")}</span> </p>
            <form onSubmit={handleSubmit}>

				<div className="gift-popup__box">
                    <p style={{ color: nameError ? '#F6C647' : 'white' }} className='gift-popup__box-subtitle'>{t("Gift.seletText")}</p>
                    <select
                        value={courseSelect}
                        onChange={(e) => setCourseSelect(e.target.value)}
                    >
                        <option value="">{t("Gift.selectTitle")}</option>
                        {courseTitles.map((title, index) => (
                            <option key={index} value={`course${index + 1}`}>{title}</option>
                        ))}
                    </select>
                </div>

				<div className='gift-popup__box2'>

                <div className={`gift-popup__box ${nameError && 'error'}`}>
                    <p style={{ color: nameError ? '#F6C647' : 'white' }} className={`gift-popup__box-subtitle ${nameError && 'error-text'}`}>{t("Gift.nameText")}</p>
                    <input
                        type="text"
                        placeholder={t("Gift.nameInput")}
                        value={name}
                        onChange={(e) => setName(e.target.value)}
                    />
                </div>
                <div className={`gift-popup__box ${emailError && 'error'}`}>
                    <p style={{ color: emailError ? '#F6C647' : 'white' }} className={`gift-popup__box-subtitle ${emailError && 'error-text'}`}>{t("Gift.emailText")}</p>
                    <input
                        type="text"
                        placeholder={t("Gift.emailInput")}
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                    />
                </div>

				</div>
                <button id='btn-apply-to-course-gift' type="submit" className='gift-popup__button'>{t("Gift.button")}</button>
            </form>
        </div>
    );
}

export default GiftPopup;
