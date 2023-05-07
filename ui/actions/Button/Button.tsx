import React, { FC, ReactNode } from "react";
import { ButtonContainer } from "./Button.style";
interface Props {
  text: string;
  onclick: React.MouseEventHandler<HTMLButtonElement>;
}

export const Button: FC<Props> = ({ text, onclick }) => {
  return <ButtonContainer onClick={onclick}>{text}</ButtonContainer>;
};
