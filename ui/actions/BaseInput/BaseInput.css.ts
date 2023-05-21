import styled from "styled-components";
import { Theme } from "../../../styles";

export const Container = styled.input`
  width: 15rem;
  height: 3rem;
  text-align: center;
  border: ${Theme.width.borders} solid black;
  border-radius: 1rem;
  background-color: ${(props) => props.color};
  color: ${(props) => (props.color === "white" ? "black" : "white")};
  font-size: 1rem;
  &::placeholder {
    text-align: center;
  }
`;
