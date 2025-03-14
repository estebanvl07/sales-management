import React from "react";
import Header from "./Header";

const GlobalLayout = ({ children }: { children: React.ReactNode }) => {
  return (
    <div className="min-h-screen bg-slate-50 dark:bg-slate-900">
      <Header />
      <main className="container mx-auto py-4">{children}</main>
    </div>
  );
};

export default GlobalLayout;
