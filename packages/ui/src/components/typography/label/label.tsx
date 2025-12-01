import clsx from "clsx";
import type {ElementType, JSX} from "react";

import {Text} from "../text";
import "./label.styles.css";
import type {LabelProps} from "./label.types";

export function Label(props: LabelProps): JSX.Element {
    const {as, className, ...rest} = props;
    const Tag: ElementType = as ?? "span";

    return (
        <Text as={Tag} className={clsx("label", className)} {...rest} />
    );
}