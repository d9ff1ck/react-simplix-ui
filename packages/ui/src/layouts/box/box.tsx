import type {ElementType, JSX} from "react";
import {BoxProps} from "./box.types";

export function Box<T extends ElementType>(props: BoxProps<T>): JSX.Element {
    const {children, as, className, style, ...rest} = props;
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
        align,
        justify,

        gap,
        columnGap,
        rowGap,
        ...other
    } = rest as Record<string, unknown>
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
        ...(align !== undefined && { alignItems: align }),
        ...(justify !== undefined && { justifyContent: justify }),

        ...(gap !== undefined && { gap }),
        ...(columnGap !== undefined && { columnGap }),
        ...(rowGap !== undefined && { rowGap }),
        ...style
    }

    return (
        <Component className={className} style={inlineStyles} {...other}>
            {children}
        </Component>
    );
}