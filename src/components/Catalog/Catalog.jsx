import React, { useTransition } from 'react'
import CourseCard from '../UI/CourseCard/CourseCard';
import Header from '../UI/Header/Header';
import Footer from '../Footer/Footer';
import "./style/Catalog.css";

const Catalog = ({ courseArr, setCourseIndex, burgerOpen, setBurgerOpen }) => {
  let burgerPopup = burgerOpen ? "home__popup home__popup-open" : "home__popup";

	const { t } = useTransition();

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
