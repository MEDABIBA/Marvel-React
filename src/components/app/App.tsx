import { lazy, Suspense } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import React from "react";
import AppHeader from "../appHeader/AppHeader";
import SinglePage from "../pages/SinglePage";
import SingleCharacter from "../pages/SingleCharacter/SingleCharacter";
import SignleComic from "../pages/SingleComic/SingleComic";
import Spinner from "../spinner/Spinner";
import "./app.css";
const Appp = (): JSX.Element => {
  type RLEC = React.LazyExoticComponent<React.FC>;
  const MainPage: RLEC = lazy(() => import("../pages/MainPage"));
  const ComicsPage: RLEC = lazy(() => import("../pages/ComicsPage"));
  const Page404: RLEC = lazy(() => import("../pages/404"));
  return (
    <Suspense fallback={<Spinner />}>
      <Router>
        <div className="app">
          <AppHeader />
          <main>
            <Routes>
              <Route path="/comics" element={<ComicsPage />} />
              <Route path="/" element={<MainPage />} />
              <Route path="/comics/:ID" element={<SinglePage Component={SignleComic} dataType="comic" />} />
              <Route path="/characters/:ID" element={<SinglePage Component={SingleCharacter} dataType="character" />} />
              <Route path="*" element={<Page404 />} />
            </Routes>
          </main>
        </div>
      </Router>
    </Suspense>
  );
};

export default Appp;
