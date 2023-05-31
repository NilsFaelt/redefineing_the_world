import Link from "next/link";
import styled from "styled-components";

export const Container = styled.button`
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 1rem;
  width: 13rem;
  height: 2rem;
  background-color: white;
`;
export const ContainerLinkWrapper = styled(Link)`
  color: none;
  text-decoration: none;
`;
export const Title = styled.h3`
  color: purple;
  font-size: 1rem;
`;
