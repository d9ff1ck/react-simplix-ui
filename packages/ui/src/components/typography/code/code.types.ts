import type { PolymorphicComponentWithoutRef } from "@simplix/utils";
import type { ElementType } from "react";

export type CodeProps<T extends ElementType> = PolymorphicComponentWithoutRef<T>;
