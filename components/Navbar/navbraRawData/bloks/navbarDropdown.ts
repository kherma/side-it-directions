import type { TNavbarBlok } from "../navbraRawData";
import type { TNavbarLinkRawData } from "./navbarLink";

export type TNavbarDropdownRawData = {
  links: TNavbarLinkRawData[];
  displayName: string;
} & TNavbarBlok;
