import {ElementType, JSX} from "react";
import {Text} from "../text";
import "./overline.styles.css";
import {OverlineProps} from "./overline.types";

export function Overline<T extends ElementType = "span">(props: OverlineProps<T>): JSX.Element {
    const {as, ...rest} = props;
    const Tag: ElementType = as ?? "span";

    return (
        <Text as={Tag} {...rest} />
    );
}