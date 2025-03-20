import React from 'react'
import './style/StorePopup.css'
import Button from '../UI/Button/Button'

import { useTranslation } from 'react-i18next';


export default function StorePopup({setOpenPopup}) {
		const { t } = useTranslation();
	
  const [isChecked, setIsChecked] = React.useState(false);
  const [isError, setIsError] = React.useState(false); 

	React.useEffect(() => {
		document.body.style.overflow = 'hidden'
	}, [setOpenPopup])

	const handleClose = () => {
		setOpenPopup(false)
		document.body.style.overflow = 'auto'
	}

	const handleProceedClick = (e) => {
    if (!isChecked) {
      e.preventDefault(); 
      setIsError(true); 
    }
  };

	return (
		<div className='storePopup'>
			<div className='storePopup__container'>
				<svg onClick={handleClose}
					className='storePopup__container-close'
					width='36'
					height='36'
					viewBox='0 0 36 36'
					fill='none'
					xmlns='http://www.w3.org/2000/svg'
				>
					<path
						opacity='0.5'
						d='M18 33C10.9289 33 7.3934 33 5.1967 30.8033C3 28.6066 3 25.0711 3 18C3 10.9289 3 7.3934 5.1967 5.1967C7.3934 3 10.9289 3 18 3C25.0711 3 28.6066 3 30.8033 5.1967C33 7.3934 33 10.9289 33 18C33 25.0711 33 28.6066 30.8033 30.8033C28.6066 33 25.0711 33 18 33Z'
						fill='white'
					/>
					<path
						d='M13.4545 13.4545C13.8938 13.0152 14.6062 13.0152 15.0455 13.4545L18 16.409L20.9545 13.4545C21.3938 13.0152 22.1062 13.0152 22.5455 13.4545C22.9848 13.8939 22.9848 14.6062 22.5455 15.0455L19.591 18L22.5455 20.9545C22.9848 21.3938 22.9848 22.1061 22.5455 22.5455C22.1061 22.9848 21.3938 22.9848 20.9545 22.5455L18 19.591L15.0455 22.5455C14.6062 22.9848 13.8939 22.9848 13.4545 22.5455C13.0152 22.1062 13.0152 21.3938 13.4545 20.9545L16.409 18L13.4545 15.0455C13.0152 14.6062 13.0152 13.8938 13.4545 13.4545Z'
						fill='white'
					/>
				</svg>

				<h5>{t("StorePopup.title")}</h5>
				<div className='storePopup__container-description'>
					<p>
						{t("StorePopup.description1")}

						<br />
						<br />

						
						{t("StorePopup.description2")}
						<br />
						<br />

						
						{t("StorePopup.description3")}
						<br />
						<br />
						
						{t("StorePopup.description4")}
						<br />
						<br />
						
						{t("StorePopup.description5")}
						<br />
						Bright Kids Ukrainian Online
						<br />
						SchoolBrightKidsSchool2020@gmail.com
					</p>
				</div>
				<div className='storePopup__container-container'>
				
					<div className='storePopup__container-buttons'>
						<a href="mailto:schoolbrightkidsschool2020@gmail.com?subject=Запит на ліцензію&body=Доброго дня! Підкажіть, будь ласка, де можна переглянути умови ліцензії? Нас цікавить інформація для школи, яка називається [назва школи] і знаходиться [місто/місце розташування].">
						<Button
							width='300'
							height='60'
							className='storePopup__button'
							text={t("StorePopup.button1")}
							id='accept'
						/>
						</a>

						<a 
              href={isChecked ? "https://payhip.com/BrightKidsUkrainianOnlineSchool" : "#"}
              target={isChecked ? "_blank" : ""}
              rel={isChecked ? "noopener noreferrer" : ""}
              onClick={handleProceedClick}
							style={{ opacity: isChecked ? 1 : 0.5, cursor: isChecked ? "pointer" : "not-allowed" }}
            >
              <Button
                width="300"
                height="60"
                className="storePopup__button"
                text={t("StorePopup.button2")}
                id="accept"
                disabled={!isChecked} 
       
              />
            </a>
					</div>

					<div className='storePopup__container-input'>
						<input 
						type='checkbox' 
						id="agreeCheckbox"
						checked={isChecked} 
						onChange={(e) => {
							setIsChecked(e.target.checked);
							if (e.target.checked) setIsError(false); 
						}} 
						/>
						<label htmlFor="agreeCheckbox"    style={{ color: isError ? "black" : "white" }}>{t("StorePopup.inputCheckBox")}</label>
					</div>
				</div>
			</div>
		</div>
	)
}
