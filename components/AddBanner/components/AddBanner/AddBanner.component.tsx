import React, { FC } from "react";
import { EachAdd } from "../EachAdd";
import { Container } from "./AddBanner.style";

export const AddBanner: FC = () => {
  return (
    <Container>
      <EachAdd
        text='Why choose fango solutions?'
        url='https://images.unsplash.com/photo-1490730141103-6cac27aaab94?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80'
      />

      <EachAdd
        text='Why choose fango solutions?'
        url='https://images.unsplash.com/photo-1593069567131-53a0614dde1d?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1932&q=80'
      />

      <EachAdd
        text='Why choose fango solutions?'
        url='https://images.unsplash.com/photo-1505816014357-96b5ff457e9a?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1933&q=80'
      />
    </Container>
  );
};
