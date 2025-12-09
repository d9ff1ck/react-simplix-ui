import { useDropdownContext } from "@simplix/headless";
import type { JSX, MouseEventHandler } from "react";

import type { DropdownItemProps } from "./dropdown.types";
import "./styles/dropdown-item.css";

export function DropdownItem(props: DropdownItemProps): JSX.Element {
    const { children, className, style, onClick, onSelect, disabled: PropertyDisabled, ...rest } = props;
    const { onChangeState, disabled: ContextDisabled } = useDropdownContext("Item");
    const disabled = ContextDisabled || PropertyDisabled;

    const handle: MouseEventHandler<HTMLDivElement> = (event) => {
        onClick?.(event);
        if (event.defaultPrevented) {
            return;
        }
        if (disabled) {
            return;
        }
        onSelect?.();
        onChangeState(false);
    };

    return (
        <div
            role={`menuitem`}
            aria-disabled={disabled}
            tabIndex={disabled ? -1 : 0}
            onClick={handle}
            className={className ?? "dropdown__menu-item"}
            style={style}
            {...rest}
        >
            {children}
        </div>
    );
}
