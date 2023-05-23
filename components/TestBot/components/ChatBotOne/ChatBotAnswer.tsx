import React from "react";
import { FC } from "react";
import {
  ChatTextBot,
  ImageStyleSmall,
  ChatTextAndBotContainer,
} from "./ChatBotOne.style";
interface Props {
  toogleChat: boolean;
  text: string;
}

export const ChatBotAnswer: FC<Props> = ({ toogleChat, text }) => {
  return (
    <ChatTextAndBotContainer>
      <ImageStyleSmall
        zIndex={!toogleChat ? -1 : 0}
        opacity={!toogleChat ? 0 : 1}
        alt='Image of robot'
        src='/png/robot.png'
        width={100}
        height={100}
      />
      <ChatTextBot>{text}</ChatTextBot>
    </ChatTextAndBotContainer>
  );
};
