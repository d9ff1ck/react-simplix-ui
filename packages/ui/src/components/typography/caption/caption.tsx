import {ElementType, JSX} from "react";
import {CaptionProps} from "./caption.types";
import {Text} from "../text";
import "./caption.styles.css"

export function Caption<T extends ElementType = "span">(props: CaptionProps<T>): JSX.Element {
    const {as, ...rest} = props;
    const Tag: ElementType = as ?? "span";

    return (
        <Text as={Tag} {...rest}/>
    )
}