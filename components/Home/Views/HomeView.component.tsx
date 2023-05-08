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
            "https://images.unsplash.com/photo-1588594276800-2de0522b3b73?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2070&q=80"
          }
          bgImageAlt=''
          strength={-500}
          style={{ height: "10rem" }}
        >
          test
        </Parallax>
      </ParallaxContainer>
    </Container>
  );
};
