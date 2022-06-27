import type { FC } from "react";

import { HiMenu, HiX } from "react-icons/hi";

import type { TMenuButtonProps } from "./types";

export const MenuButton: FC<TMenuButtonProps> = ({
  isNavbarOpen,
  setIsNavbarOpen,
}) => {
  return (
    <button className="text-3xl" onClick={() => setIsNavbarOpen(!isNavbarOpen)}>
      {isNavbarOpen ? <HiX /> : <HiMenu />}
    </button>
  );
};
