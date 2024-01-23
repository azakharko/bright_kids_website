import React from 'react';
import { useTranslation } from 'react-i18next';
import Header from '../UI/Header/Header';
import Footer from '../Footer/Footer';
import "./style/Refund.css"
import { Link } from 'react-router-dom';

const Refund = ({ setBurgerOpen, burgerOpen }) => {
  const { t } = useTranslation();

	let burgerPopup = burgerOpen ? "home__popup home__popup-open" : "home__popup";

  const handleScrollToSection = (sectionId) => {
    setBurgerOpen(false);
    document.body.classList.remove("body-hidden", false);

    if (!sectionId || sectionId === 'top') {
      window.scrollTo({ top: 0, behavior: 'smooth' });
      return;
    }

    const sectionRef = document.getElementById(sectionId);
    if (sectionRef) {
      sectionRef.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const hadnleBurger = () => {
		setBurgerOpen(false);
		document.body.classList.remove("body-hidden", false);

	}

  return (
    <div className='refund'>
      <div className={burgerPopup}></div>
      
      <Header 
        burgerOpen={burgerOpen}
        setBurgerOpen={setBurgerOpen}
        nav1={<li><a href="/">{t("HomePage.home")}</a></li>}
        nav2={<Link onClick={hadnleBurger} to={"/projects"}>
				<li>{t("HomePage.gallery")}</li></Link>}
	    	nav3={<li onClick={() => handleScrollToSection('footer')}>{t("HomePage.contact")}</li>}
      />

	  <div className="refund__main">
		<p className='refund__main-title'>{t(`RefundPolice.titile`)}</p>

		<div className='refund__main-title'>{t(`RefundPolice.subTitle1`)}     <span className='refund__main-description'>{t(`RefundPolice.description1`)}</span></div>

    <div className='refund__main-title'>{t(`RefundPolice.subTitle2`)} <span className='refund__main-description'>{t(`RefundPolice.description2`)}</span></div>

    <div className='refund__main-title'>{t(`RefundPolice.subTitle3`)} <span className='refund__main-description'>{t(`RefundPolice.description3`)}  </span></div>

    <p className='terms__main-description terms__main-description2'>
     1.
     {t(`RefundPolice.titleGround1`)}</p>

     <p className='terms__main-description terms__main-description2'>
     2.
     {t(`RefundPolice.titleGround2`)}</p>

     <p className='terms__main-description terms__main-description2'>
     3.
     {t(`RefundPolice.titleGround3`)}</p>

     <p className='terms__main-description terms__main-description2'>
     4.
     {t(`RefundPolice.titleGround4`)}</p>


		<p className='refund__main-description'>{t(`RefundPolice.description4`)}</p>

    <p className='refund__main-description'>{t(`RefundPolice.description5`)}</p>
		
	  </div>

      <Footer />
    </div>
  );
}

export default Refund;
