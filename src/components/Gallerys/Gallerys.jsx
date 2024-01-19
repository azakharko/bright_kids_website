import React from 'react'
import './style/Gallery.css'
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
import img14 from "./img/img14.png";


const Gallerys = ({ setBurgerOpen, burgerOpen }) => {

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
	<div id="gallery" className='gallery'>
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
				<img src={img14} alt="img" />
			</div>
		</div>

		<Footer />

	</div>
  )
}

export default Gallerys;
