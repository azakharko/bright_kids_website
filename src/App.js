import { useEffect, useState } from "react";
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Page from "./Page.jsx";
import CoursPage from "./components/CoursPage/CoursPage.jsx";
import Privacy from "./components/Privacy/Privacy.jsx";
import Terms from "./components/Terms/Terms.jsx";
import Refund from "./components/Refund/Refund.jsx";
import { GA4React } from 'ga-4-react';
import Catalog from "./components/Catalog/Catalog.jsx";
import ProjectStudent from "./components/ProjectStudent/ProjectStudent.jsx";


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

  return (
    <Router>
      <Routes>
        <Route path="/*" element={<Page setCourseIndex={setCourseIndex} courseArr={courseArr} setCourseArr={setCourseArr} burgerOpen={burgerOpen} setBurgerOpen={setBurgerOpen} />} />
        <Route path={`/course`} element={<CoursPage courseIndex={courseIndex} burgerOpen={burgerOpen} setBurgerOpen={setBurgerOpen} />} />
        <Route path={`/privacy-policy`} element={<Privacy burgerOpen={burgerOpen} setBurgerOpen={setBurgerOpen} />} />
        <Route path={`/terms`} element={<Terms burgerOpen={burgerOpen} setBurgerOpen={setBurgerOpen} />} />
        <Route path={`/refund`} element={<Refund burgerOpen={burgerOpen} setBurgerOpen={setBurgerOpen} />} />
        <Route path={`/catalog`} element={<Catalog etCourseIndex={setCourseIndex} courseArr={courseArr} />} />
        <Route path={`/projects`} element={<ProjectStudent burgerOpen={burgerOpen} setBurgerOpen={setBurgerOpen}  />} />
        
      </Routes>
    </Router>
  );
}

const ga4react = new GA4React("G-NYV7WT0BV3");
ga4react.initialize();

export default App;
