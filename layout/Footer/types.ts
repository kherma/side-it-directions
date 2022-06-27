import type { IconType } from "react-icons";

export enum ContactType {
  Footer = "footer",
  Media = "media",
}

export type TFooterLink = {
  title: string;
  Icon: IconType;
  url: string;
  id: string;
};

export type TContactData = {
  [ContactType.Footer]: string;
  [ContactType.Media]: TFooterLink[];
};
