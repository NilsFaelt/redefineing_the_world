import React, { FC, ReactNode } from "react";
import { CompanyGuideLines } from "../chatBotInfo";
import { Footer } from "../components/Footer/Footer.component";
import { Header } from "../components/Header";
import { ChatBotOne } from "../components/TestBot";

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
