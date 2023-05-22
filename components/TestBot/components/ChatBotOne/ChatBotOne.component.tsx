import React, { FC } from "react";
import { useRef } from "react";
import { useEffect } from "react";
import { useState } from "react";
import { BaseInput } from "../../../../ui/actions";
import { Container, ImageStyle, Close, TextArea } from "./ChatBotOne.style";
export const ChatBotOne: FC = () => {
  const [toogleChat, setToogleChat] = useState(false);
  const [question, setQuestion] = useState("");
  const inputRef = useRef<HTMLInputElement>(null);

  useEffect(() => {
    inputRef.current?.focus();
  }, [toogleChat]);
  return (
    <Container border={toogleChat ? "1px solid white" : "none"}>
      <Close
        onClick={() => setToogleChat(!toogleChat)}
        zIndex={toogleChat ? 0 : -1}
        opacity={toogleChat ? 1 : 0}
      >
        Close
      </Close>
      {!toogleChat && (
        <ImageStyle
          zIndex={toogleChat ? -1 : 0}
          opacity={toogleChat ? 0 : 1}
          onClick={() => {
            setToogleChat(!toogleChat);
          }}
          alt=''
          src='/png/robot.png'
          width={100}
          height={100}
        />
      )}
      <TextArea zIndex={toogleChat ? 0 : -1} opacity={toogleChat ? 1 : 0} />
      {toogleChat && (
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
