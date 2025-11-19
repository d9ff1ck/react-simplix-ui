import {ElementType} from "react";
import {PolymorphicComponentWithoutRef} from "../../../shared";

export type BodySize = "small" | "medium" | "large";
export type BodyProps<T extends ElementType = "p"> = PolymorphicComponentWithoutRef<T, {
    size?: BodySize | undefined;
}>