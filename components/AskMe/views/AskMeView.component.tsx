import React, { FC, useEffect, useState } from "react";
import { BaseInput } from "../../../ui/actions";
import { Loading, TitleLetterByLetter } from "../../../ui/feedback";
import { AskChatGtp } from "../components";
import { InfoText } from "../components/InfoText/InfoText.component";
import { Container } from "./AskMeView.css";

export const AskMeView: FC = () => {
  return (
    <Container>
      <TitleLetterByLetter size='small' text='HOW CAN I HELP YOU?' />
      <AskChatGtp />
      <InfoText
        title='WE STAND AT THE CROSSROADS'
        text='We are at a pivotal moment in history where technology is rapidly advancing, paving the way for a new era of change. The integration of artificial intelligence, big data, robotics, and the internet of things is revolutionizing the way we live, work, and communicate. While this technological progress brings immense benefits, it also poses significant challenges, from job displacement and income inequality to ethical concerns and security risks. We must embrace these advancements while ensuring they are developed and implemented in ways that promote sustainability, equity, and social justice. With that said try out any question you like to a AI in the style of Dalai Lama'
      />
    </Container>
  );
};
