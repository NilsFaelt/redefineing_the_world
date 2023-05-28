import styled, { keyframes, css } from "styled-components";

export const Container = styled.div`
  display: flex;
  position: relative;
  flex-direction: column;
  align-items: center;
  gap: 0rem;
  padding-bottom: 15rem;
  width: 100%;
  height: 100vh;
  background-color: black;
`;
export const InputLabel = styled.label`
  color: white;
  margin-bottom: 2rem;
  @media (max-width: 600px) {
    width: 15rem;
  }
`;
export const InputWrapper = styled.div`
  display: flex;
  gap: 0.5rem;
  width: 25rem;
  flex-direction: column;
  align-items: center;
  margin-top: 12rem;
  @media (max-width: 600px) {
    margin-top: 15rem;
  }
`;
