import React, { FC, useRef, useEffect } from "react";
import { useState } from "react";
import { BaseInput } from "../../../../ui/actions";
import { ChatBotAnswer } from "./ChatBotAnswer";
import { Container, ImageStyle, Close, TextArea } from "./ChatBotOne.style";
import { UserAnswer } from "./UserAnswer";

export const ChatBotOne: FC = () => {
  const [toggleChat, setToggleChat] = useState(false);
  const [question, setQuestion] = useState("");
  const inputRef = useRef<HTMLInputElement>(null);
  const textAreaRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    inputRef.current?.focus();
    scrollToBottom();
  }, [toggleChat]);

  useEffect(() => {
    scrollToBottom();
  }, [textAreaRef.current?.scrollHeight]);

  const scrollToBottom = () => {
    textAreaRef.current?.scrollTo({
      top: textAreaRef.current.scrollHeight,
      behavior: "smooth",
    });
  };

  return (
    <Container border={toggleChat ? "1px solid white" : "none"}>
      <Close
        onClick={() => setToggleChat(!toggleChat)}
        zIndex={toggleChat ? 0 : -1}
        opacity={toggleChat ? 1 : 0}
      >
        Close
      </Close>
      {!toggleChat && (
        <ImageStyle
          zIndex={toggleChat ? -1 : 0}
          opacity={toggleChat ? 0 : 1}
          onClick={() => {
            setToggleChat(!toggleChat);
          }}
          alt=''
          src='/png/robot.png'
          width={100}
          height={100}
        />
      )}
      <TextArea
        ref={textAreaRef}
        zIndex={toggleChat ? 0 : -1}
        opacity={toggleChat ? 1 : 0}
      >
        <ChatBotAnswer
          toogleChat={toggleChat}
          text='God day, please give me a few words about the company you want me to represent'
        />
        <UserAnswer text='What is love? and harmony and feelings' />
        <ChatBotAnswer
          toogleChat={toggleChat}
          text='God day, please give me a few words about the company you want me to represent'
        />
        <UserAnswer text='What is love? and harmony and feelings' />
      </TextArea>
      {toggleChat && (
        <BaseInput
          inputRef={inputRef}
          value={question}
          required={false}
          type='text'
          onChange={setQuestion}
          color='white'
        />
      )}
    </Container>
  );
};
