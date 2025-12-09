import { PolymorphicComponentWithRef } from "@simplix/utils";
import { CSSProperties, ElementType } from "react";
import { LayoutProps } from "../layout";

export type FlexProps<T extends ElementType> = PolymorphicComponentWithRef<
    T,
    LayoutProps<T> & {
        inline?: boolean;
        direction?: CSSProperties["flexDirection"];
        alignItems?: CSSProperties["alignItems"];
        justifyContent?: CSSProperties["justifyContent"];
        wrap?: CSSProperties["flexWrap"];
    }
>;
