import type { FC } from "react";

import { FaCode } from "react-icons/fa";

import { technologiesData } from "./footerData/technologiesData";

export const FooterTechnologies: FC = () => (
  <div className="my-12">
    <h3 className="text-2xl font-semibold text-center">Techstack:</h3>
    <ul className="grid grid-cols-2 gap-2 justify-center items-center mt-4 sm:grid-cols-5">
      {technologiesData.map(({ id, title, url, Icon }) => (
        <li key={id}>
          <a
            className="flex flex-col gap-4 justify-center items-center p-4 font-medium bg-neutral-800 rounded xl:hover:bg-neutral-700"
            href={url}
            target="_blank"
            rel="noreferrer"
          >
            <span
              aria-hidden={true}
              className="inline-block text-5xl xl:text-2xl"
            >
              <Icon />
            </span>
            {title}
          </a>
        </li>
      ))}
      <li>
        <a
          href="https://github.com/kherma/side-it-directions"
          className="flex col-span-2 gap-4 justify-center items-center p-4 text-3xl font-medium bg-neutral-800 rounded sm:flex-col sm:col-span-1 sm:text-base sm:font-normal xl:hover:bg-neutral-700"
          target="_blank"
          rel="noreferrer"
        >
          <FaCode className="sm:inline-block sm:text-5xl xl:text-2xl" />
          Code Repo
        </a>
      </li>
    </ul>
  </div>
);
