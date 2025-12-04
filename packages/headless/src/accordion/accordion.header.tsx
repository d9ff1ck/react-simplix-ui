import clsx from "clsx";
import type {ElementType, JSX, MouseEventHandler} from "react";

import {useAccordionContext} from "./accordion.context";
import type {AccordionHeaderProps} from "./accordion.types";
import type {ElementOf} from "@simplix/utils";
import "./styles/accordion.header.css";

export function AccordionHeader<T extends ElementType = "div">(props: AccordionHeaderProps<T>): JSX.Element {
    const {as, children, onClick, className, style, ...rest} = props;
    const {open, setOpen} = useAccordionContext("Header");
    const Component: ElementType = as ?? "div";

    const handleClick: MouseEventHandler<ElementOf<T>> = (event) => {
        onClick?.(event);

        if (event.defaultPrevented) {
            return;
        }

        setOpen(!open);
    }

    return (
        <Component
            className={clsx("accordion__header", className)}
            style={style}
            onClick={handleClick}
            {...rest}
        >
            {children}
        </Component>
    );
}