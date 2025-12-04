import type {ElementType} from "react";

import type {PolymorphicComponentWithoutRef} from "@simplix/utils";

export type BodySize = "small" | "medium" | "large";
export type BodyProps<T extends ElementType = "p"> = PolymorphicComponentWithoutRef<T, {
    size?: BodySize | undefined;
}>