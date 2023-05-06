import styled from "styled-components";

export const CardContainer = styled.div`
  flex-direction: column;
  display: flex;
  align-items: center;
  justify-content: center;
  height: 150px;
  width: 150px;
  gap: 1rem;
  color: white;
  transition: 0.5s;
  text-align: center;
  &:hover {
    scale: 1.1;
  }
`;
