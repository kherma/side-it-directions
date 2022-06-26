import type { ReactElement, FC } from "react";

import { NavbarDropdown } from "./navbarBloks/NavbarDropdown/NavbarDropdown";
import { NavbarLink } from "./navbarBloks/NavbarLink/NavbarLink";
import type { TNavbarDropdownRawData } from "./navbraRawData/bloks/navbarDropdown";
import type { TNavbarLinkRawData } from "./navbraRawData/bloks/navbarLink";
import type { TNavbarRawData } from "./navbraRawData/navbraRawData";
import { NavbarComponentType } from "./types";

type TNavbarProviderProps = {
  navbarItem: TNavbarRawData;
};

export const NavbarProvider: FC<TNavbarProviderProps> = ({
  navbarItem,
}): ReactElement => {
  switch (navbarItem.component) {
    case NavbarComponentType.NavbarLink:
      return <NavbarLink {...(navbarItem as TNavbarLinkRawData)} />;
    case NavbarComponentType.NavbarDropdown:
      return <NavbarDropdown {...(navbarItem as TNavbarDropdownRawData)} />;
    default:
      return <p className="text-red-500">Failed to find components or props</p>;
  }
};
