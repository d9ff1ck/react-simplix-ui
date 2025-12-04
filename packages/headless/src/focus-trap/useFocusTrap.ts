import {useEffect, useRef} from "react";

import type {FocusTrapOptions} from "./focus-trap.types";
import {getActiveElement, getFocusable} from "./focus-trap.utils";

/**
 * Traps keyboard focus within a given DOM element.
 *
 * This hook is commonly used in components such as dialogs, modals, drawers,
 * and popovers — any UI surface that must retain keyboard focus for
 * accessibility and predictable navigation.
 *
 * Features:
 * - Moves focus inside the container when activated.
 * - Supports multiple initial-focus strategies (`auto`, index, element).
 * - Restores the previously focused element (optional).
 * - Wraps focus with Tab and Shift+Tab navigation.
 *
 * The effect intentionally excludes the container reference and initial-focus
 * configuration from dependency tracking. Re-initializing the trap on each
 * render would break natural focus flow. Only the `status` flag is reactive.
 *
 * @param element  The container whose focus should be trapped.
 * @param options  Configuration for activation, initial focus, and restoration.
 */
export function useFocusTrap(
    element: HTMLElement | null,
    options: FocusTrapOptions = {}
): void {
    const {status = "active", initial = "auto", restore = true} = options;
    const isEnabled = status === "active" && element;
    const previous = useRef<HTMLElement | null>(null);

    useEffect(() => {
        if (!isEnabled) {
            return;
        }

        if (restore) {
            previous.current = document.activeElement as HTMLElement | null;
        }

        const items = getFocusable(element);
        if (!items.length) {
            return;
        }

        if (typeof initial === "number") {
            items[initial]?.focus();
        } else if (initial instanceof HTMLElement) {
            initial.focus();
        } else {
            items[0]?.focus();
        }

        return () => {
            if (restore && previous.current) {
                previous.current.focus();
            }
        };
    }, [isEnabled]); // eslint-disable-line react-hooks/exhaustive-deps

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
            const active = getActiveElement();

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