import {useAccordionContext} from "@simplix/headless";
import {classComposer} from "@simplix/utils";
import type {ElementType, JSX} from "react";

import type {AccordionBodyProps} from "./accordion.types";
import "./styles/accordion.body.css";

export function AccordionBody<T extends ElementType>(props: AccordionBodyProps<T>): JSX.Element | null {
    const {as, children, className, style, ...rest} = props;
    const {open} = useAccordionContext("Body");
    const Component: ElementType = as ?? "div";

    if (!open) {
        return null;
    }

    return (
        <Component
            className={classComposer({"accordion__body": !!className}, className)}
            style={style}
            {...rest}
        >
            {children}
        </Component>
    );
}