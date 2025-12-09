import type { ElementType, JSX } from "react";

import { Box } from "../box";
import type { StackProps } from "./stack.types";

export function Stack<T extends ElementType = "div">(props: StackProps<T>): JSX.Element {
    const { as, direction = "vertical", ...rest } = props;
    const Tag: ElementType = as ?? "div";

    return <Box as={Tag} display={"flex"} flexDirection={direction === "vertical" ? "column" : "row"} {...rest} />;
}
