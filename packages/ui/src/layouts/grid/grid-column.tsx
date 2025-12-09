import type { CSSProperties, ElementType, JSX } from "react";
import { Layout } from "../layout";
import type { GridColumnProps } from "./grid.types";

export function GridColumn<T extends ElementType = "div">(props: GridColumnProps<T>): JSX.Element {
    const { as, style, ...rest } = props;
    const { column, row, area, colSpan, colStart, colEnd, rowSpan, rowStart, rowEnd, ...others } = rest;
    const Tag: ElementType = as ?? "div";

    const inlineStyles: CSSProperties = {
        ...(column !== undefined && { gridColumn: column }),
        ...(colSpan !== undefined && { gridColumn: `span ${colSpan}` }),
        ...(colStart !== undefined && { gridColumnStart: colStart }),
        ...(colEnd !== undefined && { gridColumnEnd: colEnd }),

        ...(row !== undefined && { row }),
        ...(rowSpan !== undefined && { gridRow: `span ${rowSpan}` }),
        ...(rowStart !== undefined && { gridRowStart: rowStart }),
        ...(rowEnd !== undefined && { gridRowEnd: rowEnd }),

        ...style,
    };

    return <Layout as={Tag} style={inlineStyles} {...others} />;
}
