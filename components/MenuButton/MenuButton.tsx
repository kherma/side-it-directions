import type { FC } from "react";

import { BiMenu } from "react-icons/bi";

import type { TMenuButtonProps } from "./types";

export const MenuButton: FC<TMenuButtonProps> = ({
  isNavbarOpen,
  setIsNavbarOpen,
}) => {
  return (
    <button onClick={() => setIsNavbarOpen(!isNavbarOpen)}>MenuButton</button>
  );
};
