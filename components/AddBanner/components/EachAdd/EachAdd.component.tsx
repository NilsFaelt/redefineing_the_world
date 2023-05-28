import React, { FC, useState } from "react";
import { Container, Image, Text, TextWrapper, InfoText } from "./EachAdd.style";

interface Props {
  text: string;
  infoText: string;
  url: string;
}

export const EachAdd: FC<Props> = ({ text, url, infoText }) => {
  const [toogle, setToogle] = useState(false);
  return (
    <Container onClick={() => setToogle(!toogle)}>
      <Image alt='background-image' src={url} />
      <TextWrapper toogle={toogle}>
        {!toogle && <Text>{text}</Text>}
        {toogle && <InfoText toogle={toogle}>{infoText}</InfoText>}
      </TextWrapper>
    </Container>
  );
};
