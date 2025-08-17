import React from 'react'
import { useTranslation } from 'react-i18next';
import "./style/Store.css"
import Button from '../UI/Button/Button';

const Store = ({setOpenPopup}) => {
	const { t } = useTranslation(); // useTranslation hook

	// const handleScrollToSection = (sectionId) => {
	// 	if (!sectionId || sectionId === 'top') {
	// 		window.scrollTo({ top: 0, behavior: 'smooth' });
	// 		return;
	// 	}

	// 	const sectionRef = document.getElementById(sectionId);
	// 	if (sectionRef) {
	// 		sectionRef.scrollIntoView({ behavior: 'smooth' });
	// 	}
	// };
	return (
		<div className='store'>
      <h3 className='store__title'>{t('StorePage.title')}</h3>
      <div className='store__container'>
        <div className="store__container-card">
          <div className="store__container-card--book store__container-card--book1"></div>
        </div>
        <div className="store__container-card">
          <div className="store__container-card--book store__container-card--book2"></div>
        </div>
        <div className="store__container-card store__container-cardHidden">
          <div className="store__container-card--book store__container-card--book3"></div>
        </div>
        <div className="store__container-card store__container-cardHidden">
          <div className="store__container-card--book store__container-card--book4"></div>
        </div>
        
      </div>
      <div className='store-div' onClick={() => setOpenPopup(true)}>
      <Button  id="btn-store" text={t('StorePage.buttonName')} width={300} height={85} className="store__button" />
      </div>
      

    </div>
	)
}

export default Store;
