import styled, { keyframes, css } from "styled-components";
import { Theme } from "../../../styles";
import { DeviceQuery } from "../../../styles";

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 2rem;
  padding-top: 5rem;
`;
export const TextContainer = styled.div`
  width: clamp(20rem, 50%, 30rem);
  background-color: white;
  color:black,
  color: white;
  margin-top: 0rem;
  margin-bottom: 0rem;
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
