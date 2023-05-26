import type { NextPage } from "next";
import Head from "next/head";
import React from "react";
import { AskMeView } from "../../components/AskMe";
import MainLayout from "../../layout/MainLayout";

const index: NextPage = () => {
  return (
    <MainLayout>
      <Head>
        <title>
          Ask for Help - Your AI Assistance | https://fangosolutions.com/ask-me
        </title>
        <meta
          name='description'
          content='Get help by asking our AI assistant for guidance and solutions. Find answers to your questions and receive personalized assistance.'
        />
        <meta
          name='keywords'
          content='help, AI assistant, questions, guidance, solutions'
        />
        <meta
          property='og:title'
          content='Ask for Help - Your AI Assistance | MyWebsite'
        />
        <meta
          property='og:description'
          content='Get help by asking our AI assistant for guidance and solutions. Find answers to your questions and receive personalized assistance.'
        />
        <meta property='og:type' content='website' />
        <meta property='og:url' content='https://fangosolutions.com/ask-me' />
      </Head>
      <AskMeView />
    </MainLayout>
  );
};

export default index;
