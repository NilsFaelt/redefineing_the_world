import React, { FC, useState } from "react";
import { Container, Image, Text, TextWrapper } from "./EachAdd.style";

interface Props {
  text: string;
  url: string;
}

export const EachAdd: FC<Props> = ({ text, url }) => {
  const [toogle, setToogle] = useState(false);
  return (
    <Container onClick={() => setToogle(!toogle)}>
      <Image src={url} />
      <TextWrapper toogle={toogle}>
        <Text>{text}</Text>
      </TextWrapper>
    </Container>
  );
};
