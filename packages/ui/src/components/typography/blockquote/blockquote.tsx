import {ElementType, JSX} from "react";
import {BlockquoteProps} from "./blockquote.types";
import {Text} from "../text";
import "./blockquote.styles.css"

export function Blockquote(props: BlockquoteProps): JSX.Element {
    const {cite, ...rest} = props;
    const Tag: ElementType = "blockquote";

    return (
        <Text as={Tag} {...rest}/>
    )
}