import {ElementType, JSX} from "react";
import {Text} from "../text";
import {CodeProps} from "./code.types";
import "./code.styles.css"


export function Code(props: CodeProps): JSX.Element {
    const {as, ...rest} = props;
    const Tag: ElementType = as ?? "code";

    return (
        <Text as={Tag} {...rest} />
    );
}