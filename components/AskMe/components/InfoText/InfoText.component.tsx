import React, { FC } from "react";
import { TitleLetterByLetter } from "../../../../ui/feedback";
import { Container, Text } from "./InfoText.css";

export const InfoText: FC<{ text: string; title: string }> = ({
  text,
  title,
}) => {
  if (!text) return null;
  return (
    <Container>
      <TitleLetterByLetter size='small' text={title} color='white' />
      <Text> {text}</Text>
    </Container>
  );
};
