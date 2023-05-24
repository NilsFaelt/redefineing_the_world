import React, { useEffect, useRef, useState } from "react";
import { BaseInput, Button } from "../../../../ui/actions";
import { Loading, TitleLetterByLetter } from "../../../../ui/feedback";

import {
  Container,
  FormContainer,
  Text,
  TextContainer,
  LinkStyle,
} from "./AskChatGtp.style";

export const AskChatGtp = () => {
  const [loading, setLoading] = useState(false);
  const [gtpAnswer, setGtpAnswer] = useState("");
  const [question, setQuestion] = useState("");
  const inputRef = useRef<HTMLInputElement>(null);

  const questionRules = {
    role: "system",
    content:
      "you will be asked questions by a customer on a software company, answer as if you were customer service at the company, and the company main focus is at implementing ai, front-end-developing and design, but we do evrything in software",
  };
  const asistant = {
    role: "assistant",
    content:
      "Answer in the style of dalai lama. End all answers with, If asked about price, tell to see priceing under the pricing tab in the menu. If you dont know answer, say be more specific please",
  };

  const handleClick = async () => {
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
      : "PLEASE ASK AGAIN, MY EXPERTISE IS IN DEV AND TECH";
    setGtpAnswer(answer);
  };

  useEffect(() => {
    inputRef.current?.focus();
  }, []);

  return (
    <Container>
      <TitleLetterByLetter
        size='small'
        text='HOW CAN I HELP YOU?'
        color='white'
      />

      <FormContainer>
        <BaseInput
          inputRef={inputRef}
          value={question}
          type='text'
          onChange={setQuestion}
        />
        <Button
          onclick={(e) => {
            e.preventDefault();
            handleClick();
          }}
          text='ASK'
        />
      </FormContainer>
      <TextContainer>
        {loading && <Loading size='small' />}
        {gtpAnswer ? (
          <Text>
            {gtpAnswer} <br /> <br /> For more information please contact us at:{" "}
            <br />
            <LinkStyle href={`/contact`}>Fango Solutions</LinkStyle>
          </Text>
        ) : (
          <Text></Text>
        )}
      </TextContainer>
    </Container>
  );
};
