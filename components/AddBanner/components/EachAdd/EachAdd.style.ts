import styled, { keyframes } from "styled-components";

interface Props {
  toogle: boolean;
}

const GrowContainerAnimation = keyframes`
  0% {
  width: 15rem;
  height: 8rem;
  }
  100% {
  width: 70%;
  height: 20rem;
  left:0;
  top:0;
  }
`;
const GrowContainerAnimationMobile = keyframes`
  0% {
  width: 17rem;
  height: 6rem;
  }
  100% {
  width: 100%;
  height: 20rem;
  left:0;
  top:0;
  }
`;
const MinimizeContainerAnimation = keyframes`
  0% { 
  width:100%;
  height:100%;
  left:0;
  top:0; 
  }
  100% {
  width: 17rem;
  height: 8rem;
  }
`;
const ToogleInfoTextAnimationOpen = keyframes`
  0% { 
    opacity:0;
  }
  50% { 
    opacity:0;
  }
  100% {
    opacity:1;
  }
`;
const ToogleInfoTextAnimationClose = keyframes`
  0% { 
    opacity:0;
  }
  100% {
    opacity:1;
  }
`;

export const Text = styled.p`
  color: white;
  transition: 1s;
`;
export const InfoText = styled.p<Props>`
  color: white;
  transition: 1s;
  margin-left: 1rem;
  margin-right: 1rem;
  animation: ${(props) =>
      props.toogle ? ToogleInfoTextAnimationOpen : ToogleInfoTextAnimationClose}
    1.5s forwards;
`;

export const Container = styled.div`
  position: relative;
  width: 100%;
  cursor: pointer;
  @media (max-width: 800px) {
    width: 100%;
  }
  &:hover ${Text} {
    text-decoration: underline;
  }
`;
export const TextWrapper = styled.div<Props>`
  position: absolute;
  top: 7rem;
  left: 1.5rem;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  background-color: black;
  box-shadow: 0.5rem 0.5rem 0.5rem black;
  width: 5rem;
  height: 6rem;
  animation: ${(props) =>
      props.toogle ? GrowContainerAnimation : MinimizeContainerAnimation}
    1s forwards;
  @media (max-width: 800px) {
    animation: ${(props) =>
        props.toogle
          ? GrowContainerAnimationMobile
          : MinimizeContainerAnimation}
      1s forwards;
  }
`;

export const Image = styled.img`
  width: 70%;
  height: 20rem;
  object-fit: cover;
  @media (max-width: 800px) {
    width: 100%;
    height: 20rem;
  }
`;
