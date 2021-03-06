import "../styles/globals.css";
import { storyblokInit, apiPlugin } from "@storyblok/react";
import type { ReactNode } from "react";

import { DefaultSeo } from "next-seo";
import type { AppProps } from "next/app";
import Head from "next/head";

import { components } from "../bloks/components";
import { SEO } from "../next-seo.config";

storyblokInit({
  accessToken: process.env["NEXT_PUBLIC_STORYBLOK_PREVIEW_TOKEN"],
  use: [apiPlugin],
  components,
});

const App = ({ Component, pageProps }: AppProps): ReactNode => (
  <>
    <Head>
      <meta name="viewport" content="width=device-width, initial-scale=1" />
    </Head>
    <DefaultSeo {...SEO} />
    <Component {...pageProps} />
  </>
);

export default App;
