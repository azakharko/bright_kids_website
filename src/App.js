import { useEffect, useState } from "react";
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Page from "./Page";
import CoursPage from "./components/CoursPage/CoursPage";
import Privacy from "./components/Privacy/Privacy";
import Terms from "./components/Terms/Terms";

function App() {
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
        <Route path={`privacy-policy`} element={<Privacy burgerOpen={burgerOpen} setBurgerOpen={setBurgerOpen}/>} />
        <Route path={`terms`} element={<Terms burgerOpen={burgerOpen} setBurgerOpen={setBurgerOpen}/>} />

      </Routes>
    </Router>
      
  );
}

export default App;
