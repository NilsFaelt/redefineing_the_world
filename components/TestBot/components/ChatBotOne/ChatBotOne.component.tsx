import React, { FC, useRef, useEffect } from "react";
import { useState } from "react";
import { BaseInput, Button } from "../../../../ui/actions";
import { ChatBotAnswer } from "./ChatBotAnswer";
import {
  Container,
  ImageStyle,
  Close,
  TextArea,
  ButtonWrapper,
  Form,
} from "./ChatBotOne.style";
import { UserAnswer } from "./UserAnswer";

interface DialogInfoType {
  type: "bot" | "user";
  message: string;
}

export const ChatBotOne: FC<{ companyGudlines: string }> = ({
  companyGudlines,
}) => {
  const [toggleChat, setToggleChat] = useState(false);
  const [loading, setLoading] = useState(false);
  const [question, setQuestion] = useState("");
  const [dialog, setDialog] = useState<DialogInfoType[]>([
    { type: "bot", message: "Hello my friend, how can i help you today?" },
  ]);

  console.log(companyGudlines);
  const questionRules = {
    role: "system",
    content: "answer in short and consist answers, in the style of dalai lama",
  };
  const asistant = {
    role: "assistant",
    content: `you will be a customer service for a company with the company specialize in  ${
      companyGudlines ? companyGudlines : "evrything"
    } t`,
  };

  const inputRef = useRef<HTMLInputElement>(null);
  const textAreaRef = useRef<HTMLDivElement>(null);
  console.log(dialog);
  useEffect(() => {
    inputRef.current?.focus();
    scrollToBottom();
  }, [toggleChat]);

  useEffect(() => {
    scrollToBottom();
  }, [textAreaRef.current?.scrollHeight, dialog]);

  const scrollToBottom = () => {
    textAreaRef.current?.scrollTo({
      top: textAreaRef.current.scrollHeight,
      behavior: "smooth",
    });
  };

  const handleClick = async (message: string, type: "bot" | "user") => {
    setDialog((prev) => [...prev, { message, type }]);
    setQuestion("");
    if (question === "") return null;

    setLoading(true);
    const data = await fetch("/api/gtp", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ question, questionRules, asistant }),
    })
      .then((res) => res.json())
      .finally(() => {
        setQuestion("");
        setLoading(false);
      });
    const answer = data.choices?.[0].message.content
      ? data.choices?.[0].message.content
      : "PLEASE ASK AGAIN, MY EXPERTISE IS IN DEV";
    setDialog((prev) => [...prev, { type: "bot", message: answer }]);
  };

  return (
    <Container
      color={toggleChat ? "white" : "black"}
      border={toggleChat ? "1px solid white" : "none"}
    >
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
        {dialog.map((each, i) => {
          if (each.type === "user") {
            return <UserAnswer text={each.message} key={i} />;
          }
          return (
            <ChatBotAnswer
              key={i}
              toogleChat={toggleChat}
              text={each.message}
            />
          );
        })}
        {loading && (
          <ChatBotAnswer
            loading={loading ? true : false}
            toogleChat={toggleChat}
            text=''
          />
        )}
      </TextArea>
      <Form>
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
        <ButtonWrapper opacity={toggleChat ? 1 : 0}>
          <Button
            onclick={(e) => {
              e.preventDefault(), handleClick(question, "user");
            }}
            text='Ask'
          />
        </ButtonWrapper>
      </Form>
    </Container>
  );
};
