import React from 'react';
import { Link } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import Header from '../UI/Header/Header';
import Footer from '../Footer/Footer';
import './StoreCheckoutSuccess.css';

export default function StoreCheckoutCancel({
  burgerOpen,
  setBurgerOpen,
  handleLanguageChange,
}) {
  const { t } = useTranslation();

  const handleScrollToSection = (sectionId) => {
    setBurgerOpen(false);
    document.body.classList.remove('body-hidden');
    if (!sectionId || sectionId === 'top') {
      window.scrollTo({ top: 0, behavior: 'smooth' });
      return;
    }
    const sectionRef = document.getElementById(sectionId);
    if (sectionRef) sectionRef.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <div className="store-success">
      <Header
        handleLanguageChange={handleLanguageChange}
        burgerOpen={burgerOpen}
        setBurgerOpen={setBurgerOpen}
        nav1={<li><a href="/#">{t('HomePage.home')}</a></li>}
        nav3={<li onClick={() => handleScrollToSection('footer')}>{t('HomePage.contact')}</li>}
        nav5={<li><Link to="/store/cart">{t('StorePage.cart')}</Link></li>}
      />
      <main className="store-success__main">
        <h1 className="store-success__title">{t('StorePage.checkoutCancel')}</h1>
        <Link to="/store/checkout" className="store-success__btn">{t('StorePage.checkout')}</Link>
        <span style={{ margin: '0 0.5rem' }} />
        <Link to="/store" className="store-success__btn" style={{ background: 'transparent', color: '#B41D8A', border: '2px solid #B41D8A' }}>
          {t('StorePage.backToStore')}
        </Link>
      </main>
      <Footer />
    </div>
  );
}
