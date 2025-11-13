import {TextProps} from "../text";

export type HeadingSize = "h1" | "h2" | "h3" | "h4" | "h5" | "h6";

export type HeadingProps = TextProps & {
    size?: HeadingSize;
}