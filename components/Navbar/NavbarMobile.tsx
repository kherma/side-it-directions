import type { FC } from "react";

import { NavbarMobileLink } from "./navbarBloks/NavbarMobileLink/NavbarMobileLink";
import { navbarDataMobile } from "./navbarData/navbarData";

export const NavbarMobile: FC = () => (
  <nav className="flex absolute top-full left-0 flex-col px-[1rem] w-full h-screen bg-gray-100 sm:px-[2rem]">
    {navbarDataMobile.map(({ displayName, url, id }) => (
      <NavbarMobileLink displayName={displayName} url={url} key={id} />
    ))}
  </nav>
);
