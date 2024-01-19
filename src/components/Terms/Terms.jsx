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
		<p className='terms__main-title'>Terms of Use</p>
		<p className='terms__main-description'>Welcome to our online language school! By accessing and using our website, you agree to be bound by the following terms and conditions ("Terms of Use"). Please read them carefully before using our website.</p>

    <p className='terms__main-description terms__main-description2'>
     1.
     Introduction Our online language school provides courses and other educational services for children and adults. By accessing or using our website, you acknowledge that you have read, understood, and agreed to these Terms of Use, as well as our Privacy Policy.</p>

     <p className='terms__main-description terms__main-description2'>
     2.
     Use of the Website You agree to use our website only for lawful purposes and in a way that does not infringe the rights of, restrict or inhibit anyone else's use and enjoyment of the website. You are responsible for ensuring that all information you provide through the website is true, accurate, and complete.</p>

     <p className='terms__main-description terms__main-description2'>
     3.
     Intellectual Property Rights All intellectual property rights in our website, including but not limited to copyrights, trademarks, trade names, and logos, are owned by our online language school or its licensors. You agree not to reproduce, modify, distribute, or otherwise use any content from our website without our prior written consent.</p>

     <p className='terms__main-description terms__main-description2'>
     4.
     Payment and Refunds Our online language school offers a variety of payment options, including credit cards and online payment systems. You agree to pay all fees and charges associated with your use of our courses and services. We reserve the right to change our prices and payment terms at any time. Refunds are subject to our Refund Policy, which is available on our website.</p>

     <p className='terms__main-description terms__main-description2'>
     5.
     Disclaimer of Warranties Our online language school provides its courses and services "as is" and without any warranty or condition, express, implied or statutory. We do not warrant that our website will be uninterrupted, error-free, or free from viruses or other harmful components.</p>

     <p className='terms__main-description terms__main-description2'>
     6.
     Limitation of Liability Our online language school shall not be liable for any direct, indirect, incidental, special, or consequential damages arising out of or in connection with your use of our website, courses, or services. This includes, without limitation, damages for loss of profits, business interruption, or loss of data.</p>

     <p className='terms__main-description terms__main-description2'>
     7.
     Governing Law and Jurisdiction These Terms of Use shall be governed by and construed in accordance with the laws of the jurisdiction in which our online language school is based, without giving effect to any principles of conflicts of law. Any dispute arising out of or in connection with these Terms of Use shall be submitted to the exclusive jurisdiction of the courts of that jurisdiction.</p>

     <p className='terms__main-description terms__main-description2'>
     8.
     Changes to these Terms of Use We reserve the right to modify these Terms of Use at any time. Any changes will be posted on our website and will be effective immediately upon posting.</p>

     <p className='terms__main-description terms__main-description2'>
     9.
     Contact Us If you have any questions or comments about these Terms of Use or our website, please contact us at <a className='privacy__main-link' href="mailto:BrightKidsSchool2020@gmail.com">BrightKidsSchool2020@gmail.com</a></p>


     <p className='terms__main-description'>By using our website, you acknowledge that you have read, understood, and agreed to these Terms of Use, as well as our Privacy Policy.</p>

	  </div>

      <Footer />
    </div>
  );
}

export default Terms;
