import React, { useState } from "react";
import { BaseInput, Button } from "../../../../ui/actions";
import { Loading } from "../../../../ui/feedback";
import { InfoText } from "../InfoText/InfoText.component";
import {
  Container,
  FormContainer,
  Text,
  TextContainer,
} from "./AskChatGtp.style";
import { useMutateGtpQuestion } from "./hooks/useMutateGtpQuestion";

export const AskChatGtp = () => {
  const [loading, setLoading] = useState(false);
  const [gtpAnswer, setGtpAnswer] = useState("");
  const { data, status, mutateAsync } = useMutateGtpQuestion();
  const [question, setQuestion] = useState("");

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
      : "";
    setGtpAnswer(answer);
  };
  return (
    <Container>
      {loading && <Loading size='small' />}
      <FormContainer>
        <BaseInput value={question} type='text' onChange={setQuestion} />
        <Button
          onclick={(e) => {
            e.preventDefault();
            handleClick();
          }}
          text='ASK'
        />
      </FormContainer>
      <TextContainer>
        <Text>{gtpAnswer}</Text>
      </TextContainer>
    </Container>
  );
};
