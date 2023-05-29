import { useRouter } from "next/router";
import React, { FC, useRef, useEffect, useContext } from "react";
import { useState } from "react";
import { MainContext } from "../../context /MainLandingContext";
import { BaseInput, Button } from "../../ui/actions";
import { findWord } from "../TestBot/components/utils";
import { ChatBotAnswer } from "./ChatBotAnswer";
import {
  Container,
  ImageStyle,
  Close,
  TextArea,
  ButtonWrapper,
  Form,
  InnerContainer,
} from "./ChatBotOne.style";
import { UserAnswer } from "./UserAnswer";

export const ChatBotOne: FC<{ companyGudlines: string }> = ({
  companyGudlines,
}) => {
  const router = useRouter();
  const { dialogInfo, setDialogInfo, toogleChat, setToogleChat } =
    useContext(MainContext);

  const [loading, setLoading] = useState(false);
  const [question, setQuestion] = useState("");
  const [botRecentAnswer, setBotRecentAnswer] = useState("");

  const questionRules = {
    role: "system",
    content: `you will be asked questions by a customer on a  company that specialize in${companyGudlines}, answer as if you were customer service at the company. if someone ask you about prices: answer this word in the exact spelling: MagicRidePricingPage.
    if someone ask you about contact: answer this word in the exact spelling: MagicRideContactPage.
     `,
  };

  const asistant = {
    role: "assistant",
    content: "answer short and consist",
  };

  const inputRef = useRef<HTMLInputElement>(null);
  const textAreaRef = useRef<HTMLDivElement>(null);

  const foundWordPricingPage = findWord(
    botRecentAnswer,
    "MagicRidePricingPage"
  );
  const foundWordContactPage = findWord(
    botRecentAnswer,
    "MagicRideContactPage"
  );

  useEffect(() => {
    inputRef.current?.focus();
    scrollToBottom();
  }, [toogleChat]);

  useEffect(() => {
    scrollToBottom();
  }, [textAreaRef.current?.scrollHeight, dialogInfo]);

  const scrollToBottom = () => {
    textAreaRef.current?.scrollTo({
      top: textAreaRef.current.scrollHeight,
      behavior: "smooth",
    });
  };

  const handleClick = async (message: string, type: "bot" | "user") => {
    if (!message) return null;
    setDialogInfo((prev) => [...prev, { message, type }]);
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
      : "Please ask again i didnt understand";
    setDialogInfo((prev) => [
      ...prev,
      { type: "bot", message: answer ? answer : "" },
    ]);
    setBotRecentAnswer(answer ? answer : "");
  };

  useEffect(() => {
    if (foundWordPricingPage) {
      router.push("/pricing");
    }
    if (foundWordContactPage) {
      router.push("/contact");
    }
  }, [foundWordPricingPage, foundWordContactPage]);
  return (
    <Container
      center={!toogleChat ? "true" : "false"}
      color={toogleChat ? "rgba(255, 255, 255, 0.9)" : "rgba(255, 255, 255, 0)"}
      border={toogleChat ? "1px solid white" : "none"}
    >
      {!toogleChat && (
        <ImageStyle
          zindex={toogleChat ? -1 : 0}
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
      <InnerContainer zindex={toogleChat ? 0 : -1} opacity={toogleChat ? 1 : 0}>
        <Close
          onClick={() => setToogleChat(!toogleChat)}
          zindex={toogleChat ? 0 : -1}
          opacity={toogleChat ? 1 : 0}
        >
          Close
        </Close>
        <TextArea
          ref={textAreaRef}
          zindex={toogleChat ? 0 : -1}
          opacity={toogleChat ? 1 : 0}
        >
          {dialogInfo.map((each, i) => {
            if (each.type === "user") {
              return <UserAnswer text={each.message} key={i} />;
            }
            return (
              <ChatBotAnswer
                key={i}
                toogleChat={toogleChat}
                text={each.message}
              />
            );
          })}
          {loading && (
            <ChatBotAnswer
              loading={loading ? true : false}
              toogleChat={toogleChat}
              text=''
            />
          )}
        </TextArea>
        <Form>
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
          <ButtonWrapper opacity={toogleChat ? 1 : 0}>
            <Button
              onclick={(e) => {
                e.preventDefault(), handleClick(question, "user");
              }}
              text='Ask'
            />
          </ButtonWrapper>
        </Form>
      </InnerContainer>
    </Container>
  );
};
