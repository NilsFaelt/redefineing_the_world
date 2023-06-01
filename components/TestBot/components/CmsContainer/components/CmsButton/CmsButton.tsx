import React, { FC } from "react";
import { Container, Title, ContainerLinkWrapper } from "./CmsButton.style";

interface Props {
  title: string;
  link: string;
  onClick?: React.MouseEventHandler<HTMLButtonElement>;
}
export const CmsButton: FC<Props> = ({ title, onClick }) => {
  return (
    <Container onClick={onClick}>
      <Title>{title}</Title>
    </Container>
  );
};
