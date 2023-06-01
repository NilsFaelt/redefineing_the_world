import React, { FC } from "react";
import { Container } from "./CmsContainer.style";
import { DashBoard, PersonalizeBot } from "./components";
import { Header } from "../../../Header";
export const CmsContainer: FC = () => {
  return (
    <Container>
      <Header />
      <DashBoard />
      <PersonalizeBot />
    </Container>
  );
};
