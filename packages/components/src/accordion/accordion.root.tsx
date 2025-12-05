import {AccordionContext, useAccordionState} from "@simplix/headless";
import {composeClass} from "@simplix/utils";
import type {JSX} from "react";

import type {AccordionRootProps} from "./accordion.types";
import "./styles/accordion.root.css";

export function AccordionRoot(props: AccordionRootProps): JSX.Element {
    const {children, className, style, open = false, ...rest} = props;

    const state = useAccordionState({open: open});
    const value = {
        open: state.open,
        setOpen: state.setOpen,
    };

    return (
        <AccordionContext.Provider value={value}>
            <div
                className={composeClass({"accordion": !!className}, className)}
                style={style}
                {...rest}
            >
                {children}
            </div>
        </AccordionContext.Provider>
    );
}