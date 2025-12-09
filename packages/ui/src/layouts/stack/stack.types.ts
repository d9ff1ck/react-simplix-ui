import { PolymorphicComponentWithRef } from "@simplix/utils";
import type { ElementType } from "react";
import { FlexProps } from "../flex";

export type StackDirection = "vertical" | "horizontal";

export type StackProps<T extends ElementType = "div"> = PolymorphicComponentWithRef<
    T,
    Omit<FlexProps<T>, "direction"> & {
        direction?: StackDirection;
    }
>;
