import {ComponentWithChildren, ComponentWithStyles} from "../../../lib/types";

export type HeadingVariant = "h1" | "h2" | "h3" | "h4" | "h5" | "h6";
export type HeadingProps = { variant?: HeadingVariant; } & ComponentWithChildren & ComponentWithStyles;