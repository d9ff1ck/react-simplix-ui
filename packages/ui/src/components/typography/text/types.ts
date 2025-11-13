import {type ComponentPropsWithoutRef, type JSX} from "react";
import {StyleProps} from "../../types";

export type TextProps = StyleProps & ComponentPropsWithoutRef<keyof JSX.IntrinsicElements> & {
    as?: keyof JSX.IntrinsicElements;
    role?: string;
};