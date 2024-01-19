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

  return (
    <div className='refund'>
      <div className={burgerPopup}></div>
      
      <Header 
        burgerOpen={burgerOpen}
        setBurgerOpen={setBurgerOpen}
        nav1={<li><a href="/">{t("HomePage.home")}</a></li>}
        nav2={<Link onClick={() => setBurgerOpen(false)} to={"/projects"}>
				<li>{t("HomePage.gallery")}</li></Link>}
	    	nav3={<li onClick={() => handleScrollToSection('footer')}>{t("HomePage.contact")}</li>}
      />

	  <div className="refund__main">
		<p className='refund__main-title'>Refund policy</p>

		<div className='refund__main-title'>Trial Lesson: <span className='refund__main-description'>We offer a free trial lesson for group classes and a half-price trial lesson for individual classes. This allows prospective students to experience our teaching style and determine if our classes are right for them before committing to a paid subscription.</span></div>

    <div className='refund__main-title'>Subscription Model: <span className='refund__main-description'>Our classes are offered on a subscription basis, with students paying for a certain number of classes in advance. We offer different subscription options depending on the number of classes a student wishes to purchase.</span></div>

    <div className='refund__main-title'>Refund Policy: <span className='refund__main-description'>We understand that circumstances can change and sometimes refunds may be necessary. Our refund policy is as follows: </span></div>

    <p className='terms__main-description terms__main-description2'>
     1.
     If a student decides to cancel their subscription before taking any classes, a full refund will be issued.</p>

     <p className='terms__main-description terms__main-description2'>
     2.
     If a student decides to cancel their subscription after taking one or more classes, a pro-rated refund will be issued based on the number of classes remaining in the subscription.</p>

     <p className='terms__main-description terms__main-description2'>
     3.
     We do not offer refunds for classes that have already been taken.</p>

     <p className='terms__main-description terms__main-description2'>
     4.
     Refunds will be issued within 10 business days of the cancellation request. </p>


		<p className='refund__main-description'>By default, refund will be issued using the same payment method as original payment, unless client explicitly request another way. We support direct bank account deposits, credit and debit cards, PayPal, Venmo and Zelle. We do not support cash.</p>

    <p className='refund__main-description'>We hope this refund policy provides clarity and assurance to our students, while also allowing us to operate our online school in a sustainable manner.</p>
		
	  </div>

      <Footer />
    </div>
  );
}

export default Refund;
