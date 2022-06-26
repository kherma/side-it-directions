import {
  useStoryblokState,
  getStoryblokApi,
  StoryblokComponent,
} from "@storyblok/react";

import type { TContainerProps } from "@shared/types";
import type { NextPage, GetStaticProps } from "next";
import Head from "next/head";

const Home: NextPage<TContainerProps> = ({ StoryData }) => {
  const story = useStoryblokState(StoryData);

  return (
    <div>
      <Head>
        <title>Create Next App</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <header>
        <h1>{story ? story.name : "My Site"}</h1>
      </header>

      <StoryblokComponent blok={story.content} />

      <footer>
        <p>Page Footer</p>
      </footer>
    </div>
  );
};

export const getStaticProps: GetStaticProps = async () => {
  const slug = "home";

  const sbParams = {
    version: "draft",
  };

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

export default Home;
