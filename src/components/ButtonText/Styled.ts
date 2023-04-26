// import styled from "styled-components";

// import { TextButtonType } from "./ButtonText";

// export const ButtonStyle = styled.button<TextButtonType>`
//   background: transparent;
//   border: white 2px solid;
//   color: white;
//   padding: 17px 50px;
//   font-size: 1.5rem;
//   width: 10rem;
//   white-space: nowrap;
//   display: flex;
//   border-radius: 20px 20px 20px 20px;
//   cursor: pointer;
//   transition: 1s;
//   position: relative;
//   overflow: hidden;
//   backdrop-filter: blur(2px);

//   &::before {
//     content: "${(props) => props.textOfButton}";
//     position: absolute;
//     top: 0;
//     left: 0;
//     width: 100%;
//     height: 100%;
//     display: flex;
//     align-items: center;
//     justify-content: center;
//   }

//   &:hover::before {
//     animation: slid-text 2s linear infinite;
//   }

//   @keyframes slid-text {
//     0% {
//       transform: translateX(-100%);
//     }
//     100% {
//       transform: translateX(100%);
//     }
//   }
// `;
import styled from "styled-components";

import { TextButtonType } from "./ButtonText";

export const ButtonStyle = styled.button<TextButtonType>`
  background: transparent;
  border: white 2px solid;
  color: white;
  padding: 17px 50px;
  font-size: 1.5rem;
  width: 10rem;
  white-space: nowrap;
  display: flex;
  border-radius: 20px 20px 20px 20px;
  cursor: pointer;
  transition: 1s;
  position: relative;
  overflow: hidden;
  backdrop-filter: blur(2px);

  &::before {
    content: "${(props) => props.textOfButton}";
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    display: flex;
    align-items: center;
    justify-content: center;
    color: transparent;
  }
  &::after {
    content: "${(props) => props.textOfButton}";
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    display: flex;
    align-items: center;
    justify-content: center;
  }

  &:hover::after {
    animation: slid-text 2s linear infinite;
  }
  &:hover::before {
    color: white;
    animation: slid-text 2s linear infinite 1s;
  }

  @keyframes slid-text {
    0% {
      transform: translateX(-100%);
    }
    100% {
      transform: translateX(100%);
    }
  }
`;
