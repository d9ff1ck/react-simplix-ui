import {ComponentPropsWithoutRef, CSSProperties, ElementType, ReactNode} from "react";

export type ComponentWithStyles = {
    className?: string | undefined;
    style?: CSSProperties | undefined;
}
export type ComponentWithChildren = {
    children?: ReactNode | undefined;
}

export type PolymorphicPropsWithoutRef<T extends ElementType, P = {}> =
    {
        as?: T | undefined;
    }
    & P
    & ComponentWithStyles
    & ComponentWithChildren
    & Omit<ComponentPropsWithoutRef<T>, keyof P | keyof ComponentWithStyles | keyof ComponentWithChildren | "as">;