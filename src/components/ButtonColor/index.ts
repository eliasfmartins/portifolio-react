import styled from "styled-components";

interface ButtonColorProps {
  isDark: boolean;
}

export const ButtonColor = styled.span<ButtonColorProps>`
  display: inline-block;
  position: relative;
  top: 2.5px;
  width: 62px;
  height: 26px;
  background-color: ${(props) =>
    props.isDark ? props.theme.primary : props.theme.secondary};
  border-radius: 16px;
  cursor: pointer;
  transition: background-color 0.5s ease;

  &::before,
  &::after {
    content: "";
    display: block;
    position: absolute;
    top: 3px;
    width: 22px;
    height: 22px;
    border-radius: 50%;
    transition: transform 0.5s ease;
  }

  &::before {
    left: 2px;
    transform: translateX(0);
    background-color: ${(props) =>
      props.isDark ? props.theme.quaternary : props.theme.quaternary};
  }

  &::after {
    right: 8px;
    transform: translateX(-100%);
    background-color: ${(props) =>
      props.isDark ? props.theme.quaternary : props.theme.secondary};
  }

  &:hover {
    &::before {
      transform: translateX(120%);
    }

    &::after {
      transform: translateX(10);
    }
  }
`;
