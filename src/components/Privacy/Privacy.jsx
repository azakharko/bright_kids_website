import React from 'react';
import { useTranslation } from 'react-i18next';
import Header from '../UI/Header/Header';
import Footer from '../Footer/Footer';
import "./style/Privacy.css"
import { Link } from 'react-router-dom';

const Privacy = ({ setBurgerOpen, burgerOpen }) => {
  const { t } = useTranslation();

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

  let burgerPopup = burgerOpen ? "home__popup home__popup-open" : "home__popup";


  const hadnleBurger = () => {
		setBurgerOpen(false);
		document.body.classList.remove("body-hidden", false);

	}

  return (
    <div className='privacy'>
      	<div className={burgerPopup}></div>

      <Header 
      
        burgerOpen={burgerOpen}
        setBurgerOpen={setBurgerOpen}
        nav1={<li><a href="/">{t("HomePage.home")}</a></li>}
        nav2={<Link onClick={hadnleBurger} to={"/projects"}>
				<li>{t("HomePage.gallery")}</li></Link>}
        nav3={<li onClick={() => handleScrollToSection('footer')}>{t("HomePage.contact")}</li>}
      />

	  <div className="privacy__main">
		<p className='privacy__main-title'>{t("Privacy.titile")}</p>
		<p className='privacy__main-description'>{t("Privacy.description")}</p>

		<p className='privacy__main-title'>{t("Privacy.subTitle1")}</p>
		<div className='privacy__main-description'>{t("Privacy.titleGround1")}

		<p className='privacy-margin'>{t("Privacy.titleGround2")}</p>

		<p className='privacy-margin'>{t("Privacy.titleGround3")}</p>
		</div>

		<p className='privacy__main-title'>{t("Privacy.subTitle2")}</p>
		<div className='privacy__main-description'>{t("Privacy.titleGround4")}

		<p className='privacy-margin'>{t("Privacy.titleGround5")}</p>

		<p className='privacy-margin'>{t("Privacy.titleGround6")}</p>
		</div>

		<p className='privacy__main-title'>{t("Privacy.subTitle3")}</p>
		<p className='privacy__main-description'>{t("Privacy.titleGround7")}</p>

    <p className='privacy__main-email'>{t("Privacy.emailTitle")} <a className='privacy__main-link' href="mailto:BrightKidsSchool2020@gmail.com">BrightKidsSchool2020@gmail.com</a></p>

		<p className='privacy__main-description'>{t("Privacy.description2")}</p>

		<p className='privacy__main-description'>{t("Privacy.description3")}</p>

	  </div>
    
    <Footer />
    </div>
  );
}

export default Privacy;
