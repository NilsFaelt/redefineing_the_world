import type { NextPage } from "next";
import React from "react";
import { ConnectAi } from "../../components/ConnectAi";

import MainLayout from "../../layout/MainLayout";

const index: NextPage = () => {
  return (
    <MainLayout>
      <ConnectAi />
    </MainLayout>
  );
};

export default index;
