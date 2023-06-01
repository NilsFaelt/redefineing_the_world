import styled from "styled-components";
import { Theme } from "../../../../../../styles";

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  background-color: white;
  background-image: url("https://images.unsplash.com/photo-1655720035861-ba4fd21a598d?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1160&q=80");
  object-fit: cover;
`;
export const UpperWrapper = styled.div`
  width: 100%;
  margin-top: 5rem;
  display: flex;
  justify-content: space-around;
  flex-wrap: wrap;
`;
export const PersonaBotContainer = styled.div`
  display: flex;
  flex: 1;
  flex-direction: column;
  justify-content: flex-start;
  align-items: center;
  gap: 1rem;
  height: fit-content;
  border: white 0.05rem solid;
  padding: 2rem;
  padding-top: 1rem;
  margin: 1rem;
  border-radius: 0.5rem;
  background-color: rgba(0, 0, 0, 0.7);
  box-shadow: 1rem 1rem 1rem;
`;
export const BackgroundInfoContainer = styled.div`
  height: 100%;
  width: 92%;
  display: flex;
  flex: 1;
  flex-direction: column;
  justify-content: flex-start;
  align-self: center;
  align-items: center;
  box-sizing: content-box;
  border: white 0.05rem solid;
  margin: 1rem;
  border-radius: 0.5rem;
  padding-bottom: 2rem;
  background-color: rgba(0, 0, 0, 0.7);
  box-shadow: 1rem 1rem 1rem;
`;
export const TextArea = styled.textarea`
  width: 90%;
  height: 90%;
  min-height: 5rem;
  display: flex;
  font-size: 1rem;
  border-radius: 1rem;
  &::placeholder {
    text-align: center;
  }
`;
