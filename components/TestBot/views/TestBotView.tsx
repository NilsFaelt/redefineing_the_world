import React, { FC } from "react";
import { Header } from "../../Header";
import { ChatBotOne } from "../components";
import { Container } from "./TestBotView.style";

export const TestBotView: FC = () => {
  return (
    <Container>
      <Header />
      <ChatBotOne />
    </Container>
  );
};
