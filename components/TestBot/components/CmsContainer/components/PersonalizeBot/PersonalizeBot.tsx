import React, { FC } from "react";
import {
  Container,
  PersonaBotContainer,
  UpperWrapper,
  BackgroundInfoContainer,
  TextArea,
} from "./PersonalizeBot.style";
import { BaseInput } from "../../../../../../ui/actions";
import { TitleLetterByLetter } from "../../../../../../ui/feedback";
export const PersonalizeBot: FC = () => {
  return (
    <Container>
      <UpperWrapper>
        <PersonaBotContainer>
          <TitleLetterByLetter
            color='white'
            size='small'
            text='CHATBOT PERSONAL INFO'
          />
          <BaseInput
            value={""}
            type='text'
            onChange={() => console.log("hej")}
            color='white'
            placeholder='Name:'
          />
          <BaseInput
            value={""}
            type='number'
            onChange={() => console.log("hej")}
            color='white'
            placeholder='Age:'
          />
          <BaseInput
            value={""}
            type='number'
            onChange={() => console.log("hej")}
            color='white'
            placeholder='Amount of kittens:'
          />
          <BaseInput
            value={""}
            type='text'
            onChange={() => console.log("hej")}
            color='white'
            placeholder='Persona:'
          />
        </PersonaBotContainer>
        <PersonaBotContainer>
          <TitleLetterByLetter color='white' size='small' text='BEHAVIOR' />
          <BaseInput
            value={""}
            type='number'
            onChange={() => console.log("hej")}
            color='white'
            placeholder='Love and compasion'
          />
          <BaseInput
            value={""}
            type='text'
            onChange={() => console.log("hej")}
            color='white'
            placeholder='Style'
          />
          <BaseInput
            value={""}
            type='number'
            onChange={() => console.log("hej")}
            color='white'
            placeholder='Informative'
          />
          <BaseInput
            value={""}
            type='number'
            onChange={() => console.log("hej")}
            color='white'
            placeholder='Level of comunication'
          />
        </PersonaBotContainer>
      </UpperWrapper>

      <BackgroundInfoContainer>
        <TitleLetterByLetter color='white' size='small' text='CHARACTER' />
        <TextArea placeholder='Give ChatBot a charachter with background' />
      </BackgroundInfoContainer>
    </Container>
  );
};
