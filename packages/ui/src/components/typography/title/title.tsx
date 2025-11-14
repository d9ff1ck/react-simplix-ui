import {ElementType, JSX} from "react";
import {Text} from "../text";
import {TitleProps} from "./types";

export function Title<T extends ElementType = "span">(props: TitleProps<T>): JSX.Element {
    const {as, ...rest} = props;
    const Tag: ElementType =  as ?? "span";

    return (
        <Text as={Tag} {...rest} />
    )
}