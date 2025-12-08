import {useEffect} from "react";

import type {ClickOutsideOptions} from "./click-outside.types";

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
    }, [handler]); // eslint-disable-line react-hooks/exhaustive-deps
}