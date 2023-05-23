import styled, { keyframes, css } from "styled-components";
import { Theme } from "../../../styles";
import { DeviceQuery } from "../../../styles";

export const Container = styled.div`
  display: flex;
  position: relative;
  flex-direction: column;
  align-items: center;
  gap: 0rem;
  padding-bottom: 5rem;
  width: 100%;
  min-height: 100vh;
  background-color: black;
`;
export const InputLabel = styled.label`
  color: white;
  margin-bottom: 2rem;
`;
export const InputWrapper = styled.div`
  display: flex;
  width: 25rem;
  flex-direction: column;
  align-items: center;
  margin-top: 10rem;
`;
