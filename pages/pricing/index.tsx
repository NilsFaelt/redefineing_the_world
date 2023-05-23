import type { NextPage } from "next";
import React from "react";
import { PricingView } from "../../components/Pricing";

import MainLayout from "../../layout/MainLayout";

const index: NextPage = () => {
  return (
    <MainLayout>
      <PricingView />
    </MainLayout>
  );
};

export default index;
