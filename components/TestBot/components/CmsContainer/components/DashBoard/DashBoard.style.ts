import Link from "next/link";
import styled from "styled-components";

export const Container = styled.div`
  position: sticky;
  top: 0;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: center;
  gap: 1rem;
  height: 100vh;
  background-color: black;
  width: 17rem;
  box-sizing: content-box;
  padding: 7rem 1rem 0rem 1rem;
  @media (max-width: 600px) {
    scale: 0.7;
    position: absolute;
    bottom: 0;
    left: 0;
    right: 0;
    display: flex;
    padding: 0;
    opacity: 0;
    background-color: rgba(0, 0, 0, 0);
  }
`;
export const TitleWrapper = styled(Link)`
  text-align: center;
  text-decoration: none;
`;
