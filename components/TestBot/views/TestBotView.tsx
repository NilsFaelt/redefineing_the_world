import React, { FC, useState } from "react";
import { BaseInput } from "../../../ui/actions";
import { Header } from "../../Header";
import { ChatBotOne } from "../components";
import { Container, InputWrapper, InputLabel } from "./TestBotView.style";

export const TestBotView: FC = () => {
  const [companyName, setCompanyName] = useState("");
  const [orientation, setOrientation] = useState("");
  const [botName, setBotName] = useState("");
  const [keywords, setKeywords] = useState("");
  const companyInfo = `companyname: ${
    companyName ? companyName : "Harrys Habadasherie"
  }, what the company specializein: ${
    orientation ? orientation : "Beans, greens and rock n roll"
  }, call yourself ${
    botName ? botName : "Dod Bylan"
  }, keywords for the company you represent:${
    keywords ? keywords : "love passion and lotr"
  }`;

  return (
    <Container>
      <InputWrapper>
        <InputLabel>
          Please write few words about the company you want the chat-bot to
          represent, exmaple:Greenfood, Non profit, Sweden, Start-Up. Then click
          the robot.
        </InputLabel>
        <BaseInput
          placeholder='Company Name'
          value={companyName}
          type='text'
          onChange={setCompanyName}
          color='white'
        />
        <BaseInput
          placeholder='What do your company do'
          value={orientation}
          type='text'
          onChange={setOrientation}
          color='white'
        />
        <BaseInput
          placeholder='Name on your bot'
          value={botName}
          type='text'
          onChange={setBotName}
          color='white'
        />
        <BaseInput
          placeholder='Keywords'
          value={keywords}
          type='text'
          onChange={setKeywords}
          color='white'
        />
      </InputWrapper>
      <Header />

      <ChatBotOne companyGudlines={companyInfo} />
    </Container>
  );
};
