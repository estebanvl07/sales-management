import { GeistSans } from "geist/font/sans";
import { type AppType } from "next/app";
import clsx from "clsx";

import { api } from "~/utils/api";

import "~/styles/globals.css";
import GlobalLayout from "~/components/GlobalLayout";
import Head from "next/head";
import { HeroUIProvider } from "@heroui/react";

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
          <GlobalLayout>
            <Component {...pageProps} />
          </GlobalLayout>
        </div>
      </HeroUIProvider>
    </>
  );
};

export default api.withTRPC(App);
