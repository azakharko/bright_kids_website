import React, { useEffect, useState } from "react";
import { BrowserRouter as Router, Routes, Route, Navigate, HashRouter } from "react-router-dom";
import Page from "./Page.jsx";
import CoursePage from "./components/CoursePage/CoursePage.jsx";
import Privacy from "./components/Privacy/Privacy.jsx";
import Terms from "./components/Terms/Terms.jsx";
import Refund from "./components/Refund/Refund.jsx";
import Catalog from "./components/Catalog/Catalog.jsx";
import ProjectStudent from "./components/ProjectStudent/ProjectStudent.jsx";
import { useTranslation } from "react-i18next";

function App() {
  const [burgerOpen, setBurgerOpen] = useState(false);
  const [courseArr, setCourseArr] = useState([]);

  const [courseIndex, setCourseIndex] = useState(() => {
    const storedIndex = localStorage.getItem('courseIndex');
    return storedIndex ? parseInt(storedIndex, 10) : null;
  });

  useEffect(() => {
    localStorage.setItem('courseIndex', courseIndex);
  }, [courseIndex]);

  // Додайте функцію для обробки зміни мови та оновлення URL
  const handleLanguageChange = (language, pathWithoutLanguage) => {
    const currentUrl = new URL(window.location.href);

    if (pathWithoutLanguage.length > 0) {
        pathWithoutLanguage = pathWithoutLanguage.slice(0, -3);
    }

    const searchParams = currentUrl.search;
    console.log(searchParams);

    const newUrl = `${window.location.origin}${pathWithoutLanguage}${searchParams}/${language}`;
    console.log(newUrl);

    window.history.pushState({}, '', newUrl);
};



  return (
    <BrowserRouter>
      <Routes>
        <Route path="/course/:courseLink/*" element={<CoursePage handleLanguageChange={handleLanguageChange} courseIndex={courseIndex} burgerOpen={burgerOpen} setBurgerOpen={setBurgerOpen} />} />
        <Route path="/privacy-policy/:language" element={<Privacy handleLanguageChange={handleLanguageChange} burgerOpen={burgerOpen} setBurgerOpen={setBurgerOpen} />} />
        <Route path="/terms/:language" element={<Terms handleLanguageChange={handleLanguageChange} burgerOpen={burgerOpen} setBurgerOpen={setBurgerOpen} />} />
        <Route path="/refund/:language" element={<Refund handleLanguageChange={handleLanguageChange} burgerOpen={burgerOpen} setBurgerOpen={setBurgerOpen} />} />
        <Route path="/catalog/:language" element={<Catalog handleLanguageChange={handleLanguageChange} setCourseIndex={setCourseIndex} courseArr={courseArr} burgerOpen={burgerOpen} setBurgerOpen={setBurgerOpen} />} />
        <Route path="/projects/*" element={<ProjectStudent handleLanguageChange={handleLanguageChange} burgerOpen={burgerOpen} setBurgerOpen={setBurgerOpen} />} />
        <Route path="/*" element={<Page handleLanguageChange={handleLanguageChange} setCourseIndex={setCourseIndex} courseArr={courseArr} setCourseArr={setCourseArr} burgerOpen={burgerOpen} setBurgerOpen={setBurgerOpen} />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
