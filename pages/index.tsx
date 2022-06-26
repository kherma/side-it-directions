import {
  useStoryblokState,
  getStoryblokApi,
  StoryblokComponent,
} from "@storyblok/react";

import type { NextPage, GetStaticProps } from "next";
import Head from "next/head";

import type { TContainerProps } from "@shared/types";
import { homePath } from "@shared/utils";

import { Layout } from "../layout";

const Home: NextPage<TContainerProps> = ({ StoryData }) => {
  const story = useStoryblokState(StoryData);

  return (
    <Layout>
      <Head>
        <title>Create Next App</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <StoryblokComponent blok={story.content} />
    </Layout>
  );
};

export const getStaticProps: GetStaticProps = async () => {
  const sbParams = {
    version: "draft",
  };

  const storyblokApi = getStoryblokApi();
  const { data: StoryData } = await storyblokApi.get(
    `cdn/stories/${homePath}`,
    sbParams
  );

  return {
    props: {
      StoryData: StoryData ? StoryData.story : false,
      key: StoryData ? StoryData.story.id : false,
    },
  };
};

export default Home;
