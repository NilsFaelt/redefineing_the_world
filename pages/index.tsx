import type { NextPage } from "next";
import { HomeView } from "../components/Home";
import MainLayout from "../layout/MainLayout";

const Home: NextPage = () => {
  return (
    <MainLayout>
      <HomeView />
    </MainLayout>
  );
};

export default Home;
