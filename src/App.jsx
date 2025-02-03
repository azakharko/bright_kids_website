import React, { useEffect, useState } from "react";
import { Routes, Route, HashRouter } from "react-router-dom";
import Page from "./Page.jsx";
import CoursePage from "./components/CoursePage/CoursePage.jsx";
import Privacy from "./components/Privacy/Privacy.jsx";
import Terms from "./components/Terms/Terms.jsx";
import Refund from "./components/Refund/Refund.jsx";
import Catalog from "./components/Catalog/Catalog.jsx";
import ProjectStudent from "./components/ProjectStudent/ProjectStudent.jsx";
import { useTranslation } from "react-i18next";
import i18n from './i18n'; // імпортуємо налаштування i18n
import Team from "./components/Team/Team.jsx";
import TeamDetails from "./components/TeamDetails/TeamDetails.jsx";
import ThanksPage from "./components/ThanksPage/ThanksPage.jsx"

function App() {
  const [burgerOpen, setBurgerOpen] = useState(false);
  const { t } = useTranslation();

  const [courseArr, setCourseArr] = useState([
      {
        id: 0,
        title: `${t("CoursePage.course1.title")}`,
        subTitle: `${t("CoursePage.course1.subTitle")}`,
        age: `${t("CoursePage.course1.age")}`,
        category: `${t("CoursePage.course1.category")}`,
        link: `${t("CoursePage.course1.link")}`
      },
      {
        id: 1,
        title: `${t("CoursePage.course2.title")}`,
        subTitle: `${t("CoursePage.course2.subTitle")}`,
        age: `${t("CoursePage.course2.age")}`,
        category: `${t("CoursePage.course2.category")}`,
        link: `${t("CoursePage.course2.link")}`
      },
      {
        id: 2,
        title: `${t("CoursePage.course3.title")}`,
        subTitle: `${t("CoursePage.course3.subTitle")}`,
        age: `${t("CoursePage.course3.age")}`,
        category: `${t("CoursePage.course3.category")}`,
        link: `${t("CoursePage.course3.link")}`
      },
      {
        id: 3,
        title: `${t("CoursePage.course4.title")}`,
        subTitle: `${t("CoursePage.course4.subTitle")}`,
        age: `${t("CoursePage.course4.age")}`,
        category: `${t("CoursePage.course4.category")}`,
        link: `${t("CoursePage.course4.link")}`
      },
      {
        id: 4,
        title: `${t("CoursePage.course5.title")}`,
        subTitle: `${t("CoursePage.course5.subTitle")}`,
        age: `${t("CoursePage.course5.age")}`,
        category: `${t("CoursePage.course5.category")}`,
        link: `${t("CoursePage.course5.link")}`
      },
      {
        id: 5,
        title: `${t("CoursePage.course6.title")}`,
        subTitle: `${t("CoursePage.course6.subTitle")}`,
        age: `${t("CoursePage.course6.age")}`,
        category: `${t("CoursePage.course6.category")}`,
        link: `${t("CoursePage.course6.link")}`
      },
      {
        id: 6,
        title: `${t("CoursePage.course7.title")}`,
        subTitle: `${t("CoursePage.course7.subTitle")}`,
        age: `${t("CoursePage.course7.age")}`,
        category: `${t("CoursePage.course7.category")}`,
        link: `${t("CoursePage.course7.link")}`

      },
      {
        id: 7,
        title: `${t("CoursePage.course8.title")}`,
        subTitle: `${t("CoursePage.course8.subTitle")}`,
        age: `${t("CoursePage.course8.age")}`,
        category: `${t("CoursePage.course8.category")}`,
        link: `${t("CoursePage.course8.link")}`
      },
      {
        id: 8,
        title: `${t("CoursePage.course9.title")}`,
        subTitle: `${t("CoursePage.course9.subTitle")}`,
        age: `${t("CoursePage.course9.age")}`,
        category: `${t("CoursePage.course9.category")}`,
        link: `${t("CoursePage.course9.link")}`
    },
    {
      id: 9,
      title: `${t("CoursePage.course10.title")}`,
      subTitle: `${t("CoursePage.course10.subTitle")}`,
      age: `${t("CoursePage.course10.age")}`,
      category: `${t("CoursePage.course10.category")}`,
      link: `${t("CoursePage.course10.link")}`
    },
    {
      id: 10,
      title: `${t("CoursePage.course11.title")}`,
      subTitle: `${t("CoursePage.course11.subTitle")}`,
      age: `${t("CoursePage.course11.age")}`,
      category: `${t("CoursePage.course11.category")}`,
      link: `${t("CoursePage.course11.link")}`
    },
    {
      id: 11,
      title: `${t("CoursePage.course12.title")}`,
      subTitle: `${t("CoursePage.course12.subTitle")}`,
      age: `${t("CoursePage.course12.age")}`,
      category: `${t("CoursePage.course12.category")}`,
      link: `${t("CoursePage.course12.link")}`
    },
    {
      id: 12,
      title: `${t("CoursePage.course13.title")}`,
      subTitle: `${t("CoursePage.course13.subTitle")}`,
      age: `${t("CoursePage.course13.age")}`,
      category: `${t("CoursePage.course13.category")}`,
      link: `${t("CoursePage.course13.link")}`
    },
    {
      id: 13,
      title: `${t("CoursePage.course14.title")}`,
      subTitle: `${t("CoursePage.course14.subTitle")}`,
      age: `${t("CoursePage.course14.age")}`,
      category: `${t("CoursePage.course14.category")}`,
      link: `${t("CoursePage.course14.link")}`
    },
  ]);

  const [courseIndex, setCourseIndex] = useState(() => {
    const storedIndex = localStorage.getItem('courseIndex');
    return storedIndex ? parseInt(storedIndex, 10) : null;
  });


  useEffect(() => {
    localStorage.setItem('courseIndex', courseIndex);
  }, [courseIndex]);


  // Функція для обробки зміни мови та оновлення URL
  const handleLanguageChange = (language, pathWithoutLanguage) => {
    const currentUrl = new URL(window.location.href);

    if (pathWithoutLanguage.length > 0) {
      pathWithoutLanguage = pathWithoutLanguage.slice(0, -3);
    }

    const searchParams = currentUrl.search;
    const newUrl = `${window.location.origin}${pathWithoutLanguage}${searchParams}/${language}`;

    window.history.pushState({}, '', newUrl);
    i18n.changeLanguage(language);
  };

  // Обробник зміни мови з хешу URL
  useEffect(() => {
    const { hash } = window.location;
    if (hash.includes("uk")) {
      i18n.changeLanguage("uk");
    } else if (hash.includes("en")) {
      i18n.changeLanguage("en");
    }
  }, []);

  return (
    <HashRouter>
      <Routes>
        <Route path="/course/:courseLink/*" element={<CoursePage handleLanguageChange={handleLanguageChange} courseIndex={courseIndex} burgerOpen={burgerOpen} setBurgerOpen={setBurgerOpen} />} />
        <Route path="/privacy-policy/:language" element={<Privacy handleLanguageChange={handleLanguageChange} burgerOpen={burgerOpen} setBurgerOpen={setBurgerOpen} />} />
        <Route path="/terms/:language" element={<Terms handleLanguageChange={handleLanguageChange} burgerOpen={burgerOpen} setBurgerOpen={setBurgerOpen} />} />
        <Route path="/refund/:language" element={<Refund handleLanguageChange={handleLanguageChange} burgerOpen={burgerOpen} setBurgerOpen={setBurgerOpen} />} />
        <Route path="/courses/:language" element={<Catalog setCourseArr={setCourseArr} handleLanguageChange={handleLanguageChange} setCourseIndex={setCourseIndex} courseArr={courseArr} burgerOpen={burgerOpen} setBurgerOpen={setBurgerOpen} />} />

        <Route path="/thanks/:language" element={<ThanksPage setCourseArr={setCourseArr} handleLanguageChange={handleLanguageChange} setCourseIndex={setCourseIndex} courseArr={courseArr} burgerOpen={burgerOpen} setBurgerOpen={setBurgerOpen} />} />

        <Route path="/projects/*" element={<ProjectStudent handleLanguageChange={handleLanguageChange} burgerOpen={burgerOpen} setBurgerOpen={setBurgerOpen} />} />
        <Route path="/team/:language" element={<Team handleLanguageChange={handleLanguageChange} burgerOpen={burgerOpen} setBurgerOpen={setBurgerOpen} />} />
        <Route path="/team/details/:id/:language" element={<TeamDetails handleLanguageChange={handleLanguageChange} burgerOpen={burgerOpen} setBurgerOpen={setBurgerOpen} />} />

        <Route path="/*" element={<Page handleLanguageChange={handleLanguageChange} setCourseIndex={setCourseIndex} courseArr={courseArr} setCourseArr={setCourseArr} burgerOpen={burgerOpen} setBurgerOpen={setBurgerOpen} />} />
      </Routes>
    </HashRouter>
  );
}

export default App;
