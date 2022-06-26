import { LinksType } from "@shared/types";

import type { TNavbarRawData } from "../navbraRawData/navbraRawData";
import { createNavbarLink, createNavbarDropdown } from "./createNavbarLink";

export const navbarData: TNavbarRawData[] = [
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
