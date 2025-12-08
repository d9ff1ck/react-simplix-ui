import {JSX} from "react";
import {Box} from "../box";
import {StackProps} from "./stack.types";

export function Stack(props: StackProps): JSX.Element {
    const {direction = "vertical", ...rest} = props;

    return (
        <Box
            display={"flex"}
            flexDirection={direction === "vertical" ? "column" : "row"}
            {...rest}
        />
    )
}