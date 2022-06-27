import type { FC } from "react";

import { FooterContact } from "./FooterContact";
import { FooterIntro } from "./FooterIntro";
import { FooterTechnologies } from "./FooterTechnologies";

export const Footer: FC = () => {
  return (
    <footer className="text-white bg-neutral-900">
      <div className="py-12 px-8 mx-auto max-w-7xl sm:px-20">
        <FooterIntro />
        <FooterTechnologies />
        <FooterContact />
      </div>
    </footer>
  );
};
