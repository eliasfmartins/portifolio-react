import "styled-components";

import { defaultTheme } from "../styles/themes/default";
import { darkTheme } from "../styles/themes/dark";

type ThemeType = typeof defaultTheme;
type ThemeType2 = typeof darkTheme;

// adicionei themeType2 pra testar se dava pra colocar os 2 themas e sim da pra colocar mais da merda  dps porq os 2 tevem ter as cores do mesmo nome porq quando vc torca pro dark se o nome das cores for diferente da error

declare module "styled-components" {
  export interface DefaultTheme extends ThemeType {}
  export interface DefaultTheme extends ThemeType2 {}
}
