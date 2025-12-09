import type { PolymorphicComponentWithoutRef } from "@simplix/utils";
import type { ElementType } from "react";

export type OverlineProps<T extends ElementType> = PolymorphicComponentWithoutRef<T>;
