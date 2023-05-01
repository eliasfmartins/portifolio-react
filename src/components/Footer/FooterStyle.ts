import styled from "styled-components";

export const FooterStyle = styled.footer`
  margin-top: 30px;
  background: transparent;
  width: 100%;
  text-shadow: 1px 1px 2px black; 
  display: flex;
  justify-content: center;
  color: white;
  align-items: center;
  justify-content: center;
  height: 30px;
  backdrop-filter: blur(5px);
  a {
    text-decoration: none;
    color: white;
    transition: 0.9s;
    border-bottom: 1px solid transparent;
  }
  div {
    display: flex;
    width: 96%;
    align-items: center;
    justify-content: center;
    border-top: 1px solid white;
    z-index: 1;
    height: 100%;
  }
`;
