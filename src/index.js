import React, { Suspense, useState, useEffect } from 'react';
import ReactDOM from 'react-dom/client';
import App from './App.js';
import "./i18n.js";
import Loading from "./components/UI/Popup/Popup.jsx";

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

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <Suspense fallback={<Loading />}>
      <LoadingDelay delay={1000}>
        <App />
      </LoadingDelay>
    </Suspense>
  </React.StrictMode>
);
