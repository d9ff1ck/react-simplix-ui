import {ComponentPropsWithRef, ElementType, Ref} from "react";
import {ComponentWithChildren} from "./componentWithChildren";
import {ComponentWithStyles} from "./componentWithStyles";
import {ElementOf} from "./elementOf";

export type PolymorphicComponentWithRef<T extends ElementType, P> = {
        as?: T | undefined;
        ref?: Ref<ElementOf<T>>
    }
    & P
    & ComponentWithChildren & ComponentWithStyles
    & Omit<ComponentPropsWithRef<T>, keyof ComponentWithChildren | keyof ComponentWithStyles | keyof P | "as" | "ref">