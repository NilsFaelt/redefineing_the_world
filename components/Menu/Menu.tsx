import React, { FC, useState } from "react";
import { Container, LinkStyledComponent, Title } from "./Menu.styles";

interface test {}
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
    <Container animate={toogleMenu ? "true" : "false"}>
      {/* <Title animate={toogleMenu? 'true':'false'} >{linkText}</Title> */}
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
        animate={toogleMenu ? "true" : "false"}
        href={"/"}
      >
        HOME
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
        animate={toogleMenu ? "true" : "false"}
        href={"/"}
      >
        CONTACT
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
        animate={toogleMenu ? "true" : "false"}
        href={"/pricing"}
      >
        PRICING{" "}
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
        animate={toogleMenu ? "true" : "false"}
        href={"/ask-me"}
      >
        ASK ME
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
        animate={toogleMenu ? "true" : "false"}
        href={"/your-project"}
      >
        YOUR PROJECT
      </LinkStyledComponent>
    </Container>
  );
};
