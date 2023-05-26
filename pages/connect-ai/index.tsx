import type { NextPage } from "next";
import Head from "next/head";
import React from "react";
import { ConnectAi } from "../../components/ConnectAi";

import MainLayout from "../../layout/MainLayout";

const index: NextPage = () => {
  return (
    <MainLayout>
      <Head>
        <title>Why Implement AI? | https://fangosolutions.com/connect-ai</title>
        <meta
          name='description'
          content='Discover the benefits of implementing AI in your business. Find out how AI can streamline processes, improve decision-making, and enhance customer experiences.'
        />
        <meta
          name='keywords'
          content='AI implementation, benefits of AI, business AI, AI advantages'
        />
        <meta
          property='og:title'
          content='Why Implement AI? | Fangosolutions'
        />
        <meta
          property='og:description'
          content='Discover the benefits of implementing AI in your business. Find out how AI can streamline processes, improve decision-making, and enhance customer experiences.'
        />
        <meta property='og:type' content='website' />
        <meta
          property='og:url'
          content='https://fangosolutions.com/connect-ai'
        />
      </Head>

      <ConnectAi />
    </MainLayout>
  );
};

export default index;
