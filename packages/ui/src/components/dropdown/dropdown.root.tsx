import clsx from "clsx";
import type {JSX} from "react";
import { useRef} from "react";

import {DropdownContext} from "./dropdown.context";
import {useDropdownState} from "./dropdown.state";
import type {DropdownRootProps} from "./dropdown.types";
import {useClickOutside} from "../../core";
import "./styles/dropdown.root.css";

export function DropdownRoot(props: DropdownRootProps): JSX.Element {
    const {
        children,
        className,
        style,
        open = false,
        onChangeState,
        disabled = false
    } = props;

    const state = useDropdownState({open, ...(onChangeState !== undefined && {onChangeState}), disabled});
    const value = {open: state.open, onChangeState: state.setOpen, disabled: disabled};
    const dropdownRef = useRef<HTMLDivElement | null>(null);

    useClickOutside(dropdownRef, () => onChangeState?.(false));

    return (
        <DropdownContext.Provider value={value}>
            <div
                ref={dropdownRef}
                className={clsx("dropdown", className)}
                style={style}
            >
                {children}
            </div>
        </DropdownContext.Provider>
    );
}