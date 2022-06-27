import type { IconType } from "react-icons";
import { v4 as uuidv4 } from "uuid";

import type { TFooterLink } from "layout/Footer/types";

export const createFooterLink = (
  title: string,
  Icon: IconType,
  url: string
): TFooterLink => ({
  title,
  Icon,
  url,
  id: uuidv4(),
});
