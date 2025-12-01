import type {ElementType} from "react";

import type {ComponentWithChildren, ComponentWithStyles, PolymorphicComponentWithRef} from "../../shared";

export type AccordionContextValue = {
    open: boolean;
    setOpen: (open: boolean) => void;
}

export type AccordionState = {
    open?: boolean;
}

export type UseAccordionStateResult = {
    open: boolean;
    setOpen: (open: boolean) => void;
}

export type AccordionRootProps = AccordionState & ComponentWithChildren & ComponentWithStyles;

export type AccordionHeaderProps<T extends ElementType = "div"> = PolymorphicComponentWithRef<T, {}>

export type AccordionBodyProps<T extends ElementType> = PolymorphicComponentWithRef<T, {}>