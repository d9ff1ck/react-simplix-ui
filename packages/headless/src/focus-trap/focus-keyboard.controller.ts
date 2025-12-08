import {useEffect} from "react";
import {FocusKeyboardOptions} from "./focus-trap.types";
import {tabWrapHandler} from "./focus-trap.utils";

export function useFocusKeyboardController(options: FocusKeyboardOptions) {
    const {ref, active} = options;

    useEffect(() => {
        const container = ref.current;
        if (!active || !container) {
            return;
        }

        const handler = (event: KeyboardEvent) => tabWrapHandler(event, container);

        document.addEventListener("keydown", handler);

        return () => {
            document.removeEventListener("keydown", handler);
        };
    }, [active, ref]);
}