import styled, { keyframes } from "styled-components";
import { Theme } from "../../../styles";

const shimmerAnimation = keyframes`
  0% {
    background-color: rgba(0, 0, 0, 0.7);

  }
  100% {
    border: ${Theme.width.borders} solid purple;
    background-color: black;
  }
`;
const shimmerAnimationReverse = keyframes`
  0% {
    background-color: black;
    border: ${Theme.width.borders} solid purple;
  }
  100% {

    border: ${Theme.width.borders} solid white;
  }
`;

export const ButtonContainer = styled.button`
  border: ${Theme.width.borders} solid white;
  border-radius: 1rem;
  width: 15.3rem;
  height: 3.2rem;
  background-color: rgba(0, 0, 0, 0.7);
  color: white;
  cursor: pointer;
  box-shadow: 0.5rem 0.5rem 0.5rem black;
  &:hover {
    animation: ${shimmerAnimation} 0.5s linear forwards;
  }
  &:not(:hover) {
    animation: ${shimmerAnimationReverse} 0.5s linear forwards;
  }
  transition: box-shadow 0.3s ease;
  &:active {
    box-shadow: none;
    background-color: black;
    animation: ${shimmerAnimationReverse} 0.1s linear forwards;
    color: white;
  }
`;
