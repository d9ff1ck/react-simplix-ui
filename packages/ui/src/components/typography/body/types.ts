import {ElementType} from "react";
import {PolymorphicProps} from "../../../lib";

export type BodySize = "small" | "medium" | "large";
export type BodyProps<T extends ElementType = "p"> = PolymorphicProps<T, {
    size?: BodySize
}>