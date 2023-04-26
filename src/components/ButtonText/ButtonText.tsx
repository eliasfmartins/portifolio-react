import { ButtonStyle } from "./Styled";
// import { ButtonStyleProps } from "./ButtonStyleProps";

export interface TextButtonType {
  textOfButton: string;
}

export const ButtonText = ({ textOfButton }: TextButtonType) => {
  return <ButtonStyle textOfButton={textOfButton} />;
};
