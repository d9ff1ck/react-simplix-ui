import {ElementType, JSX} from "react";
import {Text} from "../text";
import "./styles.css"
import {BlockquoteProps} from "./types";

export function Blockquote(props: BlockquoteProps): JSX.Element {
    const {cite, ...rest} = props;
    const Tag: ElementType = "blockquote";

    return (
        <Text as={Tag} {...rest}/>
    )
}