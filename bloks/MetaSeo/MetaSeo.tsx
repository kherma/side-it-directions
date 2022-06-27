import type { FC } from "react";

import { NextSeo } from "next-seo";

import { LinksType } from "@shared/types";

import type { TMetaSeoProps } from "./types";

export const MetaSeo: FC<TMetaSeoProps> = ({ blok }) => {
  const { title = null, description = null } = blok.meta;
  const { filename = null, alt = null } = blok.og_image;
  const { cached_url = null } = blok.og_url;

  const isSeoProviden = title && description && filename && alt && cached_url;
  return isSeoProviden ? (
    <NextSeo
      title={title}
      description={description}
      openGraph={{
        url: `https://itdirections.vercel.app/${
          cached_url === LinksType.Discover ? "" : cached_url
        }`,
        title: title,
        description: description,
        images: [
          {
            url: filename,
            width: 800,
            height: 600,
            alt: alt,
            type: "image/png",
          },
        ],
        site_name: "IT Directions",
      }}
      twitter={{
        handle: "@handle",
        site: "@site",
        cardType: "summary_large_image",
      }}
    />
  ) : (
    <p>Please provide valid seo!</p>
  );
};
