import React from 'react'
import './style/ProjectStudent.css'
import Header from '../UI/Header/Header';
import { useTranslation } from 'react-i18next';
import Footer from '../Footer/Footer';

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
import Button from '../UI/Button/Button';


const ProjectStudent = ({ setBurgerOpen, burgerOpen }) => {

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

  const handleButton = () => {
	window.open("https://www.youtube.com/@BrightKidsUkrainianSchool", '_blank');
}

  return (
	<div id="gallery" className='gallery'>
			<div className={burgerPopup}></div>

		  <Header 
			burgerOpen={burgerOpen}
			setBurgerOpen={setBurgerOpen}
			nav1={<li><a href="/">{t("HomePage.home")}</a></li>}
			nav3={<li onClick={() => handleScrollToSection('footer')}>{t("HomePage.contact")}</li>}      	/>

		<div className="gallery__box">
			<div className="gallery__box-title">
				{t(`GalleryPage.title`)}
			</div>

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

			<div className="gallery__box-title">
				{t(`GalleryPage.title2`)}
			</div>

			<div className="gallery__container">
				<img className='img-python' src={python1} alt="img" />
				<img className='img-python' src={python2} alt="img" />
				<img className='img-python' src={python3} alt="img" />
				<img className='img-python' src={python4} alt="img" />
				<img className='img-python' src={python5} alt="img" />
				<img className='img-python' src={python6} alt="img" />
				<img className='img-python' src={python7} alt="img" />
				<img className='img-python' src={python8} alt="img" />
				<img className='img-python' src={python9} alt="img" />
				<img className='img-python' src={python10} alt="img" />
				<img className='img-python' src={python11} alt="img" />
				<img className='img-python' src={python12} alt="img" />
				<img className='img-python' src={python13} alt="img" />
				<img className='img-python' src={python14} alt="img" />

			</div>
		</div>

		<a onClick={handleButton} href='/www.youtube.com/@BrightKidsUkrainianSchool' target="_blank" className="gallery__buttons">
			<Button width={350} height={80} className="gallery__buttons-button" text={t("CoursePage.button")} />
		</a>


		<Footer />

	</div>
  )
}

export default ProjectStudent;
