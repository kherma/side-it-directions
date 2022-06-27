import type { FC } from "react";

import clsx from "clsx";
import Link from "next/link";

import { LogoVariant } from "@shared/types";

import type { TLogoProps } from "./types";

export const Logo: FC<TLogoProps> = ({ variant = LogoVariant.Black }) => (
  <Link href="/">
    <a
      className={clsx(
        "flex gap-[0.3rem] justify-center items-center font-bold",
        variant === LogoVariant.Black && "text-2xl",
        variant === LogoVariant.White && "text-4xl"
      )}
    >
      <span
        className={clsx(
          "aspect-square flex justify-center items-center px-1 font-mono font-bold uppercase",
          variant === LogoVariant.Black && "text-white bg-black",
          variant === LogoVariant.White && "text-black bg-white"
        )}
      >
        IT
      </span>
      <span
        className={clsx(
          "capitalize",
          variant === LogoVariant.Black && "text-black",
          variant === LogoVariant.White && "text-white"
        )}
      >
        directions
      </span>
    </a>
  </Link>
);
