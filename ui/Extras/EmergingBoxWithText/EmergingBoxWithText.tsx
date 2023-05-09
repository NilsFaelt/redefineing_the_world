import React, { FC } from "react";
import { Container } from "./EmergingBoxWithText.style";

export const EmergingBoxWithText: FC<{ text: string }> = ({ text }) => {
  return <Container>{text}</Container>;
};
