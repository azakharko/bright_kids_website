import React, { useEffect, useState } from 'react'
import Header from '../UI/Header/Header';
import { useTranslation } from 'react-i18next';
import "./style/CoursePage.css"
import Footer from '../Footer/Footer';
import Button from '../UI/Button/Button';
import { Link, useParams } from 'react-router-dom';
import FormPopup from '../UI/PopupForm/FormPopup';


const CoursePage = ({ setBurgerOpen, burgerOpen, handleLanguageChange }) => {
	const { courseLink } = useParams();
	const getCourseIndexByLink = (link) => {
		let map = {}
		map["ukrainian-language"] = 1;
		map["chess"] = 2;
		map["art"] = 3;
		map["roblox"] = 4;
		map["scratch"] = 5;
		map["python"] = 6;
		map["voice"] = 7;
		map["piano"] = 8;
		map["math"] = 9;
		map["logic"] = 10;
		map["histor-of-ukraine"] = 11;
		map["improv"] = 12;
		map["physics"] = 13;
		map["speed-reading"] = 14;

		return map[courseLink];
	};

	const courseIndex = getCourseIndexByLink(courseLink);
	const { t, i18n } = useTranslation();
	const [nameError] = [t(`Form.inputName.error`)];
	const [emailError] = [t(`Form.inputEmail.error`)];
	const [emailError2] = [t(`Form.inputEmail.error2`)];
	const [emailMessage] = [t(`Form.inputMessage.error`)];

	const [thisLanguage, setThisLanguage] = useState('en');
	const [imagePath, setImagePath] = useState('');
	const [showForm, setShowForm] = useState(false);

	const [formData, setFormData] = useState({
        name: '',
        email: '',
        message: ''
    });
	const [errors, setErrors] = useState({});
    const [formSubmitted, setFormSubmitted] = useState(false);


	const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData(prevState => ({
            ...prevState,
            [name]: value
        }));
    };

	const handleSubmit = (e) => {
        e.preventDefault();
        if (validateForm()) {
            sendFormData(formData);
        }
    };

	const validateForm = () => {
        const { name, email, message } = formData;
        const errors = {};

        if (!name.trim()) {
            errors.name = nameError;
        }

        if (!email.trim()) {
            errors.email = emailError2;
        } else if (!/\S+@\S+\.\S+/.test(email)) {
            errors.email = emailError;
        }

        if (!message.trim()) {
            errors.message = emailMessage;
        }

        setErrors(errors);
        return Object.keys(errors).length === 0;
    };

	const sendFormData = async (data) => {
        try {
            const response = await fetch('https://my-node-app-ub6hoxgggq-uc.a.run.app/api/post', {
				method: 'POST',
				headers: {
					'Content-Type': 'application/json',
					'x-secret': '6a408858320f411eb8e55c806b3a545d'
				},
				body: JSON.stringify({
					full_name: data.name,
					contact_email: data.email,
					message: data.message
				})
       	 	});
            const responseData = await response.json();
            console.log('Form data sent successfully:', responseData);
			setFormSubmitted(true);

			setFormData({
				name: '',
				email: '',
				message: ''
			});

			setTimeout(() => {
				setFormSubmitted(false);
			}, 4000);

        } catch (error) {
            console.error('Error sending form data:', error);
        }
    };

	useEffect(() => {
		setThisLanguage(i18n.language)
	}, [t])

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

	const handleScrollToSection2 = (sectionId) => {
		if (!sectionId || sectionId === 'top') {
			window.scrollTo({ top: 0 });
			return;
		}

		const sectionRef = document.getElementById(sectionId);
		if (sectionRef) {
			sectionRef.scrollIntoView();
		}
	};

	const imageNumber = courseIndex;

	useEffect(() => {
		const loadImage = async () => {
			try {
				const image = await import(`../Course/img/img${imageNumber}.webp`);
				setImagePath(image.default);
			} catch (error) {
				console.error('Error loading image:', error);
			}
		};

		loadImage();
	}, [imageNumber]);

	const hanldeShow = () => {
		handleScrollToSection2('top')
		setShowForm(true);
	}

	const hadnleBurger = () => {
		setBurgerOpen(false);
		document.body.classList.remove("body-hidden", false);
	}

	const courseDescription = t(`CoursePage.course${courseIndex}.description`);

	const additionalInfo1 = t("CoursePage.description-discount1");
	const additionalInfo2 = t("CoursePage.description-discount2");
	const additionalInfo3 = t("CoursePage.description-discount3");
	const additionalInfo4 = t("CoursePage.description-discount4");

	return (
		<div className='Course'>
			<div className={burgerPopup}></div>

			<Header
				handleLanguageChange={handleLanguageChange}
				burgerOpen={burgerOpen}
				setBurgerOpen={setBurgerOpen}
				nav1={<li><Link to="/">{t("HomePage.home")}</Link></li>}
				nav2={<li><Link onClick={hadnleBurger} to={`/projects/${i18n.language}`}>{t("HomePage.gallery")}</Link></li>}
				nav3={<li onClick={() => handleScrollToSection('footer')}>{t("HomePage.contact")}</li>}
			/>


			<div className="catalog__link">
				<div className="link__web">
					<Link to={"/"}>
						<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none">
							<path fillRule="evenodd" clipRule="evenodd" d="M2.33537 7.87495C1.79491 9.00229 1.98463 10.3208 2.36407 12.9579L2.64284 14.8952C3.13025 18.2827 3.37396 19.9764 4.54903 20.9882C5.72409 22 7.44737 22 10.8939 22H13.1061C16.5526 22 18.2759 22 19.451 20.9882C20.626 19.9764 20.8697 18.2827 21.3572 14.8952L21.6359 12.9579C22.0154 10.3208 22.2051 9.00229 21.6646 7.87495C21.1242 6.7476 19.9738 6.06234 17.6731 4.69181L16.2882 3.86687C14.199 2.62229 13.1543 2 12 2C10.8457 2 9.80104 2.62229 7.71175 3.86687L6.32691 4.69181C4.02619 6.06234 2.87583 6.7476 2.33537 7.87495ZM8.2501 17.9998C8.2501 17.5856 8.58589 17.2498 9.0001 17.2498H15.0001C15.4143 17.2498 15.7501 17.5856 15.7501 17.9998C15.7501 18.414 15.4143 18.7498 15.0001 18.7498H9.0001C8.58589 18.7498 8.2501 18.414 8.2501 17.9998Z" fill="#B41D8A" />
						</svg>
					</Link>

					<svg className='link__web-margin' xmlns="http://www.w3.org/2000/svg" width="7" height="10" viewBox="0 0 7 10" fill="none">
						<path fillRule="evenodd" clipRule="evenodd" d="M0.96967 0.46967C1.26256 0.176777 1.73744 0.176777 2.03033 0.46967L6.03033 4.46967C6.32322 4.76256 6.32322 5.23744 6.03033 5.53033L2.03033 9.53033C1.73744 9.82322 1.26256 9.82322 0.96967 9.53033C0.676777 9.23744 0.676777 8.76256 0.96967 8.46967L4.43934 5L0.96967 1.53033C0.676777 1.23744 0.676777 0.762563 0.96967 0.46967Z" fill="black" />
					</svg>
					<Link to={`/catalog/${i18n.language}`}>
						<span>{t(`CoursePage.title`)}</span>
					</Link>
					<svg className='link__web-margin' xmlns="http://www.w3.org/2000/svg" width="7" height="10" viewBox="0 0 7 10" fill="none">
						<path fillRule="evenodd" clipRule="evenodd" d="M0.96967 0.46967C1.26256 0.176777 1.73744 0.176777 2.03033 0.46967L6.03033 4.46967C6.32322 4.76256 6.32322 5.23744 6.03033 5.53033L2.03033 9.53033C1.73744 9.82322 1.26256 9.82322 0.96967 9.53033C0.676777 9.23744 0.676777 8.76256 0.96967 8.46967L4.43934 5L0.96967 1.53033C0.676777 1.23744 0.676777 0.762563 0.96967 0.46967Z" fill="black" />
					</svg>
					<span>{t(`CoursePage.course${courseIndex}.title`)}</span>
				</div>
			</div>

			<div className="CoursePage">
			<FormPopup status={formSubmitted}/>

				{showForm ? (
						<div className="CoursePage__form">
							<form onSubmit={handleSubmit} name="course-form">
							<p className='CoursePage__form-title' style={{ color: formSubmitted ? 'green' : 'black' }}>
								{formSubmitted ? 
									t(`Form.successfully-send`)
								: 								
									t(`Form.title`)
								}
							</p>
								<div className="CoursePage__form-input">
									<p>{t(`Form.inputName.subTitle`)}</p>
									<input
										type="text"
										name='name'
										value={formData.name}
										onChange={handleChange}
										placeholder={t(`Form.input-placeholder`)}
									/>
									{errors.name && <p className='form__error'>{errors.name}</p>}
								</div>

								<div className="CoursePage__form-input">
									<p>{t(`Form.inputEmail.subTitle`)}</p>
									<input
										type="text"
										name='email'
										value={formData.email}
										onChange={handleChange}
										placeholder={t(`Form.input-placeholder`)}
									/>
									{errors.email && <p className='form__error'>{errors.email}</p>}
								</div>

								<div className="CoursePage__form-input">
									<p>{t(`Form.inputMessage.subTitle`)}</p>
									<textarea
										name='message'
										value={formData.message}
										onChange={handleChange}
										placeholder={t(`Form.input-placeholder`)}
									/>
									{errors.message && <p className='form__error'>{errors.message}</p>}
								</div>

								<Button type="submit" id="btn-send-form" width={700} height={70} className="course__buttons" text={t("ReadyPage.trialLessonButton")} />
							</form>
						</div>
				) : (
					<>
						<div className="CoursePage__left">
							<p className='CoursePage__left-title'>{t(`CoursePage.course${courseIndex}.title`)}</p>
							<p className='CoursePage__left-description' dangerouslySetInnerHTML={{ __html: courseDescription }}></p>
							<p className='CoursePage__left-description'>
								<ul className=''>
									<li>{additionalInfo1}</li>
									<li>{additionalInfo2}</li>
									<li>{additionalInfo3}</li>
									<li>{additionalInfo4}</li>
								</ul>
							</p>

							<div className="CoursePage__left-box">
								<div className="CoursePage__item">
									<div className="CoursePage__item-img">
										<svg xmlns="http://www.w3.org/2000/svg" width="25" height="25" viewBox="0 0 25 25" fill="none">
											<path fillRule="evenodd" clipRule="evenodd" d="M5.20992 3.35045C5.81347 2.05127 7.88459 2.05127 12.0268 2.05127C16.1691 2.05127 18.2402 2.05127 18.8437 3.35045C18.8956 3.46213 18.9394 3.57812 18.9746 3.69737C19.3846 5.08457 17.9201 6.69238 14.9911 9.90801L13.029 12.0513L14.9911 14.1945C17.9201 17.4102 19.3846 19.018 18.9746 20.4052C18.9394 20.5244 18.8956 20.6404 18.8437 20.7521C18.2402 22.0513 16.1691 22.0513 12.0268 22.0513C7.88459 22.0513 5.81347 22.0513 5.20992 20.7521C5.15804 20.6404 5.11428 20.5244 5.07903 20.4052C4.66904 19.018 6.13354 17.4102 9.06254 14.1945L11.0246 12.0513L9.06254 9.90801C6.13354 6.69238 4.66904 5.08457 5.07903 3.69737C5.11428 3.57812 5.15804 3.46213 5.20992 3.35045ZM10.0224 17.8013C9.60723 17.8013 9.2707 18.1371 9.2707 18.5513C9.2707 18.9655 9.60723 19.3013 10.0224 19.3013H14.0313C14.4464 19.3013 14.7829 18.9655 14.7829 18.5513C14.7829 18.1371 14.4464 17.8013 14.0313 17.8013H10.0224ZM9.2707 5.55127C9.2707 5.13706 9.60723 4.80127 10.0224 4.80127H14.0313C14.4464 4.80127 14.7829 5.13706 14.7829 5.55127C14.7829 5.96548 14.4464 6.30127 14.0313 6.30127H10.0224C9.60723 6.30127 9.2707 5.96548 9.2707 5.55127Z" fill="#B41D8A" />
										</svg>
									</div>

									<p className="CoursePage__item-text">{t(`CoursePage.ageTitle`)} {t(`CoursePage.course${courseIndex}.age`)} {t(`CoursePage.ageTitle2`)}</p>
								</div>

								<div className="CoursePage__item">
									<div className="CoursePage__item-img">
										<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none">
											<g clipPath="url(#clip0_78_1281)">
												<path d="M12 2.00195C17.523 2.00195 22 6.47895 22 12.002C22 17.525 17.523 22.002 12 22.002C6.477 22.002 2 17.525 2 12.002C2 6.47895 6.477 2.00195 12 2.00195ZM12 6.00195C11.7348 6.00195 11.4804 6.10731 11.2929 6.29485C11.1054 6.48238 11 6.73674 11 7.00195V12.002C11.0001 12.2671 11.1055 12.5215 11.293 12.709L14.293 15.709C14.4816 15.8911 14.7342 15.9919 14.9964 15.9896C15.2586 15.9873 15.5094 15.8822 15.6948 15.6968C15.8802 15.5114 15.9854 15.2606 15.9877 14.9984C15.99 14.7362 15.8892 14.4836 15.707 14.295L13 11.588V7.00195C13 6.73674 12.8946 6.48238 12.7071 6.29485C12.5196 6.10731 12.2652 6.00195 12 6.00195Z" fill="#B41D8A" />
											</g>
											<defs>
												<clipPath id="clip0_78_1281">
													<rect width="24" height="24" fill="white" transform="translate(0 0.00195312)" />
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
												<path d="M20.9999 19.002C21.2547 19.0022 21.4999 19.0998 21.6852 19.2748C21.8706 19.4498 21.9821 19.6889 21.997 19.9433C22.012 20.1978 21.9292 20.4483 21.7656 20.6438C21.602 20.8392 21.37 20.9648 21.1169 20.995L20.9999 21.002H2.99987C2.74499 21.0017 2.49984 20.9041 2.3145 20.7291C2.12916 20.5541 2.01763 20.315 2.0027 20.0606C1.98776 19.8061 2.07054 19.5556 2.23413 19.3601C2.39772 19.1647 2.62977 19.0391 2.88287 19.009L2.99987 19.002H20.9999ZM18.9999 4.00195C19.5044 4.00179 19.9904 4.19236 20.3604 4.53545C20.7304 4.87854 20.957 5.3488 20.9949 5.85195L20.9999 6.00195V16.002C21 16.5065 20.8095 16.9925 20.4664 17.3625C20.1233 17.7325 19.653 17.9591 19.1499 17.997L18.9999 18.002H4.99987C4.49529 18.0021 4.0093 17.8115 3.63932 17.4685C3.26934 17.1254 3.04271 16.6551 3.00487 16.152L2.99987 16.002V6.00195C2.99971 5.49738 3.19028 5.01139 3.53337 4.64141C3.87646 4.27142 4.34671 4.0448 4.84987 4.00695L4.99987 4.00195H18.9999Z" fill="#B41D8A" />
											</g>
											<defs>
												<clipPath id="clip0_81_1286">
													<rect width="24" height="24" fill="white" transform="translate(0 0.00195312)" />
												</clipPath>
											</defs>
										</svg>
									</div>

									<p className="CoursePage__item-text">{t(`CoursePage.course${courseIndex}.needs`)}</p>
								</div>

								<div className="CoursePage__item">
									<div className="CoursePage__item-img">
										<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none">
											<path d="M11.25 7.84748C10.3141 8.10339 9.75 8.82154 9.75 9.5C9.75 10.1785 10.3141 10.8966 11.25 11.1525V7.84748Z" fill="#B41D8A" />
											<path d="M12.75 12.8475V16.1525C13.6859 15.8966 14.25 15.1785 14.25 14.5C14.25 13.8215 13.6859 13.1034 12.75 12.8475Z" fill="#B41D8A" />
											<path fillRule="evenodd" clipRule="evenodd" d="M22 12C22 17.5228 17.5228 22 12 22C6.47715 22 2 17.5228 2 12C2 6.47715 6.47715 2 12 2C17.5228 2 22 6.47715 22 12ZM12 5.25C12.4142 5.25 12.75 5.58579 12.75 6V6.31673C14.3804 6.60867 15.75 7.83361 15.75 9.5C15.75 9.91421 15.4142 10.25 15 10.25C14.5858 10.25 14.25 9.91421 14.25 9.5C14.25 8.82154 13.6859 8.10339 12.75 7.84748V11.3167C14.3804 11.6087 15.75 12.8336 15.75 14.5C15.75 16.1664 14.3804 17.3913 12.75 17.6833V18C12.75 18.4142 12.4142 18.75 12 18.75C11.5858 18.75 11.25 18.4142 11.25 18V17.6833C9.61957 17.3913 8.25 16.1664 8.25 14.5C8.25 14.0858 8.58579 13.75 9 13.75C9.41421 13.75 9.75 14.0858 9.75 14.5C9.75 15.1785 10.3141 15.8966 11.25 16.1525V12.6833C9.61957 12.3913 8.25 11.1664 8.25 9.5C8.25 7.83361 9.61957 6.60867 11.25 6.31673V6C11.25 5.58579 11.5858 5.25 12 5.25Z" fill="#B41D8A" />
										</svg>
									</div>

									<p className="CoursePage__item-text">{t(`CoursePage.price1`)}</p>
								</div>

								<div className="CoursePage__item">
									<div className="CoursePage__item-img">
										<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none">
											<path d="M11.25 7.84748C10.3141 8.10339 9.75 8.82154 9.75 9.5C9.75 10.1785 10.3141 10.8966 11.25 11.1525V7.84748Z" fill="#B41D8A" />
											<path d="M12.75 12.8475V16.1525C13.6859 15.8966 14.25 15.1785 14.25 14.5C14.25 13.8215 13.6859 13.1034 12.75 12.8475Z" fill="#B41D8A" />
											<path fillRule="evenodd" clipRule="evenodd" d="M22 12C22 17.5228 17.5228 22 12 22C6.47715 22 2 17.5228 2 12C2 6.47715 6.47715 2 12 2C17.5228 2 22 6.47715 22 12ZM12 5.25C12.4142 5.25 12.75 5.58579 12.75 6V6.31673C14.3804 6.60867 15.75 7.83361 15.75 9.5C15.75 9.91421 15.4142 10.25 15 10.25C14.5858 10.25 14.25 9.91421 14.25 9.5C14.25 8.82154 13.6859 8.10339 12.75 7.84748V11.3167C14.3804 11.6087 15.75 12.8336 15.75 14.5C15.75 16.1664 14.3804 17.3913 12.75 17.6833V18C12.75 18.4142 12.4142 18.75 12 18.75C11.5858 18.75 11.25 18.4142 11.25 18V17.6833C9.61957 17.3913 8.25 16.1664 8.25 14.5C8.25 14.0858 8.58579 13.75 9 13.75C9.41421 13.75 9.75 14.0858 9.75 14.5C9.75 15.1785 10.3141 15.8966 11.25 16.1525V12.6833C9.61957 12.3913 8.25 11.1664 8.25 9.5C8.25 7.83361 9.61957 6.60867 11.25 6.31673V6C11.25 5.58579 11.5858 5.25 12 5.25Z" fill="#B41D8A" />
										</svg>
									</div>

									<p className="CoursePage__item-text">{t(`CoursePage.price2`)}</p>
								</div>

							</div>
							<div onClick={hanldeShow} className="CoursePage__buttons">
								<Button id="btn-apply-to-course" width={300} height={70} className="course__buttons" text={t('CoursePage.button2') + ': ' + t(`CoursePage.course${courseIndex}.title`)} />
							</div>

						</div>

						<div className="CoursePage__rigth">
							<div className="CoursePage__rigth-img">
								<img src={imagePath} alt={`brigth-kids-${imageNumber}`} />
							</div>
						</div>
					</>
				)}
			</div>
			<Footer />
		</div>
	)
}

export default CoursePage;