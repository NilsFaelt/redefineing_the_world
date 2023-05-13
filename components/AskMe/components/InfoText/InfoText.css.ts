import styled, { css } from "styled-components";
import { Theme } from "../../../../styles";
import { DeviceQuery } from "../../../../styles";

export const Container = styled.div`
  width: clamp(20rem, 50%, 30rem);
  background-color: black;
  color: white;
  margin-top: 1rem;
  margin-bottom: 3rem;
  height: auto;
  padding: 2rem;

  border: ${Theme.width.borders} solid black;
  @media (max-width: 1024px) {
    box-sizing: border-box;
    padding-left: 2rem;
    padding-right: 2rem;
    width: 100%;
  }
`;
export const Text = styled.h2`
  font-size: 0.9rem;
`;
