import {PolymorphicComponentWithRef} from "@simplix/utils";
import {CSSProperties, ElementType} from "react";

export type BoxProps<T extends ElementType> = PolymorphicComponentWithRef<T, {
    width?: CSSProperties["width"];
    height?: CSSProperties["height"];
    minWidth?: CSSProperties["minWidth"];
    minHeight?: CSSProperties["minHeight"];
    maxWidth?: CSSProperties["maxWidth"];
    maxHeight?: CSSProperties["maxHeight"];

    margin?: CSSProperties["margin"];
    padding?: CSSProperties["padding"];
    display?: CSSProperties["display"];
    flex?: CSSProperties["flex"];
    flexGrow?: CSSProperties["flexGrow"];
    flexShrink?: CSSProperties["flexShrink"];
    flexBasis?: CSSProperties["flexBasis"];
    flexDirection?: CSSProperties["flexDirection"];
    align?: CSSProperties["alignItems"];
    justify?: CSSProperties["justifyContent"];

    gap?: CSSProperties["gap"];
    columnGap?: CSSProperties["columnGap"];
    rowGap?: CSSProperties["rowGap"];
}>