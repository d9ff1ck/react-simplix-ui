import clsx from "clsx";
import {JSX} from "react";
import {ButtonProps} from "./button.types";
import "./button.styles.css";

export function Button(props: ButtonProps): JSX.Element {
    const {children, className, style, variant, ...rest} = props;

    return (
        <button
            className={clsx(`button ${variant ? `button--${variant}` : ""}`, className)}
            style={style}
            {...rest}
        >
            {children}
        </button>
    );
}