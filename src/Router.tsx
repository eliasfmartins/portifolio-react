import { Route, Routes, useLocation } from "react-router-dom";
import { Home } from "./components/Home/Home";
import { AboutMe } from "./components/AboutMe";
import { Page2 } from "./components/page2/page2";
import { DefaultLayout } from "./layouts/DefaultLayout";
import { AnimatePresence } from "framer-motion";

export const Router = () => {
  const location = useLocation();
  return (
    <AnimatePresence>
      <Routes location={location} key={location.pathname}>
        <Route path="/" element={<DefaultLayout />}>
          <Route path="/" element={<Home />} />
          <Route path="/page1" element={<AboutMe />} />
          <Route path="/page2" element={<Page2 />} />
        </Route>
      </Routes>
    </AnimatePresence>
  );
};
