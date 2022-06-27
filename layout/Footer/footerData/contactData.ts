import { SiLinkedin, SiGithub } from "react-icons/si";

import { ContactType } from "../types";
import type { TContactData } from "../types";
import { createFooterLink } from "./utils/createFooterLink";

export const contactData: TContactData = {
  [ContactType.Footer]: "2022 by Kamil Herma",
  [ContactType.Media]: [
    createFooterLink(
      "LinkedIn",
      SiLinkedin,
      "https://www.linkedin.com/in/kamil-herma"
    ),
    createFooterLink("GitHub", SiGithub, "https://github.com/kherma"),
  ],
};
