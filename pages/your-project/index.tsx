import type { NextPage } from "next";
import React from "react";

import { YourProjectView } from "../../components/YourProject";
import MainLayout from "../../layout/MainLayout";

const index: NextPage = () => {
  return (
    <MainLayout>
      <YourProjectView />
    </MainLayout>
  );
};

export default index;
