import styled, { css, keyframes } from "styled-components";
import Theme from "../../styles/Theme";

interface Props {
  animate: boolean;
}

const rotate360 = keyframes`

  to {
    transform: rotate(360deg);
  }
`;

export const BarOne = styled.div<Props>`
  background-color: black;
  width: 2.5rem;
  height: 0.15rem;
  border: ${Theme.width.borders} solid ${Theme.colors.border};
  border-radius: 1rem;
  animation: ${(props) =>
    props.animate
      ? css`
          ${rotate360} 0.5s forwards
        `
      : "none"};
`;
export const BarTwo = styled.div<Props>`
  background-color: black;
  width: 2.5rem;
  height: 0.15rem;
  border: ${Theme.width.borders} solid ${Theme.colors.border};
  border-radius: 1rem;
  animation: ${(props) =>
    props.animate
      ? css`
          ${rotate360} 0.5s forwards
        `
      : "none"};
  animation-delay: 0.2s;
`;
export const BarThree = styled.div<Props>`
  background-color: black;
  width: 2.5rem;
  height: 0.15rem;
  border: ${Theme.width.borders} solid ${Theme.colors.border};
  border-radius: 1rem;
  animation: ${(props) =>
    props.animate
      ? css`
          ${rotate360} 0.5s forwards
        `
      : "none"};
  animation-delay: 0.4s;
`;
export const Container = styled.div`
  z-index: 3;
  position: absolute;
  right: 1.5rem;
  top: 1.5rem;
  display: flex;
  flex-direction: column;
  gap: 0.3rem;
  width: 3rem;
  height: 5rem;
  cursor: pointer;
  &:hover ${BarOne}, &:hover ${BarTwo}, &:hover ${BarThree} {
    transition: box-shadow 0.5s ease;
    box-shadow: ${Theme.shadow};
  }

  ${BarOne}, ${BarTwo}, ${BarThree} {
    transition: box-shadow 0.3s ease-in-out;
  }
`;
