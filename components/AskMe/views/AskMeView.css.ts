import styled from "styled-components";

export const Container = styled.div`
  positon: relative;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 2rem;
  padding-top: 8rem;
  background-color: black;
  background-image: url("https://images.unsplash.com/photo-1682688759157-57988e10ffa8?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1740&q=80");
  background-size: cover;
  background-position: center;
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
