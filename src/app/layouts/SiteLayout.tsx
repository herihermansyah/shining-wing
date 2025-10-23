import Footer from "@/components/layouts/Footer";
import Header from "@/components/layouts/Header";
import React from "react";

function SiteLayout({children}: Readonly<{children: React.ReactNode}>) {
  return (
    <div className="flex flex-col min-h-screen">
      <header className="sticky top-0 z-50">
        <Header />
      </header>
      <main className="flex-1">
        {children}
        <div className="bg-footer mt-10">
          <Footer />
        </div>
      </main>
    </div>
  );
}

export default SiteLayout;
