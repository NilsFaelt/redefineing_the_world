import React, { useContext, useState } from "react";
import { TitleLetterByLetter } from "../../../ui/feedback";
import {
  Container,
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
  Underline,
  LongTextWrapper,
  ChatBotWrapper,
} from "./HomeView.style";

import { InfoText } from "../../AskMe/components/InfoText/InfoText.component";
import { LandingTitleModal } from "../../LandingTitleModal/LandingTitleModal";
import { ToggleLandingContext } from "../../../context /ToggleLandingContext";
import { ChatBotOne } from "../../TestBot";

export const HomeView = () => {
  const { toogleLanding, setToogleLanding } = useContext(ToggleLandingContext);
  const [toogleOpenChatMargin, setToogleOpenChatMargin] = useState(false);
  const [zIndex, setZIndex] = useState(0);

  return (
    <Container>
      <BlackInfoContainer>
        {toogleLanding && <LandingTitleModal />}
        <TitleContainer>
          <TitleLetterByLetter
            size='small'
            text='FANGO SOLUTIONS'
            color='white'
          />
          <BlackTextInfoContainer>
            CREATES INNOVATIVE DESIGN AND SMART LOGIC TO COMBINE AND CREATE A
            UNIQUE EXPERIENCE
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
            <TitleLetterByLetter color='white' size='small' text='OUR AGENDA' />
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
      <LongTextWrapper>
        <TitleLetterByLetter
          color='white'
          text='THE HISTORY OF DESIGN AND PROGRAMMING IS ONE THAT HAS BEEN MARKED BY INNOVATION, CREATIVITY, AND DEDICATION TO IMPROVING THE HUMAN EXPERIENCE. FROM THE EARLIEST DRAWINGS AND INVENTIONS TO THE MOST COMPLEX SOFTWARE AND SYSTEMS OF TODAY, DESIGN AND PROGRAMMING HAVE PLAYED AN INTEGRAL ROLE IN OUR WORLD.
              DESIGN HAS EVOLVED OVER TIME TO MEET THE CHANGING NEEDS OF SOCIETY. FROM THE EARLIEST CAVEMAN DRAWINGS TO THE GOTHIC ARCHITECTURE OF THE MIDDLE AGES TO THE MODERNIST MOVEMENT OF THE 20TH CENTURY, DESIGN HAS REFLECTED THE CULTURE AND VALUES OF ITS TIME.
              SIMILARLY, PROGRAMMING HAS EVOLVED TO ADDRESS THE GROWING DEMANDS FOR DIGITAL SOLUTIONS TO REAL-WORLD PROBLEMS. FROM THE EARLIEST COMPUTER PROGRAMS TO THE LATEST ARTIFICIAL INTELLIGENCE APPLICATIONS, PROGRAMMING HAS REVOLUTIONIZED THE WAY WE WORK, COMMUNICATE, AND LEARN.
              THE HISTORY OF DESIGN AND PROGRAMMING IS ONE OF CONTINUOUS INNOVATION AND CHANGE. AS WE LOOK TO THE FUTURE, WE MUST CONTINUE TO EMBRACE NEW TECHNOLOGIES AND DESIGN APPROACHES THAT CAN HELP US TO BUILD A BETTER WORLD FOR ALL.'
        />
      </LongTextWrapper>

      <ChatBotOne companyGudlines='test' />
    </Container>
  );
};
