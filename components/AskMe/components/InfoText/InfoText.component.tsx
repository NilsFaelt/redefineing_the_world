import React, { FC } from "react";
import { TitleLetterByLetter } from "../../../../ui/feedback";
import { Container } from "./InfoText.css";

export const InfoText: FC<{ text: string }> = ({ text }) => {
  if (!text) return null;
  return (
    <Container>
      <TitleLetterByLetter size='small' text='WE STAND AT THE CROSSROADS' />
      {text}
    </Container>
  );
};
