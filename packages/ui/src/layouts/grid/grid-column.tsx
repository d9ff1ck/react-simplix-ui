import type { CSSProperties, ElementType, JSX } from "react";
import type { GridColumnProps } from "./grid.types";

export function GridColumn<T extends ElementType = "div">(props: GridColumnProps<T>): JSX.Element {
    const { as, className, children, style, ...rest } = props;
    const { column, row, area, colSpan, colStart, colEnd, rowSpan, rowStart, rowEnd, ...others } = rest;
    const inlineStyles = {
        ...(column !== undefined && { gridColumn: column }),
        ...(colSpan !== undefined && { gridColumn: `span ${colSpan}` }),
        ...(colStart !== undefined && { gridColumnStart: colStart }),
        ...(colEnd !== undefined && { gridColumnEnd: colEnd }),

        ...(row !== undefined && { gridRow: row }),
        ...(rowSpan !== undefined && { gridRow: `span ${rowSpan}` }),
        ...(rowStart !== undefined && { gridRowStart: rowStart }),
        ...(rowEnd !== undefined && { gridRowEnd: rowEnd }),

        ...style,
    } as CSSProperties;
    const Component: ElementType = as ?? "div";

    return (
        <Component className={className} style={inlineStyles} {...others}>
            {children}
        </Component>
    );
}
