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

  return (
    <button
      disabled={router.asPath === url}
      className="px-[.5rem] pt-[1rem] pb-1 text-xl font-bold text-left disabled:text-neutral-400 uppercase border-b border-b-neutral-500 sm:pt-[1.2rem] sm:text-3xl"
      onClick={onLinkClick}
    >
      {displayName}
    </button>
  );
};
