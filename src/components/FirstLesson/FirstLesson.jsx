import React, { useState } from 'react';
import { useTranslation } from 'react-i18next';
import './style/FirstLesson.css';


const FirstLesson = () => {
  return (
    <div class="reg-form">
      <iframe src="https://docs.google.com/forms/d/e/1FAIpQLSd0Mk8ADhkSLtBibTR7fut-q3IpJxGzTHqVvYZ4b9twn0ukRA/viewform?embedded=true" width="640" height="840" frameborder="0" marginheight="0" marginwidth="0">Loading…</iframe>
      
      {/* TODO: Please use this frame for Ukrainian Language 
      <iframe src="https://docs.google.com/forms/d/e/1FAIpQLScu0ZZYKcZ88nUBAfeWWHXBeprZb-o1Le7KhrU4H-z8V3Fxxw/viewform?embedded=true" width="640" height="686" frameborder="0" marginheight="0" marginwidth="0">Loading…</iframe> 
      */}
    </div>
  );
};

export default FirstLesson;
