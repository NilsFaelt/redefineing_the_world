import React from "react";
import { TitleLetterByLetter } from "../../../ui/feedback";
import {
  Container,
  ParallaxContainer,
  TextContainer,
  Text,
} from "./HomeView.style";
import { Parallax } from "react-parallax";
import { InfoText } from "../../AskMe/components/InfoText/InfoText.component";
import { EmergingBoxWithText } from "../../../ui/Extras";

export const HomeView = () => {
  return (
    <Container>
      <TitleLetterByLetter text='FANGO TECH' />
      <EmergingBoxWithText text='INOVATION AND DESIGN' />
      <InfoText
        title='WHAT WE DO'
        text='
        Our fervor lies in crafting novel designs and technology that push the boundaries of creativity. Our aim is to bring your aspirations to fruition with a combination of our passion for technology and flair for styling. By merging these two elements, we strive to connect people and elevate them through our work. We imbue every keystroke and brushstroke with our unwavering commitment and dedication to realizing your vision'
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
      <TextContainer>
        <TitleLetterByLetter size='small' text='THE JOURNEY' />
        <Text>
          As a developer, my journey has been defined by an unwavering passion
          for creating exceptional experiences. With a focus on popular
          frameworks such as React, Next.js, Nest, Postgres, MongoDB, and more,
          Im open to crafting anything on your behalf. I want to work as closely
          as possible with you to bring your dreams and goals to life without
          any unnecessary detours. Trust me to stay the course and stay true to
          your vision, as I apply my skills and expertise to create something
          truly remarkable.
        </Text>
      </TextContainer>
    </Container>
  );
};
