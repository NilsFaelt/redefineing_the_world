import styled from "styled-components";

export const Container = styled.div`
  margin: 0 auto;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 90%;
  margin-top: 2rem;
  margin-bottom: 2rem;
  @media (max-width: 1024px) {
    width: 80%;
  }
  @media (max-width: 600px) {
    width: 100%;
  }
`;
