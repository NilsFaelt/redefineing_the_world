import styled from "styled-components";
import Theme from "../../../../styles/Theme";

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justiify-content: center;
  position: absolute;
  top: 80%;
  left: 50%;
  transform: translate(-50%, -50%);
  text-align: center;
  border: ${Theme.width.borders} solid white;
  border-radius: 1rem;
  width: 30rem;
  background-color: rgba(0, 0, 0, 1);
  box-shadow: 1rem 1rem 1rem;
  padding-bottom: 2rem;
  padding: 2rem;
  box-sizeing: border-box;
  z-index: 2;
  scale: 0.8;
  margin-left: -3rem;
  @media (max-width: 600px) {
    width: 80%;
    margin-left: 0rem;
    scale: 1;
  }
`;
export const InnerContainer = styled.form`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 1rem;
`;
export const Title = styled.h2`
  font-size: 0.9rem;
  color: white;
`;
export const Text = styled.h2`
  font-size: 0.8rem;
  max-width: 20rem;
  color: white;
  font-family: serif;
`;
export const ClicableTextButton = styled.button`
  color: white;
  background-color: black;
  border: none;
  border-bottom: 0.05rem solid white;
  cursor: pointer;
  margin-top: 2rem;
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
export const MailLink = styled.a`
  color: white;
  tex-decoration: underline 0.05rem solid;
`;
export const Close = styled.p`
  position: absolute;
  top: 0rem;
  left: 1rem;
  color: white;
  border: none;
  border-bottom: 0.05rem solid white;
  cursor: pointer;
  &:hover {
    transition: 0.5s;
    border-bottom: 0.05rem solid purple;
  }
`;
