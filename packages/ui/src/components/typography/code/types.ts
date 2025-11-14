import {ElementType} from "react";
import {ComponentWithChildren, ComponentWithStyles, PolymorphicProps} from "../../../lib";

export type CodeProps<T extends ElementType = "code"> = PolymorphicProps<T>

export type CodeBlockProps = {
    language?: string,
} & ComponentWithStyles & ComponentWithChildren