import styled from "styled-components";
import { motion } from "framer-motion";
export const HomeContainer = styled(motion.main)`
  width: 100%;
  display: flex;
  position: relative;
  align-items: center;
  justify-content: center;
  background-size: cover;
  align-items: baseline;
  height: calc(100vh - 30px);
  min-height: 100vh;
  max-width: 100%;
  overflow-x: hidden;
  &.darkmode{
  background: linear-gradient(black, transparent,transparent,transparent, black);
    
  }
`;
export const HomeDysplayed = styled.div`
  
  max-width: 100%;
  padding: 20px;
  margin-top: 60px;
  margin-bottom: 45px;
  flex-wrap: wrap;
 
  display: flex;
  width: 95vw;
  gap: 2rem;
  text-shadow: 1px 1px 2px black;
  color: white;
  align-items: center;
  justify-content: center; 
  div {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    min-width: 340px;
    max-width: 500px;
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
  @media (max-width: 868px) {
    flex-direction: column;
    height: auto;
    div {
      margin-bottom: 1rem;

      width: 100%;
      margin-top: 2rem;
    }
    h2 {
      font-size: 2.2rem;
    }
    h1 {
      font-size: 4.5rem;
    }
  }
`;
