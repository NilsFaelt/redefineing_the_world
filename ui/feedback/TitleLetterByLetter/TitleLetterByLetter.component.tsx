import React, { FC, useEffect, useState } from "react";
import { Title } from "./TitleLetteByLetter.style";

interface Props {
  text?: string;
  size?: "small" | "normal" | "large";
}

export const TitleLetterByLetter: FC<Props> = ({
  text = "HELLO",
  size = "normal",
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
  return <Title className={size}>{renderedText}</Title>;
};
