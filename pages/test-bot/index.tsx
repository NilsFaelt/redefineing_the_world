import { NextPage } from "next";
import Head from "next/head";
import React from "react";
import { TestBotView } from "../../components/TestBot";

const index: NextPage = () => {
  return (
    <>
      <Head>
        <title>
          Test Chatbot and Customer Service |
          https://fangosolutions.com/test-bot
        </title>
        <meta
          name='description'
          content='Experience our chatbot and customer service testing platform. Evaluate the performance and capabilities of our AI-powered chatbot for your business needs.'
        />
        <meta
          name='keywords'
          content='chatbot testing, customer service testing, AI chatbot, chatbot evaluation'
        />
        <meta
          property='og:title'
          content='Test Chatbot and Customer Service | Fangosolutions'
        />
        <meta
          property='og:description'
          content='Experience our chatbot and customer service testing platform. Evaluate the performance and capabilities of our AI-powered chatbot for your business needs.'
        />
        <meta property='og:type' content='website' />
        <meta property='og:url' content='https://fangosolutions.com/test-bot' />
      </Head>
      <TestBotView />
    </>
  );
};

export default index;
