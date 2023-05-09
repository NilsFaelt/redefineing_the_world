import styled from "styled-components";
import { Theme } from "../../../../styles";

export const Container = styled.div`
  width: clamp(20rem, 50%, 30rem);
  background-color: black;
  color: white;
  margin-top: 3rem;
  margin-bottom: 3rem;
  height: auto;
  padding: 2rem;
  border: ${Theme.width.borders} solid black;
`;
