import React from 'react';
import { Link } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import Header from '../UI/Header/Header';
import Footer from '../Footer/Footer';
import { useCart } from '../../context/CartContext';
import './StoreCart.css';

export default function StoreCart({
  burgerOpen,
  setBurgerOpen,
  handleLanguageChange,
}) {
  const { t } = useTranslation();
  const { items, updateQuantity, removeItem, subtotalCents } = useCart();

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
    <div className="store-cart">
      <Header
        handleLanguageChange={handleLanguageChange}
        burgerOpen={burgerOpen}
        setBurgerOpen={setBurgerOpen}
        nav1={<li><a href="/#">{t('HomePage.home')}</a></li>}
        nav3={<li onClick={() => handleScrollToSection('footer')}>{t('HomePage.contact')}</li>}
        nav5={<li><Link to="/store/cart">{t('StorePage.cart')}</Link></li>}
      />
      <div className="store-cart__link">
        <Link to="/#">Home</Link>
        <span className="store-cart__sep"> / </span>
        <Link to="/store">{t('StorePage.title')}</Link>
        <span className="store-cart__sep"> / </span>
        <span>{t('StorePage.cart')}</span>
      </div>
      <main className="store-cart__main">
        <h1 className="store-cart__title">{t('StorePage.cart')}</h1>
        {items.length === 0 ? (
          <div className="store-cart__empty">
            <p>{t('StorePage.emptyCart')}</p>
            <Link to="/store" className="store-cart__btn">{t('StorePage.backToStore')}</Link>
          </div>
        ) : (
          <>
            <ul className="store-cart__list">
              {items.map((item) => (
                <li key={`${item.product_id}-${item.variant_id}`} className="store-cart__row">
                  <div className="store-cart__row-image">
                    {item.image ? (
                      <img src={item.image} alt={item.title} />
                    ) : (
                      <div className="store-cart__row-placeholder" />
                    )}
                  </div>
                  <div className="store-cart__row-info">
                    <span className="store-cart__row-title">{item.title}</span>
                    <span className="store-cart__row-price">${((item.price || 0) * item.quantity / 100).toFixed(2)}</span>
                  </div>
                  <div className="store-cart__row-qty">
                    <input
                      type="number"
                      min={1}
                      value={item.quantity}
                      onChange={(e) => {
                        const v = Math.max(0, parseInt(e.target.value, 10) || 0);
                        updateQuantity(item.product_id, item.variant_id, v);
                      }}
                    />
                  </div>
                  <button
                    type="button"
                    className="store-cart__row-remove"
                    onClick={() => removeItem(item.product_id, item.variant_id)}
                    aria-label="Remove"
                  >
                    ×
                  </button>
                </li>
              ))}
            </ul>
            <div className="store-cart__summary">
              <p><strong>{t('StorePage.subtotal')}:</strong> ${(subtotalCents / 100).toFixed(2)}</p>
              <Link to="/store/checkout" className="store-cart__btn store-cart__btn--primary">
                {t('StorePage.checkout')}
              </Link>
            </div>
          </>
        )}
      </main>
      <Footer />
    </div>
  );
}
