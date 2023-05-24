import styled from "styled-components";
import Theme from "../../styles/Theme";
import Link from "next/link";
export const Container = styled.header`
  position: fixed;
  width: 100%;
  height: 5rem;
  /* border-bottom: ${Theme.width.borders} solid ${Theme.colors.border}; */
  z-index: 1;
  background-color: rgba(0, 0, 0, 0.7);
  box-shadow: 0rem 0.5rem 0rem;
`;
export const TitleWrapper = styled.header`
  padding-top: 1rem;
  margin-left: 2rem;
  @media (max-width: 600px) {
    padding-top: 0.8rem;
    margin-left: 1rem;
  }
`;
export const LinkStyle = styled(Link)`
  color: black;
  text-decoration: none;
`;
