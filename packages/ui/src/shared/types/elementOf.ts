import {ElementType, Ref} from "react";
import {JSX} from "react/jsx-runtime";

export type ElementOf<T extends ElementType> = T extends keyof JSX.IntrinsicElements
    ? JSX.IntrinsicElements[T] extends { ref?: Ref<infer E> }
        ? E : HTMLElement : HTMLElement