import styled from "styled-components";
import { Theme } from "../../styles";

export const Container = styled.footer`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  positon: fixed;
  bottom: 0rem;
  width: 100%;
  height: 5rem;
  margin-bottom: 10rem;
  border-top: ${Theme.width.borders} solid black;
`;
export const TextContainer = styled.footer`
  display: flex;
  justify-content: space-around;
  align-items: center;
  positon: fixed;
  width: 100%;
`;

export const Text = styled.p`
  font-size: 0.6rem;
`;
