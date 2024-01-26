import React from 'react'
import CourseCard from '../UI/CourseCard/CourseCard';
import Header from '../UI/Header/Header';
import Footer from '../Footer/Footer';
import "./style/Catalog.css";
import { useTranslation } from 'react-i18next';
import { Link } from 'react-router-dom';

const Catalog = ({ courseArr, setCourseIndex, burgerOpen, setBurgerOpen }) => {
  let burgerPopup = burgerOpen ? "home__popup home__popup-open" : "home__popup";

	const { t } = useTranslation();

  const handleScrollToSection = (sectionId) => {
    setBurgerOpen(false);
    document.body.classList.remove("body-hidden", false);

    if (!sectionId || sectionId === 'top') {
      window.scrollTo({ top: 0, behavior: 'smooth' });
      return;
    }

    const sectionRef = document.getElementById(sectionId);
    if (sectionRef) {
      sectionRef.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
	<div className='catalog'>
			<div className={burgerPopup}></div>
		
    <Header 
			burgerOpen={burgerOpen}
			setBurgerOpen={setBurgerOpen}
			nav1={<li><a href="/">{t("HomePage.home")}</a></li>}
			nav3={<li onClick={() => handleScrollToSection('footer')}>{t("HomePage.contact")}</li>}      
    /> 

    <div className="catalog__link">

    <div className="link__web">
					<Link to={"/"}>
					<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none">
						<path fillRule="evenodd" clipRule="evenodd" d="M2.33537 7.87495C1.79491 9.00229 1.98463 10.3208 2.36407 12.9579L2.64284 14.8952C3.13025 18.2827 3.37396 19.9764 4.54903 20.9882C5.72409 22 7.44737 22 10.8939 22H13.1061C16.5526 22 18.2759 22 19.451 20.9882C20.626 19.9764 20.8697 18.2827 21.3572 14.8952L21.6359 12.9579C22.0154 10.3208 22.2051 9.00229 21.6646 7.87495C21.1242 6.7476 19.9738 6.06234 17.6731 4.69181L16.2882 3.86687C14.199 2.62229 13.1543 2 12 2C10.8457 2 9.80104 2.62229 7.71175 3.86687L6.32691 4.69181C4.02619 6.06234 2.87583 6.7476 2.33537 7.87495ZM8.2501 17.9998C8.2501 17.5856 8.58589 17.2498 9.0001 17.2498H15.0001C15.4143 17.2498 15.7501 17.5856 15.7501 17.9998C15.7501 18.414 15.4143 18.7498 15.0001 18.7498H9.0001C8.58589 18.7498 8.2501 18.414 8.2501 17.9998Z" fill="#B41D8A"/>
					</svg>
					</Link>
					
					<svg className='link__web-margin' xmlns="http://www.w3.org/2000/svg" width="7" height="10" viewBox="0 0 7 10" fill="none">
						<path fillRule="evenodd" clipRule="evenodd" d="M0.96967 0.46967C1.26256 0.176777 1.73744 0.176777 2.03033 0.46967L6.03033 4.46967C6.32322 4.76256 6.32322 5.23744 6.03033 5.53033L2.03033 9.53033C1.73744 9.82322 1.26256 9.82322 0.96967 9.53033C0.676777 9.23744 0.676777 8.76256 0.96967 8.46967L4.43934 5L0.96967 1.53033C0.676777 1.23744 0.676777 0.762563 0.96967 0.46967Z" fill="black"/>
					</svg>
 					<span>{t("CoursePage.title3")}</span>
			</div>
    </div>


		<div className="catalog__box">
		{courseArr ? (
          courseArr.map((course, index) => (
              <CourseCard key={index} setCourseIndex={setCourseIndex} index={index} courseArr={course} />
          ))
           ) : (
            <p>Loading...</p>
        )}
		</div>
	 

		<Footer />
	</div>
  )
}

export default Catalog;
