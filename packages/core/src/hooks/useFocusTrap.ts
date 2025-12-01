import {useEffect, useRef} from "react";

import {FOCUSABLE_SELECTORS} from "../internal";

type InitialTarget =
    { type: "index", current: number }
    | { type: "element", current: HTMLElement }
    | { type: "auto" };

export type FocusTrapProps = {
    /**
     * Enables or disables the focus trap.
     * When set to `"disabled"`, all behavior is suspended.
     */
    status?: "active" | "disabled";

    /**
     * Determines which element receives focus when the trap activates:
     * - `"auto"` — focuses the first focusable child.
     * - `"index"` — focuses by numeric index within the focusable list.
     * - `"element"` — focuses a specific HTMLElement if it is inside the container.
     */
    initialFocus?: InitialTarget;

    /**
     * Whether to restore focus to the previously active element on cleanup.
     * Enabled by default.
     */
    restoreFocus?: boolean;
};

const getFocusable = (element: HTMLElement): HTMLElement[] => Array.from(
    element.querySelectorAll<HTMLElement>(FOCUSABLE_SELECTORS)
);

const getActive = (): HTMLElement | null => document.activeElement as HTMLElement | null;

/**
 * Traps keyboard focus within a given DOM element.
 *
 * Commonly used in dialogs, modals, popovers, drawers, and other
 * overlay components that must keep keyboard focus inside themselves
 * for accessibility and predictable navigation.
 *
 * Features:
 * - Automatically moves focus inside the container on activation.
 * - Supports multiple initial-focus strategies (`auto`, index, element).
 * - Restores focus to the previously active element (optional).
 * - Handles forward and backward Tab navigation.
 * - Intentionally avoids full dependency tracking — recreating the trap
 *   on every render would break usability. This is why `exhaustive-deps`
 *   is disabled for specific effects.
 */
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
        },
        /* eslint-disable-next-line react-hooks/exhaustive-deps */
        [isEnabled]
    );

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
        },
        /* eslint-disable-next-line react-hooks/exhaustive-deps */
        [status, element]
    );
}