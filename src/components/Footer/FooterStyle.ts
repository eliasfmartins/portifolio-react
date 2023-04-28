import styled from "styled-components";

export const FooterStyle = styled.footer`
  background: transparent;
  width: 100%;
  text-shadow: 1px 1px 2px black; 
  display: flex;
  justify-content: center;
  color: white;
  background: transparent;
  align-items: center;
  justify-content: center;
  height: 30px;
  margin-top: -30px;
  a {
    text-decoration: none;
    color: white;
    transition: 0.9s;
    border-bottom: 1px solid transparent;
  }
  div {
    display: flex;
    height: 100%;
    width: 96%;
    align-items: center;
    justify-content: center;
    border-top: 1px solid white;
    z-index: 1;
  }
`;
