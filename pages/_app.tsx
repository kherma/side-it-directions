import "../styles/globals.css";
import { storyblokInit, apiPlugin } from "@storyblok/react";

import type { AppProps } from "next/app";

import { components } from "../components/components";

storyblokInit({
  accessToken: process.env["NEXT_PUBLIC_STORYBLOK_PREVIEW_TOKEN"],
  use: [apiPlugin],
  components,
});

const App = ({ Component, pageProps }: AppProps) => {
  return <Component {...pageProps} />;
};

export default App;
