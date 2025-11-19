import {ComponentPropsWithoutRef, ComponentPropsWithRef, ElementType, Ref} from "react";
import {JSX} from "react/jsx-runtime";
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

export type PolymorphicComponentWithRef<T extends ElementType, P> = {
        as?: T | undefined;
        ref?: Ref<ElementOf<T>>
    }
    & P
    & ComponentWithChildren & ComponentWithStyles
    & Omit<ComponentPropsWithRef<T>, keyof ComponentWithChildren | keyof ComponentWithStyles | keyof P | "as" | "ref">

export type ElementOf<T extends ElementType> = T extends keyof JSX.IntrinsicElements
    ? JSX.IntrinsicElements[T] extends { ref?: Ref<infer E> }
        ? E : HTMLElement : HTMLElement