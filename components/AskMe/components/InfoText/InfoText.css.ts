import styled, { css } from "styled-components";
import { Theme } from "../../../../styles";

export const Container = styled.div`
  width: clamp(20rem, 50%, 30rem);
  background-color: none;
  color: white;
  margin-top: 1rem;
  margin-bottom: 3rem;
  height: auto;
  padding: 2rem;
  box-sizing: border-box;
  width: 100%;
  border: ${Theme.width.borders} solid black;
  &:hover {
    background-color: black;
    transition: 1s;
  }
  @media (max-width: 1024px) {
    box-sizing: border-box;
    padding-left: 2rem;
    padding-right: 2rem;
  }
  @media (max-width: 600px) {
    border: none;
    margin: 0;
  }
`;
export const Text = styled.h2`
  font-size: 0.9rem;
`;
