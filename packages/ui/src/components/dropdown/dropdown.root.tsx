import clsx from "clsx";
import {JSX, useRef} from "react";
import {useClickOutside} from "../../core/hooks";
import {DropdownContext} from "./dropdown.context";
import {useDropdownState} from "./dropdown.state";
import {DropdownContextValue, DropdownRootProps} from "./dropdown.types";
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
    const value: DropdownContextValue = {open: state.open, onChangeState: state.setOpen, disabled: disabled};
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