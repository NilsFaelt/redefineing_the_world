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
  background-image: url("/background.jpg");
  background-size: cover;
  background-position: center;
`;
export const InfoTextContainer = styled.div`
  margin-top: 5rem;
`;

export const Text = styled.p`
  font-size: 1rem;
  color: white;
`;
export const LinkRef = styled.a`
  font-size: 1rem;
  color: white;
`;
