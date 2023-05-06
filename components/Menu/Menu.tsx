import React, { FC, useState } from "react";
import { Container, LinkStyledComponent, Title } from "./Menu.styles";

interface Props {
  toogleMenu: boolean;
  setToogleDropDownMenu: React.Dispatch<React.SetStateAction<boolean>>;
}
export const Menu: FC<Props> = ({ toogleMenu, setToogleDropDownMenu }) => {
  const [linkText, setlinkText] = useState("");
  const onHoover = (text: string) => {
    setlinkText(text);
  };
  return (
    <Container animate={toogleMenu}>
      {/* <Title animate={toogleMenu}>{linkText}</Title> */}
      <LinkStyledComponent
        onClick={() => {
          setToogleDropDownMenu(false);
        }}
        onMouseOver={() => {
          onHoover("HOME");
        }}
        onMouseLeave={() => {
          onHoover("");
        }}
        animate={toogleMenu}
        href={"/"}
      >
        HOME
      </LinkStyledComponent>
      <LinkStyledComponent
        onClick={() => {
          setToogleDropDownMenu(false);
        }}
        onMouseOver={() => {
          onHoover("ABOUT");
        }}
        onMouseLeave={() => {
          onHoover("");
        }}
        animate={toogleMenu}
        href={"/"}
      >
        ABOUT
      </LinkStyledComponent>
      <LinkStyledComponent
        onClick={() => {
          setToogleDropDownMenu(false);
        }}
        onMouseOver={() => {
          onHoover("CONTACT");
        }}
        onMouseLeave={() => {
          onHoover("");
        }}
        animate={toogleMenu}
        href={"/"}
      >
        CONTACT
      </LinkStyledComponent>
      <LinkStyledComponent
        onClick={() => {
          setToogleDropDownMenu(false);
        }}
        onMouseOver={() => {
          onHoover("LIFE");
        }}
        onMouseLeave={() => {
          onHoover("");
        }}
        animate={toogleMenu}
        href={"/ask-me"}
      >
        ASK ME
      </LinkStyledComponent>
    </Container>
  );
};
