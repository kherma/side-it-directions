import { NavbarComponentType } from "../../types";
import type { TNavbarLinkRawData } from "./navbarLink";

export type TNavbarDropdownRawData = {
  component: NavbarComponentType;
  id: string;
  links: TNavbarLinkRawData[];
  displayName: string;
};
