import {ElementType} from "react";
import {PolymorphicComponentWithoutRef} from "../../../shared";

export type TextProps<T extends ElementType = "p"> = PolymorphicComponentWithoutRef<T>