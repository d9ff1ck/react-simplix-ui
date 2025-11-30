import {useEffect, useRef} from "react";

type Key = string;

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