import clsx from "clsx";
import {ElementType, JSX} from "react";
import {Text} from "../text";
import {HeadingProps} from "./heading.types";
import "./heading.styles.css";

export function Heading(props: HeadingProps): JSX.Element {
    const {variant, className, ...rest} = props;
    const Tag: ElementType = variant ?? "h2";

    return (
        <Text as={Tag} className={clsx(`heading heading-${variant}`, className)} {...rest} />
    );
}