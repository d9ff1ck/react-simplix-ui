import clsx from "clsx";
import {JSX, MouseEventHandler} from "react";
import {useDropdownContext} from "./dropdown.context";
import {DropdownTriggerProps} from "./dropdown.types";
import "./styles/dropdown.trigger.css";

export function DropdownTrigger(props: DropdownTriggerProps): JSX.Element {
    const {children, className, style, onClick, disabled: disabledProperty, ...rest} = props;
    const {open, setOpen, disabled: disabledContext} = useDropdownContext("Trigger");
    const disabled = disabledContext || disabledProperty;

    const handleClick: MouseEventHandler<HTMLButtonElement> = (event) => {
        onClick?.(event);
        if (event.defaultPrevented) {
            return;
        }
        if (!disabled) {
            setOpen(!open);
        }
    };

    return (
        <button
            {...rest}
            aria-expanded={open}
            aria-haspopup={"menu"}
            onClick={handleClick}
            disabled={disabled}
            className={clsx("dropdown-trigger", className)}
            style={style}
            children={children}
        />
    );
}