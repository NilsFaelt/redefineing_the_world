import React, { FC, ReactNode } from "react";
import { Footer } from "../components/Footer/Footer.component";
import { Header } from "../components/Header";

type MainLayoutProps = {
  children: ReactNode;
};

const MainLayout: FC<MainLayoutProps> = ({ children }) => {
  return (
    <div>
      <Header />
      {children}
      <Footer />
    </div>
  );
};

export default MainLayout;
