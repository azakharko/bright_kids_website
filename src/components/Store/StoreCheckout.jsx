import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import Header from '../UI/Header/Header';
import Footer from '../Footer/Footer';
import { useCart } from '../../context/CartContext';
import { calculateShipping, createCheckoutSession, createPayPalOrder } from '../../api/storeApi';
import './StoreCheckout.css';

const SHIPPING_KEYS = [
  { key: 'standard', labelKey: 'standard' },
  { key: 'economy', labelKey: 'economy' },
  { key: 'express', labelKey: 'express' },
  { key: 'priority', labelKey: 'priority' },
  { key: 'printify_express', labelKey: 'express' },
];

export default function StoreCheckout({
  burgerOpen,
  setBurgerOpen,
  handleLanguageChange,
}) {
  const { t } = useTranslation();
  const { items, subtotalCents } = useCart();

  const [address, setAddress] = useState({
    first_name: '',
    last_name: '',
    email: '',
    phone: '',
    country: '',
    region: '',
    address1: '',
    address2: '',
    city: '',
    zip: '',
  });
  const [shippingCosts, setShippingCosts] = useState(null);
  const [selectedShipping, setSelectedShipping] = useState(null);
  const [loadingShipping, setLoadingShipping] = useState(false);
  const [loadingPay, setLoadingPay] = useState(false);
  const [loadingPayPal, setLoadingPayPal] = useState(false);
  const [error, setError] = useState(null);

  const lineItems = items.map((i) => ({
    product_id: i.product_id,
    variant_id: i.variant_id,
    quantity: i.quantity,
  }));

  const handleAddressChange = (e) => {
    const { name, value } = e.target;
    setAddress((prev) => ({ ...prev, [name]: value }));
    setShippingCosts(null);
    setSelectedShipping(null);
  };

  const fetchShipping = async () => {
    if (!address.first_name || !address.last_name || !address.email || !address.country || !address.address1 || !address.city || !address.zip) {
      setError('Please fill required address fields.');
      return;
    }
    setError(null);
    setLoadingShipping(true);
    try {
      const res = await calculateShipping({
        line_items: lineItems,
        address_to: address,
      });
      setShippingCosts(res);
    } catch (err) {
      setError(err.message || 'Failed to get shipping options');
    } finally {
      setLoadingShipping(false);
    }
  };

  const handlePay = async () => {
    if (!selectedShipping || !shippingCosts) {
      setError('Please select a shipping option.');
      return;
    }
    setError(null);
    setLoadingPay(true);
    const base = window.location.origin + (window.location.pathname || '/') + (window.location.search || '');
    const successUrl = base + (base.endsWith('#') ? '' : '#') + '/store/checkout/success';
    const cancelUrl = base + (base.endsWith('#') ? '' : '#') + '/store/checkout/cancel';
    try {
      const shippingCostCents = shippingCosts[selectedShipping] ?? 0;
      const res = await createCheckoutSession({
        line_items: lineItems,
        address_to: address,
        shipping_method: selectedShipping === 'standard' ? 1 : selectedShipping === 'economy' ? 4 : selectedShipping === 'express' ? 2 : selectedShipping === 'priority' ? 3 : selectedShipping === 'printify_express' ? 5 : 1,
        shipping_cost_cents: shippingCostCents,
        subtotal_cents: subtotalCents,
        success_url: successUrl,
        cancel_url: cancelUrl,
      });
      if (res.url) {
        window.location.href = res.url;
        return;
      }
      setError('No checkout URL returned');
    } catch (err) {
      setError(err.message || 'Failed to start checkout');
    } finally {
      setLoadingPay(false);
    }
  };

  const handlePayPal = async () => {
    if (!selectedShipping || !shippingCosts) {
      setError('Please select a shipping option.');
      return;
    }
    setError(null);
    setLoadingPayPal(true);
    const base = window.location.origin + (window.location.pathname || '/') + (window.location.search || '');
    const successUrl = base + (base.endsWith('#') ? '' : '#') + '/store/checkout/success';
    const cancelUrl = base + (base.endsWith('#') ? '' : '#') + '/store/checkout/cancel';
    try {
      const shippingCostCents = shippingCosts[selectedShipping] ?? 0;
      const shippingMethodNum = selectedShipping === 'standard' ? 1 : selectedShipping === 'economy' ? 4 : selectedShipping === 'express' ? 2 : selectedShipping === 'priority' ? 3 : selectedShipping === 'printify_express' ? 5 : 1;
      const res = await createPayPalOrder({
        line_items: lineItems,
        address_to: address,
        shipping_method: shippingMethodNum,
        shipping_cost_cents: shippingCostCents,
        subtotal_cents: subtotalCents,
        success_url: successUrl,
        cancel_url: cancelUrl,
      });
      if (res.approvalUrl && res.orderId) {
        const orderPayload = { li: lineItems, a: address, s: shippingMethodNum };
        sessionStorage.setItem('paypal_order_payload', JSON.stringify(orderPayload));
        sessionStorage.setItem('paypal_order_id', res.orderId);
        window.location.href = res.approvalUrl;
        return;
      }
      setError('No PayPal approval URL returned');
    } catch (err) {
      setError(err.message || 'Failed to start PayPal checkout');
    } finally {
      setLoadingPayPal(false);
    }
  };

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

  if (items.length === 0) {
    return (
      <div className="store-checkout">
        <Header
          handleLanguageChange={handleLanguageChange}
          burgerOpen={burgerOpen}
          setBurgerOpen={setBurgerOpen}
          nav1={<li><a href="/#">{t('HomePage.home')}</a></li>}
          nav3={<li onClick={() => handleScrollToSection('footer')}>{t('HomePage.contact')}</li>}
          nav5={<li><Link to="/store/cart">{t('StorePage.cart')}</Link></li>}
        />
        <main className="store-checkout__main">
          <p>{t('StorePage.emptyCart')}</p>
          <Link to="/store">{t('StorePage.backToStore')}</Link>
        </main>
      </div>
    );
  }

  const shippingCostCents = selectedShipping && shippingCosts ? (shippingCosts[selectedShipping] ?? 0) : 0;
  const totalCents = subtotalCents + shippingCostCents;

  return (
    <div className="store-checkout">
      <Header
        handleLanguageChange={handleLanguageChange}
        burgerOpen={burgerOpen}
        setBurgerOpen={setBurgerOpen}
        nav1={<li><a href="/#">{t('HomePage.home')}</a></li>}
        nav3={<li onClick={() => handleScrollToSection('footer')}>{t('HomePage.contact')}</li>}
        nav5={<li><Link to="/store/cart">{t('StorePage.cart')}</Link></li>}
      />
      <div className="store-checkout__link">
        <Link to="/#">Home</Link>
        <span className="store-checkout__sep"> / </span>
        <Link to="/store">{t('StorePage.title')}</Link>
        <span className="store-checkout__sep"> / </span>
        <span>{t('StorePage.checkout')}</span>
      </div>
      <main className="store-checkout__main">
        <h1 className="store-checkout__title">{t('StorePage.checkout')}</h1>

        <section className="store-checkout__section">
          <h2>{t('StorePage.address')}</h2>
          <div className="store-checkout__form">
            <input type="text" name="first_name" placeholder={t('StorePage.firstName')} value={address.first_name} onChange={handleAddressChange} required />
            <input type="text" name="last_name" placeholder={t('StorePage.lastName')} value={address.last_name} onChange={handleAddressChange} required />
            <input type="email" name="email" placeholder={t('StorePage.email')} value={address.email} onChange={handleAddressChange} required />
            <input type="tel" name="phone" placeholder={t('StorePage.phone')} value={address.phone} onChange={handleAddressChange} />
            <input type="text" name="country" placeholder={t('StorePage.country')} value={address.country} onChange={handleAddressChange} required />
            <input type="text" name="region" placeholder={t('StorePage.region')} value={address.region} onChange={handleAddressChange} />
            <input type="text" name="address1" placeholder={t('StorePage.address1')} value={address.address1} onChange={handleAddressChange} required />
            <input type="text" name="address2" placeholder={t('StorePage.address2')} value={address.address2} onChange={handleAddressChange} />
            <input type="text" name="city" placeholder={t('StorePage.city')} value={address.city} onChange={handleAddressChange} required />
            <input type="text" name="zip" placeholder={t('StorePage.zip')} value={address.zip} onChange={handleAddressChange} required />
          </div>
          <button type="button" onClick={fetchShipping} disabled={loadingShipping} className="store-checkout__btn">
            {loadingShipping ? t('StorePage.loading') : t('StorePage.selectShipping')}
          </button>
        </section>

        {shippingCosts && (
          <section className="store-checkout__section">
            <h2>{t('StorePage.shipping')}</h2>
            <div className="store-checkout__shipping">
              {SHIPPING_KEYS.filter(({ key }) => shippingCosts[key] != null).map(({ key, labelKey }) => (
                <label key={key} className="store-checkout__radio">
                  <input
                    type="radio"
                    name="shipping"
                    value={key}
                    checked={selectedShipping === key}
                    onChange={() => setSelectedShipping(key)}
                  />
                  <span>{t(`StorePage.${labelKey}`)} — ${((shippingCosts[key] || 0) / 100).toFixed(2)}</span>
                </label>
              ))}
            </div>
          </section>
        )}

        <section className="store-checkout__section">
          <h2>{t('StorePage.total')}</h2>
          <p>{t('StorePage.subtotal')}: ${(subtotalCents / 100).toFixed(2)}</p>
          {selectedShipping && shippingCostCents > 0 && (
            <p>{t('StorePage.shipping')}: ${(shippingCostCents / 100).toFixed(2)}</p>
          )}
          <p><strong>{t('StorePage.total')}: ${(totalCents / 100).toFixed(2)}</strong></p>
          {error && <p className="store-checkout__error">{error}</p>}
          <button
            type="button"
            onClick={handlePay}
            disabled={loadingPay || loadingPayPal || !selectedShipping}
            className="store-checkout__btn store-checkout__btn--primary"
          >
            {loadingPay ? t('StorePage.loading') : t('StorePage.payWithStripe')}
          </button>
          <button
            type="button"
            onClick={handlePayPal}
            disabled={loadingPay || loadingPayPal || !selectedShipping}
            className="store-checkout__btn store-checkout__btn--paypal"
            style={{ marginLeft: '0.5rem' }}
          >
            {loadingPayPal ? t('StorePage.loading') : t('StorePage.payWithPayPal')}
          </button>
        </section>
      </main>
      <Footer />
    </div>
  );
}
