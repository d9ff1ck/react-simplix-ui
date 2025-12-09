import { CSSProperties, ElementType, JSX } from "react";
import { GridRootProps } from "./grid.types";

export function GridRoot<T extends ElementType = "div">(props: GridRootProps<T>): JSX.Element {
    const { as, children, className, style, ...rest } = props;
    const {
        inline,
        columns,
        rows,
        areas,

        gap,
        columnGap,
        rowGap,

        alignContent,
        justifyContent,

        alignItems,
        justifyItems,

        autoColumns,
        autoRows,
        autoFlow,
        ...others
    } = rest;
    const Component: ElementType = as ?? "div";

    const inlineStyles = {
        display: inline ? "inline-grid" : "grid",
        ...(columns !== undefined && { gridTemplateColumns: columns }),
        ...(rows !== undefined && { gridTemplateRows: rows }),
        ...(areas !== undefined && { gridTemplateAreas: areas }),

        ...(gap !== undefined && { gap }),
        ...(columnGap !== undefined && { columnGap }),
        ...(rowGap !== undefined && { rowGap }),

        ...(alignContent !== undefined && { alignContent }),
        ...(justifyContent !== undefined && { justifyContent }),

        ...(alignItems !== undefined && { alignItems }),
        ...(justifyItems !== undefined && { justifyItems }),

        ...(autoColumns !== undefined && { gridAutoColumns: autoColumns }),
        ...(autoRows !== undefined && { gridAutoRows: autoRows }),
        ...(autoFlow !== undefined && { gridAutoFlow: autoFlow }),
        ...style,
    } as CSSProperties;

    return (
        <Component className={className} style={inlineStyles} {...others}>
            {children}
        </Component>
    );
}
