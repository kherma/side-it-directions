import type { TSbLink, TSbImage, TBlokComponentProps } from "@shared/types";

export type TMetaSeo = {
  meta: {
    title: string;
    description: string;
  };
  og_image: TSbImage;
  og_url: TSbLink;
};

export type TMetaSeoProps = TBlokComponentProps<TMetaSeo>;
