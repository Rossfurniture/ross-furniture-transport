import type { ReactNode } from "react";

import Footer from "./Footer";
import Header from "./Header";

import "./PageLayout.css";

type PageLayoutProps = {
  children: ReactNode;
};

export default function PageLayout({
  children,
}: PageLayoutProps) {
  return (
    <>
      <Header />

      <main className="ross-page-layout-main">
        {children}
      </main>

      <Footer />
    </>
  );
}