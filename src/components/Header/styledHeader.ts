import styled, { css } from "styled-components";

export type colorsHeader = "light" | "dark";

interface HeaderStylesProps {
  colorHeader: colorsHeader;
}
const HeaderVariants = {
  light: "white",
  dark: "black",
};

export const Nav = styled.nav`
  display: flex;
  text-decoration: none;
  list-style: none;
  gap: 1rem;
`;
export const Headerstyle = styled.header<HeaderStylesProps>`
  color: blue;
  display: flex;
  align-items: center;
  justify-content: space-between;
  background-color: ${(props) => props.theme.primary};
  color: ${(props) => props.theme.quaternary};
  /* ${(props) => {
    return css`
      background-color: ${HeaderVariants[props.colorHeader]};
    `;
  }} */
`;
