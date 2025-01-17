import React, { useRef, useState } from 'react';
import { useTranslation } from 'react-i18next';
import { Link } from 'react-router-dom';
import Button from '../Button/Button';

const Header = ({ nav1, nav2, nav3, nav4, nav5, burgerOpen, setBurgerOpen, handleLanguageChange }) => {
  let timerId;
  const myRef = useRef(null);
  const { i18n } = useTranslation();


  const [animationPopupOpen, setAnimationPopupOpen] = useState(false);
  let burgerRow1 = burgerOpen ? "box__burger-row box__burger-row1 box__burger-row1Show" : "box__burger-row box__burger-row1";
  let burgerRow2 = burgerOpen ? "box__burger-row box__burger-row2 box__burger-row2Show" : "box__burger-row box__burger-row2";
  let burgerRow3 = burgerOpen ? "box__burger-row box__burger-row3 box__burger-row3Show" : "box__burger-row box__burger-row3";
  let burgerNavigation = burgerOpen ? "home__header-nav home__header-nav--open" : "home__header-nav";
  let animationPopup = animationPopupOpen ? "home__crossing home__crossing-open" : "home__crossing";
  let animationPopup1 = animationPopupOpen ? "home__crossing-popup1 home__crossing-popup1--open" : "home__crossing-popup1";
  let animationPopup2 = animationPopupOpen ? "home__crossing-popup2 home__crossing-popup2--open" : "home__crossing-popup2";


  const hadleOpenBurger = () => {
    setBurgerOpen(!burgerOpen);

    document.body.classList.toggle("body-hidden", !burgerOpen);
    myRef.current.scrollIntoView();
  }


  const handleChangeLanguage = (e) => {
    clearTimeout(timerId);
    setAnimationPopupOpen(true);

    timerId = setTimeout(() => {
      setAnimationPopupOpen(false);
    }, 1600);

    const thisLanguage = e.target.value;
    i18n.changeLanguage(thisLanguage);
    localStorage.setItem('selectedLanguage', thisLanguage);
    const currentUrl = new URL(window.location.href);
    let pathWithoutLanguage = currentUrl.pathname;
    let pathLink = currentUrl.href.replace(currentUrl.origin, '');
    pathWithoutLanguage = `${pathLink}`;
    handleLanguageChange(thisLanguage, pathWithoutLanguage);
  };



  return (
    <header className="home__header" id='header' ref={myRef}>
      <noscript>
        <iframe title="gtm_frame" src='https://www.googletagmanager.com/ns.html?id=GTM-KMWP45N2' height='0' width='0' style='display:none;visibility:hidden'></iframe>
      </noscript>

      <div className={animationPopup}>
        <div className={animationPopup1}></div>
        <div className={animationPopup2}></div>
      </div>

      <div className="home__header-logo">
        <Link to={"/"}>
          <div className="logo"></div>
        </Link>
      </div>

      <nav className={burgerNavigation}>
        <ul>
          {nav1}
          {nav2}
          {nav3}
          {nav4}
          {nav5}
        </ul>
      </nav>

      <div className="home__header-box">
        <select value={localStorage.getItem('selectedLanguage')} onChange={handleChangeLanguage}>
          <option value="en">English</option>
          <option value="uk">Українська</option>
        </select>

        <a target='_blank' rel="noreferrer" href="tel:+15127868874">
          <Button id="btn-callus-header" width={200} height={60} className="home__header-button" text="+1 (512) 786-8874" />
        </a>

        <div className="box__burger" onClick={hadleOpenBurger}>
          <span className={burgerRow1}></span>
          <span className={burgerRow2}></span>
          <span className={burgerRow3}></span>
        </div>
      </div>
    </header>
  );
};

export default Header;
