import React, { useEffect, useState } from 'react';
import { useTranslation } from 'react-i18next';
import './style/FirstLesson.css';


const FirstLesson = () => {
  const { t, i18n } = useTranslation();
  const [thisLanguage, setThisLanguage] = useState('en')

  useEffect(() => {
    setThisLanguage(i18n.language)
  }, [t])


  console.log(i18n.language);
  console.log(thisLanguage === 'en');

  return (
    <div className="first-lesson">
      {thisLanguage === 'en' ? (
        <div className="reg-form">
          <iframe
            src="https://docs.google.com/forms/d/e/1FAIpQLSd0Mk8ADhkSLtBibTR7fut-q3IpJxGzTHqVvYZ4b9twn0ukRA/viewform?embedded=true"
            height="auto"
            frameBorder="0"
            marginHeight="0"
            marginWidth="0"
          >
            Loading…
          </iframe>
        </div>
      ) : (
        <div className="reg-form">
          <iframe
            src="https://docs.google.com/forms/d/e/1FAIpQLScu0ZZYKcZ88nUBAfeWWHXBeprZb-o1Le7KhrU4H-z8V3Fxxw/viewform?embedded=true"
            width="640"
            height="686"
            frameBorder="0"
            marginHeight="0"
            marginWidth="0"
          >
            Loading…
          </iframe>
        </div>
      )}
    </div>
 
  );
};

export default FirstLesson;
