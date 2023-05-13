import { useRouter } from "next/router";
import React, { FC, useState } from "react";
import { BurgerMenu } from "../../ui";

import { TitleLetterByLetter } from "../../ui/feedback";
import { Menu } from "../Menu";
import { Container, TitleWrapper, LinkStyle } from "./Header.styles";

export const Header: FC = () => {
  const router = useRouter();
  const hideLogo = router.pathname === "/";
  console.log(router.pathname);
  const [toogleMenu, setToogleMenu] = useState(false);
  const [toogleDropDownMenu, setToogleDropDownMenu] = useState(false);
  return (
    <Container suppressHydrationWarning={true}>
      {hideLogo ? null : (
        <TitleWrapper>
          <LinkStyle href={"/"}>
            <TitleLetterByLetter size='small' text='FANGO TECH' />
          </LinkStyle>
        </TitleWrapper>
      )}
      <Menu
        toogleMenu={toogleDropDownMenu}
        setToogleDropDownMenu={setToogleDropDownMenu}
      />
      <BurgerMenu
        toogleBurger={toogleMenu}
        setToogleburger={setToogleMenu}
        toogleDropDownMenu={toogleDropDownMenu}
        setToogleDropDownMenu={setToogleDropDownMenu}
      />
    </Container>
  );
};
