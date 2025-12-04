import type {ElementType, Ref} from "react";
import type {JSX} from "react/jsx-runtime";

/**
 * Extracts the underlying DOM element type from a given React component or tag.
 *
 * Used by polymorphic components to infer the correct ref element
 * (e.g. `"button"` → HTMLButtonElement, `"div"` → HTMLDivElement).
 *
 * Falls back to `HTMLElement` when the type cannot be reliably inferred.
 */
export type ElementOf<T extends ElementType> =
    T extends keyof JSX.IntrinsicElements
        ? JSX.IntrinsicElements[T] extends { ref?: Ref<infer E> }
            ? E
            : HTMLElement
        : HTMLElement;