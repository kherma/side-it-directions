import { slugsMap } from "@shared/config";

export const homePath = slugsMap.find(({ isHomePage }) => isHomePage)?.sbSlug;

export const slugPaths = slugsMap
  .filter(({ isHomePage }) => !isHomePage)
  .map(({ sbSlug: slug }) => ({
    params: {
      slug,
    },
  }));
