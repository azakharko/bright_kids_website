import React from 'react'
import CourseCard from '../UI/CourseCard/CourseCard';
import Header from '../UI/Header/Header';
import Footer from '../Footer/Footer';
import "./style/Catalog.css";

const Catalog = ({ courseArr, setCourseIndex }) => {
  return (
	<div className='catalog'>
		
		<Header />

		<div className="catalog__box">
		{courseArr ? (
          courseArr.map((course, index) => (
              <CourseCard key={index} setCourseIndex={setCourseIndex} index={index} courseArr={course} />
          ))
           ) : (
            <p>Loading...</p>
        )}
		</div>
	 

		<Footer />
	</div>
  )
}

export default Catalog;
