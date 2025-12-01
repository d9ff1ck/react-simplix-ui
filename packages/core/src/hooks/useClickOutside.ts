import type {RefObject} from "react";
import {useEffect} from "react";

/**
 * Fires a callback when a pointer event occurs outside the given element.
 *
 * Commonly used for closing menus, dropdowns, dialogs, and other
 * overlay components when the user clicks or taps outside of them.
 *
 * - Does **not** rerun on every render (ref is intentionally excluded from deps).
 * - Supports both mouse and touch interactions.
 * - `handler` is the only reactive dependency — memoize it if needed.
 */
export function useClickOutside(
    reference: RefObject<HTMLElement | null>,
    handler: (event: MouseEvent | TouchEvent) => void
) {
    useEffect(() => {
        const listener = (event: MouseEvent | TouchEvent) => {
            const element = reference.current;
            const target = event.target as Node | null;

            if (!element || !target || element.contains(event.target as Node)) {
                return;
            }
            handler(event);
        };

        document.addEventListener("mousedown", listener);
        document.addEventListener("touchstart", listener);

        return () => {
            document.removeEventListener("mousedown", listener);
            document.removeEventListener("touchstart", listener);
        }
        },
        /* eslint-disable-next-line react-hooks/exhaustive-deps */
        [handler]
    );
}