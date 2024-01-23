import React from 'react';
import { useTranslation } from 'react-i18next';
import Header from '../UI/Header/Header';
import Footer from '../Footer/Footer';
import "./style/Terms.css"
import { Link } from 'react-router-dom';

const Terms = ({ setBurgerOpen, burgerOpen }) => {
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
    <div className='terms'>
	  <div className={burgerPopup}></div>

      <Header 
        burgerOpen={burgerOpen}
        setBurgerOpen={setBurgerOpen}
        nav1={<li><a href="/">{t("HomePage.home")}</a></li>}
        nav2={<Link onClick={hadnleBurger} to={"/projects"}>
				<li>{t("HomePage.gallery")}</li></Link>}   	
        nav3={<li onClick={() => handleScrollToSection('footer')}>{t("HomePage.contact")}</li>}
      />

	  <div className="terms__main">
		<p className='terms__main-title'>{t("Terms.titile")}</p>
		<p className='terms__main-description'>{t("Terms.subTitle1")}</p>

    <p className='terms__main-description terms__main-description2'>
     1.
     {t("Terms.titleGround1")}</p>

     <p className='terms__main-description terms__main-description2'>
     2.
     {t("Terms.titleGround2")}</p>

     <p className='terms__main-description terms__main-description2'>
     3.
     {t("Terms.titleGround3")}</p>

     <p className='terms__main-description terms__main-description2'>
     4.
     {t("Terms.titleGround4")}</p>

     <p className='terms__main-description terms__main-description2'>
     5.
     {t("Terms.titleGround5")}</p>

     <p className='terms__main-description terms__main-description2'>
     6.
     {t("Terms.titleGround6")}</p>

     <p className='terms__main-description terms__main-description2'>
     7.
     {t("Terms.titleGround7")}</p>

     <p className='terms__main-description terms__main-description2'>
     8.
     {t("Terms.titleGround8")}</p>

     <p className='terms__main-description terms__main-description2'>
     9.
     {t("Terms.titleGround9")} <a className='privacy__main-link' href="mailto:BrightKidsSchool2020@gmail.com">BrightKidsSchool2020@gmail.com</a></p>


     <p className='terms__main-description'>{t("Terms.description2")}</p>

	  </div>

      <Footer />
    </div>
  );
}

export default Terms;
