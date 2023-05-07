import React, { FC, useEffect, useState } from "react";
import { Title } from "./Loading.style";

export const Loading: FC<{
  size?: "small" | "normal" | "large";
  loading?: boolean;
}> = ({ size = "normal", loading = true }) => {
  const [count, setCount] = useState(0);
  const [renderedText, setRenderedText] = useState<string[]>([]);
  const textToRender = [
    "",
    "",
    "L",
    "O",
    "A",
    "D",
    "I",
    "N",
    "G",
    ".",
    ".",
    ".",
  ];

  useEffect(() => {
    if (count < textToRender.length + 2) {
      setTimeout(() => {
        setCount((prev) => prev + 1);
        setRenderedText((prev) => [...prev, textToRender[count]]);
      }, 500);
    }
    if (loading && count === textToRender.length + 2) {
      setCount(0);
      setRenderedText(["", "", "I", "M", " "]);
    }
  }, [renderedText]);
  if (!loading) return null;
  return <Title className={size}>{renderedText}</Title>;
};
