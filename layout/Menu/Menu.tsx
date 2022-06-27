import type { FC } from "react";
import { useState, useEffect } from "react";

import { useDeviceSize, DeviceSizeVariant } from "@shared/hooks";

import { Logo } from "../../components/Logo/Logo";
import { MenuButton } from "../../components/MenuButton/MenuButton";
import { NavbarDesktop } from "../../components/Navbar/NavbarDesktop";
import { NavbarMobile } from "../../components/Navbar/NavbarMobile";

export const Menu: FC = () => {
  const deviceSize = useDeviceSize();
  const [isNavbarOpen, setIsNavbarOpen] = useState(false);

  useEffect(() => {
    if (isNavbarOpen) {
      document.body.classList.add("navbar-open");
    }

    if (!isNavbarOpen) {
      document.body.classList.remove("navbar-open");
    }
    return;
  }, [isNavbarOpen]);

  return (
    <div className="sticky inset-x-0 top-0 bg-white shadow-md">
      <div className="flex justify-between items-center p-4 mx-auto max-w-layout">
        <Logo />
        {deviceSize === DeviceSizeVariant.Desktop ? (
          <NavbarDesktop />
        ) : (
          <>
            {isNavbarOpen && <NavbarMobile />}
            <MenuButton
              isNavbarOpen={isNavbarOpen}
              setIsNavbarOpen={setIsNavbarOpen}
            />
          </>
        )}
      </div>
    </div>
  );
};
