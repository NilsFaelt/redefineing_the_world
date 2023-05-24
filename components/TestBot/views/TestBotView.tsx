import React, { FC, useState } from "react";
import { BaseInput } from "../../../ui/actions";

import { Header } from "../../Header";
import { ChatBotOne } from "../components";
import {
  Container,
  InputWrapper,
  InputLabel,
  ChatbotWrapper,
} from "./TestBotView.style";

export const TestBotView: FC = () => {
  const [companyInfo, setCompanyInfo] = useState("");
  return (
    <Container>
      <InputWrapper>
        <InputLabel>
          Please write few words about the company you want the chat-bot to
          represent, exmaple:Greenfood, Non profit, Sweden, Start-Up
        </InputLabel>
        <BaseInput
          value={companyInfo}
          type='text'
          onChange={setCompanyInfo}
          color='white'
        />
      </InputWrapper>
      <Header />
      <ChatbotWrapper>
        <ChatBotOne companyGudlines={companyInfo} />
      </ChatbotWrapper>
    </Container>
  );
};
