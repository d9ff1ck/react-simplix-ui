import {useCallback, useEffect, useRef} from "react";
import {FocusTrapController, FocusTrapOptions} from "./focus-trap.types";
import {applyInitialFocus, getActiveElement, getFocusable, tabWrapHandler} from "./focus-trap.utils";

export function useFocusTrapController(options: FocusTrapOptions = {}): FocusTrapController {
    const reference = useRef<HTMLElement | null>(null);

    const status = options.status ?? "active";
    const initial = options.initial ?? "auto";
    const restore = options.restore ?? true;

    const isActive = status === "active";

    useEffect(() => {
        const container = reference.current;
        if (!isActive || !container) {
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
    }, [isActive]);

    useEffect(() => {
        const container = reference.current;
        if (!isActive || !container) {
            return;
        }

        const handler = (event: KeyboardEvent) => tabWrapHandler(event, container);

        document.addEventListener("keydown", handler);

        return () => {
            document.removeEventListener("keydown", handler);
        };
    }, [isActive]);

    const onEnable = useCallback(() => {
        console.warn("useFocusTrapController: enable() not implemented yet");
    }, []);

    const onDisable = useCallback(() => {
        console.warn("useFocusTrapController: disable() not implemented yet");
    }, []);

    return {
        ref: reference,
        active: isActive,
        enable: onEnable,
        disable: onDisable,
    }
}