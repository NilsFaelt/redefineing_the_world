import React from "react";
import { TitleLetterByLetter } from "../../../ui/feedback";
import { Container, ParallaxContainer } from "./HomeView.style";
import { Parallax } from "react-parallax";

export const HomeView = () => {
  return (
    <Container>
      <TitleLetterByLetter text='WE DEFINE THE WORLD' />
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
