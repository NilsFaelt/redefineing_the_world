import styled, { keyframes, css } from "styled-components";
import { Theme } from "../../../styles";
import { DeviceQuery } from "../../../styles";

export const Container = styled.main`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 0rem;
  padding-top: 5rem;
  padding-bottom: 5rem;
`;

export const ParallaxContainer = styled.main`
  border-top: 2px solid black;
  border-bottom: 2px solid black;
  position: relative;
  margin-top: 3rem;
  width: 100%;
`;
export const TextContainer = styled.div`
  width: clamp(20rem, 50%, 30rem);
  background-color: white;
  color:black,
  color: white;
  margin-top: 5rem;
  margin-bottom: 3rem;
  height: auto;
  padding: 2rem;
  border: ${Theme.width.borders} solid black;
  ${css`
    @media (max-width: ${DeviceQuery.mobile}px) {
      width: 100%;
      padding-left: 0rem;
      padding-right: 0rem;
    }
  `}
`;
export const Text = styled.div`
  font-size: 0.9rem;
  ${css`
    @media (max-width: ${DeviceQuery.mobile}px) {
      margin: 1rem;
    }
  `}
`;
