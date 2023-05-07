import styled from "styled-components";
export const Container = styled.div`
  display: flex;
  flex-wrap: wrap;
`;
export const SkillsContainer = styled.div`
  min-height: calc(100vh - 180px);
  height: calc(100vh - 90px);
  overflow-y: auto;
  flex-wrap: wrap;
  width: 50%;
  padding: 20px;
  margin-top: 60px;
  display: flex;
  justify-content: center;
  gap: 2rem;
  align-items: center;
  overflow: hidden;
  @media (max-width: 968px) {
    width: 90%;
    height: auto;
    align-items: center;
    justify-content: center;
  }
`;
export const ShowContent = styled.div`
  width: 50%;
  min-height: calc(100vh - 180px);
  margin-top: 60px;
  display: flex;
  align-items: center;
  justify-content: center;
  div.center {
    width: 20vw;
    height: 20vw;
    border-radius: 8px;
    border: solid 2px white;
    display: flex;
    align-items: center;
    justify-content: center;
  }
  @media (max-width: 768px) {
    display: none;
  }
`;
