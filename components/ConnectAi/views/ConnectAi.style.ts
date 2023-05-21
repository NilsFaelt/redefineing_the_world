import Link from "next/link";
import styled, { keyframes, css } from "styled-components";
import { Theme } from "../../../styles";
import { DeviceQuery } from "../../../styles";

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 2rem;
  padding-top: 7rem;
  min-height: 100vh;
  background-color: black;
  background-image: url("/background.jpg");
  background-size: cover;
  background-position: center;
  padding-bottom: 5rem;
`;
export const BulletDotTextContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: flex-start;
`;
export const TextContainerBlack = styled.div`
  max-width: 30rem;
`;
export const TextContainer = styled.div`
  background-color: rgba(0, 0, 0, 0.5);
  color: white;
  max-width: 27rem;
  margin-top: 0rem;
  margin-bottom: 0rem;
  box-sizing: border-box;
  height: auto;
  padding: 1.5rem;
  border: ${Theme.width.borders} solid black;

  ${css`
    @media (max-width: ${DeviceQuery.mobile}px) {
      width: 94%;
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
