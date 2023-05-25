import styled from "styled-components";

export const Container = styled.div`
  positon: relative;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 2rem;
  padding-top: 8rem;
  background-color: black;
  background-image: url("background.jpg");
  background-size: cover;
  background-position: center;
  padding-bottom: 10rem;
`;

export const TextContainer = styled.div`
  margin-left: 4rem;
  margin-right: 4rem;
  margin-top: 1rem;
  max-width: 40rem;
  box-sizing: border-box;
  color: white;
  background-color: ;
  @media (max-width: 600px) {
    width: 100%;
    margin-left: 0rem;
    margin: 0;
    padding: 0rem;
    max-width: auto;
  }
`;
