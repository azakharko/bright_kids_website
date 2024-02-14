import React, { useState, useEffect } from 'react';
import "./style/FormPopup.css";
import { useTranslation } from 'react-i18next';

const FormPopup = ({ status }) => {
  const [isVisible, setIsVisible] = useState(false);
  const { t } = useTranslation();

  useEffect(() => {
    if (status) {
      setIsVisible(true);
      setTimeout(() => {
        setIsVisible(false);
      }, 2900); 
    }
  }, [status]);

  return (
    <div className={`form-popup ${isVisible ? 'form-popup--active' : ''}`}>
      <p>{t(`Form.successfully-send`)}</p>
    </div>
  );
}

export default FormPopup;
