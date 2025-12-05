import {FOCUSABLE_SELECTORS} from "../internal";
import {InitialFocusTarget} from "./focus-trap.types";

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

export const applyInitialFocus = (
    container: HTMLElement,
    initial: InitialFocusTarget
): void => {
    const items = getFocusable(container);
    if (items.length === 0) {
        return;
    }

    if (typeof initial === "number") {
        items[initial]?.focus();
        return;
    }

    if (initial instanceof HTMLElement) {
        container.contains(initial) ? initial.focus() : items[0]?.focus();
        return;
    }

    items[0]?.focus();
};

export const tabWrapHandler = (event: KeyboardEvent, container: HTMLElement) => {
    if (event.key !== "Tab") {
        return;
    }

    const items = getFocusable(container);
    if (items.length === 0) {
        return;
    }

    const first = items[0];
    const last = items[items.length - 1];
    const active = getActiveElement();

    if (event.shiftKey) {
        if (active === first || active === container) {
            event.preventDefault();
            last?.focus();
        }
    } else {
        if (active === last) {
            event.preventDefault();
            first?.focus();
        }
    }
};