import React from 'react';
import { useTranslation } from 'react-i18next';
import "./style/Course.css";
import CourseCard from '../UI/CourseCard/CourseCard';
// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';

// import required modules
import { Keyboard, Pagination, Navigation } from 'swiper/modules';

const Course = ({ courseArr, setCourseIndex }) => {
  const { t } = useTranslation();
  return (
    <div id='course' className='course'>
      <p className='course__title'>{t("CoursePage.title")}</p>
      <div className="course__bg"></div>

      <div className="course__box">
          {courseArr ? (
            courseArr.map((course, index) => (
              <CourseCard  key={index} setCourseIndex={setCourseIndex} index={index} courseArr={course} />
            ))
          ) : (
            <p>Loading...</p>
          )}

      </div>
    </div>
  );
};

export default Course;
