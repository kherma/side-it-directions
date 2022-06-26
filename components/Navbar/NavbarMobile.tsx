import type { FC } from "react";

import { NavbarButton } from "./navbarBloks/NavbarButton/NavbarButton";
import { NavbarMobileLink } from "./navbarBloks/NavbarMobileLink/NavbarMobileLink";
import { navbarDataMobile } from "./navbarData/navbarData";

export const NavbarMobile: FC = () => {
  return (
    <div>
      <NavbarButton />
      <nav>
        {navbarDataMobile.map(({ displayName, url, id }) => (
          <NavbarMobileLink displayName={displayName} url={url} key={id} />
        ))}
      </nav>
    </div>
  );
};
