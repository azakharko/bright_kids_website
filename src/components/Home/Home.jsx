import React, { useEffect, useRef } from 'react'
import { useTranslation } from 'react-i18next';
import "./style/Home.css"
import Button from '../UI/Button/Button.jsx';
import Header from '../UI/Header/Header.jsx';


const Home = ({ setCourseArr, setCards, burgerOpen, setBurgerOpen }) => {
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

		if (['en', 'ua'].includes(languageFromPath)) {
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
				category: `${t("CoursePage.course1.category")}`
			},
			{
				id: 1,
				title: `${t("CoursePage.course2.title")}`,
				subTitle: `${t("CoursePage.course2.subTitle")}`,
				age: `${t("CoursePage.course2.age")}`,
				category: `${t("CoursePage.course2.category")}`
			},
			{
				id: 2,
				title: `${t("CoursePage.course3.title")}`,
				subTitle: `${t("CoursePage.course3.subTitle")}`,
				age: `${t("CoursePage.course3.age")}`,
				category: `${t("CoursePage.course3.category")}`
			},
			{
				id: 3,
				title: `${t("CoursePage.course4.title")}`,
				subTitle: `${t("CoursePage.course4.subTitle")}`,
				age: `${t("CoursePage.course4.age")}`,
				category: `${t("CoursePage.course4.category")}`
			},
			{
				id: 4,
				title: `${t("CoursePage.course5.title")}`,
				subTitle: `${t("CoursePage.course5.subTitle")}`,
				age: `${t("CoursePage.course5.age")}`,
				category: `${t("CoursePage.course5.category")}`
			},
			{
				id: 5,
				title: `${t("CoursePage.course6.title")}`,
				subTitle: `${t("CoursePage.course6.subTitle")}`,
				age: `${t("CoursePage.course6.age")}`,
				category: `${t("CoursePage.course6.category")}`
			},
			{
				id: 6,
				title: `${t("CoursePage.course7.title")}`,
				subTitle: `${t("CoursePage.course7.subTitle")}`,
				age: `${t("CoursePage.course7.age")}`,
				category: `${t("CoursePage.course7.category")}`
			},
			{
				id: 7,
				title: `${t("CoursePage.course8.title")}`,
				subTitle: `${t("CoursePage.course8.subTitle")}`,
				age: `${t("CoursePage.course8.age")}`,
				category: `${t("CoursePage.course8.category")}`
			},
			{
				id: 8,
				title: `${t("CoursePage.course9.title")}`,
				subTitle: `${t("CoursePage.course9.subTitle")}`,
				age: `${t("CoursePage.course9.age")}`,
				category: `${t("CoursePage.course9.category")}`
			},
			{
				id: 9,
				title: `${t("CoursePage.course10.title")}`,
				subTitle: `${t("CoursePage.course10.subTitle")}`,
				age: `${t("CoursePage.course10.age")}`,
				category: `${t("CoursePage.course10.category")}`
			},
			{
				id: 10,
				title: `${t("CoursePage.course11.title")}`,
				subTitle: `${t("CoursePage.course11.subTitle")}`,
				age: `${t("CoursePage.course11.age")}`,
				category: `${t("CoursePage.course11.category")}`
			},

		])
	}, [t])



	return (
		<div ref={myRef} className='home' id='home'>

			<div className={burgerPopup}></div>

			<Header
				burgerOpen={burgerOpen}
				setBurgerOpen={setBurgerOpen}
				nav1={<li onClick={() => handleScrollToSection('about-us')}>{t("HomePage.aboutUs")}</li>}
				nav2={<li onClick={() => handleScrollToSection('course')}>{t("HomePage.courses")}</li>
				}
			/>

			<main className="home__main">
				<div className="home__main-left">
					<p className='home__title'>{t("HomePage.title")}</p>
					<p className='home__description'>{t("HomePage.description")}</p>

					<div onClick={() => handleScrollToSection('firstLesson')}>
						<Button width={320} height={80} className="home__button" text={t("HomePage.signUp")} />
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
