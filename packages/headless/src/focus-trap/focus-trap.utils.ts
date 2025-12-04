import { FOCUSABLE_SELECTORS } from "../internal";

/**
 * Returns a flat list of focusable elements within the given container.
 */
export const getFocusable = (container: HTMLElement): HTMLElement[] =>
    Array.from(container.querySelectorAll<HTMLElement>(FOCUSABLE_SELECTORS));

/**
 * Returns the element that is currently focused in the document.
 */
export const getActiveElement = (): HTMLElement | null =>
    document.activeElement as HTMLElement | null;