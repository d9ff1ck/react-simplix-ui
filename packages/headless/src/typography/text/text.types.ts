import type {ElementType} from "react";

import type {PolymorphicComponentWithoutRef} from "@simplix/utils";

export type TextProps<T extends ElementType = "p"> = PolymorphicComponentWithoutRef<T>