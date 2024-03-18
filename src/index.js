import React, { Suspense, useState, useEffect } from 'react';
import ReactDOM from 'react-dom/client';
import App from './App.jsx';
import "./i18n.js";
import Loading from "./components/UI/Popup/Popup.jsx";
import CookieConsent from "react-cookie-consent";

const LoadingDelay = ({ delay, children }) => {
  const [showContent, setShowContent] = useState(false);

  useEffect(() => {
    const timerId = setTimeout(() => {
      setShowContent(true);
    }, delay);

    return () => {
      clearTimeout(timerId);
    };
  }, [delay]);
  
  return showContent ? children : <Loading />;
};

const allConsentGranted = () => {
  console.log('consent', 'update', {
    'ad_user_data': 'granted',
    'ad_personalization': 'granted',
    'ad_storage': 'granted',
    'analytics_storage': 'granted'
  });
}

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <Suspense fallback={<Loading />}>
      <LoadingDelay delay={1000}>
        <App />
        <CookieConsent
          location="bottom"
          buttonText="Accept"
          onAccept={allConsentGranted}
          style={{ 'background': "rgb(6 0 80 / 60%)", 'width': "99%", 'left': "6px", 'bottom': "5px", 'border-radius': "5px" }}
          expires={150}>This website uses cookies to enhance the user experience.</CookieConsent>
      </LoadingDelay>
    </Suspense>
  </React.StrictMode>
);
