import styled from "styled-components";
import Theme from "../../styles/Theme";
import Link from "next/link";
export const Container = styled.header`
  position: fixed;
  width: 100%;
  height: 5rem;
  /* border-bottom: ${Theme.width.borders} solid ${Theme.colors.border}; */
  /* box-shadow: ${Theme.shadow}; */
  background-color: none;
`;
export const TitleWrapper = styled.header`
  padding-top: 1rem;
  margin-left: 2rem;
`;
export const LinkStyle = styled(Link)`
  color: black;
  text-decoration: none;
`;
