import clsx from "clsx";
import {ElementType, JSX} from "react";
import {OverlineProps} from "./overline.types";
import {Text} from "../text";
import "./overline.styles.css";

export function Overline<T extends ElementType = "span">(props: OverlineProps<T>): JSX.Element {
    const {as, className, ...rest} = props;
    const Tag: ElementType = as ?? "span";

    return (
        <Text as={Tag} className={clsx("overline", className)} {...rest} />
    );
}