import clsx from "clsx";
import {JSX} from "react";
import {useDropdownContext} from "./dropdown.context";
import {DropdownMenuProps} from "./dropdown.types";
import "./styles/dropdown.menu.css";

export function DropdownMenu(props: DropdownMenuProps): JSX.Element | null {
    const {children, className, style, ...rest} = props;
    const {open, disabled} = useDropdownContext("Menu");

    if (!open) {
        return null;
    }

    return (
        <div
            {...rest}
            role={"menu"}
            aria-disabled={disabled}
            className={clsx("dropdown-menu", className)}
            children={children}
        />
    );
}