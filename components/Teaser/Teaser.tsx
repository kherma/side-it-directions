import { storyblokEditable } from "@storyblok/react";
import type { FC } from "react";

import type { TTeaserProps } from "./types";

export const Teaser: FC<TTeaserProps> = ({ blok }) => (
  <h2 {...storyblokEditable(blok)}>{blok.headline}</h2>
);
