import {JSX} from "react";
import {Text} from "../text";
import {HeadingProps} from "./types";

export function Heading({as, size = "h2", children, ...rest}: HeadingProps): JSX.Element {
    const Tag = as ?? size;

    return (
        <Text as={Tag} {...rest}>
            {children}
        </Text>
    );
}