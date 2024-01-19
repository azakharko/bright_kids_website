import React from 'react';
import { useTranslation } from 'react-i18next';
import Header from '../UI/Header/Header';
import Footer from '../Footer/Footer';
import "./style/Privacy.css"

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

  return (
    <div className='privacy'>
      <Header 
      
        burgerOpen={burgerOpen}
        setBurgerOpen={setBurgerOpen}
        nav1={<li><a href="/">{t("HomePage.home")}</a></li>}
        nav2={<a href={"/gallery"}>
				<p>{t("HomePage.gallery")}</p></a>}
        nav3={<li onClick={() => handleScrollToSection('footer')}>{t("HomePage.contact")}</li>}
      />

	  <div className="privacy__main">
		<p className='privacy__main-title'>Privacy Policy</p>
		<p className='privacy__main-description'>Our website, BrightKids.online, is committed to protecting the privacy of our users. This privacy policy outlines the types of personal information we collect, how we use it, and the steps we take to ensure it is protected.</p>

		<p className='privacy__main-title'>Information Collection and Use</p>
		<div className='privacy__main-description'>We collect personal information from users when they register for an account on our website, such as their name and email address. We also collect information about users' usage of the website, such as the pages they visit and the features they use.

		<p className='privacy-margin'>This information is used to personalize the user's experience on our website, such as by providing them with relevant content and recommendations. We may also use this information to improve the website and to contact users with important information or updates.</p>

		<p className='privacy-margin'>We do not sell or share personal information with third parties, except as required by law or to protect the safety and security of our users.</p>
		</div>

		<p className='privacy__main-title'>Security</p>
		<div className='privacy__main-description'>We take the protection of personal information seriously and have implemented appropriate technical and organizational measures to protect it from unauthorized access, use, disclosure, or destruction.

		<p className='privacy-margin'>Our website uses Secure Sockets Layer (SSL) technology to encrypt sensitive information such as login credentials and payment information.</p>

		<p className='privacy-margin'>Users are responsible for maintaining the confidentiality of their login credentials and should not share them with anyone.</p>
		</div>

		<p className='privacy__main-title'>Changes to this Privacy Policy</p>
		<p className='privacy__main-description'>We may update this privacy policy from time to time. If we make any changes, we will post the new policy on our website and update the "Effective Date" at the top of the policy.</p>

    <p className='privacy__main-email'>Contact Us: <a className='privacy__main-link' href="mailto:BrightKidsSchool2020@gmail.com">BrightKidsSchool2020@gmail.com</a></p>

		<p className='privacy__main-description'>If you have any questions about this privacy policy or the collection and use of personal information on our website, please contact us by email.</p>

		<p className='privacy__main-description'>Effective Date: 01/01/2023</p>

	  </div>

      <Footer />
    </div>
  );
}

export default Privacy;
