import {RefObject, useEffect} from "react";

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

    }, [handler]);
}