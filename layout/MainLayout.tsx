import React, { FC, ReactNode } from "react";
import { CompanyGuideLines } from "../constants/ChatBotInfo";
import { Footer } from "../components/Footer/Footer.component";
import { Header } from "../components/Header";
import { ChatBotOne } from "../components/TestBot";
import Head from "next/head";
import Link from "next/link";

type MainLayoutProps = {
  children: ReactNode;
};

const MainLayout: FC<MainLayoutProps> = ({ children }) => {
  return (
    <div>
      <Header />
      {children}
      <ChatBotOne companyGudlines={CompanyGuideLines} />
      <Footer />
    </div>
  );
};

export default MainLayout;
