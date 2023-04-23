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
  display: flex;
  align-items: center;
  justify-content: center;
  text-decoration: none;
  list-style: none;
  gap: 1rem;
  color: red;
  a {
    text-decoration: none;
    color: ${(props) => props.theme.quaternary};
  }
`;

export const Headerstyle = styled.div<HeaderStylesProps>`
  margin: 0;
  padding: 20px;
  box-sizing: border-box;
  color: blue;
  display: flex;
  align-items: center;
  justify-content: space-between;
  background-color: ${(props) => props.theme.primary};
  color: ${(props) => props.theme.septenary};
  height: 60px;

  /* ${(props) => {
    return css`
      background-color: ${HeaderVariants[props.colorHeader]};
    `;
  }} */
`;

export const LinkStyled = styled(Link)`
  padding: 5px;
  position: relative;
  color: ${({ theme }) => theme.quaternary};

  &::after {
    content: "";
    position: absolute;
    bottom: 0;
    left: 0;
    width: 0;
    height: 2px;
    background-color: white;
    transition: all 0.3s ease-in-out;
  }

  &:hover::after {
    width: 100%;
  }
`;
