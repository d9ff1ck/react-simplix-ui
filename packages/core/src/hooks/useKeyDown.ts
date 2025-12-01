import {useEffect, useRef} from "react";

type Key = string;

/**
 * Subscribes to specific keyboard keys and fires a callback
 * whenever one of them is pressed.
 *
 * Useful for building shortcuts, handling Escape presses,
 * or enabling keyboard-driven interactions in components.
 *
 * - Supports a single key or an array of keys.
 * - Stores keys and handler in refs to avoid re-subscribing.
 * - Effect runs only once on mount for optimal performance.
 */
export function useKeyDown(keys: Key | Key[], handler: (event: KeyboardEvent) => void) {
    const handlerReference = useRef(handler);
    const keysReference = useRef<Key[]>([]);

    handlerReference.current = handler;
    keysReference.current = Array.isArray(keys) ? keys : [keys];

    useEffect(() => {
        const listener = (event: KeyboardEvent) => {
            if (keysReference.current.includes(event.key)) {
                handlerReference.current(event);
            }
        };

        window.addEventListener("keydown", listener);
        return () => {
            window.removeEventListener("keydown", listener);
        };
    }, []);
}