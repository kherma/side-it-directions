import { Grid } from "./Grid/Grid";
import { Page } from "./Page/Page";
import { Teaser } from "./Teaser/Teaser";
import { ComponentType } from "./types";

export const components = {
  [ComponentType.Page]: Page,
  [ComponentType.Grid]: Grid,
  [ComponentType.Teaser]: Teaser,
};
