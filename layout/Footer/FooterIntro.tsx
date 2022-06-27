import type { FC } from "react";

import { LogoVariant } from "@shared/types";

import { Logo } from "../../components/Logo/Logo";

export const FooterIntro: FC = () => (
  <div className="flex flex-col gap-8 justify-center items-center">
    <Logo variant={LogoVariant.White} />
    <figure className="text-center">
      <blockquote cite="https://www.geckoandfly.com/25572/leonardo-da-vinci-quotes/">
        <p className="text-2xl font-bold">
          &ldquo; Learn how to see. Realize that everything connects to
          everything else.&rdquo;
        </p>
      </blockquote>
      <figcaption className="flex flex-col mt-4">
        —Leonardo Da Vinci, <cite>Quotes via Gecko&#38;Fly</cite>
      </figcaption>
    </figure>
  </div>
);
