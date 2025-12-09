import { useDropdownContext } from "@simplix/headless";
import type { JSX, MouseEventHandler } from "react";

import type { DropdownTriggerProps } from "./dropdown.types";
import "./styles/dropdown-trigger.css";

export function DropdownTrigger(props: DropdownTriggerProps): JSX.Element {
    const { children, className, style, onClick, disabled: propertyDisabled, ...rest } = props;
    const { open, onChangeState, disabled: contextDisabled } = useDropdownContext("Trigger");
    const disabled = contextDisabled || propertyDisabled;

    const handle: MouseEventHandler<HTMLButtonElement> = (event) => {
        onClick?.(event);
        if (event.defaultPrevented) {
            return;
        }
        if (!disabled) {
            onChangeState(!open);
        }
    };

    return (
        <button
            id={`dropdown-trigger`}
            aria-controls={`dropdown-menu`}
            aria-expanded={open}
            aria-haspopup={"menu"}
            onClick={handle}
            disabled={disabled}
            className={className ?? "dropdown__trigger"}
            style={style}
            {...rest}
        >
            {children}
        </button>
    );
}
