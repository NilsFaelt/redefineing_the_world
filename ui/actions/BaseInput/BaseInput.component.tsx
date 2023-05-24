import React, { FC } from "react";
import { Container } from "./BaseInput.css";

interface Props {
  value: string | number;
  required?: boolean;
  type: "text" | "number";
  onChange: React.Dispatch<React.SetStateAction<string>>;
  inputRef?: any;
  color?: "black" | "white";
  placeholder?: string;
}
export const BaseInput: FC<Props> = ({
  required = false,
  type,
  onChange,
  value,
  inputRef,
  color = "black",
  placeholder,
}) => {
  return (
    <>
      <Container
        placeholder={placeholder ? placeholder : ""}
        color={color}
        ref={inputRef}
        value={value}
        onChange={(e) => onChange(e.target.value)}
        required={required}
        type={type}
      />
    </>
  );
};
