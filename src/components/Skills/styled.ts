import styled from "styled-components";
export const Container = styled.div`
  display: flex;
  flex-wrap: wrap;
`;
export const SkillsContainer = styled.div`
  height: calc(100vh - 90px);
  flex-wrap: wrap;
  margin: 60px 25px 0 25px;
  display: flex;

  justify-content: center;
  gap: 2rem;
  align-items: center;
  @media (max-width: 868px) {
    margin-top: 80px;
    margin-bottom: 20px;
    height: auto;
    flex-direction: column;
  }
`;
