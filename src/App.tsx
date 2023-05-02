import { BrowserRouter } from "react-router-dom";
import { ThemeProvider } from "styled-components";
import { defaultTheme } from "./styles/themes/default";
import { darkTheme } from "./styles/themes/dark";
import { Dispatch, SetStateAction, createContext, useState } from "react";
import { GlobalStyle } from "./styles/global";
import { Router } from "./Router";
import { ReducerProvider } from "./components/reducer/context";

interface GlobalContextProps {
  color: boolean;
  setColor: Dispatch<SetStateAction<boolean>>;
}

export const globalContext = createContext<GlobalContextProps>({
  color: true,
  setColor: () => {},
});

export const App = () => {
  const [color, setColor] = useState<boolean>(false);

  return (
    <div>
      <BrowserRouter>
      <ReducerProvider>
        <globalContext.Provider value={{ color, setColor }}>
          <ThemeProvider theme={color ? defaultTheme : darkTheme}>
            <Router />
            <GlobalStyle />
          </ThemeProvider>
        </globalContext.Provider>
        </ReducerProvider>
      </BrowserRouter>
    </div>
  );
};
