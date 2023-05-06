import { CardContainer } from "./styled";

/* eslint-disable no-undef */
interface CardProps {
  title: string;
  img: JSX.Element;
}

export const Card = ({ title, img }: CardProps) => {
  return (
    <CardContainer>
      <h2>{title}</h2>
      {img}
    </CardContainer>
  );
};
