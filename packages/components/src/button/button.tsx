import {classComposer} from "@simplix/utils";
import type {JSX} from "react";

import type {ButtonProps} from "./button.types";
import "../../../headless/src/button/button.styles.css";

export function Button(props: ButtonProps): JSX.Element {
    const {children, className, style, ...rest} = props;

    return (
        <button
            className={classComposer({"button": !!className}, className)}
            style={style}
            {...rest}
        >
            {children}
        </button>
    );
}