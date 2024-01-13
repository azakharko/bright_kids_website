import React from 'react';
import { useTranslation } from 'react-i18next';
import "./style/HomeCard.css";

const HomeCard = () => {
  const { t } = useTranslation();

  return (
    <div className='home-cards'>
      <div className="home-cards__card home-cards__first">
        {t("HomeCardPage.card1")}
      </div>

      <div className="home-cards__card">
        {t("HomeCardPage.card2")}
      </div>

      <div className="home-cards__card">
        {t("HomeCardPage.card3")}
      </div>

      <div className="home-cards__card">
        {t("HomeCardPage.card4")}
      </div>

      <div className="home-cards__card">
        {t("HomeCardPage.card5")}
      </div>

      <div className="home-cards__card home-cards__last">
        {t("HomeCardPage.card6")}
      </div>
    </div>
  );
};

export default HomeCard;
