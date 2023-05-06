import type { NextPage } from "next";
import { HomeView } from "../components/Home";
import MainLayout from "../layout/MainLayout";

const index: NextPage = () => {
  return (
    <MainLayout>
      <HomeView />
    </MainLayout>
  );
};

export default index;
