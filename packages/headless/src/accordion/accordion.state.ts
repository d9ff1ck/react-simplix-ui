import {useState} from "react";

import type {AccordionState, UseAccordionStateResult} from "./accordion.types";

export function useAccordionState(props: AccordionState): UseAccordionStateResult {
    const {open: PropertyOpen = false} = props;
    const [open, setOpen] = useState(PropertyOpen);

    return {open, setOpen};
}