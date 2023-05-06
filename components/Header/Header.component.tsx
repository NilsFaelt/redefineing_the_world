import React, { FC, useState } from "react";
import { BurgerMenu } from "../../ui";
import { Menu } from "../Menu";
import { Container } from "./Header.styles";

export const Header: FC = () => {
  const [toogleMenu, setToogleMenu] = useState(false);
  const [toogleDropDownMenu, setToogleDropDownMenu] = useState(false);
  return (
    <Container suppressHydrationWarning={true}>
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
