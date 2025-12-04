import type { RefObject } from "react";

/**
 * Callback fired when a pointer event occurs outside the reference element.
 */
export type ClickOutsideHandler = (event: MouseEvent | TouchEvent) => void;

/**
 * Options for the `useClickOutside` hook.
 *
 * This hook listens for pointer interactions that occur outside of the
 * specified reference element and invokes the provided handler.
 *
 * It supports both mouse and touch events and is typically used for closing
 * menus, dialogs, dropdowns, popovers, or other overlay components.
 */
export type ClickOutsideOptions = {
    /**
     * The element considered "inside".
     * When a pointer event happens outside this element, the handler is fired.
     */
    reference: RefObject<HTMLElement | null>;

    /**
     * Function invoked when a click or touch event occurs outside the reference.
     */
    handler: ClickOutsideHandler;
};
