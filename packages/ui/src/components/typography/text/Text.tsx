import clsx from "clsx";
import {JSX} from "react";
import {TextProps} from "./types";
import "./text.css";

export function Text({as = "p", role, className, style, children}: TextProps): JSX.Element {
    const Component = as

    return (
        <Component role={role} className={clsx(className)} style={style}>
            {children}
        </Component>
    )
}