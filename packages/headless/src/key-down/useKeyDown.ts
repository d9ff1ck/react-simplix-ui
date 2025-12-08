import { useEffect, useRef } from "react";

import type {Key, KeyDownOptions} from "./key-down.types";

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