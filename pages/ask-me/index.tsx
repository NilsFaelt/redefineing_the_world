import type { NextPage } from "next";
import React from "react";
import { AskMeView } from "../../components/AskMe";
import MainLayout from "../../layout/MainLayout";

const index: NextPage = () => {
  return (
    <MainLayout>
      <AskMeView />
    </MainLayout>
  );
};

export default index;
