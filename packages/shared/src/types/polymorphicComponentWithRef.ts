import type {ComponentPropsWithRef, ElementType, Ref} from "react";

import type {ComponentWithChildren} from "./componentWithChildren";
import type {ComponentWithStyles} from "./componentWithStyles";
import type {ElementOf} from "./elementOf";

/**
 * Base type for polymorphic components that support an `as` prop
 * **and forward a typed React ref**.
 *
 * Provides:
 * - the chosen element/component (`as`),
 * - a correctly inferred ref target (`ref` → ElementOf<T>),
 * - custom component props (`P`),
 * - Simplix UI styling props,
 * - optional children,
 * while removing conflicting fields from the underlying element props.
 *
 * Used by components that expose a stable ref API and allow consumers
 * to change the rendered element without losing type safety.
 */
export type PolymorphicComponentWithRef<T extends ElementType, P> =
    {
        /** Element or component to render instead of the default. */
        as?: T;

        /** Typed React ref targeting the resolved DOM element of `as`. */
        ref?: Ref<ElementOf<T>>;
    }
    & P
    & ComponentWithChildren
    & ComponentWithStyles
    & Omit<
    ComponentPropsWithRef<T>, | keyof ComponentWithChildren | keyof ComponentWithStyles | keyof P | "as" | "ref">;