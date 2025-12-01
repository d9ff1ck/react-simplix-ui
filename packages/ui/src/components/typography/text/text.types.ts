import type {ElementType} from "react";

import type {PolymorphicComponentWithoutRef} from "../../../shared";

export type TextProps<T extends ElementType = "p"> = PolymorphicComponentWithoutRef<T>