import type { FC } from "react";

import { NavbarLink } from "../NavbarLink/NavbarLink";
import type { TNavbarDropdownProps } from "./types";

export const NavbarDropdown: FC<TNavbarDropdownProps> = ({
  displayName,
  links,
}) => {
  return (
    <div>
      <button>{displayName}</button>
      <ul>
        {links.map((navbarLink) => (
          <NavbarLink key={navbarLink.id} {...navbarLink} />
        ))}
      </ul>
    </div>
  );
};
