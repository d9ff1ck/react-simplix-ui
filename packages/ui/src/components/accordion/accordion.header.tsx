import {useAccordionContext} from "@simplix/headless";
import type { ElementOf} from "@simplix/utils";
import {composeClass} from "@simplix/utils";
import type {ElementType, JSX, MouseEventHandler} from "react";

import "./styles/accordion.header.css";
import type {AccordionHeaderProps} from "./accordion.types";

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
            className={composeClass({"accordion__header": !!className}, className)}
            style={style}
            onClick={handleClick}
            {...rest}
        >
            {children}
        </Component>
    );
}