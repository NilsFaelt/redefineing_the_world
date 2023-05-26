import React, { FC, useContext } from "react";
import { MainContext } from "../../context /MainLandingContext";
import { TitleLetterByLetter } from "../../ui/feedback";
import { Container, TitleWrapper } from "./LandingTitleModal.css";
export const LandingTitleModal: FC = () => {
  const { toogleLanding, setToogleLanding } = useContext(MainContext);
  console.log(toogleLanding);
  return (
    <Container onClick={() => setToogleLanding(false)}>
      <TitleWrapper onClick={() => setToogleLanding(false)}>
        <TitleLetterByLetter text='FANGO SOLUTIONS' color='white' />
      </TitleWrapper>
    </Container>
  );
};
