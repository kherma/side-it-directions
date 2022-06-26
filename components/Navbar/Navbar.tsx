import type { FC } from "react";

import { NavbarProvider } from "./NavbarProvider";
import { navbarData } from "./navbarData/navbarData";

export const Navbar: FC = () => {
  return (
    <nav>
      {navbarData.map((navbarItem) => (
        <NavbarProvider navbarItem={navbarItem} key={navbarItem.id} />
      ))}
    </nav>
  );
};
