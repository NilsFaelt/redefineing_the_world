import styled, { keyframes, css } from "styled-components";
import { Theme } from "../../../styles";
import { DeviceQuery } from "../../../styles";

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 0rem;
  padding-top: 10rem;
  background-color: black;
  min-height: 100vh;
`;

export const Text = styled.p`
  font-size: 1rem;
  color: white;
`;
