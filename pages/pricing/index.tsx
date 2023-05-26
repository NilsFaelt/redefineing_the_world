import type { NextPage } from "next";
import Head from "next/head";
import React from "react";
import { PricingView } from "../../components/pricing";

import MainLayout from "../../layout/MainLayout";

const index: NextPage = () => {
  return (
    <MainLayout>
      <Head>
        <title>
          Prices and Get Price from AI | https://fangosolutions.com/pricing
        </title>
        <meta
          name='description'
          content='Explore our pricing options and discover how AI can provide accurate and competitive pricing for your business needs.'
        />
        <meta
          name='keywords'
          content='prices, AI pricing, business pricing, competitive pricing'
        />
        <meta
          property='og:title'
          content='Prices and Get Price from AI | Fangosolutions'
        />
        <meta
          property='og:description'
          content='Explore our pricing options and discover how AI can provide accurate and competitive pricing for your business needs.'
        />
        <meta property='og:type' content='website' />
        <meta property='og:url' content='https://fangosolutions.com/pricing' />
      </Head>

      <PricingView />
    </MainLayout>
  );
};

export default index;
