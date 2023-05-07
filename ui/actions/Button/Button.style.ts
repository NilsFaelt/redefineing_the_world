import styled from "styled-components";
import { Theme } from "../../../styles";

export const ButtonContainer = styled.button`
  border: ${Theme.width.borders} solid black;
  padding: "2rem";
  min-width: 10rem;
  height: 3.2rem;
  background-color: white;
  cursor: pointer;
  &:hover {
    transition: box-shadow 0.5s ease;
    box-shadow: ${Theme.shadow} black;
  }

  $ {
    transition: box-shadow 0.3s ease;
  }
  &:active {
    box-shadow: none;
    background-color: #c9a3fa;
    color: black;
  }
`;
