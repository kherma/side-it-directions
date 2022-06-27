import type { TNavbarRawData } from "./navbraRawData/navbraRawData";

export enum NavbarComponentType {
  NavbarLink = "navbar-link",
  NavbarDropdown = "navbar-dropdown",
}

export type TNavbarProviderProps = {
  navbarItem: TNavbarRawData;
};
