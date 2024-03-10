import React from "react";
import { MFooter, Header } from "../components/layout";
export const MainLayout = ({ children }) => {
  return (
    <div>
      <Header />
      {children}
      <MFooter />
    </div>
  );
};
