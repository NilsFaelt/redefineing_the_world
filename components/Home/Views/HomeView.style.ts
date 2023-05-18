import styled, { keyframes, css } from "styled-components";
import { Theme } from "../../../styles";
import { DeviceQuery } from "../../../styles";

export const Container = styled.main`
  flex-direction: column;
  align-items: center;
  gap: 0rem;
  padding-bottom: 5rem;
  background-color: black;
`;

export const BlackInfoContainer = styled.main`
  width: 100vw;
  display: flex;
  background-color: black;
  padding-bottom: 6rem;
  padding-top: 6rem;
`;

export const TitleContainer = styled.div`
  margin-left: 8rem;
  margin-top: 0rem;
  @media (max-width: 600px) {
    margin: 0 auto;
  }
`;

export const BlackTextInfoContainer = styled.div`
  color: white;
  font-size: 1.3rem;
  margin-left: rem;
  margin-left: -2rem;
  max-width: 20rem;
`;

export const InfoBoxContainer = styled.main`
  display: flex;
  flex-direction: row;
  gap: 5rem;
  background-image: url("https://images.unsplash.com/photo-1682688759157-57988e10ffa8?ixlib=rb-4.0.3&ixid=M3wxMjA3fDF8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1740&q=80");
  background-size: cover; /* Adjust as needed */
  background-position: center; /* Adjust as needed */
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
  margin-top: 5rem;
  @media (max-width: 1024px) {
  }
`;

export const RightBoxContainer = styled.main`
  flex: 1;
  flex-direction: column;
  align-items: center;
  margin-top: 5rem;
  @media (max-width: 1024px) {
    margin-top: 0rem;
  }
`;

export const SecondBlackTitle = styled.h2`
  color: white;
  font-size: 1.3rem;
  margin-right: 7rem;
  margin-top: 4rem;
  display: flex;
  flex-basis: 0;

  box-sizing: border-box;
  @media (max-width: 1024px) {
    margin: 0 auto;
    width: 80%;
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
  margin-bottom: 4rem;
  padding: 2rem;
  color: white;
  box-shadow: 1rem 1rem 1rem black;
  border: ${Theme.width.borders} solid black;
  &:hover {
    background-color: black;
    transition: 1s;
  }
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
  border-top: 1px solid black;
  border-bottom: 1px solid black;
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
  margin-top: 2rem;
  display: flex;
  flex-basis: 0;
  box-sizing: border-box;
  @media (max-width: 1024px) {
    margin: 0 auto;
    width: 80%;
    margin-top: 2rem;
    margin-bottom: 2rem;
  }
`;
export const LongTextWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 100%;
  background-color: black;
  color: white;
  margin-top: 3rem;
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
