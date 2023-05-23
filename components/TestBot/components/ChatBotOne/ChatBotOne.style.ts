import Image from "next/image";
import styled, { keyframes } from "styled-components";

interface ContainerProps {
  border: string;
}
interface ImageProps {
  opacity: number;
  zIndex: number;
}
interface TextAreaProps {
  opacity: number;
  zIndex: number;
}
interface CloseProps {
  opacity: number;
  zIndex: number;
}

export const Container = styled.div<ContainerProps>`
  position: relative;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 1rem;
  margin-top: 18rem;
  padding: 1rem;
  border-radius: 1rem;
  border: ${(props) => props.border};
  transition: 1s;
`;
export const ChatContainer = styled.div`
  margin-top: 20rem;
`;
export const TextArea = styled.div<TextAreaProps>`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: flex-start;
  width: 15.2rem;
  height: 15rem;
  background-color: white;
  border-radius: 1rem;
  z-index: ${(props) => props.zIndex};
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
export const ChatTextAndBotContainer = styled.div`
  display: flex;
  flex-direction: row;
  margin-left: 0.1rem;
  margin-top: 0.5rem;
  font-size: 0.8rem;
`;
export const Close = styled.text<CloseProps>`
  color: white;
  position: absolute;
  left: 0.2rem;
  top: -1.5rem;
  cursor: pointer;
  z-index: ${(props) => props.zIndex};
  opacity: ${(props) => props.opacity};
`;

export const ImageStyle = styled(Image)<ImageProps>`
  width: 5rem;
  height: 5rem;
  cursor: pointer;
  z-index: ${(props) => props.zIndex};
  opacity: ${(props) => props.opacity};
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
  z-index: ${(props) => props.zIndex};
  opacity: ${(props) => props.opacity};
`;
