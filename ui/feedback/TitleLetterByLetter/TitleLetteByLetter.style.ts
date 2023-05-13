import styled, { css } from "styled-components";
import { DeviceQuery } from "../../../styles";
export const Title = styled.h2`
  max-width: 20rem;
  word-wrap: normal;
  color: ${(props) => {
    return props.color;
  }};
  ${css`
    @media (max-width: ${DeviceQuery.mobile}px) {
      margin: 1rem;
    }
  `} &.small {
    font-size: 1rem;
  }
  &.normal {
    font-size: 1.3rem;
  }
  &.large {
    font-size: 1.8rem;
  }
`;
