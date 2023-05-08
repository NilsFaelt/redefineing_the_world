import styled from "styled-components";
import { Theme } from "../../styles";

export const Container = styled.footer`
  positon: fixed;
  bottom: 0;
  width: 100%;
  min-height: 5rem;
  border-top: ${Theme.width.borders} solid black;
`;
export const Image = styled.img`
  width: 10rem;
  height: 10rem;
`;
