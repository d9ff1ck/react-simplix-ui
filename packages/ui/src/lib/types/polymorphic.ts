import {ComponentPropsWithoutRef, ElementType} from "react";
import {ComponentWithChildren} from "./children";
import {ComponentWithStyles} from "./styles";

export type PolymorphicPropsWithoutRef<T extends ElementType, P = {}> = { as?: T; }
    & P
    & ComponentWithStyles
    & ComponentWithChildren
    & Omit<ComponentPropsWithoutRef<T>, keyof P | keyof ComponentWithStyles | "children" | "as">;
