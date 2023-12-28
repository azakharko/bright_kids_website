import React, { useState } from 'react'
import "./style/Course.css"
import CourseCard from '../UI/CourseCard/CourseCard'

const Course = ({currentTranslations, courseArr}) => {
return (
	<div id='course' className='course' >
		<p className='course__title'>{currentTranslations.CoursePage.title}</p>
		<div className="course__bg"></div>

		<div className="course__box">
			{courseArr ? (
			courseArr.map((course, index) => (
				<CourseCard key={index} index={index} courseArr={course} currentTranslations={currentTranslations} />
			))
			) : (
			<p>Loading...</p>
			)}
		</div>
	</div>
)
}

export default Course;
