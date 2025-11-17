import clsx from "clsx";
import {JSX, useRef} from "react";
import {useClickOutside} from "../../core/hooks";
import {useDropdownContext} from "./dropdown.context";
import {DropdownMenuProps} from "./dropdown.types";
import "./styles/dropdown.menu.css";

export function DropdownMenu(props: DropdownMenuProps): JSX.Element | null {
    const {children, className, style, ...rest} = props;
    const {open, onChangeState} = useDropdownContext("Menu");
    const menuRef = useRef<HTMLDivElement | null>(null);

    useClickOutside(menuRef, () => onChangeState?.(false))

    if (!open) {
        return null;
    }

    return (
        <div
            ref={menuRef}
            role={"menu"}
            id="dropdown-menu"
            aria-labelledby={`dropdown-trigger`}
            tabIndex={-1}

            className={clsx("dropdown-menu", className)}
            style={style}

            {...rest}
        >
            {children}
        </div>
    );
}