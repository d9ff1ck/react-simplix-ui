import {useEffect, useRef} from "react";

type Key = string;

export function useKeyDown(keys: Key | Key[], handler: (event: KeyboardEvent) => void) {
    const reference = useRef(handler);
    reference.current = handler;

    useEffect(() => {
        const targets = Array.isArray(keys) ? keys : [keys];

        const listener = (event: KeyboardEvent) => {
            if (targets.includes(event.key)) {
                reference.current(event);
            }
        };

        window.addEventListener("keydown", listener);
        return () => {
            window.removeEventListener("keydown", listener);
        };
    }, [keys]);
}