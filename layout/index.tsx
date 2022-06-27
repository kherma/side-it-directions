import type { FC } from "react";

import { Footer } from "./Footer/Footer";
import { Menu } from "./Menu/Menu";
import type { TLayoutProps } from "./types";

export const Layout: FC<TLayoutProps> = ({ children }) => {
  return (
    <div>
      <Menu />
      {children}
      <Footer />
    </div>
  );
};
