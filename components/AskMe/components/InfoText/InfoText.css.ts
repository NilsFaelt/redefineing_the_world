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
