import type { FC } from "react";

import { contactData } from "./footerData/contactData";
import { ContactType } from "./types";

export const FooterContact: FC = () => {
  const { email, Icon: EmialIcon } = contactData[ContactType.Email];
  return (
    <div>
      <p>{contactData[ContactType.Footer]}</p>
      <a href={email}>
        <EmialIcon />
      </a>
      <ul>
        {contactData[ContactType.Media].map(({ id, title, Icon, url }) => (
          <li key={id}>
            <p className="sr-only">{title}</p>
            <a href={url} target="_blank" rel="noreferrer">
              <Icon />
            </a>
          </li>
        ))}
      </ul>
    </div>
  );
};
