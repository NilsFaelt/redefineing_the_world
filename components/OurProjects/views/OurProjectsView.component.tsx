import React, { FC } from "react";
import { Header } from "../../Header";
import { Container, ImageStyle } from "./OurProjectsView.css";

export const OurProjectsView: FC = () => {
  const arrayOfImageUrl = ["/the-verge.png", "/skeidar.png"];
  return (
    <Container>
      <Header />
      <ImageStyle
        layout='fill'
        objectFit='cover'
        objectPosition='center'
        src={arrayOfImageUrl[1]}
        alt='My Image'
      />
    </Container>
  );
};
