import styled from "styled-components";
import { motion } from "framer-motion";
export const HomeContainer = styled(motion.main)`
  display: flex;

  align-items: center;
  justify-content: center;
  height: 100vh;
  background-size: cover;
  background-image: url("/herobg-md.webp");
  align-items: baseline;
  @media (max-width: 868px) {
    height: auto;
  }
`;
export const HomeDysplayed = styled.div`
  margin-top: 60px;
  flex-wrap: wrap;
  border-top: 1px solid white;
  border-bottom: 1px solid white;
  display: flex;
  width: 95vw;
  gap: 2rem;
  text-shadow: 1px 1px 2px black;
  color: white;
  align-items: center;
  justify-content: center;
  height: 84%;
  /* max-width: 1000px; */
  div {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    min-width: 400px;
    width: 450px;
  }
  h2 {
    font-size: 3rem;
  }
  h1 {
    font-size: 5rem;
  }
  p {
    padding: 10px;
    font-size: 1.3rem;
  }
  @media (max-width: 768px) {
    flex-direction: column;
    height: auto;
    div {
      min-width: unset;
      margin-bottom: 2rem;

      width: 90%;
    }
  }
`;
