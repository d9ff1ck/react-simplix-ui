import type {ComponentPropsWithoutRef, ElementType} from "react";

import type {ComponentWithChildren} from "./componentWithChildren";
import type {ComponentWithStyles} from "./componentWithStyles";

/**
 * Base type for polymorphic components that support an `as` prop
 * without forwarding a React ref.
 *
 * Combines:
 * - the target element/component props (`as`),
 * - custom component props (`P`),
 * - Simplix UI styling props,
 * - optional children,
 * while removing conflicting fields.
 *
 * Used across Simplix UI to define flexible, type-safe components
 * where consumers can choose the rendered element.
 */
export type PolymorphicComponentWithoutRef<T extends ElementType, P = {}> =
    {
        /** Element or component to render instead of the default. */
        as?: T;
    }
    & P
    & ComponentWithStyles
    & ComponentWithChildren
    & Omit<ComponentPropsWithoutRef<T>, | keyof ComponentWithStyles | keyof ComponentWithChildren | keyof P | "as">;