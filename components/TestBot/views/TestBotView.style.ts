import styled, { keyframes, css } from "styled-components";

export const Container = styled.div`
  display: flex;
  position: relative;
  flex-direction: column;
  align-items: center;
  gap: 0rem;
  padding-bottom: 25rem;
  width: 100%;
  min-height: 100vh;
  background-color: black;
  @media (max-width: 600px) {
  }
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
  width: 25rem;
  flex-direction: column;
  align-items: center;
  margin-top: 7rem;
`;
