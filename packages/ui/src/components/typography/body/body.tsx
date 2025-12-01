import clsx from "clsx";
import type {ElementType, JSX} from "react";

import {Text} from "../text";
import type {BodyProps, BodySize} from "./body.types";
import "./body.styles.css"

export function Body<T extends ElementType = "p">(props: BodyProps<T>): JSX.Element {
    const {size, as, className, ...rest} = props;
    const Tag: ElementType = as ?? "p";
    const Size: BodySize = size ?? "medium";

    return (
        <Text as={Tag} className={clsx(`body body-${Size}`, className)} {...rest}/>
    );
}