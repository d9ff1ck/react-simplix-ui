import {DropdownContext, useClickOutside, useDropdownState} from "@simplix/headless";
import type {JSX} from "react";
import {useRef} from "react";

import type {DropdownRootProps} from "./dropdown.types";
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

    useClickOutside({reference: dropdownRef, handler: () => onChangeState?.(false)});

    return (
        <DropdownContext.Provider value={value}>
            <div
                ref={dropdownRef}
                className={className ?? "dropdown"}
                style={style}
            >
                {children}
            </div>
        </DropdownContext.Provider>
    );
}