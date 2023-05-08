import React, { FC, useEffect, useState } from "react";
import { BaseInput } from "../../../ui/actions";
import { Loading, TitleLetterByLetter } from "../../../ui/feedback";
import { AskChatGtp } from "../components";
import { Container } from "./AskMeView.css";

export const AskMeView: FC = () => {
  return (
    <Container>
      <TitleLetterByLetter size='small' text='HOW CAN I HELP YOU?' />
      <AskChatGtp />
    </Container>
  );
};
