import type { SbBlokData } from "@storyblok/react";

import { TGridProps } from "./Grid/types";
import { TTeaserProps } from "./Teaser/types";

export enum ComponentType {
  Grid = "grid",
  Teaser = "teaser",
  Page = "page",
}

type TBlokComponentPropsMap = {
  [ComponentType.Grid]: TGridProps;
  [ComponentType.Teaser]: TTeaserProps;
};

type TypeValuesUnion<T extends object> = {
  [k in keyof T]: T[k];
}[keyof T];

export type TPageBody = TypeValuesUnion<TBlokComponentPropsMap> & SbBlokData;
