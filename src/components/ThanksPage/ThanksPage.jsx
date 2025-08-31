import React, { useEffect } from 'react'
import Header from '../UI/Header/Header';
import { useTranslation } from 'react-i18next';
import { Helmet } from 'react-helmet';
import "./style/ThanksPage.css"
import Footer from '../Footer/Footer';
import Button from '../UI/Button/Button';
import { Link } from 'react-router-dom';

const ThanksPage = ({ setBurgerOpen, burgerOpen, handleLanguageChange }) => {

	const { t, i18n } = useTranslation();

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

	const hadnleBurger = () => {
		setBurgerOpen(false);
		document.body.classList.remove("body-hidden", false);
	}


	const handleLinkClick = () => {
		const currentUrl = new URL(window.location.origin);
		window.history.pushState({}, '', currentUrl);
	};

	const handleBurgerAndLinkClick = () => {
		hadnleBurger();
		handleLinkClick();
	};




	return (
		<div className='Thanks' id="Thanks">
			<div className={burgerPopup}></div>

			<Helmet>
				<title>{t(`Thanks.title`)} | {t(`SEO.title`)}</title>
			</Helmet>




			<Header
				handleLanguageChange={handleLanguageChange}
				burgerOpen={burgerOpen}
				setBurgerOpen={setBurgerOpen}
				nav1={<li><Link to="/">{t("HomePage.home")}</Link></li>}
				nav2={<li><Link onClick={handleBurgerAndLinkClick} to={`/projects/${i18n.language}`}>{t("HomePage.gallery")}</Link></li>}
				nav3={<li onClick={() => handleScrollToSection('footer')}>{t("HomePage.contact")}</li>}
				nav4={<Link target='_blank' to={`https://payhip.com/BrightKidsUkrainianOnlineSchool`}>
					<li>{t("HomePage.store")}</li></Link>}
			/>

			<div className='ThanksPage'>
				<h4>{t('Thanks.title')}</h4>

				<a rel="noreferrer" href="/">
					<Button id="btn-thanks" text={t('Thanks.button')} width={300} height={85} className="start__buttons-button" />
				</a>

			</div>
			<Footer />
		</div>
	)
}

export default ThanksPage;