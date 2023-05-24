import React, { FC, useContext } from "react";
import { ToggleLandingContext } from "../../context /ToggleLandingContext";
import { TitleLetterByLetter } from "../../ui/feedback";
import { Container, TitleWrapper } from "./LandingTitleModal.css";
export const LandingTitleModal: FC = () => {
  const { toogleLanding, setToogleLanding } = useContext(ToggleLandingContext);
  console.log(toogleLanding);
  return (
    <Container onClick={() => setToogleLanding(false)}>
      <TitleWrapper onClick={() => setToogleLanding(false)}>
        <TitleLetterByLetter text='FANGO SOLUTIONS' color='white' />
      </TitleWrapper>
    </Container>
  );
};
