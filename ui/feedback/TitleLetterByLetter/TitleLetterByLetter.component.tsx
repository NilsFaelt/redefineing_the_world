import React, { FC, useEffect, useState } from "react";
import { Title } from "./TitleLetteByLetter.style";

interface Props {
  text?: string;
  size?: "small" | "normal" | "large";
  color?: "white" | "black";
}

export const TitleLetterByLetter: FC<Props> = ({
  text = "HELLO",
  size = "normal",
  color = "black",
}) => {
  const [count, setCount] = useState(0);
  const [renderedText, setRenderedText] = useState<string[]>([]);
  const textToArrayOfLetters = text.split("");
  textToArrayOfLetters.unshift("", "");

  useEffect(() => {
    if (count < textToArrayOfLetters.length + 2) {
      setTimeout(() => {
        setCount((prev) => prev + 1);
        setRenderedText((prev) => [...prev, textToArrayOfLetters[count]]);
      }, 100);
    }
  }, [renderedText]);
  return (
    <Title color={color} className={size}>
      {renderedText}
    </Title>
  );
};
