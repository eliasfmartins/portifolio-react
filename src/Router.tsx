import { Route, Routes, useLocation } from "react-router-dom";

import { DefaultLayout } from "./layouts/DefaultLayout";
import { AnimatePresence } from "framer-motion";
import { Home} from "./components/Home";
import { ProjectPage } from "./components/ProjectPage";
import { Skills } from "./components/Skills";


export const Router = () => {
  const location = useLocation();
  return (
    <AnimatePresence>
      <Routes location={location} key={location.pathname}>
        <Route path="/" element={<DefaultLayout />}>
          <Route path="/" element={<Home />} />
          <Route path="/projectpage" element={<ProjectPage/>} />
          <Route path="/skills" element={<Skills />} />
        </Route>
      </Routes>
    </AnimatePresence>
  );
};
