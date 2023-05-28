import Image from "next/image";
import styled, { keyframes } from "styled-components";

interface ContainerProps {
  border: string;
  left?: string;
  right?: string;
  center: string;
}
interface InnerContainerProps {
  opacity: number;
  zindex: number;
}
interface ImageProps {
  opacity: number;
  zindex: number;
}
interface TextAreaProps {
  opacity: number;
  zindex: number;
}
interface CloseProps {
  opacity: number;
  zindex: number;
}
interface ButtonWrapperProps {
  opacity: number;
}
const loadingAnimation = keyframes`
  0% {
    content: ".";
  }
  33% {
    content: "..";
  }
  66% {
    content: "...";
  }
`;

export const Container = styled.div<ContainerProps>`
  position: fixed;
  top: 49%;
  left: 74%;
  @media (max-width: 1250px) {
    left: 65%;
  }
  @media (max-width: 1000px) {
    left: 55%;
  }
  @media (max-width: 850px) {
    left: 50%;
  }
  @media (max-width: 700px) {
    left: 38%;
  }
  @media (max-width: 500px) {
    left: 28%;
  }
  @media (max-width: 450px) {
    left: -55%;
    top: -25%;
    ${(props) =>
      props.center === "true"
        ? " transform: translate(50%, 50%)"
        : "  transform: translate(100%, 65%)"};
  }
  transform: translate(50%, 10%);
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 1rem;
  margin-top: 5rem;
  margin-bottom: 0rem;
  padding: 1rem;
  border-radius: 1rem;
  box-shadow: 0rem 0rem 0rem;
  // border: 0.05rem solid black;
  ${(props) =>
    props.center === "true"
      ? "box-shadow: 0rem 0rem 0rem;"
      : "   box-shadow: 0.5rem 0.5rem 0.5rem black;"};
  border: ${(props) => props.border} solid black;
  background-color: ${(props) => props.color};
  ${(props) =>
    props.center === "true"
      ? " transform: translate(60%, 35%)"
      : "  transform: translate(-50%, -50%)"};
  transition: 1s;
`;
export const InnerContainer = styled.div<InnerContainerProps>`
  z-index: ${(props) => props.zindex};
  opacity: ${(props) => props.opacity};
`;
export const ChatContainer = styled.div`
  margin-top: 20rem;
`;
export const TextArea = styled.div<TextAreaProps>`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: flex-start;
  margin-bottom: 0.5rem;
  width: 15.2rem;
  height: 15rem;
  background-color: white;
  border-radius: 1rem;
  z-index: ${(props) => props.zindex};
  opacity: ${(props) => props.opacity};
  overflow: scroll;
`;
export const ChatTextBot = styled.p`
  margin-left: 0.2rem;
  margin-right: 0.2rem;
  margin-top: 0rem;
  font-size: 0.8rem;
  border-radius: 1rem;
  border: 0.05rem solid black;
  padding: 0.5rem;
  box-sizeing: border-box;
  background-color: grey;
  color: white;
`;
export const ChatText = styled.p`
  margin-left: 0.5rem;
  margin-top: 0.5rem;
  font-size: 0.8rem;
  color: yellow;
  border: 0.05rem solid black;
  border-radius: 1rem;
  padding: 0.5rem;
  box-sizeing: border-box;
  background-color: grey;
  width: 75%;
`;
export const ChatLoadingText = styled.p`
  margin-left: 0.5rem;
  margin-top: -0.7rem;
  font-size: 2.2rem;
  color: black;
  padding: 0rem;
  width: 3rem;
  height: 2rem;
  &::after {
    content: ".";
    animation: ${loadingAnimation} 1s infinite;
  }
`;
export const ChatTextAndBotContainer = styled.div`
  display: flex;
  flex-direction: row;
  margin-left: 0.1rem;
  margin-top: 0.5rem;
  font-size: 0.8rem;
`;
export const Form = styled.form`
  display: flex;
  flex-direction: column;
  gap: 1rem;
`;

export const Close = styled.text<CloseProps>`
  color: white;
  position: absolute;
  left: 0.2rem;
  top: -1.5rem;
  cursor: pointer;
  z-index: ${(props) => props.zindex};
  opacity: ${(props) => props.opacity};
  font-size: 1rem;
`;
export const ButtonWrapper = styled.text<ButtonWrapperProps>`
  opacity: ${(props) => props.opacity};
`;

export const ImageStyle = styled(Image)<ImageProps>`
  width: 5rem;
  height: 5rem;
  cursor: pointer;
  z-index: ${(props) => props.zindex};
  opacity: ${(props) => props.opacity};
  background-color: rgba(0, 0, 0, 0.4);
  box-shadow: 0.5rem 0.5rem 0.5rem black;
  border-radius: 50%;
  padding: 0.5rem;
`;
export const ImageStyleSmall = styled(Image)<ImageProps>`
  transition: 1s;
  width: 1.5rem;
  height: 1.5rem;
  cursor: pointer;
  padding: 0.1rem;
  margin-left: 0.2rem;
  background-color: black;
  border-radius: 50%;
  z-index: ${(props) => props.zindex};
  opacity: ${(props) => props.opacity};
`;
