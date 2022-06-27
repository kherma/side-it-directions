import type { TBlokComponentProps } from "@shared/types";

import type { TPageBody } from "../types";

type TPage = {
  body: TPageBody[];
};

export type TPageProps = TBlokComponentProps<TPage>;
