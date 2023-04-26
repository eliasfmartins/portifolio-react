import styled from "styled-components";
import { motion } from "framer-motion";
export const HomeContainer = styled(motion.main)`
  width: 100vw;
  display: flex;
  position: relative;
  align-items: center;
  justify-content: center;
  height: 100vh;
  background-size: cover;
  background-image: url("/herobg-md.webp");
  align-items: baseline;
  height: auto;
  min-height: 100vh;
  max-width: 100%;
  overflow-x: hidden;

  @media (max-width: 868px) {
    height: (100vh+55px);
  }
`;
export const HomeDysplayed = styled.div`
  max-width: 100%;
  overflow-x: hidden;

  padding: 20px;
  margin-top: 60px;
  margin-bottom: 45px;
  flex-wrap: wrap;
  border-top: 1px solid white;
  /* border-bottom: 1px solid white; */
  display: flex;
  width: 95vw;
  gap: 2rem;
  text-shadow: 1px 1px 2px black;
  color: white;
  align-items: center;
  justify-content: center;
  height: 82vh;
  @media (max-width: 1068px) {
    height: auto;
  }

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
