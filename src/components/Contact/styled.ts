import styled from "styled-components";

export const ContactContainer = styled.div`
  font-family: "Ubuntu", sans-serif;
  text-shadow: 1px 1px 2px black;
  display: flex;
  height: calc(100vh - 90px);
  margin: 60px 25px 0 25px;
  display: flex;
  align-items: center;
  justify-content: center;
  color: white;
  div.contact {
    display: flex;
    flex-direction: column;
    width: 50%;
    height: 100%;
    align-items: center;
    justify-content: center;
  }
  div.links {
    border-left: white solid 1px;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    gap: 2rem;
    align-items: center;
    width: 50%;
    height: 80%;
  }
  h4 {
    display: flex;
    text-align: center;
    align-items: center;
    gap: 2rem;
  }
  h1 {
    font-size: 4rem;
    font-family: "Bruno Ace SC", cursive;
  }
  a {
    text-decoration: none;
    color: white;
  }
`;
