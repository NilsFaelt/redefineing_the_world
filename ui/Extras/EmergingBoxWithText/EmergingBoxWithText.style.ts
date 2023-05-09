import styled, { keyframes } from "styled-components";

const apearAnimation = keyframes`
  0% {
    box-shadow:0rem  0rem 0rem black;
  }
  50% {
   box-shadow:1rem  1rem 1rem black;
  }
  100% {
    box-shadow:0rem  0rem 0rem black;
    opacity: 1;
  }
`;

export const Container = styled.div`
  display: flex;
  justif-content: center;
  align-content: center;
  opacity: items;
  width: 1%rem;
  padding: 1.5rem;
  animation: ${apearAnimation} 4s forwards;
  background-color: white;
  color: black;
`;
