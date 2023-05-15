import React, { FC } from "react";
import { TitleLetterByLetter } from "../../ui/feedback";
import { Container, TitleWrapper } from "./LandingTitleModal.css";
export const LandingTitleModal: FC = () => {
  return (
    <Container>
      <TitleWrapper>
        <TitleLetterByLetter text='FANGO SOLUTIONS' color='white' />
      </TitleWrapper>
    </Container>
  );
};
