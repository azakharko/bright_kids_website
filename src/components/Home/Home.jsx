import React, { useRef, useState } from 'react'
import "./style/Home.css"
import Button from '../UI/Button/Button';

const Home = ({ translations, selectedLanguage, setSelectedLanguage, currentTranslations }) => {
	const [burgerOpen, setBurgerOpen] = useState(false);

	const myRef = useRef(null);

	let burgerRow1 = burgerOpen ? "box__burger-row box__burger-row1 box__burger-row1Show" : "box__burger-row box__burger-row1";
	let burgerRow2 = burgerOpen ? "box__burger-row box__burger-row2 box__burger-row2Show" : "box__burger-row box__burger-row2";
	let burgerRow3 = burgerOpen ? "box__burger-row box__burger-row3 box__burger-row3Show" : "box__burger-row box__burger-row3";
	let burgerPopup = burgerOpen ? "home__popup home__popup-open" : "home__popup";

	let burgerNavigation = burgerOpen ? "home__header-nav home__header-nav--open" : "home__header-nav";


	const hadleOpenBurger = () => {
		setBurgerOpen(!burgerOpen);

		document.body.classList.toggle("body-hidden", !burgerOpen);
		myRef.current.scrollIntoView();
	}

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

	const handleChangeLanguage = (e) => {
		const thisLanguage = e.target.value;
		setSelectedLanguage(thisLanguage);

		const url = new URL(window.location.href);
		url.pathname = `/${thisLanguage}${url.pathname.replace(/\/(ua|us)/, '')}`;
		url.pathname = url.pathname.replace(/\/$/, '');
		window.history.replaceState({}, '', url.toString());
	}

	return (
		<div ref={myRef} className='home'>

			<div className={burgerPopup}></div>

			<header className="home__header">
				<div className="home__header-logo">
					<div className="logo"></div>
				</div>

				<nav className={burgerNavigation}>
					<ul>
						<li onClick={() => handleScrollToSection('about-us')}>{currentTranslations.HomePage.aboutUs}</li>
						<li onClick={() => handleScrollToSection('course')}>{currentTranslations.HomePage.courses}</li>
						<li>{currentTranslations.HomePage.learningMaterials}</li>
					</ul>
				</nav>

				<div className="home__header-box">
					<select defaultValue={selectedLanguage} onChange={handleChangeLanguage}>
						<option value="us">us</option>
						<option value="ua">ua</option>
					</select>

					<a target='_blank' rel="noreferrer"href="tel:+15127868874">
						<Button width={200} height={60} className="home__header-button" text="+1 (512) 786-8874" />
					</a>

					<div className="box__burger" onClick={hadleOpenBurger}>
						<span className={burgerRow1}></span>
						<span className={burgerRow2}></span>
						<span className={burgerRow3}></span>
					</div>

				</div>

			</header>

			<main className="home__main">
				<div className="home__main-left">
					<p className='home__title'>{currentTranslations.HomePage.title}</p>
					<p className='home__description'>{currentTranslations.HomePage.description}</p>

					<div onClick={() => handleScrollToSection('firstLesson')}>
						<Button width={320} height={80} className="home__button" text={currentTranslations.HomePage.signUp} />
					</div>

					<svg className='home__star' xmlns="http://www.w3.org/2000/svg" width="54" height="54" viewBox="0 0 54 54" fill="none">
						<path d="M0.375085 27.0968C0.275078 27.071 0.275079 26.929 0.375085 26.9032L18.6056 22.1971C20.367 21.7424 21.7424 20.3669 22.1971 18.6055L26.9032 0.375059C26.929 0.275052 27.071 0.275053 27.0969 0.375059L31.8029 18.6055C32.2576 20.3669 33.6331 21.7424 35.3945 22.1971L53.625 26.9032C53.725 26.929 53.725 27.071 53.625 27.0968L35.3945 31.8029C33.6331 32.2576 32.2576 33.6331 31.8029 35.3944L27.0969 53.6249C27.071 53.7249 26.929 53.7249 26.9032 53.6249L22.1971 35.3945C21.7424 33.6331 20.367 32.2576 18.6056 31.8029L0.375085 27.0968Z" fill="#B41D8A" />
					</svg>

					<svg className='home__arrow' xmlns="http://www.w3.org/2000/svg" width="110" height="129" viewBox="0 0 110 129" fill="none">
						<g clipPath="url(#clip0_10_281)">
							<path d="M69.8681 119.406C70.6234 119.311 70.9067 119.406 71.1899 119.311C88.4681 108.852 100.176 94.0182 104.613 74.05C105.746 69.0104 105.557 63.7806 104.236 58.6459C101.498 47.6158 92.3392 40.0089 81.1036 39.3433C75.2498 38.963 69.5848 39.6286 64.4864 42.8615C64.1087 45.619 63.8254 48.3765 63.2589 50.9439C62.3148 55.1277 60.1432 58.5508 56.2721 60.6427C53.4397 62.2592 50.6072 62.2592 49.0965 60.7378C47.1138 58.741 47.1138 56.0786 48.3412 53.8916C50.0407 50.8488 52.1178 47.9962 54.2894 45.3338C55.7056 43.6222 57.594 42.1959 59.2934 40.7696C57.6884 30.0248 47.5858 25.4606 35.5005 29.9297C35.1229 31.4511 34.7452 33.0676 34.2731 34.589C32.3848 40.1991 28.8914 44.478 23.2264 46.4748C21.0548 47.2355 18.6944 47.5208 16.8061 45.5239C15.3899 44.0026 15.3899 41.3401 16.9005 38.6777C19.3553 34.4939 23.0376 31.5462 27.0031 28.9788C28.4193 28.1231 29.8356 27.2673 31.2518 26.5066C29.3635 9.86641 14.5401 -1.92435 0 4.73172C0.0944163 3.49559 -5.76834e-06 2.44964 0.37766 1.87912C0.849741 1.21351 1.88832 0.833163 2.73807 0.64299C10.7635 -0.878398 18.2223 0.0724679 24.3594 5.96785C28.9858 10.3418 32.1016 15.6667 34.1787 21.7523C34.462 22.608 34.7452 23.4638 35.1229 24.3196C35.1229 24.4147 35.3117 24.5098 35.6894 24.795C36.5391 24.6999 37.5777 24.6999 38.6163 24.5098C51.2681 22.5129 57.8772 25.9361 63.731 37.8219C64.864 37.4416 66.1858 37.0612 67.4133 36.5858C74.6833 34.1135 81.9534 33.9234 89.3179 36.3956C101.309 40.3893 109.051 50.7537 109.901 63.8757C110.373 71.0072 109.145 77.8534 106.596 84.5095C100.365 100.579 90.1676 113.226 74.8721 121.498C74.1168 121.974 73.2671 122.354 72.5117 122.829C72.4173 122.925 72.3229 123.115 72.0397 123.685C75.2498 124.446 78.2711 124.161 81.2925 123.971C84.2194 123.875 87.2407 123.59 90.4508 123.4C90.1676 125.872 88.8458 126.823 87.2407 127.394C85.3524 127.964 83.464 128.725 81.5757 128.82C76.4772 129.01 71.2843 129.105 66.0914 128.82C62.0315 128.535 60.8985 126.348 62.6924 123.02C66.5635 115.983 70.529 108.947 74.4945 101.91C75.1554 100.769 76.0052 99.8185 77.0437 98.4873C78.8376 100.579 78.0823 102.101 77.4214 103.527C74.7777 108.662 72.4173 113.796 69.8681 119.406ZM19.6386 42.6713C26.1533 41.8156 30.2132 37.6317 30.4965 31.7364C26.1533 34.589 21.999 37.1563 19.6386 42.6713ZM51.5513 57.4098C57.1219 56.0786 59.7656 52.2751 59.1991 46.4748C55.6112 49.5176 52.4955 52.3702 51.5513 57.4098Z" fill="#B41D8A" />
						</g>
						<defs>
							<clipPath id="clip0_10_281">
								<rect width="110" height="129" fill="white" />
							</clipPath>
						</defs>
					</svg>
				</div>

				<div className="home__main-right">
					<div className="home__elipes"></div>
				</div>
			</main>

		</div>
	)
}

export default Home;
