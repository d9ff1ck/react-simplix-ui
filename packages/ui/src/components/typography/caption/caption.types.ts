import type { PolymorphicComponentWithoutRef } from "@simplix/utils";
import type { ElementType } from "react";

export type CaptionProps<T extends ElementType> = PolymorphicComponentWithoutRef<T>;
