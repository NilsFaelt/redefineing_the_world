import { FC } from "react";
import { Container, BarOne, BarTwo, BarThree } from "./BurgerMenu.styles";

interface Props {
  toogleBurger: boolean;
  toogleDropDownMenu: boolean;
  setToogleburger: React.Dispatch<React.SetStateAction<boolean>>;
  setToogleDropDownMenu: React.Dispatch<React.SetStateAction<boolean>>;
}
export const BurgerMenu: FC<Props> = ({
  toogleBurger = false,
  setToogleburger,
  toogleDropDownMenu = false,
  setToogleDropDownMenu,
}) => {
  if (toogleBurger) {
    setTimeout(() => {
      setToogleburger(false);
    }, 1200);
  }
  return (
    <Container
      onClick={() => {
        setToogleDropDownMenu(!toogleDropDownMenu);
        setToogleburger(!toogleBurger);
      }}
      suppressHydrationWarning={true}
    >
      <BarOne animate={toogleBurger} />
      <BarTwo animate={toogleBurger} />
      <BarThree animate={toogleBurger} />
    </Container>
  );
};
