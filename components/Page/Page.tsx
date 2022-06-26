import { storyblokEditable, StoryblokComponent } from "@storyblok/react";
import type { FC } from "react";

import type { TPageProps } from "./types";

export const Page: FC<TPageProps> = ({ blok }) => {
  return (
    <main {...storyblokEditable(blok)}>
      {blok.body.map((nestedBlok) => (
        <StoryblokComponent blok={nestedBlok} key={nestedBlok._uid} />
      ))}
    </main>
  );
};
