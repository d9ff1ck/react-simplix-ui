import clsx from "clsx";
import type {JSX} from "react";

import type {ButtonProps} from "./button.types";
import "./button.styles.css";

export function Button(props: ButtonProps): JSX.Element {
    const {children, className, style, ...rest} = props;

    return (
        <button
            className={clsx("button", className)}
            style={style}
            {...rest}
        >
            {children}
        </button>
    );
}