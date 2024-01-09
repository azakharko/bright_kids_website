import React, { useEffect, useState } from 'react'
import Header from '../UI/Header/Header';
import { useTranslation } from 'react-i18next';
import "./style/CoursPage.css"
import Footer from '../Footer/Footer';


const CoursPage = ({ setBurgerOpen, burgerOpen, courseIndex }) => {
	const { t } = useTranslation();
	const [imagePath, setImagePath] = useState('');
	let burgerPopup = burgerOpen ? "home__popup home__popup-open" : "home__popup";


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

	const imageNumber = courseIndex; 

	useEffect(() => {
	  const loadImage = async () => {
		try {
		  const image = await import(`../Course/img/img${imageNumber}.png`);
		  setImagePath(image.default);
		} catch (error) {
		  console.error('Error loading image:', error);
		}
	  };
  
	  loadImage();
	}, [imageNumber]);

	return (
	<div className='Course'>
	<div className={burgerPopup}></div>

	  <Header 
	  	burgerOpen={burgerOpen}
		setBurgerOpen={setBurgerOpen}
		nav1={<li><a href="/">{t("HomePage.home")}</a></li>}
		nav2={<li>{t("HomePage.learningMaterials")}</li>}
		nav3={<li onClick={() => handleScrollToSection('footer')}>{t("HomePage.contact")}</li>}
	  />

	  <div className="CoursePage">
		<div className="CoursePage__left">
			<p className='CoursePage__left-title'>{t(`CoursePage.course${courseIndex}.title`)}</p>
			<p className='CoursePage__left-description'>{t(`CoursePage.course${courseIndex}.description`)}</p>

			<div className="CoursePage__left-box">
				<div className="CoursePage__item">
					<div className="CoursePage__item-img">
						<svg xmlns="http://www.w3.org/2000/svg" width="25" height="25" viewBox="0 0 25 25" fill="none">
						<path fillRule="evenodd" clipRule="evenodd" d="M5.20992 3.35045C5.81347 2.05127 7.88459 2.05127 12.0268 2.05127C16.1691 2.05127 18.2402 2.05127 18.8437 3.35045C18.8956 3.46213 18.9394 3.57812 18.9746 3.69737C19.3846 5.08457 17.9201 6.69238 14.9911 9.90801L13.029 12.0513L14.9911 14.1945C17.9201 17.4102 19.3846 19.018 18.9746 20.4052C18.9394 20.5244 18.8956 20.6404 18.8437 20.7521C18.2402 22.0513 16.1691 22.0513 12.0268 22.0513C7.88459 22.0513 5.81347 22.0513 5.20992 20.7521C5.15804 20.6404 5.11428 20.5244 5.07903 20.4052C4.66904 19.018 6.13354 17.4102 9.06254 14.1945L11.0246 12.0513L9.06254 9.90801C6.13354 6.69238 4.66904 5.08457 5.07903 3.69737C5.11428 3.57812 5.15804 3.46213 5.20992 3.35045ZM10.0224 17.8013C9.60723 17.8013 9.2707 18.1371 9.2707 18.5513C9.2707 18.9655 9.60723 19.3013 10.0224 19.3013H14.0313C14.4464 19.3013 14.7829 18.9655 14.7829 18.5513C14.7829 18.1371 14.4464 17.8013 14.0313 17.8013H10.0224ZM9.2707 5.55127C9.2707 5.13706 9.60723 4.80127 10.0224 4.80127H14.0313C14.4464 4.80127 14.7829 5.13706 14.7829 5.55127C14.7829 5.96548 14.4464 6.30127 14.0313 6.30127H10.0224C9.60723 6.30127 9.2707 5.96548 9.2707 5.55127Z" fill="#B41D8A"/>
						</svg>
					</div>

					<p className="CoursePage__item-text">{t(`CoursePage.ageTitle`)} {t(`CoursePage.course${courseIndex}.age`)} {t(`CoursePage.ageTitle2`)}</p>
				</div>

				<div className="CoursePage__item">
					<div className="CoursePage__item-img">
						<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none">
						<g clipPath="url(#clip0_78_1281)">
							<path d="M12 2.00195C17.523 2.00195 22 6.47895 22 12.002C22 17.525 17.523 22.002 12 22.002C6.477 22.002 2 17.525 2 12.002C2 6.47895 6.477 2.00195 12 2.00195ZM12 6.00195C11.7348 6.00195 11.4804 6.10731 11.2929 6.29485C11.1054 6.48238 11 6.73674 11 7.00195V12.002C11.0001 12.2671 11.1055 12.5215 11.293 12.709L14.293 15.709C14.4816 15.8911 14.7342 15.9919 14.9964 15.9896C15.2586 15.9873 15.5094 15.8822 15.6948 15.6968C15.8802 15.5114 15.9854 15.2606 15.9877 14.9984C15.99 14.7362 15.8892 14.4836 15.707 14.295L13 11.588V7.00195C13 6.73674 12.8946 6.48238 12.7071 6.29485C12.5196 6.10731 12.2652 6.00195 12 6.00195Z" fill="#B41D8A"/>
						</g>
						<defs>
							<clipPath id="clip0_78_1281">
							<rect width="24" height="24" fill="white" transform="translate(0 0.00195312)"/>
							</clipPath>
						</defs>
						</svg>
					</div>

					<p className="CoursePage__item-text">{t(`CoursePage.durationTitle`)} {t(`CoursePage.course${courseIndex}.duration`)}</p>
				</div>

				<div className="CoursePage__item">
					<div className="CoursePage__item-img">
						<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none">
						<g clipPath="url(#clip0_81_1286)">
							<path d="M20.9999 19.002C21.2547 19.0022 21.4999 19.0998 21.6852 19.2748C21.8706 19.4498 21.9821 19.6889 21.997 19.9433C22.012 20.1978 21.9292 20.4483 21.7656 20.6438C21.602 20.8392 21.37 20.9648 21.1169 20.995L20.9999 21.002H2.99987C2.74499 21.0017 2.49984 20.9041 2.3145 20.7291C2.12916 20.5541 2.01763 20.315 2.0027 20.0606C1.98776 19.8061 2.07054 19.5556 2.23413 19.3601C2.39772 19.1647 2.62977 19.0391 2.88287 19.009L2.99987 19.002H20.9999ZM18.9999 4.00195C19.5044 4.00179 19.9904 4.19236 20.3604 4.53545C20.7304 4.87854 20.957 5.3488 20.9949 5.85195L20.9999 6.00195V16.002C21 16.5065 20.8095 16.9925 20.4664 17.3625C20.1233 17.7325 19.653 17.9591 19.1499 17.997L18.9999 18.002H4.99987C4.49529 18.0021 4.0093 17.8115 3.63932 17.4685C3.26934 17.1254 3.04271 16.6551 3.00487 16.152L2.99987 16.002V6.00195C2.99971 5.49738 3.19028 5.01139 3.53337 4.64141C3.87646 4.27142 4.34671 4.0448 4.84987 4.00695L4.99987 4.00195H18.9999Z" fill="#B41D8A"/>
						</g>
						<defs>
							<clipPath id="clip0_81_1286">
							<rect width="24" height="24" fill="white" transform="translate(0 0.00195312)"/>
							</clipPath>
						</defs>
						</svg>
					</div>

					<p className="CoursePage__item-text">{t(`CoursePage.course${courseIndex}.needs`)}</p>
				</div>
			</div>

		</div>

		<div className="CoursePage__rigth">
			<div className="CoursePage__rigth-img">
            	<img src={imagePath} alt={`brigth-kids-${imageNumber}`} />
			</div>
		</div>
	  </div>

	  <Footer />

	</div>
  )
}

export default CoursPage;
