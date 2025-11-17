import {ElementType} from "react";
import {PolymorphicPropsWithoutRef} from "../../../lib/types";

export type BodySize = "small" | "medium" | "large";
export type BodyProps<T extends ElementType = "p"> = PolymorphicPropsWithoutRef<T, {
    size?: BodySize | undefined;
}>