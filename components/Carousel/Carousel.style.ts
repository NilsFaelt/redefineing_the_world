import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  flex-direction: row;
  width: 100%;
  height: 15rem;
  margin-top: 5rem;
  border-top: 0.05rem solid white;
  border-bottom: 0.05rem solid white;
  overflow: scroll;

  @media (max-width: 600px) {
  }
`;
export const Image = styled.img`
  object-fit: fill;
  height: 100%;
  width: 20rem;
  @media (max-width: 600px) {
  }
`;
