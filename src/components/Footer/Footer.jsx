import React from 'react'
import { useTranslation } from 'react-i18next';
import "./style/Footer.css"
import { Link } from 'react-router-dom';

const Footer = () => {
	const { t } = useTranslation();

	const handleScrollToSection = (sectionId) => {
		if (!sectionId || sectionId === 'top') {
		  window.scrollTo({ top: 0 });
		  return;
		}
	  
		const sectionRef = document.getElementById(sectionId);
		if (sectionRef) {
		  sectionRef.scrollIntoView();
		}
	  };
	  

	return (
		<div className='footer' id='footer'>
			<div className="footer__box">
				<p className='footer__box-title'>{t("Footer.title")}</p>

				<div className="footer__box-container">
					<div className="footer__text">
						<Link onClick={() => handleScrollToSection('top')} to={"privacy-policy"}>
							<p>{t("Footer.subTite1")}</p>
						</Link>

						<Link onClick={() => handleScrollToSection('top')} to={"terms"}>
							<p>{t("Footer.subTite2")}</p>
						</Link>

						<Link onClick={() => handleScrollToSection('top')} to={"refund"}>
							<p>{t("Footer.subTite3")}</p>
						</Link>
						
					</div>

					<div className="footer__input">
						<input className='footer__input-input' placeholder={t("Footer.emailTitle")} type="email" />

						<button className='footer__input-button'>{t("Footer.button")}</button>
					</div>
				</div>
			</div>

			<div className="footer__sociable">
				<div className="footer__sociable--link">
					<div>
						<svg xmlns="http://www.w3.org/2000/svg" width="34" height="34" viewBox="0 0 34 34" fill="none">
							<path fillRule="evenodd" clipRule="evenodd" d="M4.49304 7.32672C2.83331 8.98645 2.83331 11.6577 2.83331 17.0003C2.83331 22.3429 2.83331 25.0142 4.49304 26.6739C6.15277 28.3337 8.82406 28.3337 14.1666 28.3337H19.8333C25.1759 28.3337 27.8472 28.3337 29.5069 26.6739C31.1666 25.0142 31.1666 22.3429 31.1666 17.0003C31.1666 11.6577 31.1666 8.98645 29.5069 7.32672C27.8472 5.66699 25.1759 5.66699 19.8333 5.66699H14.1666C8.82406 5.66699 6.15277 5.66699 4.49304 7.32672ZM26.3162 10.6535C26.6919 11.1043 26.631 11.7742 26.1802 12.1499L23.0685 14.743C21.8128 15.7894 20.7951 16.6375 19.8968 17.2153C18.9611 17.8171 18.0498 18.1972 17 18.1972C15.9501 18.1972 15.0389 17.8171 14.1031 17.2153C13.2049 16.6375 12.1872 15.7894 10.9315 14.743L7.81978 12.1499C7.36899 11.7742 7.30808 11.1043 7.68374 10.6535C8.05941 10.2027 8.72938 10.1418 9.18017 10.5174L12.2386 13.0661C13.5603 14.1675 14.4779 14.9297 15.2526 15.428C16.0026 15.9103 16.5111 16.0722 17 16.0722C17.4888 16.0722 17.9974 15.9103 18.7473 15.428C19.522 14.9297 20.4397 14.1675 21.7613 13.0661L24.8198 10.5174C25.2706 10.1418 25.9406 10.2027 26.3162 10.6535Z" fill="white" />
						</svg>
					</div>
					<a href="mailto:BrightKidsSchool2020@gmail.com">BrightKidsSchool2020@gmail.com</a>
				</div>

				<div className="footer__sociable--link">
					<div>
						<svg xmlns="http://www.w3.org/2000/svg" width="34" height="34" viewBox="0 0 34 34" fill="none">
							<path d="M14.2199 7.53157L15.1394 9.17905C15.9691 10.6658 15.636 12.6162 14.3292 13.923C14.3292 13.923 14.3292 13.923 14.3292 13.923C14.3291 13.9232 12.7441 15.5083 15.6181 18.3823C18.4914 21.2555 20.0765 19.672 20.0773 19.6712C20.0773 19.6711 20.0773 19.6711 20.0773 19.6711C21.3842 18.3643 23.3345 18.0312 24.8213 18.861L26.4688 19.7804C28.7138 21.0333 28.979 24.1818 27.0056 26.1551C25.8199 27.3409 24.3673 28.2635 22.7615 28.3244C20.0583 28.4269 15.4676 27.7427 10.8626 23.1377C6.25762 18.5328 5.57349 13.9421 5.67597 11.2389C5.73684 9.63309 6.65949 8.18049 7.84525 6.99474C9.81859 5.02139 12.967 5.28653 14.2199 7.53157Z" fill="white" />
						</svg>
					</div>
					<a href="tel:+15127868874">+1 (512) 786-8874</a>
				</div>

			</div>

			<div className="footer__bottom">
				<div className="footer__bottom-line"></div>

				<div className="footer__bottom-box">
					<p>© 2023 Brigth Kids Ukrainan</p>

					<div className="footer__sociable-link">
						<a target='_blank' rel="noreferrer" href="https://www.facebook.com/brightkids.ukrainian.online.school/">
							<div className='footer__sociable-link--icon'>
								<svg xmlns="http://www.w3.org/2000/svg" width="16" height="29" viewBox="0 0 16 29" fill="none">
									<path d="M14.8513 15.8226L15.6491 10.7531H10.7342V7.45789C10.7342 6.07169 11.4203 4.71718 13.6145 4.71718H15.8805V0.400178C14.5609 0.189747 13.2275 0.0759043 11.8911 0.0595703C7.84579 0.0595703 5.20478 2.49135 5.20478 6.88757V10.7531H0.720642V15.8226H5.20478V28.0845H10.7342V15.8226H14.8513Z" fill="white" />
								</svg>
							</div>
						</a>

						<a target='_blank' rel="noreferrer" href="https://www.instagram.com/bright_kids_ukrainian_school/">
							<div className='footer__sociable-link--icon'>
								<svg xmlns="http://www.w3.org/2000/svg" width="29" height="29" viewBox="0 0 29 29" fill="none">
									<path d="M9.3398 14.072C9.3398 11.4925 11.4297 9.40083 14.0085 9.40083C16.5873 9.40083 18.6784 11.4925 18.6784 14.072C18.6784 16.6515 16.5873 18.7432 14.0085 18.7432C11.4297 18.7432 9.3398 16.6515 9.3398 14.072ZM6.81538 14.072C6.81538 18.0459 10.0357 21.2672 14.0085 21.2672C17.9813 21.2672 21.2017 18.0459 21.2017 14.072C21.2017 10.0981 17.9813 6.87679 14.0085 6.87679C10.0357 6.87679 6.81538 10.0981 6.81538 14.072ZM19.8054 6.5915C19.8053 6.92407 19.9037 7.24921 20.0884 7.5258C20.273 7.80239 20.5354 8.01802 20.8425 8.14541C21.1496 8.2728 21.4876 8.30624 21.8137 8.24149C22.1398 8.17674 22.4394 8.01671 22.6746 7.78164C22.9098 7.54658 23.07 7.24703 23.135 6.92087C23.2 6.59472 23.1668 6.25662 23.0397 5.94931C22.9126 5.64201 22.6973 5.37931 22.4209 5.19444C22.1445 5.00956 21.8196 4.91081 21.4871 4.91068H21.4864C21.0408 4.91089 20.6134 5.08802 20.2982 5.40317C19.9831 5.71832 19.8058 6.14572 19.8054 6.5915ZM8.34913 25.4778C6.98337 25.4156 6.24103 25.188 5.74771 24.9958C5.09369 24.7411 4.62704 24.4377 4.13641 23.9476C3.64578 23.4576 3.34208 22.9912 3.08858 22.337C2.89627 21.8438 2.66878 21.101 2.60669 19.7348C2.53878 18.2578 2.52522 17.8141 2.52522 14.0721C2.52522 10.3301 2.5399 9.88767 2.60669 8.40942C2.66889 7.04326 2.89807 6.30195 3.08858 5.80725C3.3432 5.15304 3.64645 4.68626 4.13641 4.19548C4.62637 3.70471 5.09257 3.40092 5.74771 3.14735C6.24081 2.95499 6.98337 2.72743 8.34913 2.66532C9.82573 2.59739 10.2693 2.58383 14.0085 2.58383C17.7478 2.58383 18.1918 2.59851 19.6696 2.66532C21.0354 2.72754 21.7765 2.95678 22.271 3.14735C22.925 3.40092 23.3917 3.70538 23.8823 4.19548C24.3729 4.68558 24.6755 5.15304 24.9301 5.80725C25.1225 6.30049 25.3499 7.04326 25.412 8.40942C25.4799 9.88767 25.4935 10.3301 25.4935 14.0721C25.4935 17.8141 25.4799 18.2566 25.412 19.7348C25.3498 21.101 25.1212 21.8435 24.9301 22.337C24.6755 22.9912 24.3723 23.458 23.8823 23.9476C23.3924 24.4373 22.925 24.7411 22.271 24.9958C21.7779 25.1881 21.0354 25.4157 19.6696 25.4778C18.193 25.5457 17.7494 25.5593 14.0085 25.5593C10.2676 25.5593 9.82528 25.5457 8.34913 25.4778ZM8.23314 0.14443C6.74186 0.212362 5.72283 0.448892 4.83291 0.79528C3.91127 1.15299 3.13106 1.63289 2.3514 2.41153C1.57175 3.19017 1.09323 3.97184 0.735619 4.89375C0.389331 5.78449 0.15287 6.80326 0.0849569 8.29496C0.0159235 9.78903 0.00012207 10.2667 0.00012207 14.072C0.00012207 17.8773 0.0159235 18.355 0.0849569 19.8491C0.15287 21.3409 0.389331 22.3595 0.735619 23.2503C1.09323 24.1716 1.57186 24.9542 2.3514 25.7325C3.13094 26.5108 3.91127 26.99 4.83291 27.3488C5.72451 27.6951 6.74186 27.9317 8.23314 27.9996C9.72756 28.0675 10.2043 28.0845 14.0085 28.0845C17.8128 28.0845 18.2903 28.0687 19.7839 27.9996C21.2753 27.9317 22.2936 27.6951 23.1841 27.3488C24.1052 26.99 24.886 26.5111 25.6656 25.7325C26.4453 24.9539 26.9228 24.1716 27.2814 23.2503C27.6277 22.3595 27.8653 21.3408 27.9321 19.8491C28 18.3539 28.0158 17.8773 28.0158 14.072C28.0158 10.2667 28 9.78903 27.9321 8.29496C27.8642 6.80314 27.6277 5.78393 27.2814 4.89375C26.9228 3.97241 26.4441 3.19141 25.6656 2.41153C24.8872 1.63165 24.1052 1.15299 23.1853 0.79528C22.2937 0.448892 21.2752 0.211241 19.785 0.14443C18.2914 0.0764973 17.8139 0.0595703 14.0096 0.0595703C10.2054 0.0595703 9.72756 0.0753764 8.23314 0.14443Z" fill="white" />
									<path d="M9.3398 14.072C9.3398 11.4925 11.4297 9.40083 14.0085 9.40083C16.5873 9.40083 18.6784 11.4925 18.6784 14.072C18.6784 16.6515 16.5873 18.7432 14.0085 18.7432C11.4297 18.7432 9.3398 16.6515 9.3398 14.072ZM6.81538 14.072C6.81538 18.0459 10.0357 21.2672 14.0085 21.2672C17.9813 21.2672 21.2017 18.0459 21.2017 14.072C21.2017 10.0981 17.9813 6.87679 14.0085 6.87679C10.0357 6.87679 6.81538 10.0981 6.81538 14.072ZM19.8054 6.5915C19.8053 6.92407 19.9037 7.24921 20.0884 7.5258C20.273 7.80239 20.5354 8.01802 20.8425 8.14541C21.1496 8.2728 21.4876 8.30624 21.8137 8.24149C22.1398 8.17674 22.4394 8.01671 22.6746 7.78164C22.9098 7.54658 23.07 7.24703 23.135 6.92087C23.2 6.59472 23.1668 6.25662 23.0397 5.94931C22.9126 5.64201 22.6973 5.37931 22.4209 5.19444C22.1445 5.00956 21.8196 4.91081 21.4871 4.91068H21.4864C21.0408 4.91089 20.6134 5.08802 20.2982 5.40317C19.9831 5.71832 19.8058 6.14572 19.8054 6.5915ZM8.34913 25.4778C6.98337 25.4156 6.24103 25.188 5.74771 24.9958C5.09369 24.7411 4.62704 24.4377 4.13641 23.9476C3.64578 23.4576 3.34208 22.9912 3.08858 22.337C2.89627 21.8438 2.66878 21.101 2.60669 19.7348C2.53878 18.2578 2.52522 17.8141 2.52522 14.0721C2.52522 10.3301 2.5399 9.88767 2.60669 8.40942C2.66889 7.04326 2.89807 6.30195 3.08858 5.80725C3.3432 5.15304 3.64645 4.68626 4.13641 4.19548C4.62637 3.70471 5.09257 3.40092 5.74771 3.14735C6.24081 2.95499 6.98337 2.72743 8.34913 2.66532C9.82573 2.59739 10.2693 2.58383 14.0085 2.58383C17.7478 2.58383 18.1918 2.59851 19.6696 2.66532C21.0354 2.72754 21.7765 2.95678 22.271 3.14735C22.925 3.40092 23.3917 3.70538 23.8823 4.19548C24.3729 4.68558 24.6755 5.15304 24.9301 5.80725C25.1225 6.30049 25.3499 7.04326 25.412 8.40942C25.4799 9.88767 25.4935 10.3301 25.4935 14.0721C25.4935 17.8141 25.4799 18.2566 25.412 19.7348C25.3498 21.101 25.1212 21.8435 24.9301 22.337C24.6755 22.9912 24.3723 23.458 23.8823 23.9476C23.3924 24.4373 22.925 24.7411 22.271 24.9958C21.7779 25.1881 21.0354 25.4157 19.6696 25.4778C18.193 25.5457 17.7494 25.5593 14.0085 25.5593C10.2676 25.5593 9.82528 25.5457 8.34913 25.4778ZM8.23314 0.14443C6.74186 0.212362 5.72283 0.448892 4.83291 0.79528C3.91127 1.15299 3.13106 1.63289 2.3514 2.41153C1.57175 3.19017 1.09323 3.97184 0.735619 4.89375C0.389331 5.78449 0.15287 6.80326 0.0849569 8.29496C0.0159235 9.78903 0.00012207 10.2667 0.00012207 14.072C0.00012207 17.8773 0.0159235 18.355 0.0849569 19.8491C0.15287 21.3409 0.389331 22.3595 0.735619 23.2503C1.09323 24.1716 1.57186 24.9542 2.3514 25.7325C3.13094 26.5108 3.91127 26.99 4.83291 27.3488C5.72451 27.6951 6.74186 27.9317 8.23314 27.9996C9.72756 28.0675 10.2043 28.0845 14.0085 28.0845C17.8128 28.0845 18.2903 28.0687 19.7839 27.9996C21.2753 27.9317 22.2936 27.6951 23.1841 27.3488C24.1052 26.99 24.886 26.5111 25.6656 25.7325C26.4453 24.9539 26.9228 24.1716 27.2814 23.2503C27.6277 22.3595 27.8653 21.3408 27.9321 19.8491C28 18.3539 28.0158 17.8773 28.0158 14.072C28.0158 10.2667 28 9.78903 27.9321 8.29496C27.8642 6.80314 27.6277 5.78393 27.2814 4.89375C26.9228 3.97241 26.4441 3.19141 25.6656 2.41153C24.8872 1.63165 24.1052 1.15299 23.1853 0.79528C22.2937 0.448892 21.2752 0.211241 19.785 0.14443C18.2914 0.0764973 17.8139 0.0595703 14.0096 0.0595703C10.2054 0.0595703 9.72756 0.0753764 8.23314 0.14443Z" fill="white" />
								</svg>
							</div>
						</a>

						<a target='_blank' rel="noreferrer" href="https://www.youtube.com/c/NadyaZhurbaReadingAloudBooks/featured">
							<div className='footer__sociable-link--icon'>
								<svg xmlns="http://www.w3.org/2000/svg" width="33" height="24" viewBox="0 0 33 24" fill="none">
									<path d="M31.5753 4.29726C31.2097 2.92271 30.1281 1.83835 28.752 1.46671C26.2638 0.799805 16.2806 0.799805 16.2806 0.799805C16.2806 0.799805 6.30238 0.799805 3.80911 1.46671C2.43806 1.83326 1.35646 2.91762 0.985768 4.29726C0.320557 6.7918 0.320557 11.9998 0.320557 11.9998C0.320557 11.9998 0.320557 17.2078 0.985768 19.7024C1.35138 21.0769 2.43298 22.1613 3.80911 22.5329C6.30238 23.1998 16.2806 23.1998 16.2806 23.1998C16.2806 23.1998 26.2638 23.1998 28.752 22.5329C30.1231 22.1663 31.2047 21.082 31.5753 19.7024C32.2406 17.2078 32.2406 11.9998 32.2406 11.9998C32.2406 11.9998 32.2406 6.7918 31.5753 4.29726Z" fill="white" />
									<path d="M13.0916 16.8005L21.3839 11.9998L13.0916 7.19908V16.8005Z" fill="#6ECFA0" />
								</svg>
							</div>
						</a>

						<a target='_blank' rel="noreferrer" href="https://www.tiktok.com/@bk_ukrainian_school">
							<div className='footer__sociable-link--icon'>
								<svg xmlns="http://www.w3.org/2000/svg" width="25" height="28" viewBox="0 0 25 28" fill="none">
									<path d="M21.7863 5.95374C21.6005 5.85772 21.4196 5.75247 21.2444 5.63837C20.7348 5.30149 20.2676 4.90453 19.8528 4.45606C18.815 3.26858 18.4274 2.0639 18.2846 1.22046H18.2903C18.1711 0.520356 18.2204 0.0673828 18.2278 0.0673828H13.5009V18.3457C13.5009 18.5911 13.5009 18.8336 13.4905 19.0733C13.4905 19.1031 13.4877 19.1307 13.486 19.1628C13.486 19.176 13.486 19.1897 13.4831 19.2035C13.4831 19.2069 13.4831 19.2104 13.4831 19.2138C13.4333 19.8696 13.223 20.5031 12.8709 21.0587C12.5188 21.6142 12.0355 22.0746 11.4636 22.3995C10.8676 22.7386 10.1935 22.9164 9.50783 22.9156C7.30546 22.9156 5.52052 21.1197 5.52052 18.9019C5.52052 16.684 7.30546 14.8882 9.50783 14.8882C9.92473 14.8878 10.3391 14.9534 10.7354 15.0826L10.7412 10.2696C9.53785 10.1142 8.31537 10.2098 7.15086 10.5505C5.98635 10.8911 4.90508 11.4694 3.97525 12.2489C3.16051 12.9568 2.47556 13.8015 1.95121 14.7448C1.75167 15.0889 0.998821 16.4713 0.907653 18.715C0.850315 19.9884 1.23276 21.3078 1.4151 21.8531V21.8645C1.52977 22.1856 1.97415 23.2814 2.69833 24.2051C3.28228 24.9461 3.97221 25.597 4.74588 26.1368V26.1254L4.75735 26.1368C7.04572 27.6918 9.58294 27.5898 9.58294 27.5898C10.0222 27.572 11.4935 27.5898 13.1643 26.7979C15.0175 25.9201 16.0725 24.6122 16.0725 24.6122C16.7465 23.8307 17.2824 22.9401 17.6573 21.9787C18.0851 20.8542 18.2278 19.5056 18.2278 18.9667V9.26961C18.2852 9.30401 19.0489 9.80916 19.0489 9.80916C19.0489 9.80916 20.1492 10.5144 21.866 10.9737C23.0976 11.3005 24.757 11.3693 24.757 11.3693V6.67677C24.1755 6.73984 22.9949 6.55636 21.7863 5.95374Z" fill="white" />
								</svg>
							</div>
						</a>

					</div>
				</div>
			</div>
		</div>
	)
}

export default Footer;
