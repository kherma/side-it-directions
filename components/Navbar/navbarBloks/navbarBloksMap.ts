import { NavbarComponentType } from "../types";
import { NavbarDropdown } from "./NavbarDropdown/NavbarDropdown";
import { NavbarLink } from "./NavbarLink/NavbarLink";

export const navbarBloksMap = {
  [NavbarComponentType.NavbarLink]: NavbarLink,
  [NavbarComponentType.NavbarDropdown]: NavbarDropdown,
};
