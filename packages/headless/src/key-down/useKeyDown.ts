import { useEffect, useRef } from "react";

import type {Key, KeyDownOptions} from "./key-down.types";

/**
 * Subscribes to one or more keyboard keys and invokes a callback
 * whenever any of them is pressed.
 *
 * Common use cases:
 * - Handling `Escape` to dismiss dialogs or popovers
 * - Implementing keyboard shortcuts
 * - Enabling keyboard-driven interactions in components
 *
 * Behavior:
 * - Accepts a single key or an array of keys.
 * - Stores both the keys and the handler in refs to avoid re-subscribing.
 * - Effect runs only once on mount for optimal performance.
 *
 * @param options Configuration object for the key subscription.
 * @param options.keys     A keyboard key or an array of keys to listen for.
 * @param options.handler  Function called when any subscribed key is pressed.
 */
export function useKeyDown(
    options: KeyDownOptions
) {
    const {keys, handler} = options;
    const handlerRef = useRef(handler);
    const keysRef = useRef<Key[]>([]);

    handlerRef.current = handler;
    keysRef.current = Array.isArray(keys) ? keys : [keys];

    useEffect(() => {
        const listener = (event: KeyboardEvent) => {
            if (keysRef.current.includes(event.key)) {
                handlerRef.current(event);
            }
        };

        window.addEventListener("keydown", listener);
        return () => window.removeEventListener("keydown", listener);
    }, []);
}