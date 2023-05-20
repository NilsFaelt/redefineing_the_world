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
          In todays rapidly evolving world, embracing change is essential for
          businesses to stay competitive and relevant. One of the most impactful
          changes is the integration of artificial intelligence (AI). Businesses
          that embrace AI gain a significant advantage by unlocking new
          opportunities, improving efficiency, and enhancing decision-making
          processes. Its crucial for everyone to recognize the transformative
          power of AI and not remain on the sidelines. By proactively
          implementing AI solutions, businesses can drive innovation, streamline
          operations, and deliver personalized experiences to their customers.
          Embracing AI is not just an option; its a necessity for success in the
          digital age.
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
