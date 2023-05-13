import React, { useState } from "react";
import { TitleLetterByLetter } from "../../../ui/feedback";
import {
  Container,
  ParallaxContainer,
  Text,
  BlackInfoContainer,
  TitleContainer,
  BlackTextInfoContainer,
  SecondBlackInfoContainer,
  WhiteInfoContainer,
  InfoBoxContainer,
  LeftBoxContainer,
  RightBoxContainer,
  SecondBlackTitle,
  SmallParallaxContainer,
} from "./HomeView.style";
import { Parallax } from "react-parallax";
import { InfoText } from "../../AskMe/components/InfoText/InfoText.component";

export const HomeView = () => {
  const [zIndex, setZIndex] = useState(0);
  console.log(zIndex);
  return (
    <Container>
      <BlackInfoContainer>
        <TitleContainer>
          <TitleLetterByLetter text='FANGO TECH' color='white' />
          <BlackTextInfoContainer>
            CREATES INNOVATIVE DESIGN AND SMART LOGIC TO COMBINE AND CREATE A
            UNIQUE EXPERIENCE.
          </BlackTextInfoContainer>
        </TitleContainer>
      </BlackInfoContainer>

      <InfoBoxContainer>
        <LeftBoxContainer>
          <SecondBlackInfoContainer
            onMouseOver={() => setZIndex(3)}
            onMouseLeave={() => setZIndex(0)}
          >
            <InfoText
              title='WHAT WE DO'
              text='
        OUR FERVOR LIES IN CRAFTING NOVEL DESIGNS AND TECHNOLOGY THAT PUSH THE BOUNDARIES OF CREATIVITY. OUR AIM IS TO BRING YOUR ASPIRATIONS TO FRUITION WITH A COMBINATION OF OUR PASSION FOR TECHNOLOGY AND FLAIR FOR STYLING. BY MERGING THESE TWO ELEMENTS, WE STRIVE TO CONNECT PEOPLE AND ELEVATE THEM THROUGH OUR WORK. WE IMBUE EVERY KEYSTROKE AND BRUSHSTROKE WITH OUR UNWAVERING COMMITMENT AND DEDICATION TO REALIZING YOUR VISION.'
            />
          </SecondBlackInfoContainer>
          <WhiteInfoContainer>
            <TitleLetterByLetter size='small' text='OUR AGENDA' />
            <Text>
              OUR AGENDA IS TO BUILD A STRONG RELATIONSHIP WITH YOU. WE VALUE
              OUR CUSTOMERS AND AIM TO DELIVER EXCELLENCE IN EVERY PROJECT. OUR
              FOCUS IS TO HELP YOU ACHIEVE YOUR GOALS BY PROVIDING THE BEST
              SOLUTIONS, AND WE BELIEVE THAT TRANSPARENCY AND TRUST ARE KEY TO
              CREATING A LONG-LASTING PARTNERSHIP. WE ARE COMMITTED TO
              DELIVERING A HIGH-QUALITY PRODUCT THAT WILL MEET YOUR
              EXPECTATIONS. INSTEAD OF PRIORITIZING OUR PROFIT, WE PRIORITIZE
              OUR CLIENTS SATISFACTION AND LOOK FORWARD TO WORKING WITH YOU IN
              THE FUTURE.
            </Text>
          </WhiteInfoContainer>
        </LeftBoxContainer>
        <RightBoxContainer>
          <SmallParallaxContainer>
            <Parallax
              blur={{ min: -15, max: 15 }}
              bgImage={
                "https://images.unsplash.com/photo-1516614379323-3fc1b4061247?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1932&q=80"
              }
              bgImageAlt=''
              strength={-200}
              style={{ height: "10rem" }}
            ></Parallax>
          </SmallParallaxContainer>
          <SecondBlackTitle>
            {" "}
            AS A DEVELOPER, MY JOURNEY HAS BEEN DEFINED BY AN UNWAVERING PASSION
            FOR CREATING EXCEPTIONAL EXPERIENCES. WITH A FOCUS ON POPULAR
            FRAMEWORKS SUCH AS REACT, NEXT.JS, NEST, POSTGRES, MONGODB, AND
            MORE, IM OPEN TO CRAFTING ANYTHING ON YOUR BEHALF. I WANT TO WORK AS
            CLOSELY AS POSSIBLE WITH YOU TO BRING YOUR DREAMS AND GOALS TO LIFE
            WITHOUT ANY UNNECESSARY DETOURS. TRUST ME TO STAY THE COURSE AND
            STAY TRUE TO YOUR VISION, AS I APPLY MY SKILLS AND EXPERTISE TO
            CREATE SOMETHING TRULY REMARKABLE.
          </SecondBlackTitle>
        </RightBoxContainer>
      </InfoBoxContainer>
      <ParallaxContainer>
        <Parallax
          blur={{ min: -15, max: 15 }}
          bgImage={
            "https://images.unsplash.com/photo-1446729444801-31245ddba81a?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8YmxhY2slMjBhbmQlMjB3aGl0ZSUyMGZvcmVzdHxlbnwwfHwwfHw%3D&auto=format&fit=crop&w=800&q=60"
          }
          bgImageAlt=''
          strength={-200}
          style={{ height: "10rem" }}
        ></Parallax>
      </ParallaxContainer>
    </Container>
  );
};
