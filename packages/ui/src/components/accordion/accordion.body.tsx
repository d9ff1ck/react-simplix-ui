import clsx from "clsx";
import {ElementType, JSX} from "react";
import {useAccordionContext} from "./accordion.context";
import {AccordionBodyProps} from "./accordion.types";
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
            className={clsx("accordion__body", className)}
            style={style}
            {...rest}
        >
            {children}
        </Component>
    );
}