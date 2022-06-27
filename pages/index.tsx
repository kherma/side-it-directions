import {
  useStoryblokState,
  getStoryblokApi,
  StoryblokComponent,
} from "@storyblok/react";

import type { NextPage, GetStaticProps } from "next";

import type { TContainerProps } from "@shared/types";
import { homePath } from "@shared/utils";

import { Layout } from "../layout";

const Home: NextPage<TContainerProps> = ({ StoryData }) => {
  const story = useStoryblokState(StoryData);

  return (
    <Layout>
      <StoryblokComponent blok={story.content} />
    </Layout>
  );
};

export const getStaticProps: GetStaticProps = async ({ preview = false }) => {
  const sbParams = {
    version: "published",
  };

  if (preview) {
    sbParams.version = "draft";
  }

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
