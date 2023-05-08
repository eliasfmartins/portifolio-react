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
  /* background: url("/herobg-md.webp"); */
  background-image: url("/blog-cards/public/herobg-4k.jpg");
  background: url("/herobg-hd.webp") no-repeat;
  image-rendering: optimizeQuality;
  background-position: top center;
  background-size: cover;
 }

 body, input-security, textarea, button {
  font-family: 'Roboto', sans-serif;
  font-weight: 400;
  font-size: 1rem;
 }
`;
