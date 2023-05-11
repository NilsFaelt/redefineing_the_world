import styled, { keyframes } from "styled-components";
import { Theme } from "../../../styles";

export const ButtonContainer = styled.button`
  border: ${Theme.width.borders} solid black;
  width: 15.3rem;
  height: 3.2rem;
  background-color: white;
  cursor: pointer;
  box-shadow: ${Theme.shadow} black;
  &:hover {
  }
  &:not(:hover) {
  }

  transition: box-shadow 0.3s ease;
  &:active {
    border: none;
    box-shadow: none;
    color: black;
  }
`;
