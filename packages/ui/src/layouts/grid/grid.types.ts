import { PolymorphicComponentWithRef } from "@simplix/utils";
import { CSSProperties, ElementType } from "react";

export type GridRootProps<T extends ElementType> = PolymorphicComponentWithRef<
    T,
    {
        inline?: boolean;
        columns?: CSSProperties["gridTemplateColumns"];
        rows?: CSSProperties["gridTemplateRows"];
        areas?: CSSProperties["gridTemplateAreas"];

        gap?: CSSProperties["gap"];
        columnGap?: CSSProperties["columnGap"];
        rowGap?: CSSProperties["rowGap"];

        alignContent?: CSSProperties["alignContent"];
        justifyContent?: CSSProperties["justifyContent"];

        alignItems?: CSSProperties["alignItems"];
        justifyItems?: CSSProperties["justifyItems"];

        autoColumns?: CSSProperties["gridAutoColumns"];
        autoRows?: CSSProperties["gridAutoRows"];
        autoFlow?: CSSProperties["gridAutoFlow"];
    }
>;

export type GridColumnProps<T extends ElementType> = PolymorphicComponentWithRef<
    T,
    {
        column?: CSSProperties["gridColumn"];
        row?: CSSProperties["gridRow"];
        area?: CSSProperties["gridArea"];

        colSpan?: number;
        colStart?: number;
        colEnd?: number;

        rowSpan?: number;
        rowStart?: number;
        rowEnd?: number;
    }
>;
