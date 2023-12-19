	import React from 'react'
	import "./style/Course.css"

	const Course = (urrentTranslations) => {
	return (
		<div id='course' className='course' >
			<p className='course__title'>{urrentTranslations.urrentTranslations.CoursePage.title}</p>

			<div className="course__bg">
				
			</div>

			<div className="course__box">
				<div className="course__box-card">
					<div className="course__left">
						<button className='course__left-button'>{urrentTranslations.urrentTranslations.CoursePage.course1.subTitle}</button>
						<p className='course__left-subtitle'>{urrentTranslations.urrentTranslations.CoursePage.subTitle}</p>
						<p className='course__left-title'>«{urrentTranslations.urrentTranslations.CoursePage.course1.title}» </p>

						<div className="course__left-box">
							<svg xmlns="http://www.w3.org/2000/svg" width="25" height="24" viewBox="0 0 25 24" fill="none">
								<path fillRule="evenodd" clipPath="evenodd" d="M12.0824 22C17.6175 22 22.1047 17.5228 22.1047 12C22.1047 6.47715 17.6175 2 12.0824 2C6.54724 2 2.06012 6.47715 2.06012 12C2.06012 17.5228 6.54724 22 12.0824 22ZM12.8341 6C12.8341 5.58579 12.4975 5.25 12.0824 5.25C11.6673 5.25 11.3307 5.58579 11.3307 6V6.31673C9.69666 6.60867 8.32404 7.83361 8.32404 9.5C8.32404 11.4172 10.1409 12.75 12.0824 12.75C13.4619 12.75 14.3374 13.6557 14.3374 14.5C14.3374 15.3443 13.4619 16.25 12.0824 16.25C10.7028 16.25 9.82738 15.3443 9.82738 14.5C9.82738 14.0858 9.49085 13.75 9.07571 13.75C8.66057 13.75 8.32404 14.0858 8.32404 14.5C8.32404 16.1664 9.69666 17.3913 11.3307 17.6833V18C11.3307 18.4142 11.6673 18.75 12.0824 18.75C12.4975 18.75 12.8341 18.4142 12.8341 18V17.6833C14.4681 17.3913 15.8407 16.1664 15.8407 14.5C15.8407 12.5828 14.0239 11.25 12.0824 11.25C10.7028 11.25 9.82738 10.3443 9.82738 9.5C9.82738 8.65573 10.7028 7.75 12.0824 7.75C13.4619 7.75 14.3374 8.65573 14.3374 9.5C14.3374 9.91421 14.6739 10.25 15.0891 10.25C15.5042 10.25 15.8407 9.91421 15.8407 9.5C15.8407 7.83361 14.4681 6.60867 12.8341 6.31673V6Z" fill="#B41D8A"/>
							</svg>

														<p className='course__description'>{urrentTranslations.urrentTranslations.CoursePage.price}</p>

						</div>

						<div className="course__left-box">
							<svg xmlns="http://www.w3.org/2000/svg" width="25" height="24" viewBox="0 0 25 24" fill="none">
								<path fillRule="evenodd" clipPath="evenodd" d="M5.26549 3.29918C5.86905 2 7.94016 2 12.0824 2C16.2246 2 18.2957 2 18.8993 3.29918C18.9512 3.41086 18.9949 3.52686 19.0302 3.6461C19.4402 5.0333 17.9757 6.64111 15.0467 9.85674L13.0846 12L15.0467 14.1433C17.9757 17.3589 19.4402 18.9667 19.0302 20.3539C18.9949 20.4731 18.9512 20.5891 18.8993 20.7008C18.2957 22 16.2246 22 12.0824 22C7.94016 22 5.86905 22 5.26549 20.7008C5.21361 20.5891 5.16985 20.4731 5.13461 20.3539C4.72461 18.9667 6.18911 17.3589 9.11811 14.1433L11.0802 12L9.11811 9.85674C6.18911 6.64111 4.72461 5.0333 5.13461 3.6461C5.16985 3.52686 5.21361 3.41086 5.26549 3.29918ZM10.0779 17.75C9.6628 17.75 9.32627 18.0858 9.32627 18.5C9.32627 18.9142 9.6628 19.25 10.0779 19.25H14.0868C14.502 19.25 14.8385 18.9142 14.8385 18.5C14.8385 18.0858 14.502 17.75 14.0868 17.75H10.0779ZM9.32627 5.5C9.32627 5.08579 9.6628 4.75 10.0779 4.75H14.0868C14.502 4.75 14.8385 5.08579 14.8385 5.5C14.8385 5.91421 14.502 6.25 14.0868 6.25H10.0779C9.6628 6.25 9.32627 5.91421 9.32627 5.5Z" fill="#B41D8A"/>
							</svg>

							<p className='course__description'>{urrentTranslations.urrentTranslations.CoursePage.age1} <span>{urrentTranslations.urrentTranslations.CoursePage.course1.age}</span> {urrentTranslations.urrentTranslations.CoursePage.age2}</p>
						</div>
					</div>

					<div className="course__rigth">
						<div className="course__rigth-img course__rigth-img1"></div>
					</div>
				</div>

				<div className="course__box-card">
					<div className="course__left">
						<button className='course__left-button'>{urrentTranslations.urrentTranslations.CoursePage.course2.subTitle}</button>
						<p className='course__left-subtitle'>{urrentTranslations.urrentTranslations.CoursePage.subTitle}</p>
						<p className='course__left-title'>«{urrentTranslations.urrentTranslations.CoursePage.course2.title}» </p>

						<div className="course__left-box">
							<svg xmlns="http://www.w3.org/2000/svg" width="25" height="24" viewBox="0 0 25 24" fill="none">
								<path fillRule="evenodd" clipPath="evenodd" d="M12.0824 22C17.6175 22 22.1047 17.5228 22.1047 12C22.1047 6.47715 17.6175 2 12.0824 2C6.54724 2 2.06012 6.47715 2.06012 12C2.06012 17.5228 6.54724 22 12.0824 22ZM12.8341 6C12.8341 5.58579 12.4975 5.25 12.0824 5.25C11.6673 5.25 11.3307 5.58579 11.3307 6V6.31673C9.69666 6.60867 8.32404 7.83361 8.32404 9.5C8.32404 11.4172 10.1409 12.75 12.0824 12.75C13.4619 12.75 14.3374 13.6557 14.3374 14.5C14.3374 15.3443 13.4619 16.25 12.0824 16.25C10.7028 16.25 9.82738 15.3443 9.82738 14.5C9.82738 14.0858 9.49085 13.75 9.07571 13.75C8.66057 13.75 8.32404 14.0858 8.32404 14.5C8.32404 16.1664 9.69666 17.3913 11.3307 17.6833V18C11.3307 18.4142 11.6673 18.75 12.0824 18.75C12.4975 18.75 12.8341 18.4142 12.8341 18V17.6833C14.4681 17.3913 15.8407 16.1664 15.8407 14.5C15.8407 12.5828 14.0239 11.25 12.0824 11.25C10.7028 11.25 9.82738 10.3443 9.82738 9.5C9.82738 8.65573 10.7028 7.75 12.0824 7.75C13.4619 7.75 14.3374 8.65573 14.3374 9.5C14.3374 9.91421 14.6739 10.25 15.0891 10.25C15.5042 10.25 15.8407 9.91421 15.8407 9.5C15.8407 7.83361 14.4681 6.60867 12.8341 6.31673V6Z" fill="#B41D8A"/>
							</svg>

														<p className='course__description'>{urrentTranslations.urrentTranslations.CoursePage.price}</p>

						</div>

						<div className="course__left-box">
							<svg xmlns="http://www.w3.org/2000/svg" width="25" height="24" viewBox="0 0 25 24" fill="none">
								<path fillRule="evenodd" clipPath="evenodd" d="M5.26549 3.29918C5.86905 2 7.94016 2 12.0824 2C16.2246 2 18.2957 2 18.8993 3.29918C18.9512 3.41086 18.9949 3.52686 19.0302 3.6461C19.4402 5.0333 17.9757 6.64111 15.0467 9.85674L13.0846 12L15.0467 14.1433C17.9757 17.3589 19.4402 18.9667 19.0302 20.3539C18.9949 20.4731 18.9512 20.5891 18.8993 20.7008C18.2957 22 16.2246 22 12.0824 22C7.94016 22 5.86905 22 5.26549 20.7008C5.21361 20.5891 5.16985 20.4731 5.13461 20.3539C4.72461 18.9667 6.18911 17.3589 9.11811 14.1433L11.0802 12L9.11811 9.85674C6.18911 6.64111 4.72461 5.0333 5.13461 3.6461C5.16985 3.52686 5.21361 3.41086 5.26549 3.29918ZM10.0779 17.75C9.6628 17.75 9.32627 18.0858 9.32627 18.5C9.32627 18.9142 9.6628 19.25 10.0779 19.25H14.0868C14.502 19.25 14.8385 18.9142 14.8385 18.5C14.8385 18.0858 14.502 17.75 14.0868 17.75H10.0779ZM9.32627 5.5C9.32627 5.08579 9.6628 4.75 10.0779 4.75H14.0868C14.502 4.75 14.8385 5.08579 14.8385 5.5C14.8385 5.91421 14.502 6.25 14.0868 6.25H10.0779C9.6628 6.25 9.32627 5.91421 9.32627 5.5Z" fill="#B41D8A"/>
							</svg>

							<p className='course__description'>{urrentTranslations.urrentTranslations.CoursePage.age1} <span>{urrentTranslations.urrentTranslations.CoursePage.course2.age}</span> {urrentTranslations.urrentTranslations.CoursePage.age2}</p>
						</div>
					</div>

					<div className="course__rigth">
						<div className="course__rigth-img course__rigth-img2"></div>
					</div>
				</div>

				<div className="course__box-card">
					<div className="course__left">
						<button className='course__left-button'>{urrentTranslations.urrentTranslations.CoursePage.course3.subTitle}</button>
						<p className='course__left-subtitle'>{urrentTranslations.urrentTranslations.CoursePage.subTitle}</p>
						<p className='course__left-title'>«{urrentTranslations.urrentTranslations.CoursePage.course3.title}» </p>

						<div className="course__left-box">
							<svg xmlns="http://www.w3.org/2000/svg" width="25" height="24" viewBox="0 0 25 24" fill="none">
								<path fillRule="evenodd" clipPath="evenodd" d="M12.0824 22C17.6175 22 22.1047 17.5228 22.1047 12C22.1047 6.47715 17.6175 2 12.0824 2C6.54724 2 2.06012 6.47715 2.06012 12C2.06012 17.5228 6.54724 22 12.0824 22ZM12.8341 6C12.8341 5.58579 12.4975 5.25 12.0824 5.25C11.6673 5.25 11.3307 5.58579 11.3307 6V6.31673C9.69666 6.60867 8.32404 7.83361 8.32404 9.5C8.32404 11.4172 10.1409 12.75 12.0824 12.75C13.4619 12.75 14.3374 13.6557 14.3374 14.5C14.3374 15.3443 13.4619 16.25 12.0824 16.25C10.7028 16.25 9.82738 15.3443 9.82738 14.5C9.82738 14.0858 9.49085 13.75 9.07571 13.75C8.66057 13.75 8.32404 14.0858 8.32404 14.5C8.32404 16.1664 9.69666 17.3913 11.3307 17.6833V18C11.3307 18.4142 11.6673 18.75 12.0824 18.75C12.4975 18.75 12.8341 18.4142 12.8341 18V17.6833C14.4681 17.3913 15.8407 16.1664 15.8407 14.5C15.8407 12.5828 14.0239 11.25 12.0824 11.25C10.7028 11.25 9.82738 10.3443 9.82738 9.5C9.82738 8.65573 10.7028 7.75 12.0824 7.75C13.4619 7.75 14.3374 8.65573 14.3374 9.5C14.3374 9.91421 14.6739 10.25 15.0891 10.25C15.5042 10.25 15.8407 9.91421 15.8407 9.5C15.8407 7.83361 14.4681 6.60867 12.8341 6.31673V6Z" fill="#B41D8A"/>
							</svg>

														<p className='course__description'>{urrentTranslations.urrentTranslations.CoursePage.price}</p>

						</div>

						<div className="course__left-box">
							<svg xmlns="http://www.w3.org/2000/svg" width="25" height="24" viewBox="0 0 25 24" fill="none">
								<path fillRule="evenodd" clipPath="evenodd" d="M5.26549 3.29918C5.86905 2 7.94016 2 12.0824 2C16.2246 2 18.2957 2 18.8993 3.29918C18.9512 3.41086 18.9949 3.52686 19.0302 3.6461C19.4402 5.0333 17.9757 6.64111 15.0467 9.85674L13.0846 12L15.0467 14.1433C17.9757 17.3589 19.4402 18.9667 19.0302 20.3539C18.9949 20.4731 18.9512 20.5891 18.8993 20.7008C18.2957 22 16.2246 22 12.0824 22C7.94016 22 5.86905 22 5.26549 20.7008C5.21361 20.5891 5.16985 20.4731 5.13461 20.3539C4.72461 18.9667 6.18911 17.3589 9.11811 14.1433L11.0802 12L9.11811 9.85674C6.18911 6.64111 4.72461 5.0333 5.13461 3.6461C5.16985 3.52686 5.21361 3.41086 5.26549 3.29918ZM10.0779 17.75C9.6628 17.75 9.32627 18.0858 9.32627 18.5C9.32627 18.9142 9.6628 19.25 10.0779 19.25H14.0868C14.502 19.25 14.8385 18.9142 14.8385 18.5C14.8385 18.0858 14.502 17.75 14.0868 17.75H10.0779ZM9.32627 5.5C9.32627 5.08579 9.6628 4.75 10.0779 4.75H14.0868C14.502 4.75 14.8385 5.08579 14.8385 5.5C14.8385 5.91421 14.502 6.25 14.0868 6.25H10.0779C9.6628 6.25 9.32627 5.91421 9.32627 5.5Z" fill="#B41D8A"/>
							</svg>

							<p className='course__description'>{urrentTranslations.urrentTranslations.CoursePage.age1} <span>{urrentTranslations.urrentTranslations.CoursePage.course3.age}</span> {urrentTranslations.urrentTranslations.CoursePage.age2}</p>
						</div>
					</div>

					<div className="course__rigth">
						<div className="course__rigth-img course__rigth-img3"></div>
					</div>
				</div>

				<div className="course__box-card">
					<div className="course__left">
						<button className='course__left-button'>{urrentTranslations.urrentTranslations.CoursePage.course4.subTitle}</button>
						<p className='course__left-subtitle'>{urrentTranslations.urrentTranslations.CoursePage.subTitle}</p>
						<p className='course__left-title'>«{urrentTranslations.urrentTranslations.CoursePage.course4.title}» </p>

						<div className="course__left-box">
							<svg xmlns="http://www.w3.org/2000/svg" width="25" height="24" viewBox="0 0 25 24" fill="none">
								<path fillRule="evenodd" clipPath="evenodd" d="M12.0824 22C17.6175 22 22.1047 17.5228 22.1047 12C22.1047 6.47715 17.6175 2 12.0824 2C6.54724 2 2.06012 6.47715 2.06012 12C2.06012 17.5228 6.54724 22 12.0824 22ZM12.8341 6C12.8341 5.58579 12.4975 5.25 12.0824 5.25C11.6673 5.25 11.3307 5.58579 11.3307 6V6.31673C9.69666 6.60867 8.32404 7.83361 8.32404 9.5C8.32404 11.4172 10.1409 12.75 12.0824 12.75C13.4619 12.75 14.3374 13.6557 14.3374 14.5C14.3374 15.3443 13.4619 16.25 12.0824 16.25C10.7028 16.25 9.82738 15.3443 9.82738 14.5C9.82738 14.0858 9.49085 13.75 9.07571 13.75C8.66057 13.75 8.32404 14.0858 8.32404 14.5C8.32404 16.1664 9.69666 17.3913 11.3307 17.6833V18C11.3307 18.4142 11.6673 18.75 12.0824 18.75C12.4975 18.75 12.8341 18.4142 12.8341 18V17.6833C14.4681 17.3913 15.8407 16.1664 15.8407 14.5C15.8407 12.5828 14.0239 11.25 12.0824 11.25C10.7028 11.25 9.82738 10.3443 9.82738 9.5C9.82738 8.65573 10.7028 7.75 12.0824 7.75C13.4619 7.75 14.3374 8.65573 14.3374 9.5C14.3374 9.91421 14.6739 10.25 15.0891 10.25C15.5042 10.25 15.8407 9.91421 15.8407 9.5C15.8407 7.83361 14.4681 6.60867 12.8341 6.31673V6Z" fill="#B41D8A"/>
							</svg>

														<p className='course__description'>{urrentTranslations.urrentTranslations.CoursePage.price}</p>

						</div>

						<div className="course__left-box">
							<svg xmlns="http://www.w3.org/2000/svg" width="25" height="24" viewBox="0 0 25 24" fill="none">
								<path fillRule="evenodd" clipPath="evenodd" d="M5.26549 3.29918C5.86905 2 7.94016 2 12.0824 2C16.2246 2 18.2957 2 18.8993 3.29918C18.9512 3.41086 18.9949 3.52686 19.0302 3.6461C19.4402 5.0333 17.9757 6.64111 15.0467 9.85674L13.0846 12L15.0467 14.1433C17.9757 17.3589 19.4402 18.9667 19.0302 20.3539C18.9949 20.4731 18.9512 20.5891 18.8993 20.7008C18.2957 22 16.2246 22 12.0824 22C7.94016 22 5.86905 22 5.26549 20.7008C5.21361 20.5891 5.16985 20.4731 5.13461 20.3539C4.72461 18.9667 6.18911 17.3589 9.11811 14.1433L11.0802 12L9.11811 9.85674C6.18911 6.64111 4.72461 5.0333 5.13461 3.6461C5.16985 3.52686 5.21361 3.41086 5.26549 3.29918ZM10.0779 17.75C9.6628 17.75 9.32627 18.0858 9.32627 18.5C9.32627 18.9142 9.6628 19.25 10.0779 19.25H14.0868C14.502 19.25 14.8385 18.9142 14.8385 18.5C14.8385 18.0858 14.502 17.75 14.0868 17.75H10.0779ZM9.32627 5.5C9.32627 5.08579 9.6628 4.75 10.0779 4.75H14.0868C14.502 4.75 14.8385 5.08579 14.8385 5.5C14.8385 5.91421 14.502 6.25 14.0868 6.25H10.0779C9.6628 6.25 9.32627 5.91421 9.32627 5.5Z" fill="#B41D8A"/>
							</svg>

							<p className='course__description'>{urrentTranslations.urrentTranslations.CoursePage.age1} <span>{urrentTranslations.urrentTranslations.CoursePage.course4.age}</span> {urrentTranslations.urrentTranslations.CoursePage.age2}</p>
						</div>
					</div>

					<div className="course__rigth">
						<div className="course__rigth-img course__rigth-img4"></div>
					</div>
				</div>

				<div className="course__box-card">
					<div className="course__left">
						<button className='course__left-button'>{urrentTranslations.urrentTranslations.CoursePage.course5.subTitle}</button>
						<p className='course__left-subtitle'>{urrentTranslations.urrentTranslations.CoursePage.subTitle}</p>
						<p className='course__left-title'>«{urrentTranslations.urrentTranslations.CoursePage.course5.title}» </p>

						<div className="course__left-box">
							<svg xmlns="http://www.w3.org/2000/svg" width="25" height="24" viewBox="0 0 25 24" fill="none">
								<path fillRule="evenodd" clipPath="evenodd" d="M12.0824 22C17.6175 22 22.1047 17.5228 22.1047 12C22.1047 6.47715 17.6175 2 12.0824 2C6.54724 2 2.06012 6.47715 2.06012 12C2.06012 17.5228 6.54724 22 12.0824 22ZM12.8341 6C12.8341 5.58579 12.4975 5.25 12.0824 5.25C11.6673 5.25 11.3307 5.58579 11.3307 6V6.31673C9.69666 6.60867 8.32404 7.83361 8.32404 9.5C8.32404 11.4172 10.1409 12.75 12.0824 12.75C13.4619 12.75 14.3374 13.6557 14.3374 14.5C14.3374 15.3443 13.4619 16.25 12.0824 16.25C10.7028 16.25 9.82738 15.3443 9.82738 14.5C9.82738 14.0858 9.49085 13.75 9.07571 13.75C8.66057 13.75 8.32404 14.0858 8.32404 14.5C8.32404 16.1664 9.69666 17.3913 11.3307 17.6833V18C11.3307 18.4142 11.6673 18.75 12.0824 18.75C12.4975 18.75 12.8341 18.4142 12.8341 18V17.6833C14.4681 17.3913 15.8407 16.1664 15.8407 14.5C15.8407 12.5828 14.0239 11.25 12.0824 11.25C10.7028 11.25 9.82738 10.3443 9.82738 9.5C9.82738 8.65573 10.7028 7.75 12.0824 7.75C13.4619 7.75 14.3374 8.65573 14.3374 9.5C14.3374 9.91421 14.6739 10.25 15.0891 10.25C15.5042 10.25 15.8407 9.91421 15.8407 9.5C15.8407 7.83361 14.4681 6.60867 12.8341 6.31673V6Z" fill="#B41D8A"/>
							</svg>

														<p className='course__description'>{urrentTranslations.urrentTranslations.CoursePage.price}</p>

						</div>

						<div className="course__left-box">
							<svg xmlns="http://www.w3.org/2000/svg" width="25" height="24" viewBox="0 0 25 24" fill="none">
								<path fillRule="evenodd" clipPath="evenodd" d="M5.26549 3.29918C5.86905 2 7.94016 2 12.0824 2C16.2246 2 18.2957 2 18.8993 3.29918C18.9512 3.41086 18.9949 3.52686 19.0302 3.6461C19.4402 5.0333 17.9757 6.64111 15.0467 9.85674L13.0846 12L15.0467 14.1433C17.9757 17.3589 19.4402 18.9667 19.0302 20.3539C18.9949 20.4731 18.9512 20.5891 18.8993 20.7008C18.2957 22 16.2246 22 12.0824 22C7.94016 22 5.86905 22 5.26549 20.7008C5.21361 20.5891 5.16985 20.4731 5.13461 20.3539C4.72461 18.9667 6.18911 17.3589 9.11811 14.1433L11.0802 12L9.11811 9.85674C6.18911 6.64111 4.72461 5.0333 5.13461 3.6461C5.16985 3.52686 5.21361 3.41086 5.26549 3.29918ZM10.0779 17.75C9.6628 17.75 9.32627 18.0858 9.32627 18.5C9.32627 18.9142 9.6628 19.25 10.0779 19.25H14.0868C14.502 19.25 14.8385 18.9142 14.8385 18.5C14.8385 18.0858 14.502 17.75 14.0868 17.75H10.0779ZM9.32627 5.5C9.32627 5.08579 9.6628 4.75 10.0779 4.75H14.0868C14.502 4.75 14.8385 5.08579 14.8385 5.5C14.8385 5.91421 14.502 6.25 14.0868 6.25H10.0779C9.6628 6.25 9.32627 5.91421 9.32627 5.5Z" fill="#B41D8A"/>
							</svg>

							<p className='course__description'>{urrentTranslations.urrentTranslations.CoursePage.age1} <span>{urrentTranslations.urrentTranslations.CoursePage.course5.age}</span> {urrentTranslations.urrentTranslations.CoursePage.age2}</p>
						</div>
					</div>

					<div className="course__rigth">
						<div className="course__rigth-img course__rigth-img5"></div>
					</div>
				</div>

				<div className="course__box-card">
					<div className="course__left">
						<button className='course__left-button'>{urrentTranslations.urrentTranslations.CoursePage.course6.subTitle}</button>
						<p className='course__left-subtitle'>{urrentTranslations.urrentTranslations.CoursePage.subTitle}</p>
						<p className='course__left-title'>«{urrentTranslations.urrentTranslations.CoursePage.course6.title}» </p>

						<div className="course__left-box">
							<svg xmlns="http://www.w3.org/2000/svg" width="25" height="24" viewBox="0 0 25 24" fill="none">
								<path fillRule="evenodd" clipPath="evenodd" d="M12.0824 22C17.6175 22 22.1047 17.5228 22.1047 12C22.1047 6.47715 17.6175 2 12.0824 2C6.54724 2 2.06012 6.47715 2.06012 12C2.06012 17.5228 6.54724 22 12.0824 22ZM12.8341 6C12.8341 5.58579 12.4975 5.25 12.0824 5.25C11.6673 5.25 11.3307 5.58579 11.3307 6V6.31673C9.69666 6.60867 8.32404 7.83361 8.32404 9.5C8.32404 11.4172 10.1409 12.75 12.0824 12.75C13.4619 12.75 14.3374 13.6557 14.3374 14.5C14.3374 15.3443 13.4619 16.25 12.0824 16.25C10.7028 16.25 9.82738 15.3443 9.82738 14.5C9.82738 14.0858 9.49085 13.75 9.07571 13.75C8.66057 13.75 8.32404 14.0858 8.32404 14.5C8.32404 16.1664 9.69666 17.3913 11.3307 17.6833V18C11.3307 18.4142 11.6673 18.75 12.0824 18.75C12.4975 18.75 12.8341 18.4142 12.8341 18V17.6833C14.4681 17.3913 15.8407 16.1664 15.8407 14.5C15.8407 12.5828 14.0239 11.25 12.0824 11.25C10.7028 11.25 9.82738 10.3443 9.82738 9.5C9.82738 8.65573 10.7028 7.75 12.0824 7.75C13.4619 7.75 14.3374 8.65573 14.3374 9.5C14.3374 9.91421 14.6739 10.25 15.0891 10.25C15.5042 10.25 15.8407 9.91421 15.8407 9.5C15.8407 7.83361 14.4681 6.60867 12.8341 6.31673V6Z" fill="#B41D8A"/>
							</svg>

														<p className='course__description'>{urrentTranslations.urrentTranslations.CoursePage.price}</p>

						</div>

						<div className="course__left-box">
							<svg xmlns="http://www.w3.org/2000/svg" width="25" height="24" viewBox="0 0 25 24" fill="none">
								<path fillRule="evenodd" clipPath="evenodd" d="M5.26549 3.29918C5.86905 2 7.94016 2 12.0824 2C16.2246 2 18.2957 2 18.8993 3.29918C18.9512 3.41086 18.9949 3.52686 19.0302 3.6461C19.4402 5.0333 17.9757 6.64111 15.0467 9.85674L13.0846 12L15.0467 14.1433C17.9757 17.3589 19.4402 18.9667 19.0302 20.3539C18.9949 20.4731 18.9512 20.5891 18.8993 20.7008C18.2957 22 16.2246 22 12.0824 22C7.94016 22 5.86905 22 5.26549 20.7008C5.21361 20.5891 5.16985 20.4731 5.13461 20.3539C4.72461 18.9667 6.18911 17.3589 9.11811 14.1433L11.0802 12L9.11811 9.85674C6.18911 6.64111 4.72461 5.0333 5.13461 3.6461C5.16985 3.52686 5.21361 3.41086 5.26549 3.29918ZM10.0779 17.75C9.6628 17.75 9.32627 18.0858 9.32627 18.5C9.32627 18.9142 9.6628 19.25 10.0779 19.25H14.0868C14.502 19.25 14.8385 18.9142 14.8385 18.5C14.8385 18.0858 14.502 17.75 14.0868 17.75H10.0779ZM9.32627 5.5C9.32627 5.08579 9.6628 4.75 10.0779 4.75H14.0868C14.502 4.75 14.8385 5.08579 14.8385 5.5C14.8385 5.91421 14.502 6.25 14.0868 6.25H10.0779C9.6628 6.25 9.32627 5.91421 9.32627 5.5Z" fill="#B41D8A"/>
							</svg>

							<p className='course__description'>{urrentTranslations.urrentTranslations.CoursePage.age1} <span>{urrentTranslations.urrentTranslations.CoursePage.course6.age}</span> {urrentTranslations.urrentTranslations.CoursePage.age2}</p>
						</div>
					</div>

					<div className="course__rigth">
						<div className="course__rigth-img course__rigth-img6"></div>
					</div>
				</div>

				<div className="course__box-card">
					<div className="course__left">
						<button className='course__left-button'>{urrentTranslations.urrentTranslations.CoursePage.course7.subTitle}</button>
						<p className='course__left-subtitle'>{urrentTranslations.urrentTranslations.CoursePage.subTitle}</p>
						<p className='course__left-title'>«{urrentTranslations.urrentTranslations.CoursePage.course7.title}» </p>

						<div className="course__left-box">
							<svg xmlns="http://www.w3.org/2000/svg" width="25" height="24" viewBox="0 0 25 24" fill="none">
								<path fillRule="evenodd" clipPath="evenodd" d="M12.0824 22C17.6175 22 22.1047 17.5228 22.1047 12C22.1047 6.47715 17.6175 2 12.0824 2C6.54724 2 2.06012 6.47715 2.06012 12C2.06012 17.5228 6.54724 22 12.0824 22ZM12.8341 6C12.8341 5.58579 12.4975 5.25 12.0824 5.25C11.6673 5.25 11.3307 5.58579 11.3307 6V6.31673C9.69666 6.60867 8.32404 7.83361 8.32404 9.5C8.32404 11.4172 10.1409 12.75 12.0824 12.75C13.4619 12.75 14.3374 13.6557 14.3374 14.5C14.3374 15.3443 13.4619 16.25 12.0824 16.25C10.7028 16.25 9.82738 15.3443 9.82738 14.5C9.82738 14.0858 9.49085 13.75 9.07571 13.75C8.66057 13.75 8.32404 14.0858 8.32404 14.5C8.32404 16.1664 9.69666 17.3913 11.3307 17.6833V18C11.3307 18.4142 11.6673 18.75 12.0824 18.75C12.4975 18.75 12.8341 18.4142 12.8341 18V17.6833C14.4681 17.3913 15.8407 16.1664 15.8407 14.5C15.8407 12.5828 14.0239 11.25 12.0824 11.25C10.7028 11.25 9.82738 10.3443 9.82738 9.5C9.82738 8.65573 10.7028 7.75 12.0824 7.75C13.4619 7.75 14.3374 8.65573 14.3374 9.5C14.3374 9.91421 14.6739 10.25 15.0891 10.25C15.5042 10.25 15.8407 9.91421 15.8407 9.5C15.8407 7.83361 14.4681 6.60867 12.8341 6.31673V6Z" fill="#B41D8A"/>
							</svg>

														<p className='course__description'>{urrentTranslations.urrentTranslations.CoursePage.price}</p>

						</div>

						<div className="course__left-box">
							<svg xmlns="http://www.w3.org/2000/svg" width="25" height="24" viewBox="0 0 25 24" fill="none">
								<path fillRule="evenodd" clipPath="evenodd" d="M5.26549 3.29918C5.86905 2 7.94016 2 12.0824 2C16.2246 2 18.2957 2 18.8993 3.29918C18.9512 3.41086 18.9949 3.52686 19.0302 3.6461C19.4402 5.0333 17.9757 6.64111 15.0467 9.85674L13.0846 12L15.0467 14.1433C17.9757 17.3589 19.4402 18.9667 19.0302 20.3539C18.9949 20.4731 18.9512 20.5891 18.8993 20.7008C18.2957 22 16.2246 22 12.0824 22C7.94016 22 5.86905 22 5.26549 20.7008C5.21361 20.5891 5.16985 20.4731 5.13461 20.3539C4.72461 18.9667 6.18911 17.3589 9.11811 14.1433L11.0802 12L9.11811 9.85674C6.18911 6.64111 4.72461 5.0333 5.13461 3.6461C5.16985 3.52686 5.21361 3.41086 5.26549 3.29918ZM10.0779 17.75C9.6628 17.75 9.32627 18.0858 9.32627 18.5C9.32627 18.9142 9.6628 19.25 10.0779 19.25H14.0868C14.502 19.25 14.8385 18.9142 14.8385 18.5C14.8385 18.0858 14.502 17.75 14.0868 17.75H10.0779ZM9.32627 5.5C9.32627 5.08579 9.6628 4.75 10.0779 4.75H14.0868C14.502 4.75 14.8385 5.08579 14.8385 5.5C14.8385 5.91421 14.502 6.25 14.0868 6.25H10.0779C9.6628 6.25 9.32627 5.91421 9.32627 5.5Z" fill="#B41D8A"/>
							</svg>

							<p className='course__description'>{urrentTranslations.urrentTranslations.CoursePage.age1} <span>{urrentTranslations.urrentTranslations.CoursePage.course7.age}</span> {urrentTranslations.urrentTranslations.CoursePage.age2}</p>
						</div>
					</div>

					<div className="course__rigth">
						<div className="course__rigth-img course__rigth-img7"></div>
					</div>
				</div>

				<div className="course__box-card">
					<div className="course__left">
						<button className='course__left-button'>{urrentTranslations.urrentTranslations.CoursePage.course8.subTitle}</button>
						<p className='course__left-subtitle'>{urrentTranslations.urrentTranslations.CoursePage.subTitle}</p>
						<p className='course__left-title'>«{urrentTranslations.urrentTranslations.CoursePage.course8.title}» </p>

						<div className="course__left-box">
							<svg xmlns="http://www.w3.org/2000/svg" width="25" height="24" viewBox="0 0 25 24" fill="none">
								<path fillRule="evenodd" clipPath="evenodd" d="M12.0824 22C17.6175 22 22.1047 17.5228 22.1047 12C22.1047 6.47715 17.6175 2 12.0824 2C6.54724 2 2.06012 6.47715 2.06012 12C2.06012 17.5228 6.54724 22 12.0824 22ZM12.8341 6C12.8341 5.58579 12.4975 5.25 12.0824 5.25C11.6673 5.25 11.3307 5.58579 11.3307 6V6.31673C9.69666 6.60867 8.32404 7.83361 8.32404 9.5C8.32404 11.4172 10.1409 12.75 12.0824 12.75C13.4619 12.75 14.3374 13.6557 14.3374 14.5C14.3374 15.3443 13.4619 16.25 12.0824 16.25C10.7028 16.25 9.82738 15.3443 9.82738 14.5C9.82738 14.0858 9.49085 13.75 9.07571 13.75C8.66057 13.75 8.32404 14.0858 8.32404 14.5C8.32404 16.1664 9.69666 17.3913 11.3307 17.6833V18C11.3307 18.4142 11.6673 18.75 12.0824 18.75C12.4975 18.75 12.8341 18.4142 12.8341 18V17.6833C14.4681 17.3913 15.8407 16.1664 15.8407 14.5C15.8407 12.5828 14.0239 11.25 12.0824 11.25C10.7028 11.25 9.82738 10.3443 9.82738 9.5C9.82738 8.65573 10.7028 7.75 12.0824 7.75C13.4619 7.75 14.3374 8.65573 14.3374 9.5C14.3374 9.91421 14.6739 10.25 15.0891 10.25C15.5042 10.25 15.8407 9.91421 15.8407 9.5C15.8407 7.83361 14.4681 6.60867 12.8341 6.31673V6Z" fill="#B41D8A"/>
							</svg>

														<p className='course__description'>{urrentTranslations.urrentTranslations.CoursePage.price}</p>

						</div>

						<div className="course__left-box">
							<svg xmlns="http://www.w3.org/2000/svg" width="25" height="24" viewBox="0 0 25 24" fill="none">
								<path fillRule="evenodd" clipPath="evenodd" d="M5.26549 3.29918C5.86905 2 7.94016 2 12.0824 2C16.2246 2 18.2957 2 18.8993 3.29918C18.9512 3.41086 18.9949 3.52686 19.0302 3.6461C19.4402 5.0333 17.9757 6.64111 15.0467 9.85674L13.0846 12L15.0467 14.1433C17.9757 17.3589 19.4402 18.9667 19.0302 20.3539C18.9949 20.4731 18.9512 20.5891 18.8993 20.7008C18.2957 22 16.2246 22 12.0824 22C7.94016 22 5.86905 22 5.26549 20.7008C5.21361 20.5891 5.16985 20.4731 5.13461 20.3539C4.72461 18.9667 6.18911 17.3589 9.11811 14.1433L11.0802 12L9.11811 9.85674C6.18911 6.64111 4.72461 5.0333 5.13461 3.6461C5.16985 3.52686 5.21361 3.41086 5.26549 3.29918ZM10.0779 17.75C9.6628 17.75 9.32627 18.0858 9.32627 18.5C9.32627 18.9142 9.6628 19.25 10.0779 19.25H14.0868C14.502 19.25 14.8385 18.9142 14.8385 18.5C14.8385 18.0858 14.502 17.75 14.0868 17.75H10.0779ZM9.32627 5.5C9.32627 5.08579 9.6628 4.75 10.0779 4.75H14.0868C14.502 4.75 14.8385 5.08579 14.8385 5.5C14.8385 5.91421 14.502 6.25 14.0868 6.25H10.0779C9.6628 6.25 9.32627 5.91421 9.32627 5.5Z" fill="#B41D8A"/>
							</svg>

							<p className='course__description'>{urrentTranslations.urrentTranslations.CoursePage.age1} <span>{urrentTranslations.urrentTranslations.CoursePage.course8.age}</span> {urrentTranslations.urrentTranslations.CoursePage.age2}</p>
						</div>
					</div>

					<div className="course__rigth">
						<div className="course__rigth-img course__rigth-img8"></div>
					</div>
				</div>

				<div className="course__box-card">
					<div className="course__left">
						<button className='course__left-button'>{urrentTranslations.urrentTranslations.CoursePage.course9.subTitle}</button>
						<p className='course__left-subtitle'>{urrentTranslations.urrentTranslations.CoursePage.subTitle}</p>
						<p className='course__left-title'>«{urrentTranslations.urrentTranslations.CoursePage.course9.title}» </p>

						<div className="course__left-box">
							<svg xmlns="http://www.w3.org/2000/svg" width="25" height="24" viewBox="0 0 25 24" fill="none">
								<path fillRule="evenodd" clipPath="evenodd" d="M12.0824 22C17.6175 22 22.1047 17.5228 22.1047 12C22.1047 6.47715 17.6175 2 12.0824 2C6.54724 2 2.06012 6.47715 2.06012 12C2.06012 17.5228 6.54724 22 12.0824 22ZM12.8341 6C12.8341 5.58579 12.4975 5.25 12.0824 5.25C11.6673 5.25 11.3307 5.58579 11.3307 6V6.31673C9.69666 6.60867 8.32404 7.83361 8.32404 9.5C8.32404 11.4172 10.1409 12.75 12.0824 12.75C13.4619 12.75 14.3374 13.6557 14.3374 14.5C14.3374 15.3443 13.4619 16.25 12.0824 16.25C10.7028 16.25 9.82738 15.3443 9.82738 14.5C9.82738 14.0858 9.49085 13.75 9.07571 13.75C8.66057 13.75 8.32404 14.0858 8.32404 14.5C8.32404 16.1664 9.69666 17.3913 11.3307 17.6833V18C11.3307 18.4142 11.6673 18.75 12.0824 18.75C12.4975 18.75 12.8341 18.4142 12.8341 18V17.6833C14.4681 17.3913 15.8407 16.1664 15.8407 14.5C15.8407 12.5828 14.0239 11.25 12.0824 11.25C10.7028 11.25 9.82738 10.3443 9.82738 9.5C9.82738 8.65573 10.7028 7.75 12.0824 7.75C13.4619 7.75 14.3374 8.65573 14.3374 9.5C14.3374 9.91421 14.6739 10.25 15.0891 10.25C15.5042 10.25 15.8407 9.91421 15.8407 9.5C15.8407 7.83361 14.4681 6.60867 12.8341 6.31673V6Z" fill="#B41D8A"/>
							</svg>

														<p className='course__description'>{urrentTranslations.urrentTranslations.CoursePage.price}</p>

						</div>

						<div className="course__left-box">
							<svg xmlns="http://www.w3.org/2000/svg" width="25" height="24" viewBox="0 0 25 24" fill="none">
								<path fillRule="evenodd" clipPath="evenodd" d="M5.26549 3.29918C5.86905 2 7.94016 2 12.0824 2C16.2246 2 18.2957 2 18.8993 3.29918C18.9512 3.41086 18.9949 3.52686 19.0302 3.6461C19.4402 5.0333 17.9757 6.64111 15.0467 9.85674L13.0846 12L15.0467 14.1433C17.9757 17.3589 19.4402 18.9667 19.0302 20.3539C18.9949 20.4731 18.9512 20.5891 18.8993 20.7008C18.2957 22 16.2246 22 12.0824 22C7.94016 22 5.86905 22 5.26549 20.7008C5.21361 20.5891 5.16985 20.4731 5.13461 20.3539C4.72461 18.9667 6.18911 17.3589 9.11811 14.1433L11.0802 12L9.11811 9.85674C6.18911 6.64111 4.72461 5.0333 5.13461 3.6461C5.16985 3.52686 5.21361 3.41086 5.26549 3.29918ZM10.0779 17.75C9.6628 17.75 9.32627 18.0858 9.32627 18.5C9.32627 18.9142 9.6628 19.25 10.0779 19.25H14.0868C14.502 19.25 14.8385 18.9142 14.8385 18.5C14.8385 18.0858 14.502 17.75 14.0868 17.75H10.0779ZM9.32627 5.5C9.32627 5.08579 9.6628 4.75 10.0779 4.75H14.0868C14.502 4.75 14.8385 5.08579 14.8385 5.5C14.8385 5.91421 14.502 6.25 14.0868 6.25H10.0779C9.6628 6.25 9.32627 5.91421 9.32627 5.5Z" fill="#B41D8A"/>
							</svg>

							<p className='course__description'>{urrentTranslations.urrentTranslations.CoursePage.age1} <span>{urrentTranslations.urrentTranslations.CoursePage.course9.age}</span> {urrentTranslations.urrentTranslations.CoursePage.age2}</p>
						</div>
					</div>

					<div className="course__rigth">
						<div className="course__rigth-img course__rigth-img9"></div>
					</div>
				</div>

				<div className="course__box-card">
					<div className="course__left">
						<button className='course__left-button'>{urrentTranslations.urrentTranslations.CoursePage.course10.subTitle}</button>
						<p className='course__left-subtitle'>{urrentTranslations.urrentTranslations.CoursePage.subTitle}</p>
						<p className='course__left-title'>«{urrentTranslations.urrentTranslations.CoursePage.course10.title}» </p>

						<div className="course__left-box">
							<svg xmlns="http://www.w3.org/2000/svg" width="25" height="24" viewBox="0 0 25 24" fill="none">
								<path fillRule="evenodd" clipPath="evenodd" d="M12.0824 22C17.6175 22 22.1047 17.5228 22.1047 12C22.1047 6.47715 17.6175 2 12.0824 2C6.54724 2 2.06012 6.47715 2.06012 12C2.06012 17.5228 6.54724 22 12.0824 22ZM12.8341 6C12.8341 5.58579 12.4975 5.25 12.0824 5.25C11.6673 5.25 11.3307 5.58579 11.3307 6V6.31673C9.69666 6.60867 8.32404 7.83361 8.32404 9.5C8.32404 11.4172 10.1409 12.75 12.0824 12.75C13.4619 12.75 14.3374 13.6557 14.3374 14.5C14.3374 15.3443 13.4619 16.25 12.0824 16.25C10.7028 16.25 9.82738 15.3443 9.82738 14.5C9.82738 14.0858 9.49085 13.75 9.07571 13.75C8.66057 13.75 8.32404 14.0858 8.32404 14.5C8.32404 16.1664 9.69666 17.3913 11.3307 17.6833V18C11.3307 18.4142 11.6673 18.75 12.0824 18.75C12.4975 18.75 12.8341 18.4142 12.8341 18V17.6833C14.4681 17.3913 15.8407 16.1664 15.8407 14.5C15.8407 12.5828 14.0239 11.25 12.0824 11.25C10.7028 11.25 9.82738 10.3443 9.82738 9.5C9.82738 8.65573 10.7028 7.75 12.0824 7.75C13.4619 7.75 14.3374 8.65573 14.3374 9.5C14.3374 9.91421 14.6739 10.25 15.0891 10.25C15.5042 10.25 15.8407 9.91421 15.8407 9.5C15.8407 7.83361 14.4681 6.60867 12.8341 6.31673V6Z" fill="#B41D8A"/>
							</svg>

														<p className='course__description'>{urrentTranslations.urrentTranslations.CoursePage.price}</p>

						</div>

						<div className="course__left-box">
							<svg xmlns="http://www.w3.org/2000/svg" width="25" height="24" viewBox="0 0 25 24" fill="none">
								<path fillRule="evenodd" clipPath="evenodd" d="M5.26549 3.29918C5.86905 2 7.94016 2 12.0824 2C16.2246 2 18.2957 2 18.8993 3.29918C18.9512 3.41086 18.9949 3.52686 19.0302 3.6461C19.4402 5.0333 17.9757 6.64111 15.0467 9.85674L13.0846 12L15.0467 14.1433C17.9757 17.3589 19.4402 18.9667 19.0302 20.3539C18.9949 20.4731 18.9512 20.5891 18.8993 20.7008C18.2957 22 16.2246 22 12.0824 22C7.94016 22 5.86905 22 5.26549 20.7008C5.21361 20.5891 5.16985 20.4731 5.13461 20.3539C4.72461 18.9667 6.18911 17.3589 9.11811 14.1433L11.0802 12L9.11811 9.85674C6.18911 6.64111 4.72461 5.0333 5.13461 3.6461C5.16985 3.52686 5.21361 3.41086 5.26549 3.29918ZM10.0779 17.75C9.6628 17.75 9.32627 18.0858 9.32627 18.5C9.32627 18.9142 9.6628 19.25 10.0779 19.25H14.0868C14.502 19.25 14.8385 18.9142 14.8385 18.5C14.8385 18.0858 14.502 17.75 14.0868 17.75H10.0779ZM9.32627 5.5C9.32627 5.08579 9.6628 4.75 10.0779 4.75H14.0868C14.502 4.75 14.8385 5.08579 14.8385 5.5C14.8385 5.91421 14.502 6.25 14.0868 6.25H10.0779C9.6628 6.25 9.32627 5.91421 9.32627 5.5Z" fill="#B41D8A"/>
							</svg>

							<p className='course__description'>{urrentTranslations.urrentTranslations.CoursePage.age1} <span>{urrentTranslations.urrentTranslations.CoursePage.course10.age}</span> {urrentTranslations.urrentTranslations.CoursePage.age2}</p>
						</div>
					</div>

					<div className="course__rigth">
						<div className="course__rigth-img course__rigth-img10"></div>
					</div>
				</div>

				<div className="course__box-card">
					<div className="course__left">
						<button className='course__left-button'>{urrentTranslations.urrentTranslations.CoursePage.course11.subTitle}</button>
						<p className='course__left-subtitle'>{urrentTranslations.urrentTranslations.CoursePage.subTitle}</p>
						<p className='course__left-title'>«{urrentTranslations.urrentTranslations.CoursePage.course11.title}» </p>

						<div className="course__left-box">
							<svg xmlns="http://www.w3.org/2000/svg" width="25" height="24" viewBox="0 0 25 24" fill="none">
								<path fillRule="evenodd" clipPath="evenodd" d="M12.0824 22C17.6175 22 22.1047 17.5228 22.1047 12C22.1047 6.47715 17.6175 2 12.0824 2C6.54724 2 2.06012 6.47715 2.06012 12C2.06012 17.5228 6.54724 22 12.0824 22ZM12.8341 6C12.8341 5.58579 12.4975 5.25 12.0824 5.25C11.6673 5.25 11.3307 5.58579 11.3307 6V6.31673C9.69666 6.60867 8.32404 7.83361 8.32404 9.5C8.32404 11.4172 10.1409 12.75 12.0824 12.75C13.4619 12.75 14.3374 13.6557 14.3374 14.5C14.3374 15.3443 13.4619 16.25 12.0824 16.25C10.7028 16.25 9.82738 15.3443 9.82738 14.5C9.82738 14.0858 9.49085 13.75 9.07571 13.75C8.66057 13.75 8.32404 14.0858 8.32404 14.5C8.32404 16.1664 9.69666 17.3913 11.3307 17.6833V18C11.3307 18.4142 11.6673 18.75 12.0824 18.75C12.4975 18.75 12.8341 18.4142 12.8341 18V17.6833C14.4681 17.3913 15.8407 16.1664 15.8407 14.5C15.8407 12.5828 14.0239 11.25 12.0824 11.25C10.7028 11.25 9.82738 10.3443 9.82738 9.5C9.82738 8.65573 10.7028 7.75 12.0824 7.75C13.4619 7.75 14.3374 8.65573 14.3374 9.5C14.3374 9.91421 14.6739 10.25 15.0891 10.25C15.5042 10.25 15.8407 9.91421 15.8407 9.5C15.8407 7.83361 14.4681 6.60867 12.8341 6.31673V6Z" fill="#B41D8A"/>
							</svg>

														<p className='course__description'>{urrentTranslations.urrentTranslations.CoursePage.price}</p>

						</div>

						<div className="course__left-box">
							<svg xmlns="http://www.w3.org/2000/svg" width="25" height="24" viewBox="0 0 25 24" fill="none">
								<path fillRule="evenodd" clipPath="evenodd" d="M5.26549 3.29918C5.86905 2 7.94016 2 12.0824 2C16.2246 2 18.2957 2 18.8993 3.29918C18.9512 3.41086 18.9949 3.52686 19.0302 3.6461C19.4402 5.0333 17.9757 6.64111 15.0467 9.85674L13.0846 12L15.0467 14.1433C17.9757 17.3589 19.4402 18.9667 19.0302 20.3539C18.9949 20.4731 18.9512 20.5891 18.8993 20.7008C18.2957 22 16.2246 22 12.0824 22C7.94016 22 5.86905 22 5.26549 20.7008C5.21361 20.5891 5.16985 20.4731 5.13461 20.3539C4.72461 18.9667 6.18911 17.3589 9.11811 14.1433L11.0802 12L9.11811 9.85674C6.18911 6.64111 4.72461 5.0333 5.13461 3.6461C5.16985 3.52686 5.21361 3.41086 5.26549 3.29918ZM10.0779 17.75C9.6628 17.75 9.32627 18.0858 9.32627 18.5C9.32627 18.9142 9.6628 19.25 10.0779 19.25H14.0868C14.502 19.25 14.8385 18.9142 14.8385 18.5C14.8385 18.0858 14.502 17.75 14.0868 17.75H10.0779ZM9.32627 5.5C9.32627 5.08579 9.6628 4.75 10.0779 4.75H14.0868C14.502 4.75 14.8385 5.08579 14.8385 5.5C14.8385 5.91421 14.502 6.25 14.0868 6.25H10.0779C9.6628 6.25 9.32627 5.91421 9.32627 5.5Z" fill="#B41D8A"/>
							</svg>

							<p className='course__description'>{urrentTranslations.urrentTranslations.CoursePage.age1} <span>{urrentTranslations.urrentTranslations.CoursePage.course11.age}</span> {urrentTranslations.urrentTranslations.CoursePage.age2}</p>
						</div>
					</div>

					<div className="course__rigth">
						<div className="course__rigth-img course__rigth-img11"></div>
					</div>
				</div>


			</div>
		</div>
	)
	}

	export default Course;
