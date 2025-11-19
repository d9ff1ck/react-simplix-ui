import clsx from "clsx";
import {JSX} from "react";
import {AccordionContext} from "./accordion.context";
import {useAccordionState} from "./accordion.state";
import {AccordionRootProps} from "./accordion.types";
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
                className={clsx("accordion", className)}
                style={style}
                {...rest}
            >
                {children}
            </div>
        </AccordionContext.Provider>
    );
}