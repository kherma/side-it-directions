import { LinksType } from "@shared/types";

export const getUrlFromType = (linkType: string): string =>
  linkType === LinksType.Discover ? "/" : `/${linkType}`;
