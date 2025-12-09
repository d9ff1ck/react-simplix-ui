import type { CSSProperties, ElementType, JSX } from "react";

import type { BoxProps } from "./box.types";

export function Box<T extends ElementType = "div">(props: BoxProps<T>): JSX.Element {
    const { children, as, className, style, ...rest } = props;
    const {
        width,
        height,
        minWidth,
        minHeight,
        maxWidth,
        maxHeight,

        margin,
        padding,
        display,
        flex,
        flexGrow,
        flexShrink,
        flexBasis,
        flexDirection,
        alignItems,
        justifyContent,

        gap,
        columnGap,
        rowGap,
        ...other
    } = rest;
    const Component: ElementType = as ?? "div";

    const inlineStyles = {
        ...(width !== undefined && { width }),
        ...(height !== undefined && { height }),
        ...(minWidth !== undefined && { minWidth }),
        ...(minHeight !== undefined && { minHeight }),
        ...(maxWidth !== undefined && { maxWidth }),
        ...(maxHeight !== undefined && { maxHeight }),

        ...(margin !== undefined && { margin }),
        ...(padding !== undefined && { padding }),

        ...(display !== undefined && { display }),
        ...(flex !== undefined && { flex }),
        ...(flexGrow !== undefined && { flexGrow }),
        ...(flexShrink !== undefined && { flexShrink }),
        ...(flexBasis !== undefined && { flexBasis }),
        ...(flexDirection !== undefined && { flexDirection }),
        ...(alignItems !== undefined && { alignItems }),
        ...(justifyContent !== undefined && { justifyContent }),

        ...(gap !== undefined && { gap }),
        ...(columnGap !== undefined && { columnGap }),
        ...(rowGap !== undefined && { rowGap }),
        ...style,
    } as CSSProperties;

    return (
        <Component className={className} style={inlineStyles} {...other}>
            {children}
        </Component>
    );
}
