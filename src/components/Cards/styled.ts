import styled from "styled-components";

export const CardContainer = styled.div`
  flex-direction: column;
  flex-wrap: wrap;
  display: flex;
  align-items: center;
  justify-content: center;
  height: 200px;
  width: 200px;
  gap: 1rem;
  color: white;
  transition: 0.5s;
  text-align: center;
  border: solid 2px white;
  border-radius: 8px;
  padding: 10px;
  &:hover {
    scale: 1.1;
  }
`;
