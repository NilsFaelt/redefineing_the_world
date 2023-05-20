import React, { useEffect, useRef, useState } from "react";
import { BaseInput, Button } from "../../../../ui/actions";
import { Loading, TitleLetterByLetter } from "../../../../ui/feedback";

import {
  Container,
  FormContainer,
  Text,
  TextContainer,
} from "./AskChatGtp.style";

export const AskChatGtp = () => {
  const [loading, setLoading] = useState(false);
  const [gtpAnswer, setGtpAnswer] = useState("");
  const [question, setQuestion] = useState("");
  const inputRef = useRef<HTMLInputElement>(null);

  const handleClick = async () => {
    if (question === "") return null;

    setLoading(true);
    const data = await fetch("/api/gtp", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ question }),
    })
      .then((res) => res.json())
      .finally(() => {
        setQuestion("");
        setLoading(false);
      });
    const answer = data.choices?.[0].message.content
      ? data.choices?.[0].message.content
      : "Please ask again";
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
            {gtpAnswer} <br /> <br /> For more information please contact us,
            you find all contact info under contact in menu. Best regards Fango
            Solutions
          </Text>
        ) : (
          <Text></Text>
        )}
      </TextContainer>
    </Container>
  );
};
