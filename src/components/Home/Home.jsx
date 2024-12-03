import React, { useEffect, useRef, useState } from 'react'
import { useTranslation } from 'react-i18next';
import "./style/Home.css"
import Button from '../UI/Button/Button.jsx';
import Header from '../UI/Header/Header.jsx';
import { Link } from 'react-router-dom';
import { Helmet } from 'react-helmet';


const Home = ({ setCourseArr, setCards, burgerOpen, setBurgerOpen, handleLanguageChange }) => {
	const { t, i18n } = useTranslation();

	const myRef = useRef(null);
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

	useEffect(() => {
		const pathSegments = window.location.pathname.split('/');
		const languageFromPath = pathSegments[1];

		if (['en', 'uk'].includes(languageFromPath)) {
			i18n.changeLanguage(languageFromPath);
			localStorage.setItem('selectedLanguage', languageFromPath);
		}
	}, [i18n]);


	useEffect(() => {
		setCards([
			{ question: `${t("FAQ.faqTitle1")}`, answer: `${t("FAQ.faqDescirption1")}`, isOpen: true },
			{ question: `${t("FAQ.faqTitle2")}`, answer: `${t("FAQ.faqDescirption2")}`, isOpen: true },
			{ question: `${t("FAQ.faqTitle3")}`, answer: `${t("FAQ.faqDescirption3")}`, isOpen: true },
			{ question: `${t("FAQ.faqTitle4")}`, answer: `${t("FAQ.faqDescirption4")}`, isOpen: true },
			{ question: `${t("FAQ.faqTitle5")}`, answer: `${t("FAQ.faqDescirption5")}`, isOpen: true },
			{ question: `${t("FAQ.faqTitle6")}`, answer: `${t("FAQ.faqDescirption6")}`, isOpen: true },
			{ question: `${t("FAQ.faqTitle7")}`, answer: `${t("FAQ.faqDescirption7")}`, isOpen: true },

		]);

		setCourseArr([
			{
				id: 0,
				title: `${t("CoursePage.course1.title")}`,
				subTitle: `${t("CoursePage.course1.subTitle")}`,
				age: `${t("CoursePage.course1.age")}`,
				category: `${t("CoursePage.course1.category")}`,
				link: `${t("CoursePage.course1.link")}`
			},
			{
				id: 1,
				title: `${t("CoursePage.course2.title")}`,
				subTitle: `${t("CoursePage.course2.subTitle")}`,
				age: `${t("CoursePage.course2.age")}`,
				category: `${t("CoursePage.course2.category")}`,
				link: `${t("CoursePage.course2.link")}`
			},
			{
				id: 2,
				title: `${t("CoursePage.course3.title")}`,
				subTitle: `${t("CoursePage.course3.subTitle")}`,
				age: `${t("CoursePage.course3.age")}`,
				category: `${t("CoursePage.course3.category")}`,
				link: `${t("CoursePage.course3.link")}`
			},
			{
				id: 3,
				title: `${t("CoursePage.course4.title")}`,
				subTitle: `${t("CoursePage.course4.subTitle")}`,
				age: `${t("CoursePage.course4.age")}`,
				category: `${t("CoursePage.course4.category")}`,
				link: `${t("CoursePage.course4.link")}`
			},
			{
				id: 4,
				title: `${t("CoursePage.course5.title")}`,
				subTitle: `${t("CoursePage.course5.subTitle")}`,
				age: `${t("CoursePage.course5.age")}`,
				category: `${t("CoursePage.course5.category")}`,
				link: `${t("CoursePage.course5.link")}`
			},
			{
				id: 5,
				title: `${t("CoursePage.course6.title")}`,
				subTitle: `${t("CoursePage.course6.subTitle")}`,
				age: `${t("CoursePage.course6.age")}`,
				category: `${t("CoursePage.course6.category")}`,
				link: `${t("CoursePage.course6.link")}`
			},
			{
				id: 6,
				title: `${t("CoursePage.course7.title")}`,
				subTitle: `${t("CoursePage.course7.subTitle")}`,
				age: `${t("CoursePage.course7.age")}`,
				category: `${t("CoursePage.course7.category")}`,
				link: `${t("CoursePage.course7.link")}`

			},
			{
				id: 7,
				title: `${t("CoursePage.course8.title")}`,
				subTitle: `${t("CoursePage.course8.subTitle")}`,
				age: `${t("CoursePage.course8.age")}`,
				category: `${t("CoursePage.course8.category")}`,
				link: `${t("CoursePage.course8.link")}`
			},
			{
				id: 8,
				title: `${t("CoursePage.course9.title")}`,
				subTitle: `${t("CoursePage.course9.subTitle")}`,
				age: `${t("CoursePage.course9.age")}`,
				category: `${t("CoursePage.course9.category")}`,
				link: `${t("CoursePage.course9.link")}`
			},
			{
				id: 9,
				title: `${t("CoursePage.course10.title")}`,
				subTitle: `${t("CoursePage.course10.subTitle")}`,
				age: `${t("CoursePage.course10.age")}`,
				category: `${t("CoursePage.course10.category")}`,
				link: `${t("CoursePage.course10.link")}`
			},
			{
				id: 10,
				title: `${t("CoursePage.course11.title")}`,
				subTitle: `${t("CoursePage.course11.subTitle")}`,
				age: `${t("CoursePage.course11.age")}`,
				category: `${t("CoursePage.course11.category")}`,
				link: `${t("CoursePage.course11.link")}`
			},
			{
				id: 11,
				title: `${t("CoursePage.course12.title")}`,
				subTitle: `${t("CoursePage.course12.subTitle")}`,
				age: `${t("CoursePage.course12.age")}`,
				category: `${t("CoursePage.course12.category")}`,
				link: `${t("CoursePage.course12.link")}`
			},
			{
				id: 12,
				title: `${t("CoursePage.course13.title")}`,
				subTitle: `${t("CoursePage.course13.subTitle")}`,
				age: `${t("CoursePage.course13.age")}`,
				category: `${t("CoursePage.course13.category")}`,
				link: `${t("CoursePage.course13.link")}`
			},
			{
				id: 13,
				title: `${t("CoursePage.course14.title")}`,
				subTitle: `${t("CoursePage.course14.subTitle")}`,
				age: `${t("CoursePage.course14.age")}`,
				category: `${t("CoursePage.course14.category")}`,
				link: `${t("CoursePage.course14.link")}`
			},
		])
	}, [t]);

	const handleLinkClick = () => {
		const currentUrl = new URL(window.location.origin);
		window.history.pushState({}, '', currentUrl);	
		setBurgerOpen(false);
		document.body.classList.remove("body-hidden", false);
	};

	return (
		<div ref={myRef} className='home' id='home'>

			<div className={burgerPopup}></div>

			<Header
				handleLanguageChange={handleLanguageChange}
				burgerOpen={burgerOpen}
				setBurgerOpen={setBurgerOpen}
				nav1={<li onClick={() => handleScrollToSection('about-us')}>{t("HomePage.aboutUs")}</li>}
				nav2={<li onClick={() => handleScrollToSection('course')}>{t("HomePage.courses")}</li>}
				nav3={<Link onClick={handleLinkClick} to={`/projects/${i18n.language}`}>
					<li>{t("HomePage.gallery")}</li></Link>}
				nav4={<Link onClick={handleLinkClick} to={`/team/${i18n.language}`}>
					<li>{t("HomePage.team")}</li></Link>}

			/>

			<Helmet>
				<title>Bright Kids Ukrainian Online School</title>
			</Helmet>

			<main className="home__main">
				<div className="home__main-left">
					<p className='home__title'>{t("HomePage.title")}</p>
					<p className='home__description'>{t("HomePage.description")}</p>

					<div onClick={() => handleScrollToSection('firstLesson')}>
						<Button id="btn-register-main" width={350} height={80} className="home__button" text={t("HomePage.signUp")} />
					</div>

					<svg className='home__star' xmlns="http://www.w3.org/2000/svg" width="54" height="54" viewBox="0 0 54 54" fill="none">
						<path d="M0.375085 27.0968C0.275078 27.071 0.275079 26.929 0.375085 26.9032L18.6056 22.1971C20.367 21.7424 21.7424 20.3669 22.1971 18.6055L26.9032 0.375059C26.929 0.275052 27.071 0.275053 27.0969 0.375059L31.8029 18.6055C32.2576 20.3669 33.6331 21.7424 35.3945 22.1971L53.625 26.9032C53.725 26.929 53.725 27.071 53.625 27.0968L35.3945 31.8029C33.6331 32.2576 32.2576 33.6331 31.8029 35.3944L27.0969 53.6249C27.071 53.7249 26.929 53.7249 26.9032 53.6249L22.1971 35.3945C21.7424 33.6331 20.367 32.2576 18.6056 31.8029L0.375085 27.0968Z" fill="#B41D8A" />
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
