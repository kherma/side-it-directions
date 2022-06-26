import type { FC } from "react";

import Link from "next/link";

export const Logo: FC = () => (
  <Link href="/">
    <a>
      <span>it</span>
      <span>directions</span>
    </a>
  </Link>
);
