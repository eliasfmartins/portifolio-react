import { createGlobalStyle } from "styled-components";

export const GlobalStyle = createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }
  html, body {
    max-width: 100%;
    overflow-x: hidden;
}
 body {
  background: url("/herobg-md.webp");
  background-size: cover;
  /* color:white; */
  
 }

 body, input-security, textarea, button {
  font-family: 'Roboto', sans-serif;
  font-weight: 400;
  font-size: 1rem;
 }
`;
