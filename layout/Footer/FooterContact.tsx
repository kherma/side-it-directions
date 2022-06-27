import type { FC } from "react";

import { contactData } from "./footerData/contactData";
import { ContactType } from "./types";

export const FooterContact: FC = () => {
  return (
    <div className="flex flex-col py-8 border-t border-t-neutral-300 sm:flex-row sm:gap-4 sm:items-center">
      <p className="font-mono font-black text-center uppercase sm:text-2xl xl:text-lg">
        {contactData[ContactType.Footer]}
      </p>
      <ul className="flex gap-4 justify-evenly items-center mt-8 sm:mt-0">
        {contactData[ContactType.Media].map(({ id, title, Icon, url }) => (
          <li
            key={id}
            className="py-4 w-full bg-neutral-800 rounded sm:p-2 xl:hover:bg-neutral-700"
          >
            <p className="sr-only">{title}</p>
            <a href={url} target="_blank" rel="noreferrer">
              <Icon className="mx-auto text-3xl sm:text-2xl xl:text-xl" />
            </a>
          </li>
        ))}
      </ul>
    </div>
  );
};
