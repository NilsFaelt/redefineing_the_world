import React from "react";
import { FC } from "react";
import { Loading, TitleLetterByLetter } from "../../../../ui/feedback";
import {
  ChatTextBot,
  ImageStyleSmall,
  ChatTextAndBotContainer,
  ChatLoadingText,
} from "./ChatBotOne.style";
interface Props {
  toogleChat: boolean;
  text: string;
  loading?: boolean;
}

export const ChatBotAnswer: FC<Props> = ({ toogleChat, text, loading }) => {
  return (
    <ChatTextAndBotContainer>
      <ImageStyleSmall
        zindex={!toogleChat ? -1 : 0}
        opacity={!toogleChat ? 0 : 1}
        alt='Image of robot'
        src='/png/robot.png'
        width={100}
        height={100}
      />
      {!loading && <ChatTextBot>{text}</ChatTextBot>}
      {loading && <ChatLoadingText></ChatLoadingText>}
    </ChatTextAndBotContainer>
  );
};
