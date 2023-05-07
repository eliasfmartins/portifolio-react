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
  isActive: boolean;
}
const HeaderVariants = {
  light: "white",
  dark: "black",
};

export const Nav = styled.nav`
  padding: 5px;
  display: flex;
  align-items: center;
  justify-content: center;
  text-decoration: none;
  list-style: none;
  gap: 1rem;
  color: white;

  &.active {
    position: fixed;
    top: 0;
    right: 0;
    bottom: 0;
    left: 0;
    visibility: visible;
    height: 100vh;
    background: #040405;
    z-index: 5;
  }

  a {
    text-decoration: none;
  }

  @media (max-width: 768px) {
    visibility: hidden;
    display: flex;
    position: fixed;
    width: 100%;
    right: 0px;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    transition: 2s;
    height: 0;
    overflow-y: hidden;
    top: 0;
    bottom: 0;
    gap: 2rem;
  }
`;

export const Headerstyle = styled.div<HeaderStylesProps>`
  text-shadow: 1px 1px 2px black;
  top: 0;
  font-family: "Bruno Ace SC", cursive;
  backdrop-filter: blur(5px);
  width: 100%;
  box-sizing: border-box;
  display: flex;
  align-items: center;
  justify-content: center;
  color: white;
  background-color: transparent;
  height: 60px;
  position: fixed;
  div.center {
    position: ${(props) => (props.isActive ? "fixed" : "static")};
    display: flex;
    width: 96%;
    padding: 0 20px;
    align-items: center;
    justify-content: space-between;
    border-bottom: 1px solid white;
    height: 100%;
  }
  h1.logo {
    z-index: 60000;
  }
  /* ${(props) => {
    return css`
      background-color: ${HeaderVariants[props.colorHeader]};
    `;
  }} */
  z-index: 5;
  max-width: 100%;

  h1 {
    font-size: 2rem;
  }
  hr {
    margin-top: 10px;
    width: 50px;
  }
  button.mobile {
    display: none;
  }
  button.mobile hr {
    transition: 2s;
    padding: 10%;
    border-radius: 5px;
    cursor: pointer;
  }
  div.active {
    transition: 0.8s;
    position: fixed;
    z-index: 50;
  }
  @media (max-width: 768px) {
    button.mobile {
      display: block;
      border: transparent;
      background-color: transparent;
      z-index: 50000;
    }
    button.mobile hr {
      transition: 2s;
      background: white;
      padding: 5%;
      border-radius: 5px;
      cursor: pointer;
    }
    button.mobile.active hr.hr1 {
      transform: rotate(405deg);
      position: relative;
      bottom: -18px;
    }
    button.mobile.active hr.hr2 {
      background: transparent;
      border: transparent;
    }
    button.mobile.active hr.hr3 {
      transform: rotate(-405deg);
      position: relative;
      top: -15px;
    }
    button.mobile {
      position: absolute;
      right: 25px;
      top: 0px;
      z-index: 5000;
    }
    button.mobile.active {
      position: fixed;
    }
  }
`;
export const LinkStyled = styled(Link)`
  text-shadow: 1px 1px 2px black;
  padding: 5px;
  position: relative;
  color: white;
  background-color: transparent;
  &::after {
    content: "";
    position: absolute;
    bottom: -2px;
    left: 0;
    width: 0%;
    height: 2px;
    background-color: white;
    transition: width 0.3s ease-in-out;
  }

  &:hover::after {
    width: 100%;
  }
`;
