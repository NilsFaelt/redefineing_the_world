import Link from "next/link";
import styled, { keyframes, css } from "styled-components";
Link;
import { Theme } from "../../styles";

interface Props {
  animate: boolean;
}
const open = keyframes`
  from {
    height: 0vh;
  }
  to {
    height: 100vh;
  }
`;
const close = keyframes`
  from {
    height: 100vh;
  }
  to {
    height: 0vh;
  }
`;
const openLink = keyframes`
  0% {
    opacity: 0;
  }
  50% {
    opacity: 0;
  }
  100% {
    opacity: 1;
  }
`;
const closeLink = keyframes`
  0% {
    opacity: 1;
  }
  50% {
    opacity: 0;
  }
  100% {
    opacity: 0;
  }
`;

export const Title = styled.h3<Props>`
  color: black;
  position: absolute;
  font-weihgt: thin;
  top: 4rem;
  opacity: ${(props) => (props.animate ? 1 : 0)};
`;

export const LinkStyledComponent = styled(Link)<Props>`
  width: 100%;
  padding-top: 0.5rem;
  padding-bottom: 0.5rem;
  text-align: center;
  text-decoration: none;
  font-size: 1.2rem;
  color: black;
  &:hover {
    transition: box-shadow 0.5s;
    background-color: black;
    color: white;
  }

  animation: ${(props) =>
    props.animate
      ? css`
          ${openLink} 1s forwards
        `
      : css`
          ${closeLink} 1s forwards
        `};
  animation-fill-mode: forwards;
`;

export const Container = styled.nav<Props>`
  position: absolute;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  z-index: 2;
  top: 0;
  bottom: 0;
  width: 100vw;
  height: 0vh;
  background-color: white;
  border-radius: 0.5rem;
  animation: ${(props) =>
    props.animate
      ? css`
          ${open} 1s forwards
        `
      : css`
          ${close} 1s forwards
        `};
  animation-fill-mode: forwards;
`;
