import { Grid } from "./Grid/Grid";
import { MetaSeo } from "./MetaSeo/MetaSeo";
import { Page } from "./Page/Page";
import { Teaser } from "./Teaser/Teaser";
import { ComponentType } from "./types";

export const components = {
  [ComponentType.Grid]: Grid,
  [ComponentType.MetaSeo]: MetaSeo,
  [ComponentType.Page]: Page,
  [ComponentType.Teaser]: Teaser,
};
