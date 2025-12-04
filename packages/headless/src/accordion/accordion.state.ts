import {useState} from "react";

import type {AccordionState, AccordionStateResult} from "./accordion.types";

export function useAccordionState(props: AccordionState): AccordionStateResult {
    const {open: PropertyOpen = false} = props;
    const [open, setOpen] = useState(PropertyOpen);

    return {open, setOpen};
}