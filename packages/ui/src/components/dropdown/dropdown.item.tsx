import clsx from "clsx";
import {JSX, MouseEventHandler} from "react";
import {useDropdownContext} from "./dropdown.context";
import {DropdownItemProps} from "./dropdown.types";
import "./styles/dropdown.item.css";

export function DropdownItem(props: DropdownItemProps): JSX.Element {
    const {children, className, style, onClick, onSelect, disabled: PropertyDisabled, ...rest} = props;
    const {onChangeState, disabled: ContextDisabled} = useDropdownContext("Item");
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

            className={clsx("dropdown-item", className)}
            style={style}

            {...rest}
        >
            {children}
        </div>
    );
}