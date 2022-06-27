import type { FC } from "react";

import type { TFeatureProps } from "../types";

export const Feature: FC<TFeatureProps> = ({ name }) => <div>{name}</div>;
