import {useEffect} from "react";
import type {ClickOutsideOptions} from "./click-outside.types";

/**
 * Invokes a callback when a pointer event occurs **outside** the specified element.
 *
 * Commonly used to implement click-away behavior in:
 * - dropdowns
 * - menus
 * - popovers
 * - dialogs / modals
 * - any overlay that should close on outside interaction
 *
 * Behavior:
 * - Listens to both `"mousedown"` and `"touchstart"` for immediate response on all devices.
 * - Works with a stable React ref — `reference` is **not** part of the deps chain.
 * - Only the `handler` is reactive; memoize it when needed to avoid unnecessary re-subscriptions.
 *
 * @param options               Configuration object controlling the behavior of the hook.
 * @param options.reference     A React ref pointing to the element treated as “inside”.
 *                              Pointer events occurring outside of this element will trigger the handler.
 * @param options.handler       Callback invoked when an outside pointer event is detected.
 */
export function useClickOutside(options: ClickOutsideOptions): void {
    const {reference, handler} = options;

    useEffect(() => {
        const listener = (event: MouseEvent | TouchEvent) => {
            const element = reference.current;
            const target = event.target as Node | null;

            if (!element || !target || element.contains(target)) {
                return;
            }
            handler(event);
        };

        document.addEventListener("mousedown", listener);
        document.addEventListener("touchstart", listener);

        return () => {
            document.removeEventListener("mousedown", listener);
            document.removeEventListener("touchstart", listener);
        };
    }, [handler]);
}