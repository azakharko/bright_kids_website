import React from 'react';
import { useTranslation } from 'react-i18next';

const CourseCard = ({ courseArr, index }) => {
  const { t } = useTranslation();
  index = index + 1;

  return (
    <div className="course__box-card">
	  <div className="course-hover">
		<div className="course-hover__button">
			<button>hello world</button>
		</div>
	  </div>


      <div className="course__left">
        <button className='course__left-button'>{courseArr.subTitle}</button>
        <p className='course__left-subtitle'>{t("CoursePage.subTitle")}</p>
        <p className='course__left-title'>«{courseArr.title}» </p>

			<div className="course__left-box">

			{courseArr.category === "group" ? (
			<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none">
				<path d="M15.5 7.5C15.5 9.433 13.933 11 12 11C10.067 11 8.5 9.433 8.5 7.5C8.5 5.567 10.067 4 12 4C13.933 4 15.5 5.567 15.5 7.5Z" fill="#B41D8A"/>
				<path d="M18 16.5C18 18.433 15.3137 20 12 20C8.68629 20 6 18.433 6 16.5C6 14.567 8.68629 13 12 13C15.3137 13 18 14.567 18 16.5Z" fill="#B41D8A"/>
				<path d="M7.12205 5C7.29951 5 7.47276 5.01741 7.64005 5.05056C7.23249 5.77446 7 6.61008 7 7.5C7 8.36825 7.22131 9.18482 7.61059 9.89636C7.45245 9.92583 7.28912 9.94126 7.12205 9.94126C5.70763 9.94126 4.56102 8.83512 4.56102 7.47063C4.56102 6.10614 5.70763 5 7.12205 5Z" fill="#B41D8A"/>
				<path d="M5.44734 18.986C4.87942 18.3071 4.5 17.474 4.5 16.5C4.5 15.5558 4.85657 14.744 5.39578 14.0767C3.4911 14.2245 2 15.2662 2 16.5294C2 17.8044 3.5173 18.8538 5.44734 18.986Z" fill="#B41D8A"/>
				<path d="M16.9999 7.5C16.9999 8.36825 16.7786 9.18482 16.3893 9.89636C16.5475 9.92583 16.7108 9.94126 16.8779 9.94126C18.2923 9.94126 19.4389 8.83512 19.4389 7.47063C19.4389 6.10614 18.2923 5 16.8779 5C16.7004 5 16.5272 5.01741 16.3599 5.05056C16.7674 5.77446 16.9999 6.61008 16.9999 7.5Z" fill="#B41D8A"/>
				<path d="M18.5526 18.986C20.4826 18.8538 21.9999 17.8044 21.9999 16.5294C21.9999 15.2662 20.5088 14.2245 18.6041 14.0767C19.1433 14.744 19.4999 15.5558 19.4999 16.5C19.4999 17.474 19.1205 18.3071 18.5526 18.986Z" fill="#B41D8A"/>
			</svg>
			) : (
			<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none">
				<circle cx="12" cy="6" r="4" fill="#B41D8A"/>
				<ellipse cx="12" cy="17" rx="7" ry="4" fill="#B41D8A"/>
			</svg>
			)}

			<p className='course__description'>{courseArr.category}</p>
			</div>

			<div className="course__left-box">
				<svg xmlns="http://www.w3.org/2000/svg" width="25" height="24" viewBox="0 0 25 24" fill="none">
					<path fillRule="evenodd" clipPath="evenodd" d="M5.26549 3.29918C5.86905 2 7.94016 2 12.0824 2C16.2246 2 18.2957 2 18.8993 3.29918C18.9512 3.41086 18.9949 3.52686 19.0302 3.6461C19.4402 5.0333 17.9757 6.64111 15.0467 9.85674L13.0846 12L15.0467 14.1433C17.9757 17.3589 19.4402 18.9667 19.0302 20.3539C18.9949 20.4731 18.9512 20.5891 18.8993 20.7008C18.2957 22 16.2246 22 12.0824 22C7.94016 22 5.86905 22 5.26549 20.7008C5.21361 20.5891 5.16985 20.4731 5.13461 20.3539C4.72461 18.9667 6.18911 17.3589 9.11811 14.1433L11.0802 12L9.11811 9.85674C6.18911 6.64111 4.72461 5.0333 5.13461 3.6461C5.16985 3.52686 5.21361 3.41086 5.26549 3.29918ZM10.0779 17.75C9.6628 17.75 9.32627 18.0858 9.32627 18.5C9.32627 18.9142 9.6628 19.25 10.0779 19.25H14.0868C14.502 19.25 14.8385 18.9142 14.8385 18.5C14.8385 18.0858 14.502 17.75 14.0868 17.75H10.0779ZM9.32627 5.5C9.32627 5.08579 9.6628 4.75 10.0779 4.75H14.0868C14.502 4.75 14.8385 5.08579 14.8385 5.5C14.8385 5.91421 14.502 6.25 14.0868 6.25H10.0779C9.6628 6.25 9.32627 5.91421 9.32627 5.5Z" fill="#B41D8A"/>
				</svg>

				<p className='course__description'>{t("CoursePage.age1")} <span>{courseArr.age}</span> {t("CoursePage.age2")}</p>
			</div>
		</div>

		<div className="course__rigth">
			<div className={`course__rigth-img course__rigth-img${index}`}></div>
		</div>
	</div>
  )
}

export default CourseCard;
