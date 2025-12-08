import type {AccordionState} from "@simplix/headless";
import type {ComponentWithChildren, ComponentWithStyles, PolymorphicComponentWithRef} from "@simplix/utils";
import type {ElementType} from "react";

export type AccordionRootProps = AccordionState & ComponentWithChildren & ComponentWithStyles;

export type AccordionHeaderProps<T extends ElementType = "div"> = PolymorphicComponentWithRef<T, {}>

export type AccordionBodyProps<T extends ElementType> = PolymorphicComponentWithRef<T, {}>