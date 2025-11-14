import clsx from "clsx";
import {ElementType, JSX} from "react";
import {TextProps} from "./types";
import "./styles.css";

export function Text<T extends ElementType = "p">(props: TextProps<T>): JSX.Element {
    const { as, children, className, style, ...rest } = props;
    const Component: ElementType = as ?? "p";

    return (
        <Component {...rest} className={clsx("rslx-text", className)} style={style}>
            {children}
        </Component>
    );
}
