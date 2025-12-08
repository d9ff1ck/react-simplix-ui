import {ElementType} from "react";
import {BoxProps} from "../box";

export type StackDirection = "vertical" | "horizontal";

export type StackProps<T extends ElementType = "div"> = Omit<BoxProps<T>, "display" | "flexDirection"> & {
    direction?: StackDirection;
};