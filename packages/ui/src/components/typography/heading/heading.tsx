import {JSX} from "react";
import {Text} from "../text";
import {HeadingProps} from "./types";
import "./styles.css"

export function Heading(props: HeadingProps): JSX.Element {
    const {variant, ...rest} = props;
    const Tag = variant ?? "h2";

    return (
        <Text as={Tag} {...rest}/>
    );
}