import React from "react";
import { TitleLetterByLetter } from "../../../ui/feedback";
import { Container, ParallaxContainer } from "./HomeView.style";
import { Parallax } from "react-parallax";
import { InfoText } from "../../AskMe/components/InfoText/InfoText.component";
import { EmergingBoxWithText } from "../../../ui/Extras";

export const HomeView = () => {
  return (
    <Container>
      <TitleLetterByLetter text='WE DEFINE THE WORLD' />
      <EmergingBoxWithText text='THRU TECH AND PASION' />
      <InfoText
        title='WHAT WE DO'
        text='We create your dream with passion for tech and styling. Technology can connect and empower people, while styling inspires and uplifts. Together, we harmoniously blend these passions to bring your vision to life. Our commitment and dedication are infused into every keystroke and brushstroke.'
      />
      <ParallaxContainer>
        <Parallax
          blur={{ min: -15, max: 15 }}
          bgImage={
            "https://images.unsplash.com/photo-1535025075092-5a1cf795130b?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1473&q=80"
          }
          bgImageAlt=''
          strength={-200}
          style={{ height: "10rem" }}
        ></Parallax>
      </ParallaxContainer>
    </Container>
  );
};
