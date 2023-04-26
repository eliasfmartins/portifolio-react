import styled from "styled-components";

export const FooterStyle = styled.footer`
  background: transparent;
  margin-top: -33px;
  width: 100%;
  text-shadow: 1px 1px 2px black;
  display: flex;
  justify-content: center;
  color: white;
  background: transparent;
  height: 25px;
  align-items: center;
  justify-content: center;
  z-index: 80;
  a {
    text-decoration: none;
    color: white;
    transition: 0.9s;
    border-bottom: 1px solid transparent;
    z-index: 80;
  }
  a:hover {
    border-bottom: 1px solid white;
  }
  div {
    display: flex;
    width: 95%;
    height: 100%;
    padding: 20px;
    /* margin-bottom: 15px; */
    display: flex;
    align-items: center;
    justify-content: center;
    border-top: 1px solid white;
    z-index: 80;
  }
`;
