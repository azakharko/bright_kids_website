import React, { useState } from 'react'
import Home from './components/Home/Home.jsx';
import HomeCard from './components/HomeCard/HomeCard.jsx';
import Course from './components/Course/Course.jsx';
import FirstLesson from './components/FirstLesson/FirstLesson.jsx';
import HowToStart from './components/howToStart/Start.jsx';
import About from './components/About/About.jsx';
import Benefits from './components/Benefits/Benefits.jsx';
import Feedback from './components/Feedback/Feedback.jsx';
import FAQ from './components/FAQ/FAQ.jsx';
import Media from './components/Media/Media.jsx';
import Ready from './components/Ready/Ready.jsx';
import Footer from './components/Footer/Footer.jsx';


const Page = () => {
	const [cards, setCards] = useState([]);
	const [courseArr, setCourseArr] = useState([]);
  return (
	<div className='App'>
		<Home setCards={setCards} setCourseArr={setCourseArr}/>
		<HomeCard />
		<Course courseArr={courseArr}/>
		<FirstLesson />
		<HowToStart />
		<About />
		<Benefits />
		<Feedback />
		<FAQ setCards={setCards} cards={cards}/>
		<Media />
		<Ready />
		<Footer />



	</div>
  )
}

export default Page;
