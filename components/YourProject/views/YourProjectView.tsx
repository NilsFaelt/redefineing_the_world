import React, { FC } from "react";
import { TitleLetterByLetter } from "../../../ui/feedback";
import { AskChatGtp } from "../../AskMe/components";
import { InfoText } from "../../AskMe/components/InfoText/InfoText.component";
import {
  Container,
  TextContainerBlack,
  TextContainer,
  Text,
} from "./YourProjectView.css";

export const YourProjectView: FC = () => {
  return (
    <Container>
      <TitleLetterByLetter
        color='white'
        size='small'
        text='HOW TO BUILD YOUR DREAM'
      />
      <TextContainer>
        <Text>
          My approach to website design is collaborative. I encourage clients to
          bring their ideas, designs, and thoughts to the table, and together we
          sit down and explore the best ways to bring their vision to life. I
          dont aim to simply make a site for you; rather, I strive to create a
          website that feels like its truly yours, leveraging my experience to
          guide and refine the process. Ultimately, I want to help you achieve
          your goals and create a digital presence that youre proud of.
        </Text>
      </TextContainer>
      <TitleLetterByLetter size='small' text='PLEASE ASK ME' />
      <AskChatGtp />
      <TextContainerBlack>
        <InfoText
          title='MY GOAL TOWARDS YOU'
          text='Transparency is at the heart of my approach to client communication. I provide daily updates and keep you in the loop every step of the way, so you always know exactly where we stand. No surprises, no hidden agendas—just honest, open communication. While other companies may shy away from showing their cards, I believe that transparency is essential to building a strong, trusting relationship with my clients, and to delivering a final product that exceeds expectations.'
        />
      </TextContainerBlack>
    </Container>
  );
};
