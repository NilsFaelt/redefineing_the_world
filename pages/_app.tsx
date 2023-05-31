import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import type { AppProps } from "next/app";
import { MainContextProvider } from "../context /MainLandingContext";
import { GlobalStyles } from "../styles/GlobalStyles";
import Head from "next/head";
import Link from "next/link";

function MyApp({ Component, pageProps }: AppProps) {
  const queryClient = new QueryClient();
  return (
    <>
      <Head>
        <link rel='icon' href='/logo-favicon.png' type='image/png' />
      </Head>
      <GlobalStyles />
      <MainContextProvider>
        <QueryClientProvider client={queryClient}>
          <Component {...pageProps} />
        </QueryClientProvider>
      </MainContextProvider>
    </>
  );
}

export default MyApp;
