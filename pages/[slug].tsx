import {
  useStoryblokState,
  getStoryblokApi,
  StoryblokComponent,
} from "@storyblok/react";

import type { NextPage, GetStaticPaths, GetStaticProps } from "next";
import Head from "next/head";

import type { TContainerProps } from "@shared/types";
import { slugPaths } from "@shared/utils";

import { Layout } from "../layout";

const Page: NextPage<TContainerProps> = ({ StoryData }) => {
  const story = useStoryblokState(StoryData);

  return (
    <Layout>
      <Head>
        <title>{story ? story.name : "My Site"}</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <header>
        <h1>{story ? story.name : "My Site"}</h1>
      </header>

      <StoryblokComponent blok={story.content} />
    </Layout>
  );
};

export const getStaticPaths: GetStaticPaths = async () => ({
  paths: slugPaths,
  fallback: false,
});

export const getStaticProps: GetStaticProps = async ({
  params,
  preview = false,
}) => {
  const slug = params?.slug ? params.slug : "discover";

  const sbParams = {
    version: "published",
  };

  if (preview) {
    sbParams.version = "draft";
  }

  const storyblokApi = getStoryblokApi();
  const { data: StoryData } = await storyblokApi.get(
    `cdn/stories/${slug}`,
    sbParams
  );

  return {
    props: {
      StoryData: StoryData ? StoryData.story : false,
      key: StoryData ? StoryData.story.id : false,
    },
  };
};

export default Page;
