import { useEffect, useState } from "react";
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import Page from "./Page";
import CoursPage from "./components/CoursPage/CoursPage";

function App() {
	const { t, i18n} = useTranslation();
  const [burgerOpen, setBurgerOpen] = useState(false);
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
        <Route path="/*" element={<Page setCourseIndex={setCourseIndex} burgerOpen={burgerOpen} setBurgerOpen={setBurgerOpen}/>} />
        <Route path={`course`} element={<CoursPage courseIndex={courseIndex} burgerOpen={burgerOpen} setBurgerOpen={setBurgerOpen}/>} />
      </Routes>
    </Router>
      
  );
}

export default App;
