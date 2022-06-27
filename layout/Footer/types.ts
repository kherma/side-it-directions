import type { IconType } from "react-icons";

export enum ContactType {
  Footer = "footer",
  Email = "email",
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
  [ContactType.Email]: {
    email: string;
    Icon: IconType;
  };
  [ContactType.Media]: TFooterLink[];
};
