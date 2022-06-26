import type { FC } from "react";

import { Footer } from "./Footer/Footer";
import { Navigation } from "./Navigation/Navigation";
import type { TLayoutProps } from "./types";

export const Layout: FC<TLayoutProps> = ({ children }) => (
  <div>
    <Navigation />
    {children}
    <Footer />
  </div>
);
