import type { FC } from "react";

import { useDeviceSize, DeviceSizeVariant } from "@shared/hooks";

import { Logo } from "../../components/Logo/Logo";
import { MenuButton } from "../../components/MenuButton/MenuButton";
import { NavbarDesktop } from "../../components/Navbar/NavbarDesktop";
import { NavbarMobile } from "../../components/Navbar/NavbarMobile";
import { ThemeSwitch } from "../../components/ThemeSwitch/ThemeSwitch";

export const Menu: FC = () => {
  const deviceSize = useDeviceSize();
  return (
    <div>
      <Logo />
      {deviceSize === DeviceSizeVariant.Mobile ? (
        <NavbarMobile />
      ) : (
        <NavbarDesktop />
      )}
      <div>
        <MenuButton />
        <ThemeSwitch />
      </div>
    </div>
  );
};
