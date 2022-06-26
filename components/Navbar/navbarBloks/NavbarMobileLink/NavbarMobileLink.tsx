import type { FC } from "react";

import { useRouter } from "next/router";

import type { TNavbarMobileLinkProps } from "./types";

export const NavbarMobileLink: FC<TNavbarMobileLinkProps> = ({
  displayName,
  url,
}) => {
  const router = useRouter();
  const onLinkClick = (): void => {
    router.push(url);
  };
  return <button onClick={onLinkClick}>{displayName}</button>;
};
