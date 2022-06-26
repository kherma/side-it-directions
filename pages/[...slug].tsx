import type { StoryData } from "@storyblok/react";
import {
  useStoryblokState,
  getStoryblokApi,
  StoryblokComponent,
} from "@storyblok/react";

import type { NextPage, GetStaticPaths, GetStaticProps } from "next";
import Head from "next/head";

type TPageProps = {
  story: StoryData;
};

type TPath = {
  params: {
    slug: string[];
  };
};

const Page: NextPage<TPageProps> = ({ story }) => {
  story = useStoryblokState(story);

  return (
    <div>
      <Head>
        <title>{story ? story.name : "My Site"}</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <header>
        <h1>{story ? story.name : "My Site"}</h1>
      </header>

      <StoryblokComponent blok={story.content} />
    </div>
  );
};

export const getStaticPaths: GetStaticPaths = async () => {
  const storyblokApi = getStoryblokApi();
  const { data } = await storyblokApi.get("cdn/links/");

  const paths: TPath[] = [];
  Object.keys(data.links).forEach((linkKey) => {
    if (data.links[linkKey].is_folder || data.links[linkKey].slug === "home") {
      return;
    }

    const slug = data.links[linkKey].slug;
    const splittedSlug = slug.split("/");

    paths.push({ params: { slug: splittedSlug } });
  });

  return {
    paths: paths,
    fallback: false,
  };
};

export const getStaticProps: GetStaticProps = async ({
  params,
  preview = false,
}) => {
  const slug =
    Array.isArray(params?.slug) && params?.slug
      ? params.slug.join("/")
      : "home";

  const sbParams = {
    version: "published",
  };

  if (preview) {
    sbParams.version = "draft";
  }

  const storyblokApi = getStoryblokApi();
  const { data } = await storyblokApi.get(`cdn/stories/${slug}`, sbParams);

  return {
    props: {
      story: data ? data.story : false,
      key: data ? data.story.id : false,
    },
  };
};

export default Page;
