import {ComponentPropsWithoutRef, ElementType} from "react";
import {ComponentWithChildren} from "./componentWithChildren";
import {ComponentWithStyles} from "./componentWithStyles";

export type PolymorphicComponentWithoutRef<T extends ElementType, P = {}> =
    {
        as?: T | undefined;
    }
    & P
    & ComponentWithStyles
    & ComponentWithChildren
    & Omit<ComponentPropsWithoutRef<T>, | keyof ComponentWithStyles | keyof ComponentWithChildren | keyof P | "as">;

