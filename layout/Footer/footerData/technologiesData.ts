import {
  SiNextdotjs,
  SiTailwindcss,
  SiStoryblok,
  SiFramer,
} from "react-icons/si";

import type { TFooterLink } from "../types";
import { createFooterLink } from "./utils/createFooterLink";

export const technologiesData: TFooterLink[] = [
  createFooterLink("NextJS", SiNextdotjs, "https://nextjs.org/"),
  createFooterLink("TailwindCSS", SiTailwindcss, "https://tailwindcss.com/"),
  createFooterLink("Storyblok", SiStoryblok, "https://www.storyblok.com/"),
  createFooterLink("FramerMotion", SiFramer, "https://www.framer.com/motion/"),
];
