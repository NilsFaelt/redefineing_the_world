import React from "react";
import { TitleLetterByLetter } from "../../../ui/feedback";
import { Container } from "./HomeView.style";

export const HomeView = () => {
  return (
    <Container>
      <TitleLetterByLetter text='WELCOME TO PARADISE' />
    </Container>
  );
};
