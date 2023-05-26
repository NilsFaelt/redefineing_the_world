import React from "react";
import { FC } from "react";
import { ChatText } from "./ChatBotOne.style";

interface Props {
  text: string;
}
export const UserAnswer: FC<Props> = ({ text }) => {
  return <ChatText>{text}</ChatText>;
};
