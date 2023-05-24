import React, { FC, useEffect, useState } from "react";
import { TitleLetterByLetter } from "../../../ui/feedback";
import { AskChatGtp } from "../components";
import { InfoText } from "../components/InfoText/InfoText.component";
import { Container, TextContainer } from "./AskMeView.css";

export const AskMeView: FC = () => {
  return (
    <Container>
      <AskChatGtp />
      <TextContainer>
        <InfoText
          title='WE STAND AT THE CROSSROADS'
          text='WERE AT A CRUX IN THE RAPIDLY CHANGING TECHNOLOGICAL LANDSCAPE. IT CAN BE OVERWHELMING TO NAVIGATE THE NEW TOOLS AND PLATFORMS THAT SEEM TO POP UP DAILY. BUT FEAR NOT, WERE HERE TO HELP. ASK US ANYTHING ABOUT THE EVER-EVOLVING TECH SPACE AND WELL DO OUR BEST TO GUIDE YOU IN THE RIGHT DIRECTION. LETS EMBRACE THIS CROSSROAD TOGETHER AND MAKE THE MOST OF THE TECHNOLOGICAL OPPORTUNITIES AT HAND'
        />
      </TextContainer>
    </Container>
  );
};
