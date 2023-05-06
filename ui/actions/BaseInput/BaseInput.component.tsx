import React, { FC } from "react";
import { Container } from "./BaseInput.css";

interface Props {
  required?: boolean;
  type: "text" | "number";
}
export const BaseInput: FC<Props> = ({ required = false, type }) => {
  return (
    <>
      <Container required={required} type={type} />
    </>
  );
};
