import styled, { keyframes, css } from "styled-components";
import { Theme } from "../../../styles";
import { DeviceQuery } from "../../../styles";

export const Container = styled.main`
  flex-direction: column;
  align-items: center;
  gap: 0rem;
  padding-bottom: 5rem;
`;
export const BlackInfoContainer = styled.main`
  width: 100vw;
  display: flex;
  background-color: black;
`;

export const TitleContainer = styled.div`
  margin-left: 8rem;
  margin-top: 0rem;
  @media (max-width: 600px) {
    margin-left: 3rem;
    padding: 2rem;
  }
`;

export const BlackTextInfoContainer = styled.h2`
  color: white;
  font-size: 1.3rem;
  margin-left: -2rem;
  max-width: 20rem;
  @media (max-width: 1024px) {
  }
`;

export const InfoBoxContainer = styled.main`
  display: flex;
  flex-direction: row;
  gap: 5rem;
  @media (max-width: 1024px) {
    flex-direction: column;
    justify-content: center;
    align-items: center;
  }
  & > * {
    flex: 1;
  }
`;

export const LeftBoxContainer = styled.main`
  display: flex;
  flex-direction: column;
  align-items: center;
  box-sizing: border-box;
  @media (max-width: 1024px) {
    margin: 0;
  }
`;

export const RightBoxContainer = styled.main`
  flex: 1;
  flex-direction: column;
  align-items: center;
`;

export const SecondBlackTitle = styled.h2`
  color: black;
  font-size: 1.3rem;
  margin-right: 7rem;
  margin-top: 4rem;
  display: flex;
  flex-basis: 0;

  box-sizing: border-box;
  @media (max-width: 1024px) {
    margin-left: 4rem;
  }
`;

export const SecondBlackInfoContainer = styled.div`
  margin-left: 4rem;
  margin-right: 4rem;
  margin-top: 3rem;
  box-sizing: border-box;
  @media (max-width: 600px) {
    margin-left: 0rem;
    margin: 0;
    padding: 2rem;
  }
`;
export const WhiteInfoContainer = styled.div`
  margin-left: 4rem;
  margin-right: 4rem;
  padding: 2rem;

  border: ${Theme.width.borders} solid black;
  @media (max-width: 600px) {
    margin: 0;
    padding: 2rem;
  }
`;

export const ParallaxContainer = styled.main`
  border-top: 1px solid black;
  border-bottom: 1px solid black;
  position: relative;
  margin-top: 5rem;
  margin-bottom: 5rem;
  width: 100%;
`;
export const SmallParallaxContainer = styled.main`
  margin-right: 7rem;
  margin-top: 4rem;
  margin-bottom: 3rem;
  @media (max-width: 1024px) {
    width: 100%;
  }
`;
export const Underline = styled.hr`
  bottom: 0rem;
  margin-right: 7rem;
  margin-top: 4rem;
  display: flex;
  flex-basis: 0;
  box-sizing: border-box;
  @media (max-width: 1024px) {
    margin-left: 4rem;
  }
`;
export const LongTextWrapper = styled.h2`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 100%;
  background-color: black;
  color: white;
  @media (max-width: 1024px) {
    width: 100%;
  }
`;

export const Text = styled.h2`
  font-size: 0.9rem;
  ${css`
    @media (max-width: ${DeviceQuery.mobile}px) {
      margin: 0rem;
    }
  `}
`;
