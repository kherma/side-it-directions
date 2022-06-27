import type { FC } from "react";

import Link from "next/link";

export const Logo: FC = () => (
  <Link href="/">
    <a className="flex gap-[0.3rem] justify-center items-center text-2xl font-bold">
      <span className="aspect-square flex justify-center items-center px-1 font-mono font-bold text-white  uppercase bg-black">
        IT
      </span>
      <span className="capitalize">directions</span>
    </a>
  </Link>
);
