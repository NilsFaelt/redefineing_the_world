import React, { useState } from "react";
import { BaseInput, Button } from "../../../../ui/actions";
import { Loading } from "../../../../ui/feedback";
import { Container, FormContainer } from "./AskChatGtp.style";
import { useMutateGtpQuestion } from "./hooks/useMutateGtpQuestion";

export const AskChatGtp = () => {
  const { data, status, mutateAsync } = useMutateGtpQuestion();
  console.log(data?.body, status);

  const [question, setQuestion] = useState("what is love?");

  const handleClick = async () => {
    mutateAsync(question)
      .then((res) => {
        console.log(res, " res broder");
      })
      .catch((error) => {
        console.log(error);
      });
  };
  return (
    <Container>
      {status === "loading" && <Loading size='small' />}
      <FormContainer>
        <BaseInput type='text' onChange={setQuestion} />
        <Button
          onclick={(e) => {
            e.preventDefault();
            handleClick();
          }}
          text='ASK'
        />
      </FormContainer>
    </Container>
  );
};
