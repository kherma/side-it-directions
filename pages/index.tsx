import {
  useStoryblokState,
  getStoryblokApi,
  StoryblokComponent,
  StoryData,
} from "@storyblok/react";

import type { NextPage, GetStaticProps } from "next";
import Head from "next/head";

type TPageProps = {
  story: StoryData;
};

const Home: NextPage<TPageProps> = ({ story }) => {
  story = useStoryblokState(story);

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
  const { data } = await storyblokApi.get(`cdn/stories/${slug}`, sbParams);

  return {
    props: {
      story: data ? data.story : false,
      key: data ? data.story.id : false,
    },
  };
};

export default Home;
