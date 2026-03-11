import React, { useEffect, useState } from 'react';
import { useTranslation } from 'react-i18next';
import { Link } from 'react-router-dom';
import Header from '../UI/Header/Header';
import Footer from '../Footer/Footer';
import { fetchProducts } from '../../api/storeApi';
import { useCart } from '../../context/CartContext';
import './StoreCatalog.css';

function ProductCard({ product }) {
  const { t } = useTranslation();
  const image = product.images?.[0]?.src || product.variants?.[0]?.image || null;
  // Use default variant price so store listing matches product detail and checkout
  const displayPrice = product.variants?.length
    ? (() => {
        const defaultVariant = product.variants.find((v) => v.is_default === true);
        const fallback = product.variants.find((v) => v.is_enabled !== false) || product.variants[0];
        const variant = defaultVariant || fallback;
        return variant ? (variant.price ?? variant.cost ?? 0) : 0;
      })()
    : 0;

  return (
    <div className="store-catalog__card">
      <Link to={`/store/product/${product.id}`} className="store-catalog__card-link">
        <div className="store-catalog__card-image-wrap">
          {image ? (
            <img src={image} alt={product.title} className="store-catalog__card-image" />
          ) : (
            <div className="store-catalog__card-image store-catalog__card-image--placeholder" />
          )}
        </div>
        <h3 className="store-catalog__card-title">{product.title}</h3>
        <p className="store-catalog__card-price">
          {displayPrice > 0 ? `$${(displayPrice / 100).toFixed(2)}` : '—'}
        </p>
        <span className="store-catalog__card-cta">{t('StorePage.viewProduct')}</span>
      </Link>
    </div>
  );
}

export default function StoreCatalog({
  burgerOpen,
  setBurgerOpen,
  handleLanguageChange,
  setOpenPopup,
  openPopup,
}) {
  const { t } = useTranslation();
  const { count } = useCart();
  const [data, setData] = useState({ data: [], current_page: 1 });
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    let cancelled = false;
    setLoading(true);
    setError(null);
    fetchProducts(20, 1)
      .then((res) => {
        if (!cancelled) setData(res);
      })
      .catch((err) => {
        if (!cancelled) setError(typeof err.message === 'string' ? err.message : 'Failed to load products.');
      })
      .finally(() => {
        if (!cancelled) setLoading(false);
      });
    return () => { cancelled = true; };
  }, []);

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
    <div className="store-catalog">
      <Header
        handleLanguageChange={handleLanguageChange}
        burgerOpen={burgerOpen}
        setBurgerOpen={setBurgerOpen}
        nav1={<li><a href="/#">{t('HomePage.home')}</a></li>}
        nav3={<li onClick={() => handleScrollToSection('footer')}>{t('HomePage.contact')}</li>}
        nav5={
          <li>
            <Link to="/store/cart">{t('StorePage.cart')} {count > 0 ? `(${count})` : ''}</Link>
          </li>
        }
      />
      <div className="store-catalog__link">
        <Link to="/#">Home</Link>
        <span className="store-catalog__sep"> / </span>
        <span>{t('StorePage.title')}</span>
      </div>
      <main className="store-catalog__main">
        <h1 className="store-catalog__title">{t('StorePage.title')}</h1>
        {loading && <p className="store-catalog__loading">{t('StorePage.loading')}</p>}
        {error && <p className="store-catalog__error" role="alert">{typeof error === 'string' ? error : 'Failed to load products.'}</p>}
        {!loading && !error && data.data?.length === 0 && (
          <p className="store-catalog__empty">No products yet.</p>
        )}
        {!loading && !error && data.data?.length > 0 && (
          <div className="store-catalog__grid">
            {data.data.map((product) => (
              <ProductCard key={product.id} product={product} />
            ))}
          </div>
        )}
      </main>
      <Footer />
    </div>
  );
}
