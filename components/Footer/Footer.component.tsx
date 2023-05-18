import React, { FC } from "react";
import { Container, Text, TextContainer } from "./Footer.style";

export const Footer: FC = () => {
  return (
    <Container>
      <TextContainer>
        <Text href={"/pricing"}>PRICING</Text>
        <Text href={"/"}>FANGO SOLUTIONS</Text>
        <Text href={"/ask-me"}>ASK ME</Text>
      </TextContainer>
    </Container>
  );
};
