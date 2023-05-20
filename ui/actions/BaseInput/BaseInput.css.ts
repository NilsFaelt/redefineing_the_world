import styled from "styled-components";
import { Theme } from "../../../styles";

export const Container = styled.input`
  width: 15rem;
  height: 3rem;
  border: ${Theme.width.borders} solid black;

  border-radius: 1rem;
  background-color: black;
  color: white;
  font-size: 1rem;
`;
