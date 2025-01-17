import React from "react";
import "./style/ProjectStudent.css";
import Header from "../UI/Header/Header";
import { useTranslation } from "react-i18next";
import Footer from "../Footer/Footer";
import { Helmet } from "react-helmet";

import img1 from "./img/img1.png";
import img2 from "./img/img2.png";
import img3 from "./img/img3.png";
import img4 from "./img/img4.png";
import img5 from "./img/img5.png";
import img6 from "./img/img6.png";
import img7 from "./img/img7.png";
import img8 from "./img/img8.png";
import img9 from "./img/img9.png";
import img10 from "./img/img10.png";
import img12 from "./img/img12.png";
import img13 from "./img/img13.png";

import python1 from "./img/python/python1.png";
import python2 from "./img/python/python2.png";
import python3 from "./img/python/python3.png";
import python4 from "./img/python/python4.jpg";
import python5 from "./img/python/python5.jpg";
import python6 from "./img/python/python6.jpg";
import python7 from "./img/python/python7.png";
import python8 from "./img/python/python8.jpg";
import python9 from "./img/python/python9.png";
import python10 from "./img/python/python10.png";
import python11 from "./img/python/python11.png";
import python12 from "./img/python/python12.png";
import python13 from "./img/python/python13.png";
import python14 from "./img/python/python14.png";
import Button from "../UI/Button/Button";
import { Link } from "react-router-dom";

const ProjectStudent = ({
  setBurgerOpen,
  burgerOpen,
  handleLanguageChange,
}) => {
  let burgerPopup = burgerOpen ? "home__popup home__popup-open" : "home__popup";

	const { t, i18n } = useTranslation();

  const handleScrollToSection = (sectionId) => {
    setBurgerOpen(false);
    document.body.classList.remove("body-hidden", false);

    if (!sectionId || sectionId === "top") {
      window.scrollTo({ top: 0, behavior: "smooth" });
      return;
    }

    const sectionRef = document.getElementById(sectionId);
    if (sectionRef) {
      sectionRef.scrollIntoView({ behavior: "smooth" });
    }
  };

  const handleButton = () => {
    window.open("https://www.youtube.com/@BrightKidsUkrainianSchool", "_blank");
  };

  
	const handleLinkClick = () => {
		const currentUrl = new URL(window.location.origin);
		window.history.pushState({}, '', currentUrl);	
		setBurgerOpen(false);
		document.body.classList.remove("body-hidden", false);
	};

  return (
    <div id="gallery" className="gallery">
      <div className={burgerPopup}></div>
      <Helmet>
        <title>Bright Kids Ukrainian Online School</title>
      </Helmet>

      <Header
        handleLanguageChange={handleLanguageChange}
        burgerOpen={burgerOpen}
        setBurgerOpen={setBurgerOpen}
        nav1={
          <li>
            <a href="/">{t("HomePage.home")}</a>
          </li>
        }
        nav3={
          <li onClick={() => handleScrollToSection("footer")}>
            {t("HomePage.contact")}
          </li>
        }
        nav4={<Link onClick={handleLinkClick} to={`/team/${i18n.language}`}>
					<li>{t("HomePage.team")}</li></Link>}
              nav5={<Link to={`https://payhip.com/BrightKidsUkrainianOnlineSchool`}>
                    <li>{t("HomePage.store")}</li></Link>}
      />

      <div className="gallery__box">
        <div className="link__web">
          <Link to={"/"}>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
            >
              <path
                fillRule="evenodd"
                clipRule="evenodd"
                d="M2.33537 7.87495C1.79491 9.00229 1.98463 10.3208 2.36407 12.9579L2.64284 14.8952C3.13025 18.2827 3.37396 19.9764 4.54903 20.9882C5.72409 22 7.44737 22 10.8939 22H13.1061C16.5526 22 18.2759 22 19.451 20.9882C20.626 19.9764 20.8697 18.2827 21.3572 14.8952L21.6359 12.9579C22.0154 10.3208 22.2051 9.00229 21.6646 7.87495C21.1242 6.7476 19.9738 6.06234 17.6731 4.69181L16.2882 3.86687C14.199 2.62229 13.1543 2 12 2C10.8457 2 9.80104 2.62229 7.71175 3.86687L6.32691 4.69181C4.02619 6.06234 2.87583 6.7476 2.33537 7.87495ZM8.2501 17.9998C8.2501 17.5856 8.58589 17.2498 9.0001 17.2498H15.0001C15.4143 17.2498 15.7501 17.5856 15.7501 17.9998C15.7501 18.414 15.4143 18.7498 15.0001 18.7498H9.0001C8.58589 18.7498 8.2501 18.414 8.2501 17.9998Z"
                fill="#B41D8A"
              />
            </svg>
          </Link>

          <svg
            className="link__web-margin"
            xmlns="http://www.w3.org/2000/svg"
            width="7"
            height="10"
            viewBox="0 0 7 10"
            fill="none"
          >
            <path
              fillRule="evenodd"
              clipRule="evenodd"
              d="M0.96967 0.46967C1.26256 0.176777 1.73744 0.176777 2.03033 0.46967L6.03033 4.46967C6.32322 4.76256 6.32322 5.23744 6.03033 5.53033L2.03033 9.53033C1.73744 9.82322 1.26256 9.82322 0.96967 9.53033C0.676777 9.23744 0.676777 8.76256 0.96967 8.46967L4.43934 5L0.96967 1.53033C0.676777 1.23744 0.676777 0.762563 0.96967 0.46967Z"
              fill="black"
            />
          </svg>
          <span>{t(`GalleryPage.title`)}</span>
        </div>
        <p></p>
        <div className="gallery__box-title">{t(`GalleryPage.title`)}</div>

        <div className="gallery__container">
          <img src={img1} alt="img" />
          <img src={img2} alt="img" />
          <img src={img3} alt="img" />
          <img src={img4} alt="img" />
          <img src={img5} alt="img" />
          <img src={img6} alt="img" />
          <img src={img7} alt="img" />
          <img src={img8} alt="img" />
          <img src={img9} alt="img" />
          <img src={img10} alt="img" />
          <img src={img12} alt="img" />
          <img src={img13} alt="img" />
        </div>

        <div className="gallery__box-title">{t(`GalleryPage.title2`)}</div>

        <div className="gallery__container">
          <img className="img-python" src={python1} alt="img" />
          <img className="img-python" src={python2} alt="img" />
          <img className="img-python" src={python3} alt="img" />
          <img className="img-python" src={python4} alt="img" />
          <img className="img-python" src={python5} alt="img" />
          <img className="img-python" src={python6} alt="img" />
          <img className="img-python" src={python7} alt="img" />
          <img className="img-python" src={python8} alt="img" />
          <img className="img-python" src={python9} alt="img" />
          <img className="img-python" src={python10} alt="img" />
          <img className="img-python" src={python11} alt="img" />
          <img className="img-python" src={python12} alt="img" />
          <img className="img-python" src={python13} alt="img" />
          <img className="img-python" src={python14} alt="img" />
        </div>
      </div>

      <a
        onClick={handleButton}
        href="/www.youtube.com/@BrightKidsUkrainianSchool"
        target="_blank"
        className="gallery__buttons"
      >
        <Button
          width={350}
          height={80}
          className="gallery__buttons-button"
          text={t("CoursePage.button")}
        />
      </a>

      <Footer />
    </div>
  );
};

export default ProjectStudent;
