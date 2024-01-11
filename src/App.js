import { useEffect, useState } from "react";
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Page from "./Page";
import CoursPage from "./components/CoursPage/CoursPage";
import Privacy from "./components/Privacy/Privacy";
import Terms from "./components/Terms/Terms";
import Refund from "./components/Refund/Refund";
import ReactGA from "react-ga4";

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
        <Route path="/*" element={<Page setCourseIndex={setCourseIndex} burgerOpen={burgerOpen} setBurgerOpen={setBurgerOpen} />} />
        <Route path={`/course`} element={<CoursPage courseIndex={courseIndex} burgerOpen={burgerOpen} setBurgerOpen={setBurgerOpen} />} />
        <Route path={`/privacy-policy`} element={<Privacy burgerOpen={burgerOpen} setBurgerOpen={setBurgerOpen} />} />
        <Route path={`/terms`} element={<Terms burgerOpen={burgerOpen} setBurgerOpen={setBurgerOpen} />} />
        <Route path={`/refund`} element={<Refund burgerOpen={burgerOpen} setBurgerOpen={setBurgerOpen} />} />

      </Routes>
    </Router>
  );
}

ReactGA.initialize("G-NYV7WT0BV3");

export default App;
