import clsx from "clsx";
import {ElementType, JSX} from "react";
import {Text} from "../text";
import {CodeProps} from "./code.types";
import "./code.styles.css";

export function Code(props: CodeProps): JSX.Element {
    const {as, className, ...rest} = props;
    const Tag: ElementType = as ?? "code";

    return (
        <Text as={Tag} className={clsx("code", className)} {...rest} />
    );
}