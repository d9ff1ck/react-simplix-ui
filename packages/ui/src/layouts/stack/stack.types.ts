import { PolymorphicComponentWithRef } from "@simplix/utils";
import type { ElementType } from "react";

import type { BoxProps } from "../box";

export type StackDirection = "vertical" | "horizontal";

export type StackProps<T extends ElementType = "div"> = PolymorphicComponentWithRef<
    T,
    Omit<BoxProps<T>, "display" | "flexDirection"> & {
        direction?: StackDirection;
    }
>;
