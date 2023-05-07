import React, { FC } from "react";
import { Container } from "./BaseInput.css";

interface Props {
  required?: boolean;
  type: "text" | "number";
  onChange: React.Dispatch<React.SetStateAction<string>>;
}
export const BaseInput: FC<Props> = ({ required = false, type, onChange }) => {
  return (
    <>
      <Container
        onChange={(e) => onChange(e.target.value)}
        required={required}
        type={type}
      />
    </>
  );
};
