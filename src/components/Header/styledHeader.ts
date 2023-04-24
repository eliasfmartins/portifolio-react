import { Link } from "react-router-dom";
import styled, { css } from "styled-components";

export type colorsHeader = "light" | "dark";

declare module "react" {
  interface IntrinsicElements {
    liStyled: any;
  }
}

interface HeaderStylesProps {
  colorHeader: colorsHeader;
}
const HeaderVariants = {
  light: "white",
  dark: "black",
};

export const Nav = styled.nav`
  border-radius: 8px;
  padding: 5px;
  display: flex;
  align-items: center;
  justify-content: center;
  text-decoration: none;
  list-style: none;
  gap: 1rem;
  color: ${({ theme }) => theme.quaternary};
  a {
    text-decoration: none;
  }
`;

export const Headerstyle = styled.div<HeaderStylesProps>`
  text-shadow: 1px 1px 2px black;
  position: fixed;
  width: 100vw;
  margin: 0;
  padding: 20px;
  box-sizing: border-box;
  color: blue;
  display: flex;
  align-items: center;
  justify-content: space-between;
  /* background-color: ${(props) => props.theme.primary}; */
  color: ${(props) => props.theme.septenary};
  background-color: transparent;
  height: 60px;
  /* border-bottom: 2px solid; */

  /* ${(props) => {
    return css`
      background-color: ${HeaderVariants[props.colorHeader]};
    `;
  }} */
`;

export const LinkStyled = styled(Link)`
  text-shadow: 1px 1px 2px black;
  padding: 5px;
  position: relative;
  color: ${({ theme }) => theme.septenary};
  background-color: transparent;

  &::after {
    content: "";
    position: absolute;
    bottom: 0;
    left: 0;
    width: 0;
    height: 2px;
    background-color: ${({ theme }) => theme.septenary};
    transition: all 0.3s ease-in-out;
  }

  &:hover::after {
    width: 100%;
    color: red;
  }
`;
