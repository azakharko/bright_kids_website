import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import Header from '../UI/Header/Header';
import Footer from '../Footer/Footer';
import { useCart } from '../../context/CartContext';
import { calculateShipping, createCheckoutSession } from '../../api/storeApi';
import './StoreCheckout.css';

const SHIPPING_KEYS = [
  { key: 'standard', labelKey: 'standard' },
  { key: 'economy', labelKey: 'economy' },
  { key: 'express', labelKey: 'express' },
  { key: 'priority', labelKey: 'priority' },
  { key: 'printify_express', labelKey: 'express' },
];

const US_STATES = [
  { value: 'AL', label: 'Alabama' },
  { value: 'AK', label: 'Alaska' },
  { value: 'AZ', label: 'Arizona' },
  { value: 'AR', label: 'Arkansas' },
  { value: 'CA', label: 'California' },
  { value: 'CO', label: 'Colorado' },
  { value: 'CT', label: 'Connecticut' },
  { value: 'DE', label: 'Delaware' },
  { value: 'FL', label: 'Florida' },
  { value: 'GA', label: 'Georgia' },
  { value: 'ID', label: 'Idaho' },
  { value: 'IL', label: 'Illinois' },
  { value: 'IN', label: 'Indiana' },
  { value: 'IA', label: 'Iowa' },
  { value: 'KS', label: 'Kansas' },
  { value: 'KY', label: 'Kentucky' },
  { value: 'LA', label: 'Louisiana' },
  { value: 'ME', label: 'Maine' },
  { value: 'MD', label: 'Maryland' },
  { value: 'MA', label: 'Massachusetts' },
  { value: 'MI', label: 'Michigan' },
  { value: 'MN', label: 'Minnesota' },
  { value: 'MS', label: 'Mississippi' },
  { value: 'MO', label: 'Missouri' },
  { value: 'MT', label: 'Montana' },
  { value: 'NE', label: 'Nebraska' },
  { value: 'NV', label: 'Nevada' },
  { value: 'NH', label: 'New Hampshire' },
  { value: 'NJ', label: 'New Jersey' },
  { value: 'NM', label: 'New Mexico' },
  { value: 'NY', label: 'New York' },
  { value: 'NC', label: 'North Carolina' },
  { value: 'ND', label: 'North Dakota' },
  { value: 'OH', label: 'Ohio' },
  { value: 'OK', label: 'Oklahoma' },
  { value: 'OR', label: 'Oregon' },
  { value: 'PA', label: 'Pennsylvania' },
  { value: 'RI', label: 'Rhode Island' },
  { value: 'SC', label: 'South Carolina' },
  { value: 'SD', label: 'South Dakota' },
  { value: 'TN', label: 'Tennessee' },
  { value: 'TX', label: 'Texas' },
  { value: 'UT', label: 'Utah' },
  { value: 'VT', label: 'Vermont' },
  { value: 'VA', label: 'Virginia' },
  { value: 'WA', label: 'Washington' },
  { value: 'WV', label: 'West Virginia' },
  { value: 'WI', label: 'Wisconsin' },
  { value: 'WY', label: 'Wyoming' },
];

const ZIP_REGEX = /^\d{5}(-\d{4})?$/;
const EMAIL_REGEX = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
const PHONE_MASKED_REGEX = /^\d{3}-\d{4}-\d{3}$/;

function formatPhoneInput(value) {
  const digits = value.replace(/\D/g, '').slice(0, 10);
  if (digits.length <= 3) return digits;
  if (digits.length <= 7) return `${digits.slice(0, 3)}-${digits.slice(3)}`;
  return `${digits.slice(0, 3)}-${digits.slice(3, 7)}-${digits.slice(7)}`;
}

function validateAddress(address) {
  const required = [
    ['first_name', 'First name'],
    ['last_name', 'Last name'],
    ['email', 'Email'],
    ['phone', 'Phone'],
    ['region', 'State'],
    ['address1', 'Address'],
    ['city', 'City'],
    ['zip', 'ZIP code'],
  ];
  for (const [key, label] of required) {
    if (!address[key] || !String(address[key]).trim()) {
      return `${label} is required.`;
    }
  }
  if (!EMAIL_REGEX.test(address.email.trim())) {
    return 'Please enter a valid email address.';
  }
  if (!ZIP_REGEX.test(address.zip.trim())) {
    return 'ZIP must be XXXXX or XXXXX-XXXX (numbers only).';
  }
  if (!PHONE_MASKED_REGEX.test(address.phone.trim())) {
    return 'Phone must be in format XXX-XXXX-XXX.';
  }
  return null;
}

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
    country: 'US',
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
  const [error, setError] = useState(null);

  const lineItems = items.map((i) => ({
    product_id: i.product_id,
    variant_id: i.variant_id,
    quantity: i.quantity,
  }));

  const handleAddressChange = (e) => {
    const { name, value } = e.target;
    let nextValue = value;
    if (name === 'phone') {
      nextValue = formatPhoneInput(value);
    }
    setAddress((prev) => ({ ...prev, [name]: nextValue }));
    setShippingCosts(null);
    setSelectedShipping(null);
  };

  const fetchShipping = async () => {
    const validationError = validateAddress(address);
    if (validationError) {
      setError(validationError);
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
      setError(typeof err.message === 'string' ? err.message : 'Failed to get shipping options.');
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
      setError(typeof err.message === 'string' ? err.message : 'Failed to start checkout.');
    } finally {
      setLoadingPay(false);
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
          {error && (
            <p className="store-checkout__error" role="alert">
              {typeof error === 'string' ? error : 'Something went wrong. Please try again.'}
            </p>
          )}
          <div className="store-checkout__form">
            <input type="text" name="first_name" placeholder={t('StorePage.firstName')} value={address.first_name} onChange={handleAddressChange} required />
            <input type="text" name="last_name" placeholder={t('StorePage.lastName')} value={address.last_name} onChange={handleAddressChange} required />
            <input type="email" name="email" placeholder={t('StorePage.email')} value={address.email} onChange={handleAddressChange} required />
            <input type="tel" name="phone" placeholder="XXX-XXXX-XXX" value={address.phone} onChange={handleAddressChange} required maxLength={12} />
            <hr />
            <input type="text" name="country" placeholder={t('StorePage.country')} value={address.country} disabled aria-label={t('StorePage.country')} />
            <select name="region" value={address.region} onChange={handleAddressChange} aria-label={t('StorePage.region')} required>
              <option value="">{t('StorePage.region')}</option>
              {US_STATES.map(({ value, label }) => (
                <option key={value} value={value}>{label}</option>
              ))}
            </select>
            <input type="text" name="address1" placeholder={t('StorePage.address1')} value={address.address1} onChange={handleAddressChange} required />
            <input type="text" name="address2" placeholder={t('StorePage.address2')} value={address.address2} onChange={handleAddressChange} />
            <input type="text" name="city" placeholder={t('StorePage.city')} value={address.city} onChange={handleAddressChange} required />
            <input type="text" name="zip" placeholder={t('StorePage.zip')} value={address.zip} onChange={handleAddressChange} required pattern="\d{5}(-\d{4})?" title="XXXXX or XXXXX-XXXX" />
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
          <button
            type="button"
            onClick={handlePay}
            disabled={loadingPay || !selectedShipping}
            className="store-checkout__btn store-checkout__btn--primary"
          >
            {loadingPay ? t('StorePage.loading') : t('StorePage.payWithStripe')}
          </button>
        </section>
      </main>
      <Footer />
    </div>
  );
}
