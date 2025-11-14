import {ElementType, JSX} from "react";
import {Text} from "../text";
import "./styles.css"
import {LabelProps} from "./types";

export function Label(props: LabelProps): JSX.Element {
    const {as, ...rest} = props;
    const Tag: ElementType = as ?? "span";

    return (
        <Text as={Tag} {...rest}/>
    )
}