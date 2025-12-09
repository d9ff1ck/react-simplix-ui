import type { ComponentPropsWithoutRef, ElementType } from "react";

import type { ComponentWithChildren } from "./componentWithChildren";
import type { ComponentWithStyles } from "./componentWithStyles";

export type PolymorphicComponentWithoutRef<T extends ElementType, P = {}> = {
    as?: T;
} & P &
    ComponentWithStyles &
    ComponentWithChildren &
    Omit<ComponentPropsWithoutRef<T>, keyof ComponentWithStyles | keyof ComponentWithChildren | keyof P | "as">;
