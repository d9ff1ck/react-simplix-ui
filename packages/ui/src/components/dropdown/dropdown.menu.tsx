import clsx from "clsx";
import type {JSX} from "react";

import {useDropdownContext} from "./dropdown.context";
import type {DropdownMenuProps} from "./dropdown.types";
import "./styles/dropdown.menu.css";

export function DropdownMenu(props: DropdownMenuProps): JSX.Element | null {
    const {children, className, style, ...rest} = props;
    const {open} = useDropdownContext("Menu");

    if (!open) {
        return null;
    }

    return (
        <div
            role={"menu"}
            id="dropdown-menu"
            aria-labelledby={`dropdown-trigger`}
            tabIndex={-1}

            className={clsx("dropdown__menu", className)}
            style={style}

            {...rest}
        >
            {children}
        </div>
    );
}