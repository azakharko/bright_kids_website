import React from 'react';
import { useTranslation } from 'react-i18next';
import "./style/Course.css";
import CourseCard from '../UI/CourseCard/CourseCard.jsx';
// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';

// import required modules
import { Keyboard, Pagination, Navigation } from 'swiper/modules';
import Button from '../UI/Button/Button.jsx';
import { Link } from 'react-router-dom';


const Course = ({ courseArr, setCourseIndex }) => {
  const { t, i18n } = useTranslation();

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
    <div id='course' className='course'>
      <p className='course__title'>{t("CoursePage.title")}</p>

      <div className="course__bg"></div>

      <div className="course__box">
        <Swiper
          slidesPerView={3}
          keyboard={{
            enabled: true,
          }}
          pagination={{
            clickable: true,
          }}
          navigation={true}
          modules={[Keyboard, Pagination, Navigation]}
          className="mySwiper"
          breakpoints={{
            1350: {
              slidesPerView: 3,
            },
            1000: {
              slidesPerView: 2,
            },
            500: {
              slidesPerView: 1,
            },
            100: {
              slidesPerView: 1,
            },
          }}
        >
          {courseArr ? (
            courseArr.map((course, index) => (
              <SwiperSlide key={index}>
                <CourseCard setCourseIndex={setCourseIndex} index={index} courseArr={course} />
              </SwiperSlide>
            ))
          ) : (
            <p>Loading...</p>
          )}
        </Swiper>

      </div>
      <Link onClick={() => handleScrollToSection('top')} to={`courses/${i18n.language}`}>
        <Button id="btn-show-all-courses" width={300} height={70} className="course__buttons" text={t('CoursePage.button')} />
      </Link>

    </div>
  );
};

export default Course;
