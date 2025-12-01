import clsx from "clsx";
import type {ElementType, JSX} from "react";

import {Text} from "../text";
import type {CodeProps} from "./code.types";
import "./code.styles.css";

export function Code(props: CodeProps): JSX.Element {
    const {as, className, ...rest} = props;
    const Tag: ElementType = as ?? "code";

    return (
        <Text as={Tag} className={clsx("code", className)} {...rest} />
    );
}