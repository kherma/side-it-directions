import { NavbarComponentType } from "../types";
import type { TNavbarDropdownRawData } from "./bloks/navbarDropdown";
import type { TNavbarLinkRawData } from "./bloks/navbarLink";

export type TNavbarBlok = {
  component: NavbarComponentType;
  id: string;
};

export type TNavbarRawData = TNavbarLinkRawData | TNavbarDropdownRawData;
