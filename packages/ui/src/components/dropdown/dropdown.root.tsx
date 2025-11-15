import clsx from "clsx";
import {JSX} from "react";
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

    const state = useDropdownState({
        open,
        ...(onChangeState !== undefined && {onChangeState}),
        disabled
    });

    const value: DropdownContextValue = {
        open: state.open,
        onChangeState: state.setOpen,
        disabled: disabled
    };

    return (
        <DropdownContext.Provider value={value}>
            <div
                aria-disabled={value.disabled}
                className={clsx("dropdown", className)}
                style={style}
            >
                {children}
            </div>
        </DropdownContext.Provider>
    );
}