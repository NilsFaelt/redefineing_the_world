import React, { FC } from "react";
import { Container, Text, TextContainer } from "./Footer.style";

export const Footer: FC = () => {
  return (
    <Container>
      <TextContainer>
        <Text>ABOUT</Text>
        <Text>FANGO TECH</Text>
        <Text>CONTACT</Text>
      </TextContainer>
    </Container>
  );
};
