import type { Dispatch, SetStateAction } from "react";

export type TMenuButtonProps = {
  isNavbarOpen: boolean;
  setIsNavbarOpen: Dispatch<SetStateAction<boolean>>;
};
