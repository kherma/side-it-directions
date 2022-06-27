import type { FC } from "react";

import { NavbarProvider } from "./NavbarProvider";
import { navbarDataDesktop } from "./navbarData/navbarData";

export const NavbarDesktop: FC = () => {
  return (
    <nav className="flex gap-[1rem] justify-center items-center">
      {navbarDataDesktop.map((navbarItem) => (
        <NavbarProvider navbarItem={navbarItem} key={navbarItem.id} />
      ))}
    </nav>
  );
};
