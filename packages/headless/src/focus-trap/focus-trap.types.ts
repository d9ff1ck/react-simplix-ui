import type {RefObject} from "react";

/**
 * Determines which element receives focus when the trap activates.
 *
 * - `"auto"` — focuses the first focusable element inside the container.
 * - A number — focuses the element at the given index within the focusable list.
 * - An HTMLElement — focuses the specific element if it is contained inside the trap.
 */
export type InitialFocusTarget = number | HTMLElement | "auto";

/**
 * Options for configuring the `useFocusTrap` hook.
 */
export type FocusTrapOptions = {
    /**
     * Enables or disables the focus trap.
     * When set to `"disabled"`, all focus-trapping behavior is suspended.
     *
     * @default "active"
     */
    status?: "active" | "disabled";

    /**
     * Determines which element receives focus when the trap activates.
     *
     * @default "auto"
     */
    initial?: InitialFocusTarget;

    /**
     * Whether the previously focused element should be restored
     * when the trap deactivates.
     *
     * @default true
     */
    restore?: boolean;
};

export type FocusTrapController = {
    ref: RefObject<HTMLElement | null>;
    active: boolean;
    enable(): void;
    disable(): void;
};

export type ScopedFocusTrapResult = {
    reference: RefObject<HTMLElement | null>;
};