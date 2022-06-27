import { LinksType } from "@shared/types";

import type { TNavbarLinkRawData } from "../navbraRawData/bloks/navbarLink";
import type { TNavbarRawData } from "../navbraRawData/navbraRawData";
import { createNavbarLink, createNavbarDropdown } from "./createNavbarLink";

export const navbarDataDesktop: TNavbarRawData[] = [
  createNavbarLink(LinksType.Productivity),
  createNavbarLink(LinksType.Industry),
  createNavbarLink(LinksType.Technologies),
  createNavbarLink(LinksType.Foundation),
  createNavbarDropdown([
    LinksType.ComputerScience,
    LinksType.Design,
    LinksType.Frontend,
  ]),
  createNavbarLink(LinksType.Resources),
];

export const navbarDataMobile: TNavbarLinkRawData[] = [
  createNavbarLink(LinksType.Productivity),
  createNavbarLink(LinksType.Industry),
  createNavbarLink(LinksType.Technologies),
  createNavbarLink(LinksType.Foundation),
  createNavbarLink(LinksType.ComputerScience),
  createNavbarLink(LinksType.Design),
  createNavbarLink(LinksType.Frontend),
  createNavbarLink(LinksType.Resources),
];
