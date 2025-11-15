import {ElementType, JSX} from "react";
import {Text} from "../text";
import {BodyProps} from "./body.types";
import "./body.styles.css"

export function Body<T extends ElementType = "p">(props: BodyProps<T>): JSX.Element {
    const {size, as, ...rest} = props;
    const Tag: ElementType = as ?? "p";

    return (
        <Text as={Tag} {...rest}/>
    );
}