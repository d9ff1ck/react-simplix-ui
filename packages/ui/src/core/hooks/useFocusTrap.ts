import {useEffect, useRef} from "react";
import {FOCUSABLE_SELECTORS} from "../constants";

type InitialTarget =
    { type: "index", current: number }
    | { type: "element", current: HTMLElement }
    | { type: "auto" };

export type FocusTrapProps = {
    status?: "active" | "disabled";
    initialFocus?: InitialTarget;
    restoreFocus?: boolean;
}

const getFocusable = (element: HTMLElement): HTMLElement[] => Array.from(
    element.querySelectorAll<HTMLElement>(FOCUSABLE_SELECTORS)
);

const getActive = (): HTMLElement | null => document.activeElement as HTMLElement | null;

export function useFocusTrap(element: HTMLElement | null, props: FocusTrapProps = {}) {
    const {status = "active", initialFocus = {type: "auto"}, restoreFocus = true} = props;
    const isEnabled = status === "active" && element;
    const previous = useRef<HTMLElement | null>(null);

    useEffect(() => {
        if (!isEnabled) {
            return;
        }

        if (restoreFocus) {
            previous.current = document.activeElement as HTMLElement | null;
        }

        const items = getFocusable(element);
        if (!items.length) {
            return;
        }

        switch (initialFocus.type) {
            case "index":
                items[initialFocus.current]?.focus();
                break;
            case "element":
                if (element?.contains(initialFocus.current)) {
                    initialFocus.current.focus();
                } else {
                    items[0]?.focus();
                }
                break;
            default:
                items[0]?.focus();
        }

        return () => {
            if (restoreFocus && previous.current) {
                previous.current.focus();
            }
        };
    }, [isEnabled]);

    useEffect(() => {
        if (!isEnabled) {
            return;
        }

        const listener = (event: KeyboardEvent) => {
            if (event.key !== "Tab") {
                return;
            }

            const items = getFocusable(element);
            if (items.length === 0) {
                return;
            }

            const first = items[0];
            const last = items[items.length - 1];
            const active = getActive();

            if (event.shiftKey) {
                if (active === first || active === element) {
                    event.preventDefault();
                    last?.focus();
                }
                return;
            }

            if (active === last) {
                event.preventDefault();
                first?.focus();
            }
        };

        document.addEventListener("keydown", listener);

        return () => {
            document.removeEventListener("keydown", listener);
        };
    }, [status, element]);
}