import styled, { keyframes } from "styled-components";
import { Theme } from "../../../styles";

export const ButtonContainer = styled.button`
  border: ${Theme.width.borders} solid black;
  width: 15.3rem;
  height: 3.2rem;
  background-color: white;
  cursor: pointer;
  &:hover {
    transition: box-shadow 0.5s ease;
    box-shadow: ${Theme.shadow} black;
    background-image: linear-gradient(to right, black, black);
    background-repeat: no-repeat;
    background-size: 0% 100%;
    color: black;
  }
  &:not(:hover) {
  }

  transition: box-shadow 0.3s ease;
  &:active {
    background-color: white;
    box-shadow: none;
    color: black;
  }
`;
