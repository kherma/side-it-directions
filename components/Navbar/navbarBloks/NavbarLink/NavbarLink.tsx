import type { FC } from "react";

import Link from "next/link";

import type { TNavbarLinkProps } from "./types";

export const NavbarLink: FC<TNavbarLinkProps> = ({ displayName, url }) => {
  return (
    <Link href={url}>
      <a>{displayName}</a>
    </Link>
  );
};
