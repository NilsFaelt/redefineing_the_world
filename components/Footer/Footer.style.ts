import Link from "next/link";
import styled from "styled-components";
import { Theme } from "../../styles";

export const Container = styled.footer`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  positon: absolute;
  bottom: 0rem;
  width: 100%;
  height: 5rem;
  border-top: ${Theme.width.borders} solid black;
  background-color: black;
`;
export const TextContainer = styled.footer`
  display: flex;
  justify-content: space-around;
  align-items: center;
  width: 100%;
`;

export const Text = styled(Link)`
  font-size: 0.6rem;
  color: white;
`;
