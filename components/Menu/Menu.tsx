import React, { FC, useState } from "react";
import { Container, LinkStyledComponent, Title } from "./Menu.styles";

interface test {}
interface Props {
  toogleMenu: boolean;
  setToogleDropDownMenu: React.Dispatch<React.SetStateAction<boolean>>;
}
export const Menu: FC<Props> = ({ toogleMenu, setToogleDropDownMenu }) => {
  return (
    <Container animate={toogleMenu ? "true" : "false"}>
      <LinkStyledComponent
        onClick={() => {
          setToogleDropDownMenu(false);
        }}
        animate={toogleMenu ? "true" : "false"}
        href={"/"}
      >
        HOME
      </LinkStyledComponent>

      <LinkStyledComponent
        onClick={() => {
          setToogleDropDownMenu(false);
        }}
        animate={toogleMenu ? "true" : "false"}
        href={"/contact"}
      >
        CONTACT
      </LinkStyledComponent>
      <LinkStyledComponent
        onClick={() => {
          setToogleDropDownMenu(false);
        }}
        animate={toogleMenu ? "true" : "false"}
        href={"/pricing"}
      >
        PRICING{" "}
      </LinkStyledComponent>

      <LinkStyledComponent
        onClick={() => {
          setToogleDropDownMenu(false);
        }}
        animate={toogleMenu ? "true" : "false"}
        href={"/test-bot"}
      >
        TEST CHAT BOT
      </LinkStyledComponent>
      <LinkStyledComponent
        onClick={() => {
          setToogleDropDownMenu(false);
        }}
        animate={toogleMenu ? "true" : "false"}
        href={"/connect-ai"}
      >
        CONNECT AI
      </LinkStyledComponent>
      <LinkStyledComponent
        onClick={() => {
          setToogleDropDownMenu(false);
        }}
        animate={toogleMenu ? "true" : "false"}
        href={"/your-project"}
      >
        YOUR FUTURE PROJECT
      </LinkStyledComponent>
    </Container>
  );
};
