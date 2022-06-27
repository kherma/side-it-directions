import {
  useStoryblokState,
  getStoryblokApi,
  StoryblokComponent,
} from "@storyblok/react";

import type { NextPage, GetStaticProps } from "next";
import { NextSeo } from "next-seo";

import type { TContainerProps } from "@shared/types";
import { homePath } from "@shared/utils";

import { Layout } from "../layout";

const Home: NextPage<TContainerProps> = ({ StoryData }) => {
  const story = useStoryblokState(StoryData);

  const { meta_seo, og_image, og_url } = story.content;

  return (
    <Layout>
      <NextSeo
        title={meta_seo.title}
        description={meta_seo.description}
        openGraph={{
          url: `https://itdirections.vercel.app/${og_url.cached_url}`,
          title: "Open Graph Title",
          description: "Open Graph Description",
          images: [
            {
              url: og_image.filename,
              width: 800,
              height: 600,
              alt: og_image.alt,
              type: "image/png",
            },
          ],
          site_name: "IT Directions",
        }}
        twitter={{
          handle: "@handle",
          site: "@site",
          cardType: "summary_large_image",
        }}
      />
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
