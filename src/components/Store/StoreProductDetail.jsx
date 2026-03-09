import React, { useEffect, useState } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import Header from '../UI/Header/Header';
import Footer from '../Footer/Footer';
import { fetchProduct } from '../../api/storeApi';
import { useCart } from '../../context/CartContext';
import './StoreProductDetail.css';

export default function StoreProductDetail({
  burgerOpen,
  setBurgerOpen,
  handleLanguageChange,
}) {
  const { id } = useParams();
  const navigate = useNavigate();
  const { t } = useTranslation();
  const { addItem } = useCart();
  const [product, setProduct] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [selectedVariantId, setSelectedVariantId] = useState(null);
  const [quantity, setQuantity] = useState(1);

  useEffect(() => {
    if (!id) return;
    let cancelled = false;
    setLoading(true);
    setError(null);
    fetchProduct(id)
      .then((p) => {
        if (!cancelled) {
          setProduct(p);
          const first = p.variants?.find((v) => v.is_enabled !== false) || p.variants?.[0];
          if (first) setSelectedVariantId(first.id);
        }
      })
      .catch((err) => {
        if (!cancelled) setError(typeof err.message === 'string' ? err.message : 'Failed to load product.');
      })
      .finally(() => {
        if (!cancelled) setLoading(false);
      });
    return () => { cancelled = true; };
  }, [id]);

  const selectedVariant = product?.variants?.find((v) => v.id === selectedVariantId);
  const price = selectedVariant ? (selectedVariant.price ?? selectedVariant.cost ?? 0) : 0;
  const image = product?.images?.[0]?.src || selectedVariant?.image || null;

  const handleAddToCart = () => {
    if (!product || !selectedVariant) return;
    addItem({
      product_id: product.id,
      variant_id: selectedVariant.id,
      quantity,
      title: product.title,
      price,
      image: image || undefined,
    });
    navigate('/store/cart');
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

  if (loading) {
    return (
      <div className="store-pdp">
        <Header
          handleLanguageChange={handleLanguageChange}
          burgerOpen={burgerOpen}
          setBurgerOpen={setBurgerOpen}
          nav1={<li><a href="/#">{t('HomePage.home')}</a></li>}
          nav3={<li onClick={() => handleScrollToSection('footer')}>{t('HomePage.contact')}</li>}
          nav5={<li><a href="/#/store/cart">{t('StorePage.cart')}</a></li>}
        />
        <p className="store-pdp__loading">{t('StorePage.loading')}</p>
      </div>
    );
  }

  if (error || !product) {
    return (
      <div className="store-pdp">
        <Header
          handleLanguageChange={handleLanguageChange}
          burgerOpen={burgerOpen}
          setBurgerOpen={setBurgerOpen}
          nav1={<li><a href="/#">{t('HomePage.home')}</a></li>}
          nav3={<li onClick={() => handleScrollToSection('footer')}>{t('HomePage.contact')}</li>}
          nav5={<li><a href="/#/store/cart">{t('StorePage.cart')}</a></li>}
        />
        <p className="store-pdp__error" role="alert">{typeof error === 'string' ? error : 'Product not found'}</p>
        <button type="button" onClick={() => navigate('/store')}>{t('StorePage.backToStore')}</button>
      </div>
    );
  }

  const enabledVariants = product.variants?.filter((v) => v.is_enabled !== false) || product.variants || [];

  return (
    <div className="store-pdp">
      <Header
        handleLanguageChange={handleLanguageChange}
        burgerOpen={burgerOpen}
        setBurgerOpen={setBurgerOpen}
        nav1={<li><a href="/#">{t('HomePage.home')}</a></li>}
        nav3={<li onClick={() => handleScrollToSection('footer')}>{t('HomePage.contact')}</li>}
        nav5={<li><a href="/#/store/cart">{t('StorePage.cart')}</a></li>}
      />
      <div className="store-pdp__link">
        <a href="/#">Home</a>
        <span className="store-pdp__sep"> / </span>
        <a href="/#/store">{t('StorePage.title')}</a>
        <span className="store-pdp__sep"> / </span>
        <span>{product.title}</span>
      </div>
      <main className="store-pdp__main">
        <div className="store-pdp__gallery">
          {image ? (
            <img src={image} alt={product.title} className="store-pdp__image" />
          ) : (
            <div className="store-pdp__image store-pdp__image--placeholder" />
          )}
        </div>
        <div className="store-pdp__info">
          <h1 className="store-pdp__title">{product.title}</h1>
          <p className="store-pdp__price">${(price / 100).toFixed(2)}</p>
          {product.description && (
            <div className="store-pdp__description" dangerouslySetInnerHTML={{ __html: product.description }} />
          )}
          {enabledVariants.length > 1 && (
            <div className="store-pdp__variants">
              <label>{t('StorePage.quantity')} / variant</label>
              <select
                value={selectedVariantId ?? ''}
                onChange={(e) => setSelectedVariantId(Number(e.target.value))}
                className="store-pdp__select"
              >
                {enabledVariants.map((v) => (
                  <option key={v.id} value={v.id}>
                    {v.title} — ${((v.price ?? v.cost ?? 0) / 100).toFixed(2)}
                  </option>
                ))}
              </select>
            </div>
          )}
          <div className="store-pdp__qty">
            <label>{t('StorePage.quantity')}</label>
            <input
              type="number"
              min={1}
              value={quantity}
              onChange={(e) => setQuantity(Math.max(1, parseInt(e.target.value, 10) || 1))}
              className="store-pdp__input"
            />
          </div>
          <button type="button" className="store-pdp__add" onClick={handleAddToCart}>
            {t('StorePage.addToCart')}
          </button>
        </div>
      </main>
      <Footer />
    </div>
  );
}
