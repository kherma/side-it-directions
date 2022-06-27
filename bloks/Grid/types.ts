import type { TBlokComponentProps } from "@shared/types";

export type TFeatureProps = {
  name: string;
};

type TGrid = {
  columns: TFeatureProps[];
};

export type TGridProps = TBlokComponentProps<TGrid>;
