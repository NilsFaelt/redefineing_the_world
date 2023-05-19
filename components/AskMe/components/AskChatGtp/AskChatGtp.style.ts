import styled from "styled-components";
import { Theme } from "../../../../styles";

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;
export const FormContainer = styled.form`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 1rem;
`;

export const TextContainer = styled.div`
  width: 20rem;
  margin-top: 2rem;
  text-align: center;

  color: white;
  /* box-shadow: 1rem 1rem 1rem black;
  border: ${Theme.width.borders} solid black; */
  padding: 2rem;
`;
export const Text = styled.div``;
