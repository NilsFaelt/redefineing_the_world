import React, { FC, useEffect, useState } from "react";
import { BaseInput } from "../../../ui/actions";
import { Container } from "./AskMeView.css";

export const AskMeView: FC = () => {
  const [count, setCount] = useState(0);
  const [renderedText, setRenderedText] = useState<string[]>([]);
  const text = [
    "",
    "",
    "H",
    "E",
    "L",
    "L",
    "O",
    " ",
    "H",
    "O",
    "W",
    " ",
    "C",
    "A",
    "N",
    " ",
    "I",
    " ",
    "H",
    "E",
    "L",
    "P",
    " ",
    "Y",
    "O",
    "U",
  ];

  useEffect(() => {
    if (count < text.length + 2) {
      setTimeout(() => {
        setCount((prev) => prev + 1);
        setRenderedText((prev) => [...prev, text[count]]);
      }, 100);
    }
  }, [renderedText]);

  return (
    <Container>
      <h2>{renderedText}</h2>
      <BaseInput type='text' />
    </Container>
  );
};
