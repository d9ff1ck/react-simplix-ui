import {ComponentPropsWithoutRef, CSSProperties, ElementType, ReactNode} from "react";

export type ComponentWithStyles = {
    className?: string;
    style?: CSSProperties;
}
export type ComponentWithChildren = {
    children?: ReactNode;
}

export type PolymorphicPropsWithoutRef<T extends ElementType, P = {}> = { as?: T; }
    & P
    & ComponentWithStyles
    & ComponentWithChildren
    & Omit<ComponentPropsWithoutRef<T>, keyof P | keyof ComponentWithStyles | keyof ComponentWithChildren | "as">;