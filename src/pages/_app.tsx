import { GeistSans } from "geist/font/sans";
import { type AppType } from "next/app";
import clsx from "clsx";

import "~/styles/globals.css";
import GlobalLayout from "~/components/GlobalLayout";
import Head from "next/head";
import { HeroUIProvider } from "@heroui/react";
import { FilterProvider } from "~/context/filterContext";

const App: AppType = ({ Component, pageProps }) => {
  return (
    <>
      <Head>
        <title>Sale Management</title>
        <meta name="description" content="Gestor de ventas" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <HeroUIProvider>
        <div className={clsx(GeistSans.className)}>
          <FilterProvider>
            <GlobalLayout>
              <Component {...pageProps} />
            </GlobalLayout>
          </FilterProvider>
        </div>
      </HeroUIProvider>
    </>
  );
};

export default App;
