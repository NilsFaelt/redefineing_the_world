import React, { FC } from "react";
import { Container, Image } from "./Carousel.style";

export const Carousel: FC = () => {
  return (
    <Container>
      <Image src='/projects/verge.png' />
      <Image src='/projects/the-new-dorker.png' />
      <Image src='/projects/laundry-app.png' />
      <Image src='/projects/brew-me.png' />
      <Image src='/projects/furrency.png' />
    </Container>
  );
};
