import type { SbBlokData } from "@storyblok/react";

export type TBlokComponentProps<T> = {
  blok: T & SbBlokData;
};
