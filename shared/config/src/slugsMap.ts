import { LinksType } from "../../types/index";

export const slugsOrder: LinksType[] = [
  LinksType.Discover,
  LinksType.Productivity,
  LinksType.Industry,
  LinksType.Technologies,
  LinksType.Foundation,
  LinksType.ComputerScience,
  LinksType.Design,
  LinksType.Frontend,
  LinksType.Resources,
];

type TNavigationConfigItem = {
  sbSlug: string;
  isHomePage: boolean;
};

export const slugsMap: TNavigationConfigItem[] = slugsOrder.map((linkType) => ({
  sbSlug: linkType,
  isHomePage: linkType === LinksType.Discover ? true : false,
}));
