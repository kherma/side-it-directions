import type { FC } from "react";

import { Logo } from "../../components/Logo/Logo";
import { MenuButton } from "../../components/MenuButton/MenuButton";
import { Navbar } from "../../components/Navbar/Navbar";
import { ThemeSwitch } from "../../components/ThemeSwitch/ThemeSwitch";

export const Menu: FC = () => {
  return (
    <div>
      <Logo />
      <Navbar />
      <div>
        <MenuButton />
        <ThemeSwitch />
      </div>
    </div>
  );
};
