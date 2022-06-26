import { v4 as uuidv4 } from "uuid";

import { LinksType } from "@shared/types";

import type { TNavbarDropdownRawData } from "../navbraRawData/bloks/navbarDropdown";
import type { TNavbarLinkRawData } from "../navbraRawData/bloks/navbarLink";
import { NavbarComponentType } from "../types";
import { getDisplayNameFromType } from "./getDisplayNameFromType";
import { getUrlFromType } from "./getUrlFromType";

export const createNavbarLink = (linkType: LinksType): TNavbarLinkRawData => ({
  component: NavbarComponentType.NavbarLink,
  url: getUrlFromType(linkType),
  displayName: getDisplayNameFromType(linkType),
  id: uuidv4(),
});

export const createNavbarDropdown = (
  linkTypes: LinksType[]
): TNavbarDropdownRawData => ({
  component: NavbarComponentType.NavbarDropdown,
  links: linkTypes.map((linkType) => createNavbarLink(linkType)),
  displayName: "beyond",
  id: uuidv4(),
});
