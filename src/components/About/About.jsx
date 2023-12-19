import React, { useRef, useState } from 'react';
import "./style/About.css";
// import video from "./video/video.mp4";
// import videoPrewiv from "./img/video__preweiv.jpg";

const About = ({urrentTranslations}) => {

  return (
    <div className='about-us' id='about-us'>
      <div className="about-us__title">{urrentTranslations.About.title}</div>
      <div className="about-us__description">{urrentTranslations.About.description}</div>

      <div className="about-us__video">

      <iframe
      src="https://www.youtube.com/embed/d36UClPy7us?si=VJ7wMdry6QAyNxgL"
      title="YouTube video player"
      frameBorder="0"
      allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
      allowFullScreen
      ></iframe>

      </div>
    </div>
  );
}

export default About;
