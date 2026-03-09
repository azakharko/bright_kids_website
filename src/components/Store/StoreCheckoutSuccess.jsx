import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import Header from '../UI/Header/Header';
import Footer from '../Footer/Footer';
import { useCart } from '../../context/CartContext';
import { capturePayPalOrder } from '../../api/storeApi';
import './StoreCheckoutSuccess.css';

export default function StoreCheckoutSuccess({
  burgerOpen,
  setBurgerOpen,
  handleLanguageChange,
}) {
  const { t } = useTranslation();
  const { clearCart } = useCart();
  const [paypalStatus, setPaypalStatus] = useState(null); // null | 'loading' | 'done' | 'error'

  useEffect(() => {
    const params = new URLSearchParams(window.location.search);
    const token = params.get('token') || params.get('PayerID');
    const orderId = sessionStorage.getItem('paypal_order_id');
    const payloadRaw = sessionStorage.getItem('paypal_order_payload');
    if ((token || orderId) && payloadRaw) {
      setPaypalStatus('loading');
      const orderPayload = JSON.parse(payloadRaw);
      const paypalOrderId = token || orderId;
      capturePayPalOrder({ orderId: paypalOrderId, orderPayload })
        .then(() => {
          sessionStorage.removeItem('paypal_order_id');
          sessionStorage.removeItem('paypal_order_payload');
          clearCart();
          setPaypalStatus('done');
        })
        .catch(() => setPaypalStatus('error'));
      return;
    }
    clearCart();
  }, [clearCart]);

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
        {paypalStatus === 'loading' && <p>{t('StorePage.loading')}</p>}
        {paypalStatus === 'error' && <p className="store-success__error">Payment capture failed. Please contact support.</p>}
        {(paypalStatus === 'done' || paypalStatus === null) && (
          <>
            <h1 className="store-success__title">{t('StorePage.checkoutSuccess')}</h1>
            <Link to="/store" className="store-success__btn">{t('StorePage.backToStore')}</Link>
          </>
        )}
      </main>
      <Footer />
    </div>
  );
}
