import Image from "next/image";
import styled from "styled-components";

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
  margin-top: 20rem;
  padding: 1rem;
  border-radius: 1rem;
  border: ${(props) => props.border};
  transition: 1s;
`;
export const ChatContainer = styled.div`
  margin-top: 20rem;
`;
export const TextArea = styled.div<TextAreaProps>`
  width: 100%;
  height: 15rem;
  background-color: white;
  border-radius: 1rem;
  z-index: ${(props) => props.zIndex};
  opacity: ${(props) => props.opacity};
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
  transition: 1s;
  width: 5rem;
  height: 5rem;
  cursor: pointer;
  z-index: ${(props) => props.zIndex};
  opacity: ${(props) => props.opacity};
`;
