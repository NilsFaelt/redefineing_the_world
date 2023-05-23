import type { NextPage } from "next";
import React from "react";
import { ContactView } from "../../components/Contact/views";

import MainLayout from "../../layout/MainLayout";

const index: NextPage = () => {
  return (
    <MainLayout>
      <ContactView />
    </MainLayout>
  );
};

export default index;
