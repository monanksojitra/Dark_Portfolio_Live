import React, { ReactNode } from "react";
import Footer from "./Footer";
import Navbar from "./Navbar";

function MainLayout({ children }: { children: ReactNode }) {
  return (
    <div className="max-w-[1440px] mx-auto">
      <Navbar />
      {children}
      <Footer />
    </div>
  );
}

export default MainLayout;
