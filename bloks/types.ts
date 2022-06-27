import type { SbBlokData } from "@storyblok/react";

import { TGridProps } from "./Grid/types";
import { TMetaSeoProps } from "./MetaSeo/types";
import { TTeaserProps } from "./Teaser/types";

export enum ComponentType {
  Grid = "grid",
  Teaser = "teaser",
  Page = "page",
  MetaSeo = "meta-seo",
}

type TBlokComponentPropsMap = {
  [ComponentType.Grid]: TGridProps;
  [ComponentType.Teaser]: TTeaserProps;
  [ComponentType.MetaSeo]: TMetaSeoProps;
};

type TypeValuesUnion<T extends object> = {
  [k in keyof T]: T[k];
}[keyof T];

export type TPageBody = TypeValuesUnion<TBlokComponentPropsMap> & SbBlokData;
