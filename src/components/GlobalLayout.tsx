import React from "react";
import Header from "./Header";

const GlobalLayout = ({ children }: { children: React.ReactNode }) => {
  return (
    <div className="min-h-screen bg-slate-50 dark:bg-slate-900">
      <Header />
      <main className="mx-auto max-w-[80rem] px-4 py-4 xl:px-0">
        {children}
      </main>
    </div>
  );
};

export default GlobalLayout;
