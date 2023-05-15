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
  Underline,
  LongTextWrapper,
} from "./HomeView.style";
import { Parallax } from "react-parallax";
import { InfoText } from "../../AskMe/components/InfoText/InfoText.component";
import { LandingTitleModal } from "../../LandingTitleModal/LandingTitleModal";

export const HomeView = () => {
  const [zIndex, setZIndex] = useState(0);
  const [toogleLanding, setToogleLanding] = useState(false);

  return (
    <Container>
      <BlackInfoContainer onClick={() => setToogleLanding(true)}>
        {!toogleLanding && <LandingTitleModal />}
        <TitleContainer>
          <TitleLetterByLetter text='FANGO SOLUTIONS' color='white' />
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
          <Underline />
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
      <LongTextWrapper>
        <TitleLetterByLetter
          color='white'
          text='THE HISTORY OF DESIGN AND PROGRAMMING IS ONE THAT HAS BEEN MARKED BY INNOVATION, CREATIVITY, AND DEDICATION TO IMPROVING THE HUMAN EXPERIENCE. FROM THE EARLIEST DRAWINGS AND INVENTIONS TO THE MOST COMPLEX SOFTWARE AND SYSTEMS OF TODAY, DESIGN AND PROGRAMMING HAVE PLAYED AN INTEGRAL ROLE IN OUR WORLD.

DESIGN HAS EVOLVED OVER TIME TO MEET THE CHANGING NEEDS OF SOCIETY. FROM THE EARLIEST CAVEMAN DRAWINGS TO THE GOTHIC ARCHITECTURE OF THE MIDDLE AGES TO THE MODERNIST MOVEMENT OF THE 20TH CENTURY, DESIGN HAS REFLECTED THE CULTURE AND VALUES OF ITS TIME.

SIMILARLY, PROGRAMMING HAS EVOLVED TO ADDRESS THE GROWING DEMANDS FOR DIGITAL SOLUTIONS TO REAL-WORLD PROBLEMS. FROM THE EARLIEST COMPUTER PROGRAMS TO THE LATEST ARTIFICIAL INTELLIGENCE APPLICATIONS, PROGRAMMING HAS REVOLUTIONIZED THE WAY WE WORK, COMMUNICATE, AND LEARN.

THE HISTORY OF DESIGN AND PROGRAMMING IS ONE OF CONTINUOUS INNOVATION AND CHANGE. AS WE LOOK TO THE FUTURE, WE MUST CONTINUE TO EMBRACE NEW TECHNOLOGIES AND DESIGN APPROACHES THAT CAN HELP US TO BUILD A BETTER WORLD FOR ALL.'
        />
      </LongTextWrapper>
    </Container>
  );
};
