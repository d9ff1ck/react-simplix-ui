import clsx from "clsx";
import {ElementType, JSX} from "react";
import {TextProps} from "./text.types";
import "./text.styles.css";

export function Text<T extends ElementType = "p">(props: TextProps<T>): JSX.Element {
    const { as, children, className, style, ...rest } = props;
    const Component: ElementType = as ?? "p";

    return (
        <Component className={clsx("rslx-text", className)} style={style} {...rest}>
            {children}
        </Component>
    );
}
