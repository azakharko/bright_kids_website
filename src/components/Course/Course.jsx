import React, { useState } from 'react';
import { useTranslation } from 'react-i18next';
import "./style/Course.css";
import CourseCard from '../UI/CourseCard/CourseCard';

const Course = ({ courseArr }) => {
	const { t,} = useTranslation();
  return (
    <div id='course' className='course'>
      <p className='course__title'>{t("CoursePage.title")}</p>
      <div className="course__bg"></div>

      <div className="course__box">
        {courseArr ? (
          courseArr.map((course, index) => (
            <CourseCard key={index} index={index} courseArr={course}/>
          ))
        ) : (
          <p>Loading...</p>
        )}
      </div>
    </div>
  );
};

export default Course;
