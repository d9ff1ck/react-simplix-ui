import type {PolymorphicComponentWithoutRef} from "@simplix/utils";
import type {ElementType} from "react";


export type TextProps<T extends ElementType = "p"> = PolymorphicComponentWithoutRef<T>