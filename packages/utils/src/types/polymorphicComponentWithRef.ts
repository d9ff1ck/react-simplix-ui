import type { ComponentPropsWithRef, ElementType, Ref } from "react";

import type { ComponentWithChildren } from "./componentWithChildren";
import type { ComponentWithStyles } from "./componentWithStyles";
import type { ElementOf } from "./elementOf";

export type PolymorphicComponentWithRef<T extends ElementType, P> = {
    as?: T;
    ref?: Ref<ElementOf<T>>;
} & P &
    ComponentWithChildren &
    ComponentWithStyles &
    Omit<ComponentPropsWithRef<T>, keyof ComponentWithChildren | keyof ComponentWithStyles | keyof P | "as" | "ref">;
