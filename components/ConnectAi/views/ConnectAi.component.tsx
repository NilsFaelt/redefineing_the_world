import Link from "next/link";
import React, { FC } from "react";
import { TitleLetterByLetter } from "../../../ui/feedback";
import {
  Container,
  TextContainer,
  Text,
  BulletDotTextContainer,
} from "./ConnectAi.style";
export const ConnectAi: FC = () => {
  return (
    <Container>
      <TitleLetterByLetter
        size='small'
        color='white'
        text='WE ARE IN FOR THE BIGGEST CHANGE OF OUR LIFETIME'
      />
      <TextContainer>
        <Text>
          IN TODAYS RAPIDLY EVOLVING WORLD, EMBRACING CHANGE IS ESSENTIAL FOR
          BUSINESSES TO STAY COMPETITIVE AND RELEVANT. ONE OF THE MOST IMPACTFUL
          CHANGES IS THE INTEGRATION OF ARTIFICIAL INTELLIGENCE AI. BUSINESSES
          THAT EMBRACE AI GAIN A SIGNIFICANT ADVANTAGE BY UNLOCKING NEW
          OPPORTUNITIES, IMPROVING EFFICIENCY, AND ENHANCING DECISION-MAKING
          PROCESSES. ITS CRUCIAL FOR EVERYONE TO RECOGNIZE THE TRANSFORMATIVE
          POWER OF AI AND NOT REMAIN ON THE SIDELINES. BY PROACTIVELY
          IMPLEMENTING AI SOLUTIONS, BUSINESSES CAN DRIVE INNOVATION, STREAMLINE
          OPERATIONS, AND DELIVER PERSONALIZED EXPERIENCES TO THEIR CUSTOMERS.
          EMBRACING AI IS NOT JUST AN OPTION; ITS A NECESSITY FOR SUCCESS IN THE
          DIGITAL AGE.
        </Text>
      </TextContainer>
      <BulletDotTextContainer>
        <TitleLetterByLetter
          size='small'
          color='white'
          text='• LET GTP ANSWER ALL QUESTIONS FOR YOU'
        />
        <TitleLetterByLetter
          size='small'
          color='white'
          text='• IT MAKES YOUR WEBSITE FEEL ALIVE AND INTERACTABLE'
        />
        <TitleLetterByLetter
          size='small'
          color='white'
          text='• ITS FUN AND FILLED WITH ENDLESS OPPURTUNITIES'
        />
        <TitleLetterByLetter
          size='small'
          color='white'
          text='• DONT BE THE ONE WHOM DIDNT JOIN THE TRAIN'
        />
        <TitleLetterByLetter
          size='small'
          color='white'
          text='• KEEPS YOU COMPANY/WEBSITE COMPETITIVE '
        />
        <TitleLetterByLetter
          size='small'
          color='white'
          text='• IT ONLY TAKES TWO DAYS TO HAVE A AI INPLEMENTED TO YOUR SITE'
        />
      </BulletDotTextContainer>
    </Container>
  );
};
