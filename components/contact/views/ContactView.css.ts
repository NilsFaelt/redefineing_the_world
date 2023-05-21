import styled, { keyframes, css } from "styled-components";
import { Theme } from "../../../styles";
import { DeviceQuery } from "../../../styles";

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 0rem;
  padding-top: 10rem;
  background-color: black;
  min-height: 100vh;
  background-image: url("https://images.unsplash.com/photo-1682688759157-57988e10ffa8?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1740&q=80");
  background-size: cover;
  background-position: center;
`;
export const InfoTextContainer = styled.div`
  margin-top: 5rem;
`;

export const Text = styled.p`
  font-size: 1rem;
  color: white;
`;
export const LinkRef = styled.a`
  font-size: 1rem;
  color: white;
`;
