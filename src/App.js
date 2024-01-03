import { useEffect, useState } from "react";
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import Page from "./Page";

function App() {
	const { t, i18n} = useTranslation();




  
  // If we use currentTranslations, then there is an endless loop of calling useEffect

  return (
      <Router>
      <Routes>
        <Route path="/*" element={<Page/>} />
      </Routes>
    </Router>
      
  );
}

export default App;
