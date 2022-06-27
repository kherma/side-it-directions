import type { FC } from "react";

import Link from "next/link";

import type { TNavbarLinkProps } from "./types";

export const NavbarLink: FC<TNavbarLinkProps> = ({ displayName, url }) => {
  return (
    <Link href={url}>
      <a className="p-2 font-semibold capitalize hover:bg-stone-200 rounded">
        {displayName}
      </a>
    </Link>
  );
};
