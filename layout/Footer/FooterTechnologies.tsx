import type { FC } from "react";

import { technologiesData } from "./footerData/technologiesData";

export const FooterTechnologies: FC = () => (
  <div>
    <h3>Techstack</h3>
    <ul>
      {technologiesData.map(({ id, title, url, Icon }) => (
        <li key={id}>
          <a href={url} target="_blank" rel="noreferrer">
            <span aria-hidden={true}>
              <Icon />
            </span>

            {title}
          </a>
        </li>
      ))}
    </ul>
  </div>
);
