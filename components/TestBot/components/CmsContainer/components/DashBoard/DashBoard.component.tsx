import React, { FC } from "react";
import { Container, TitleWrapper } from "./DashBoard.style";

import { Button } from "../../../../../../ui/actions";
export const DashBoard: FC = () => {
  return (
    <Container>
      <TitleWrapper href={"/"}></TitleWrapper>
      <Button onclick={() => {}} text='PERSONALIZE' />
      <Button onclick={() => {}} text='PRICES' />
      <Button onclick={() => {}} text='CONTEXT' />
      <Button onclick={() => {}} text='CONTACT' />
      <Button onclick={() => {}} text='Q AND A' />
    </Container>
  );
};
