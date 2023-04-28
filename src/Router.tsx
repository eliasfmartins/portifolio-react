import { Route, Routes, useLocation } from "react-router-dom";
import { Home } from "./components/Home/Home";

import { DefaultLayout } from "./layouts/DefaultLayout";
import { AnimatePresence } from "framer-motion";


export const Router = () => {
  const location = useLocation();
  return (
    <AnimatePresence>
      <Routes location={location} key={location.pathname}>
        <Route path="/" element={<DefaultLayout />}>
          <Route path="/" element={<Home />} />
          {/* <Route path="/page1" element={<TEste01 />} /> */}
          {/* <Route path="/page2" element={<Teste02 />} /> */}
        </Route>
      </Routes>
    </AnimatePresence>
  );
};
