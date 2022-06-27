import type { FC } from "react";
import { useState } from "react";

import { BiChevronDown } from "react-icons/bi";

import { NavbarLink } from "../NavbarLink/NavbarLink";
import type { TNavbarDropdownProps } from "./types";

export const NavbarDropdown: FC<TNavbarDropdownProps> = ({
  displayName,
  links,
}) => {
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);

  return (
    <div
      className="relative"
      onMouseEnter={() => setIsDropdownOpen(true)}
      onMouseLeave={() => setIsDropdownOpen(false)}
      onClick={() => setIsDropdownOpen(!isDropdownOpen)}
    >
      <button className="flex gap-[0.5rem] justify-between items-center p-2 font-semibold capitalize hover:bg-stone-200 rounded cursor-default">
        {displayName}

        <BiChevronDown
          className={`${isDropdownOpen ? "rotate-180" : "rotate-0"}`}
        />
      </button>
      {isDropdownOpen && (
        <ul className="flex absolute top-full right-0 z-20 flex-col justify-center p-2 min-w-max bg-white rounded border-t shadow-md">
          {links.map((navbarLink) => (
            <NavbarLink key={navbarLink.id} {...navbarLink} />
          ))}
        </ul>
      )}
    </div>
  );
};
