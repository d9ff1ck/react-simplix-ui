import clsx from "clsx";
import {JSX} from "react";
import {DividerProps} from "./divider.types";
import "./divider.styles.css";

export function Divider(props: DividerProps): JSX.Element {
    const {className, style, ...rest} = props;

    return (
        <hr
            role={`separator`}
            className={clsx("divider", className)}
            style={style}
            {...rest}
        />
    );
}