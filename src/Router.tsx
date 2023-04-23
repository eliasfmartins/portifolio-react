import { Route, Routes } from "react-router-dom";
import { Home } from "./components/Home/Home";
import { AboutMe } from "./components/AboutMe";
import { Page2 } from "./components/page2/page2";
import { DefaultLayout } from "./layouts/DefaultLayout";

export const Router = () => {
  return (
    <Routes>
      <Route path="/" element={<DefaultLayout />}>
        <Route path="/" element={<Home />} />
        <Route path="/page1" element={<AboutMe />} />
        <Route path="/page2" element={<Page2 />} />
      </Route>
    </Routes>
  );
};
