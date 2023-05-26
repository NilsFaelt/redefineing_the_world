import type { NextPage } from "next";
import Head from "next/head";
import React from "react";
import { ContactView } from "../../components/contact/views";

import MainLayout from "../../layout/MainLayout";

const index: NextPage = () => {
  return (
    <MainLayout>
      <Head>
        <title>Contact Us | https://fangosolutions.com/contact</title>
        <meta
          name='description'
          content='Get in touch with us for inquiries, support, or any other questions. We are here to assist you!'
        />
        <meta
          name='keywords'
          content='contact us, support, inquiries, questions'
        />
        <meta property='og:title' content='Contact Us | Fangosolutions' />
        <meta
          property='og:description'
          content='Get in touch with us for inquiries, support, or any other questions. We are here to assist you!'
        />
        <meta property='og:type' content='website' />
        <meta property='og:url' content='https://fangosolutions.com/contact' />
      </Head>

      <ContactView />
    </MainLayout>
  );
};

export default index;
