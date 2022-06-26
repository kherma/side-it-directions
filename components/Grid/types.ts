import { TBlokComponentProps } from "../types";

export type TFeatureProps = {
  name: string;
};

type TGrid = {
  columns: TFeatureProps[];
};

export type TGridProps = TBlokComponentProps<TGrid>;
