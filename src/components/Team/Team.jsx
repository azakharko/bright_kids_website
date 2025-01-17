import React, { useEffect, useState } from "react";
import "./style/Team.css";
import Header from "../UI/Header/Header";
import { useTranslation } from "react-i18next";
import Footer from "../Footer/Footer";
import { Helmet } from "react-helmet";

import { Link } from "react-router-dom";

import teacher1 from "./img/teacher1.png";
import teacher2 from "./img/teacher2.png";
import teacher3 from "./img/teacher3.png";
import teacher4 from "./img/teacher4.png";
import teacher5 from "./img/teacher5.png";
import teacher6 from "./img/teacher6.png";
import teacher7 from "./img/teacher7.png";
import teacher8 from "./img/teacher8.png";
import teacher9 from "./img/teacher9.png";
import teacher10 from "./img/teacher10.png";
import teacher11 from "./img/teacher11.png";
import teacher12 from "./img/teacher12.png";
import teacher13 from "./img/teacher13.png";
import teacher14 from "./img/teacher14.png";
import teacher15 from "./img/teacher15.png";



const Team = ({
  setBurgerOpen,
  burgerOpen,
  handleLanguageChange,
}) => {
  let burgerPopup = burgerOpen ? "home__popup home__popup-open" : "home__popup";

  const { t, i18n } = useTranslation();

  const [teamArr, setTeamArr] = useState([]);

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

  const handleLinkClick = () => {
		const currentUrl = new URL(window.location.origin);
		window.history.pushState({}, '', currentUrl);	
		setBurgerOpen(false);
		document.body.classList.remove("body-hidden", false);
	};

  const generateTeamArr = () => [
    {
      id: 0,
      img: teacher1,
      name: t("Team.teacher1.name"),
      position: t("Team.teacher1.position"),
      education: t("Team.teacher1.education"),
      hobby: t("Team.teacher1.hobby"),
      work: t("Team.teacher1.work"),
      quotes: t("Team.teacher1.quotes"),
    },
    {
      id: 1,
      img: teacher2,
      name: t("Team.teacher2.name"),
      position: t("Team.teacher2.position"),
      education: t("Team.teacher2.education"),
      hobby: t("Team.teacher2.hobby"),
      work: t("Team.teacher2.work"),
      quotes: t("Team.teacher2.quotes"),
    },
    {
      id: 2,
      img: teacher3,
      name: t("Team.teacher3.name"),
      position: t("Team.teacher3.position"),
      education: t("Team.teacher3.education"),
      hobby: t("Team.teacher3.hobby"),
      work: t("Team.teacher3.work"),
      quotes: t("Team.teacher3.quotes"),
    },
    {
      id: 3,
      img: teacher4,
      name: t("Team.teacher4.name"),
      position: t("Team.teacher4.position"),
      education: t("Team.teacher4.education"),
      hobby: t("Team.teacher4.hobby"),
      work: t("Team.teacher4.work"),
      quotes: t("Team.teacher4.quotes"),
    },
    {
      id: 4,
      img: teacher5,
      name: t("Team.teacher5.name"),
      position: t("Team.teacher5.position"),
      education: t("Team.teacher5.education"),
      hobby: t("Team.teacher5.hobby"),
      work: t("Team.teacher5.work"),
      quotes: t("Team.teacher5.quotes"),
    },
    {
      id: 5,
      img: teacher6,
      name: t("Team.teacher6.name"),
      position: t("Team.teacher6.position"),
      education: t("Team.teacher6.education"),
      hobby: t("Team.teacher6.hobby"),
      work: t("Team.teacher6.work"),
      quotes: t("Team.teacher6.quotes"),
    },
    {
      id: 6,
      img: teacher7,
      name: t("Team.teacher7.name"),
      position: t("Team.teacher7.position"),
      education: t("Team.teacher7.education"),
      hobby: t("Team.teacher7.hobby"),
      work: t("Team.teacher7.work"),
      quotes: t("Team.teacher7.quotes"),
    },
    {
      id: 7,
      img: teacher8,
      name: t("Team.teacher8.name"),
      position: t("Team.teacher8.position"),
      education: t("Team.teacher8.education"),
      hobby: t("Team.teacher8.hobby"),
      work: t("Team.teacher8.work"),
      quotes: t("Team.teacher8.quotes"),
    },
    {
      id: 8,
      img: teacher9,
      name: t("Team.teacher9.name"),
      position: t("Team.teacher9.position"),
      education: t("Team.teacher9.education"),
      hobby: t("Team.teacher9.hobby"),
      work: t("Team.teacher9.work"),
      quotes: t("Team.teacher9.quotes"),
    },
    {
      id: 9,
      img: teacher10,
      name: t("Team.teacher10.name"),
      position: t("Team.teacher10.position"),
      education: t("Team.teacher10.education"),
      hobby: t("Team.teacher10.hobby"),
      work: t("Team.teacher10.work"),
      quotes: t("Team.teacher10.quotes"),
    },
    {
      id: 10,
      img: teacher11,
      name: t("Team.teacher11.name"),
      position: t("Team.teacher11.position"),
      education: t("Team.teacher11.education"),
      hobby: t("Team.teacher11.hobby"),
      work: t("Team.teacher11.work"),
      quotes: t("Team.teacher11.quotes"),
    },
    {
      id: 11,
      img: teacher12,
      name: t("Team.teacher12.name"),
      position: t("Team.teacher12.position"),
      education: t("Team.teacher12.education"),
      hobby: t("Team.teacher12.hobby"),
      work: t("Team.teacher12.work"),
      quotes: t("Team.teacher12.quotes"),
    },
    {
      id: 12,
      img: teacher13,
      name: t("Team.teacher13.name"),
      position: t("Team.teacher13.position"),
      education: t("Team.teacher13.education"),
      hobby: t("Team.teacher13.hobby"),
      work: t("Team.teacher13.work"),
      quotes: t("Team.teacher13.quotes"),
    },
    {
      id: 13,
      img: teacher14,
      name: t("Team.teacher14.name"),
      position: t("Team.teacher14.position"),
      education: t("Team.teacher14.education"),
      hobby: t("Team.teacher14.hobby"),
      work: t("Team.teacher14.work"),
      quotes: t("Team.teacher14.quotes"),
    },
    {
      id: 14,
      img: teacher15,
      name: t("Team.teacher15.name"),
      position: t("Team.teacher15.position"),
      education: t("Team.teacher15.education"),
      hobby: t("Team.teacher15.hobby"),
      work: t("Team.teacher15.work"),
      quotes: t("Team.teacher15.quotes"),
    }
  ];

  useEffect(() => {
    setTeamArr(generateTeamArr());
  }, [i18n.language]);





  return (
    <div id="team" className="team">
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
        nav4={<Link onClick={handleLinkClick} to={`/projects/${i18n.language}`}>
					<li>{t("HomePage.gallery")}</li></Link>}
              nav5={<Link to={`https://payhip.com/BrightKidsUkrainianOnlineSchool`}>
                    <li>{t("HomePage.store")}</li></Link>}
      />

      <div className="team__box">
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
          <span>{t(`Team.title`)}</span>
      
        </div>

        <div className="team__box--container">

        {teamArr.map((item) => (
          <div key={item.id} className="team__card">
          <div>
            <img className="team__card--img" src={item.img} alt="name" />
            <div className="team__card--box"> 
              <h4 className="team__card--title">{item.name}</h4>
              <p className="team__card--description">{item.position}</p>
            </div>
          </div>

          <div className="team__card--bottom">
            <Link onClick={() => handleScrollToSection('top')} to={`/team/details/${item.id}/${i18n.language}`}>
              <button>{t('Team.button')}</button>
            </Link>
          </div>
        </div>
        ))}

        </div>





      </div>


      <Footer />
    </div>
  );
};

export default Team;
