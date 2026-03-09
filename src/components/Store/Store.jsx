import React from 'react'
import { useTranslation } from 'react-i18next';
import { Link } from 'react-router-dom';
import "./style/Store.css"
import Button from '../UI/Button/Button';

const Store = () => {
  const { t } = useTranslation(); // useTranslation hook

  return (
    <div className='store'>
      <h3 className='store__title'>{t('StorePage.title')}</h3>
      <div className='store__container'>
        <div className="store__container-card">
          <div className="store__container-card--book store__container-card--book1"></div>
        </div>
        <div className="store__container-card">
          <div className="store__container-card--book store__container-card--book2"></div>
        </div>
        <div className="store__container-card store__container-cardHidden">
          <div className="store__container-card--book store__container-card--book3"></div>
        </div>
        <div className="store__container-card store__container-cardHidden">
          <div className="store__container-card--book store__container-card--book4"></div>
        </div>

      </div>
      <div className='store-div store-div--buttons'>
        <Link to="/store">
          <Button id="btn-store" text={t('StorePage.buttonName')} width={300} height={85} className="store__button" />
        </Link>
        <Link to="/store">
          <Button id="btn-order-tshirt" text={t('StorePage.orderTshirt')} width={300} height={85} className="store__button store__button--secondary" />
        </Link>
      </div>


    </div>
  )
}

export default Store;
