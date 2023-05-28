import React, { FC } from "react";
import { EachAdd } from "../EachAdd";
import { Container } from "./AddBanner.style";

export const AddBanner: FC = () => {
  return (
    <Container>
      <EachAdd
        infoText="Development is not just work for us; it's a fusion of passion and love. It's the exhilarating journey of creating something meaningful and impactful. We pour our hearts and souls into every line of code, embracing challenges and finding joy in solving them. Development is our art, fueled by passion and driven by love."
        text='Why choose fango solutions?'
        url='https://images.unsplash.com/photo-1490730141103-6cac27aaab94?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80'
      />

      <EachAdd
        text='We strive for a green future'
        infoText='We believe in shaping a green future, which is why we commit to giving 15% of our earnings to charitable causes. By supporting initiatives focused on sustainability, renewable energy, and environmental conservation, we contribute to creating a better world for generations to come. Together, we can make a lasting impact towards a greener future.'
        url='https://images.unsplash.com/photo-1593069567131-53a0614dde1d?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1932&q=80'
      />

      <EachAdd
        text='Lets shape the future together.'
        infoText='Together, we create magic and make something good for the world. Our collaborative efforts harness innovation and creativity to bring about positive change. With every step forward, we leave a lasting impact and inspire others to join our mission. Together, we have the power to transform lives, communities, and the planet. Lets continue to create a brighter future, hand in hand.'
        url='https://images.unsplash.com/photo-1505816014357-96b5ff457e9a?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1933&q=80'
      />
    </Container>
  );
};
