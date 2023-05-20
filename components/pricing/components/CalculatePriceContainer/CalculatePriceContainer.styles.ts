import styled from "styled-components";
import Theme from "../../../../styles/Theme";

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justiify-content: center;
  position: absolute;
  z-index: 2;
  top: 80%;
  left: 50%;
  transform: translate(-50%, -50%);
  border: ${Theme.width.borders} solid white;
  border-radius: 1rem;
  width: clamp(20rem, 30rem, 100rem);
  min-height: 10rem;
  background-color: rgba(0, 0, 0, 1);
  box-shadow: 1rem 1rem 1rem;
  padding-top: 1rem;
  padding-bottom: 4rem;
  box-sizeing: border-box;
  @media (max-width: 600px) {
    width: 90%;
  }
`;
export const Title = styled.h2`
  font-size: 0.9rem;
  color: white;
`;
export const Text = styled.h2`
  margin-top: 2rem;
  font-size: 0.7rem;
  max-width: 18rem;
  color: white;
`;
export const ClicableTextButton = styled.button`
  color: white;
  background-color: black;
  border: none;
  border-bottom: 0.05rem solid white;
  cursor: pointer;
  &:hover {
    transition: 0.5s;
    border-bottom: 0.05rem solid purple;
  }
`;
export const EachQuestionContainer = styled.div`
  bottom: 1rem;
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 1rem;
  background-color: ;
`;
export const ToogleButtonContainer = styled.div`
  position: absolute;
  bottom: 1rem;
  width: 100%;
  display: flex;
  flex-direction: row;
  justify-content: space-around;
  background-color: ;
`;
export const ToogleButton = styled.button`
  color: white;
  background-color: black;
  border: none;
  border-bottom: 0.05rem solid white;
  cursor: pointer;
  &:hover {
    transition: 0.5s;
    border-bottom: 0.05rem solid purple;
  }
`;
