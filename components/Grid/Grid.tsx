import { storyblokEditable } from "@storyblok/react";
import type { FC } from "react";

import { Feature } from "./Feature/Feature";
import type { TGridProps } from "./types";

export const Grid: FC<TGridProps> = ({ blok }) => (
  <div {...storyblokEditable(blok)}>
    {blok.columns.map((nestedBlok, index) => (
      <Feature name={nestedBlok.name} key={index} />
    ))}
  </div>
);
