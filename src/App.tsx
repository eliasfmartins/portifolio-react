import { BrowserRouter, Route, Routes } from "react-router-dom";
import { Page1 } from "./components/page1/page1";
import { Page2 } from "./components/page2/page2";
import { Header } from "./components/Header/Header";
import { Home } from "./components/Home/Home";
import { ThemeProvider } from "styled-components";
import { defaultTheme } from "./styles/themes/default";
import { darkTheme } from "./styles/themes/dark";
import { Dispatch, SetStateAction, createContext, useState } from "react";

interface GlobalContextProps {
  color: boolean;
  setColor: Dispatch<SetStateAction<boolean>>;
}

export const globalContext = createContext<GlobalContextProps>({
  color: false,
  setColor: () => {},
});

export const App = () => {
  const [color, setColor] = useState<boolean>(true);

  return (
    <div>
      <BrowserRouter>
        <globalContext.Provider value={{ color, setColor }}>
          <ThemeProvider theme={color ? defaultTheme : darkTheme}>
            <Header colorHeader="light" />
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/page1" element={<Page1 />} />
              <Route path="/page2" element={<Page2 />} />
            </Routes>
          </ThemeProvider>
        </globalContext.Provider>
      </BrowserRouter>
    </div>
  );
};
