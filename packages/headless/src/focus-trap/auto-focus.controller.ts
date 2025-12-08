import {useEffect} from "react";
import {AutoFocusOptions} from "./focus-trap.types";
import {applyInitialFocus, getActiveElement, getFocusable} from "./focus-trap.utils";

export function useAutoFocusController(options: AutoFocusOptions) {
    const {ref, active, initial, restore } = options;

    useEffect(() => {
        const container = ref.current;
        if (!active || !container) {
            return;
        }

        const items = getFocusable(container);
        if (items.length === 0) {
            return;
        }

        const previous = getActiveElement();

        applyInitialFocus(container, initial);

        return () => {
            if (restore && previous) {
                previous?.focus();
            }
        };
    }, [active, ref, initial, restore]);
}