import {ElementType} from "react";
import {ComponentWithChildren, ComponentWithStyles, PolymorphicPropsWithRef} from "../../lib/types";

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

export type AccordionHeaderProps<T extends ElementType = "div"> = PolymorphicPropsWithRef<T, {}>

export type AccordionBodyProps<T extends ElementType> = PolymorphicPropsWithRef<T, {}>