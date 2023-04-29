import { Route, Routes, useLocation } from "react-router-dom";

import { DefaultLayout } from "./layouts/DefaultLayout";
import { AnimatePresence } from "framer-motion";
import { Home2 } from "./components/Home2";
import { Home3 } from "./components/Home2 copy";


export const Router = () => {
  const location = useLocation();
  return (
    <AnimatePresence>
      <Routes location={location} key={location.pathname}>
        <Route path="/" element={<DefaultLayout />}>
          <Route path="/" element={<Home2 />} />
          <Route path="/home3" element={<Home3 />} />
          {/* <Route path="/page1" element={<TEste01 />} /> */}
          {/* <Route path="/page2" element={<Teste02 />} /> */}
        </Route>
      </Routes>
    </AnimatePresence>
  );
};
