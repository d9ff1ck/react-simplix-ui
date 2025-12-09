import type { ElementType, JSX } from "react";

import { Text } from "../text";
import type { CodeProps } from "./code.types";
import "./code.styles.css";

export function Code<T extends ElementType = "code">(props: CodeProps<T>): JSX.Element {
    const { as, className, ...rest } = props;
    const Tag: ElementType = as ?? "code";

    return <Text as={Tag} className={className ?? "code"} {...rest} />;
}
