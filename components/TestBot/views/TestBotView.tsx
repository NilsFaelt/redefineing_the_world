import React, { FC, useState } from "react";
import { Header } from "../../Header";
import { ChatBotOne, CmsContainer } from "../components";
import { Container } from "./TestBotView.style";

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
      <Header />
      <CmsContainer />
      <ChatBotOne companyGudlines={companyInfo} />
    </Container>
  );
};
