import type { NextPage } from "next";
import Head from "next/head";
import React from "react";

import { YourProjectView } from "../../components/YourProject";
import MainLayout from "../../layout/MainLayout";

const index: NextPage = () => {
  return (
    <MainLayout>
      <Head>
        <title>
          Ask About Creating a Project with AI |
          https://fangosolutions.com/your-project
        </title>
        <meta
          name='description'
          content='Ask our experts about creating a project with AI. Get insights, guidance, and personalized recommendations for leveraging AI in your projects.'
        />
        <meta
          name='keywords'
          content='AI project, project with AI, AI development, AI implementation'
        />
        <meta
          property='og:title'
          content='Ask About Creating a Project with AI | Fangosolutions'
        />
        <meta
          property='og:description'
          content='Ask our experts about creating a project with AI. Get insights, guidance, and personalized recommendations for leveraging AI in your projects.'
        />
        <meta property='og:type' content='website' />
        <meta
          property='og:url'
          content='https://fangosolutions.com/your-project'
        />
      </Head>
      <YourProjectView />
    </MainLayout>
  );
};

export default index;
