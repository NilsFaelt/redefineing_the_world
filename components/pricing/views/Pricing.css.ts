import styled from "styled-components";

export const Container = styled.main`
  positon: relative;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 2rem;
  padding-top: 8rem;
  background-color: black;
  background-image: url("https://images.unsplash.com/photo-1682688759157-57988e10ffa8?ixlib=rb-4.0.3&ixid=M3wxMjA3fDF8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1740&q=80");
  background-size: cover;
  background-position: center;
  min-height: 100vh;
`;
export const InfoContainer = styled.main`
  positon: relative;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  gap: 2rem;
  padding-top: 0rem;
  background-color: none;
  margin-bottom: 5rem;

  @media (max-width: 600px) {
    width: 20rem;
  }
`;
export const InnerInfoContainer = styled.main`
  padding-top: 0rem;
  background-color: none;
  max-width: 30rem;
  padding-left: 3rem;
  @media (max-width: 600px) {
    width: 20rem;
    padding-left: 0rem;
  }
`;
export const Text = styled.main`
  color: white;
  font-size: 1.1rem;
`;
export const SmallText = styled.main`
  color: white;
  font-size: 0.7rem;
  margin-top: 0.5rem;
`;
