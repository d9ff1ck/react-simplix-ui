import clsx from "clsx";
import {JSX, MouseEventHandler} from "react";
import {useDropdownContext} from "./dropdown.context";
import {DropdownItemProps} from "./dropdown.types";
import "./styles/dropdown.item.css";

export function DropdownItem(props: DropdownItemProps): JSX.Element {
    const { children, onClick, onSelect, disabled: DisabledProperty, className, style, ...rest} = props;
    const { setOpen, disabled: DisabledContext } = useDropdownContext("Item");

    const disabled = DisabledContext || DisabledProperty;


    const handleClick: MouseEventHandler<HTMLDivElement> = (event) => {
        onClick?.(event);
        if (event.defaultPrevented) {
            return;
        }
        if (disabled) {
            return;
        }
        onSelect?.();
        setOpen(false);
    }

    return (
        <div
            {...rest}
            role={`menuitem`}
            aria-disabled={disabled}
            tabIndex={disabled ? -1: 0}
            onClick={handleClick}
            className={clsx("dropdown-item", className)}
            style={style}
            children={children}
        />
    );
}